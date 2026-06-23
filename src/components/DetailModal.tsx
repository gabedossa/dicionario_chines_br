import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HanziEntry } from '../types/hanzi';

interface DetailModalProps {
  entry: HanziEntry | null;
  onClose: () => void;
}

const NO_DEF = '— sem glosa na base (caractere raro)';

export function DetailModal({ entry, onClose }: DetailModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!entry) return null;

  return createPortal(
    <div
      className="ov open"
      aria-hidden="false"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <button
          type="button"
          className="m-close"
          aria-label="Fechar"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          ×
        </button>

        <div className="modal-body">
        <div className="m-top">
          <div className="cell m-cell">
            <i />
            <span className="hz">{entry.c}</span>
          </div>
          <div className="m-info">
            <span className="rank">#{entry.r}</span>
            <div className="m-py">{entry.p}</div>
            <div className={`m-mean${entry.pt ? '' : ' en'}`}>{entry.pt || NO_DEF}</div>
            <div className="tags">
              {entry.h ? (
                <span className="tag hsk">HSK {entry.h}</span>
              ) : (
                <span className="tag">+HSK 6</span>
              )}
              {entry.s != null && (
                <span className="tag">{entry.s} traços</span>
              )}
            </div>
          </div>
        </div>

        {entry.w && (
          <div className="m-sec">
            <div className="m-h">词 · palavras</div>
            {entry.w.map(([chars, py, gloss], i) => (
              <div className="m-w" key={i}>
                <span className="m-wz">{chars}</span>
                <span className="m-wp">{py}</span>
                <span className="m-wg">{gloss}</span>
              </div>
            ))}
          </div>
        )}

        {entry.sx && (
          <div className="m-sec">
            <div className="m-h">例句 · frase de exemplo</div>
            <div className="m-s">
              <div className="m-sz">{entry.sx[0]}</div>
              <div className="m-sp">{entry.sx[1]}</div>
              <div className="m-st">{entry.sx[2]}</div>
            </div>
          </div>
        )}

        {!entry.w && !entry.sx && (
          <div className="m-note">
            Sem palavras de exemplo na base para este caractere (forma rara).
          </div>
        )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
