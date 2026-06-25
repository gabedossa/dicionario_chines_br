import { translate } from '@vitalets/google-translate-api';
import { readFileSync, writeFileSync, existsSync } from 'fs';

const data = JSON.parse(readFileSync('./src/data/hanzi.json', 'utf-8'));

const ENGLISH_PATTERN = /^[A-Za-z].*[a-z]$/;
const HAS_ACCENT = /[àáâãäåæçèéêëìíîïðñòóôõöùúûüýÿÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝ]/;

function isEnglish(str) {
  return typeof str === 'string' && ENGLISH_PATTERN.test(str) && !HAS_ACCENT.test(str);
}

const uniqueEnglish = new Set();
for (const item of data) {
  for (const word of (item.w || [])) {
    if (isEnglish(word[2])) uniqueEnglish.add(word[2]);
  }
  if (item.sx && isEnglish(item.sx[2])) uniqueEnglish.add(item.sx[2]);
}

const allStrings = [...uniqueEnglish];
console.log(`Total de strings únicas em inglês: ${allStrings.length}`);

// Carrega mapeamento parcial existente
const MAP_FILE = './translate-map.json';
const mapping = existsSync(MAP_FILE) ? JSON.parse(readFileSync(MAP_FILE, 'utf-8')) : {};
const alreadyDone = Object.keys(mapping).length;
console.log(`Já traduzidos: ${alreadyDone}`);

const pending = allStrings.filter(s => !mapping[s]);
console.log(`Restantes: ${pending.length}`);

async function translateBatch(strings) {
  const joined = strings.join('\n');
  const result = await translate(joined, { from: 'en', to: 'pt' });
  const lines = result.text.split('\n');
  strings.forEach((s, i) => { mapping[s] = lines[i] || s; });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const BATCH_SIZE = 10;
  let done = alreadyDone;

  for (let i = 0; i < pending.length; i += BATCH_SIZE) {
    const batch = pending.slice(i, i + BATCH_SIZE);
    let attempts = 0;
    let success = false;

    while (attempts < 8 && !success) {
      try {
        await translateBatch(batch);
        done += batch.length;
        const pct = ((done / allStrings.length) * 100).toFixed(1);
        process.stdout.write(`\r[${pct}%] ${done}/${allStrings.length} traduzidos...`);
        // Salva incrementalmente a cada lote
        writeFileSync(MAP_FILE, JSON.stringify(mapping, null, 2), 'utf-8');
        await sleep(1500);
        success = true;
      } catch (err) {
        attempts++;
        const wait = 5000 * attempts;
        console.error(`\nErro (tentativa ${attempts}): ${err.message.slice(0, 80)} — aguardando ${wait / 1000}s...`);
        await sleep(wait);
      }
    }

    if (!success) {
      console.error(`\nLote ${i}-${i + BATCH_SIZE} falhou após 8 tentativas. Salvando progresso e encerrando.`);
      writeFileSync(MAP_FILE, JSON.stringify(mapping, null, 2), 'utf-8');
      process.exit(1);
    }
  }

  console.log('\n\nAplicando traduções ao hanzi.json...');
  for (const item of data) {
    for (const word of (item.w || [])) {
      if (isEnglish(word[2]) && mapping[word[2]]) word[2] = mapping[word[2]];
    }
    if (item.sx && isEnglish(item.sx[2]) && mapping[item.sx[2]]) {
      item.sx[2] = mapping[item.sx[2]];
    }
  }

  writeFileSync('./src/data/hanzi.json', JSON.stringify(data, null, 2), 'utf-8');
  console.log('Concluído! hanzi.json atualizado com traduções em português.');
}

main().catch(console.error);
