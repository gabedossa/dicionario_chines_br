import { useState } from 'react';

interface ControlsProps {
  hsk: string;
  tone: string;
  ptOnly: boolean;
  toneColor: boolean;
  shownCount: number;
  totalCount: number;
  onQuery: (v: string) => void;
  onHsk: (v: string) => void;
  onTone: (v: string) => void;
  onPtOnly: () => void;
  onToneColor: () => void;
}

const HSK_LEVELS = ['all', '1', '2', '3', '4', '5', '6'] as const;
const TONE_LEVELS = ['all', '1', '2', '3', '4', '0'] as const;
const TONE_LABELS: Record<string, string> = {
  all: 'Todos',
  '1': '1°',
  '2': '2°',
  '3': '3°',
  '4': '4°',
  '0': 'neutro',
};

export function Controls({
  hsk,
  tone,
  ptOnly,
  toneColor,
  shownCount,
  totalCount,
  onQuery,
  onHsk,
  onTone,
  onPtOnly,
  onToneColor,
}: ControlsProps) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onQuery(e.target.value);
  };

  return (
    <div className="controls">
      <div className="searchrow">
        <div className="search">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            id="q"
            type="search"
            placeholder="Buscar por caractere, pinyin ou significado…"
            autoComplete="off"
            aria-label="Buscar"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="chips" role="group" aria-label="Filtrar">
        <span className="chiplabel">HSK</span>
        {HSK_LEVELS.map((level) => (
          <button
            key={level}
            type="button"
            className="chip"
            aria-pressed={hsk === level}
            onClick={() => onHsk(level)}
          >
            {level === 'all' ? 'Todos' : level}
          </button>
        ))}

        <span className="divider" />
        <span className="chiplabel">Tom</span>
        {TONE_LEVELS.map((t) => (
          <button
            key={t}
            type="button"
            className="chip"
            aria-pressed={tone === t}
            onClick={() => onTone(t)}
          >
            {TONE_LABELS[t]}
          </button>
        ))}

        <span className="divider" />
        <button
          type="button"
          className="chip"
          aria-pressed={ptOnly}
          onClick={onPtOnly}
        >
          só com tradução PT
        </button>
        <button
          type="button"
          className="chip"
          aria-pressed={toneColor}
          onClick={onToneColor}
        >
          cores de tom
        </button>
      </div>

      <div className="statline">
        <span>
          Mostrando <b>{shownCount}</b> de {totalCount} resultados
        </span>
        <span>
          <b>347</b> com tradução PT · <b>9.900</b> no total
        </span>
      </div>
    </div>
  );
}
