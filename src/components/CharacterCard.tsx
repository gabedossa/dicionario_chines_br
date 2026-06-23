import { HanziEntry } from '../types/hanzi';
import { pyColored } from '../utils/pinyin';

interface CharacterCardProps {
  entry: HanziEntry;
  toneColor: boolean;
  onClick: (entry: HanziEntry) => void;
}

const NO_DEF = '— sem glosa na base (caractere raro)';

export function CharacterCard({ entry, toneColor, onClick }: CharacterCardProps) {
  const py = toneColor
    ? <span dangerouslySetInnerHTML={{ __html: pyColored(entry.p) }} />
    : entry.p;

  return (
    <article className="card" onClick={() => onClick(entry)}>
      <span className="rank">#{entry.r}</span>
      <div className="cell">
        <i />
        <span className="hz">{entry.c}</span>
      </div>
      <div className="py">{py}</div>
      {entry.pt ? (
        <div className="mean">{entry.pt}</div>
      ) : (
        <div className="mean en">{entry.d || NO_DEF}</div>
      )}
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
