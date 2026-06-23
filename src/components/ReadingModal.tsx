import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { TEXTS, ReadingText } from '../data/texts';

interface ReadingModalProps {
  onClose: () => void;
}

const LEVELS = [1, 2, 3, 4, 5, 6];

export function ReadingModal({ onClose }: ReadingModalProps) {
  const [level, setLevel] = useState(1);
  const [text, setText] = useState<ReadingText | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (text) setText(null);
        else onClose();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose, text]);

  const textsForLevel = TEXTS.filter((t) => t.level === level)
    .sort((a, b) => a.title.localeCompare(b.title, 'pt'));

  return createPortal(
    <div
      className="ov open"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="rd-modal">
        <button
          type="button"
          className="m-close"
          aria-label="Fechar"
          onClick={onClose}
        >
          ×
        </button>

        <div className="rd-modal-body">
        {text ? (
          <div className="rd-reader">
            <button
              type="button"
              className="rd-back"
              onClick={() => setText(null)}
            >
              ← voltar
            </button>

            <div className="rd-text-header">
              <span className="rd-title-zh">{text.titleZh}</span>
              <span className="rd-title-pt">{text.title}</span>
              <span className="tag hsk">HSK {text.level}</span>
            </div>

            <div className="rd-body">
              {text.lines.map((line, i) => (
                <div key={i} className="rd-line">
                  <div className="rd-zh">{line.zh}</div>
                  <div className="rd-py">{line.py}</div>
                  <div className="rd-pt">{line.pt}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="rd-header">
              <div className="m-h">例文 · textos para leitura</div>
              <div className="rd-levels">
                {LEVELS.map((l) => (
                  <button
                    key={l}
                    type="button"
                    className="chip"
                    aria-pressed={level === l}
                    onClick={() => setLevel(l)}
                  >
                    HSK {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="rd-list">
              {textsForLevel.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className="rd-card"
                  onClick={() => setText(t)}
                >
                  <span className="rd-card-zh">{t.titleZh}</span>
                  <span className="rd-card-title">{t.title}</span>
                  <span className="rd-card-count">{t.lines.length} frases</span>
                </button>
              ))}
            </div>
          </>
        )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
