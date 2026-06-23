import { HanziEntry } from '../types/hanzi';

interface CharacterCardProps {
  entry: HanziEntry;
  onClick: (entry: HanziEntry) => void;
}

const NO_DEF = '— sem glosa na base (caractere raro)';

export function CharacterCard({ entry, onClick }: CharacterCardProps) {
  return (
    <article className="card" onClick={() => onClick(entry)}>
      <span className="rank">#{entry.r}</span>
      <div className="cell">
        <i />
        <span className="hz">{entry.c}</span>
      </div>
      <div className="py">{entry.p}</div>
      <div className={`mean${entry.pt ? '' : ' en'}`}>{entry.pt || NO_DEF}</div>
      <div className="tags">
        {entry.h ? (
          <span className="tag hsk">HSK {entry.h}</span>
        ) : (
          <span className="tag">+HSK 6</span>
        )}
        {entry.s != null && (
          <span className="tag">{entry.s} traços</span>
        )}
        {entry.pt && <span className="tag pt">PT</span>}
        {entry.w && <span className="tag wd">词 {entry.w.length}</span>}
        {entry.sx && <span className="tag se">例句</span>}
      </div>
    </article>
  );
}
