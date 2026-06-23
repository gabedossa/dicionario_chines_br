// Traduz o campo `d` (inglês) para `pt` (português) usando tradução em lote.
// Agrupa 100 definições por request → ~85 requests total para 8.500 entradas.
// Uso: node scripts/translate-pt.mjs

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = join(__dirname, '../src/data/hanzi.json');

const CHUNK_SIZE = 40;    // definições por request (menor para evitar rate-limit)
const SEP = '\n★\n';      // separador único que sobrevive à tradução
const DELAY_MS = 1200;    // ms entre requests (mais conservador)

async function translateBatch(texts) {
  const combined = texts.join(SEP);
  const params = new URLSearchParams({
    client: 'gtx',
    sl: 'en',
    tl: 'pt-BR',
    dt: 't',
    q: combined,
  });
  const url = `https://translate.googleapis.com/translate_a/single?${params}`;

  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const json = await res.json();
  const translated = json[0].map((chunk) => chunk[0]).join('').trim();
  // Divide pelo separador (Google preserva ★ sem traduzi-lo)
  const parts = translated.split(/\s*★\s*/);
  return parts;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log('Carregando hanzi.json…');
  const raw = readFileSync(DATA_PATH, 'utf8').replace(/^﻿/, '');
  const data = JSON.parse(raw);

  const pending = data.filter((e) => !e.pt && e.d && e.d.trim());
  const total = pending.length;
  const chunks = Math.ceil(total / CHUNK_SIZE);

  console.log(`${total} entradas sem PT → ${chunks} lotes de ${CHUNK_SIZE}`);
  console.log(`Estimativa: ~${Math.ceil((chunks * DELAY_MS) / 1000)}s\n`);

  let done = 0;
  let errors = 0;

  for (let i = 0; i < pending.length; i += CHUNK_SIZE) {
    const batch = pending.slice(i, i + CHUNK_SIZE);
    const texts = batch.map((e) => e.d);

    let batchOk = false;
    for (let attempt = 0; attempt < 3 && !batchOk; attempt++) {
      if (attempt > 0) await sleep(3000 * attempt); // backoff
      try {
        const translations = await translateBatch(texts);
        if (translations.length < texts.length * 0.5) {
          // Resposta muito curta — rate-limit provável
          throw new Error('resposta incompleta');
        }
        batch.forEach((entry, idx) => {
          const tr = translations[idx];
          if (tr && tr.trim()) {
            entry.pt = tr.trim();
            done++;
          } else {
            errors++;
          }
        });
        batchOk = true;
      } catch {
        if (attempt === 2) {
          // Após 3 tentativas, tenta individualmente com pausa
          for (const entry of batch) {
            try {
              const params = new URLSearchParams({ client: 'gtx', sl: 'en', tl: 'pt-BR', dt: 't', q: entry.d });
              const res = await fetch(`https://translate.googleapis.com/translate_a/single?${params}`, {
                headers: { 'User-Agent': 'Mozilla/5.0' },
                signal: AbortSignal.timeout(10000),
              });
              if (!res.ok) throw new Error(`HTTP ${res.status}`);
              const json = await res.json();
              entry.pt = json[0].map((c) => c[0]).join('').trim();
              done++;
            } catch {
              errors++;
            }
            await sleep(500);
          }
          batchOk = true;
        }
      }
    }

    const pct = ((done / total) * 100).toFixed(1);
    process.stdout.write(`\r  ${done}/${total} (${pct}%) | erros: ${errors} | lote ${Math.ceil((i + 1) / CHUNK_SIZE)}/${chunks}   `);

    // Salva a cada lote processado
    writeFileSync(DATA_PATH, JSON.stringify(data));

    await sleep(DELAY_MS);
  }

  writeFileSync(DATA_PATH, JSON.stringify(data));
  console.log(`\n\nConcluído! ${done} traduções | ${errors} falhas`);
}

main().catch((err) => {
  console.error('\nErro fatal:', err);
  process.exit(1);
});
