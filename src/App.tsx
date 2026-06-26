import { useState, useMemo, useCallback, useRef } from 'react';
import { HanziEntry } from './types/hanzi';
import { toneOf, strip } from './utils/pinyin';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { CharacterGrid } from './components/CharacterGrid';
import { DetailModal } from './components/DetailModal';
import { ReadingModal } from './components/ReadingModal';
import { Footer } from './components/Footer';
import { AdBanner } from './components/AdBanner';
import rawData from './data/hanzi.json';

const PAGE = 120;

const DATA: HanziEntry[] = (rawData as HanziEntry[]).map((d) => ({
  ...d,
  _t: toneOf(d.p),
  _s: `${strip(d.p)} ${(d.pt || d.d).toLowerCase()} ${d.c}`,
}));

export function App() {
  const [query, setQuery] = useState('');
  const [hsk, setHsk] = useState('all');
  const [tone, setTone] = useState('all');
  const [shown, setShown] = useState(PAGE);
  const [selected, setSelected] = useState<HanziEntry | null>(null);
  const [readingOpen, setReadingOpen] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleQuery = useCallback((v: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setQuery(v);
      setShown(PAGE);
    }, 120);
  }, []);

  const handleHsk = useCallback((v: string) => {
    setHsk(v);
    setShown(PAGE);
  }, []);

  const handleTone = useCallback((v: string) => {
    setTone(v);
    setShown(PAGE);
  }, []);

  const handleClose = useCallback(() => setSelected(null), []);

  const filtered = useMemo(() => {
    const q = strip(query.trim());
    return DATA.filter((d) => {
      if (hsk !== 'all' && d.h !== hsk) return false;
      if (tone !== 'all' && d._t !== +tone) return false;
      if (q && !d._s?.includes(q)) return false;
      return true;
    });
  }, [query, hsk, tone]);

  return (
    <div className="wrap">
      <Header />
      <Controls
        hsk={hsk}
        tone={tone}
        shownCount={Math.min(shown, filtered.length)}
        totalCount={filtered.length}
        onQuery={handleQuery}
        onHsk={handleHsk}
        onTone={handleTone}
        onReadingOpen={() => setReadingOpen(true)}
      />
      <AdBanner slot="XXXXXXXXXX" format="horizontal" />
      <main>
        <CharacterGrid
          entries={filtered}
          shown={shown}
          onSelect={setSelected}
          onLoadMore={() => setShown((s) => s + PAGE)}
        />
        {selected && (
          <DetailModal
            entry={selected}
            onClose={handleClose}
          />
        )}
        {readingOpen && (
          <ReadingModal onClose={() => setReadingOpen(false)} />
        )}
      </main>
      <Footer />
    </div>
  );
}
