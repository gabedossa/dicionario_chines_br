import { HanziEntry } from '../types/hanzi';
import { CharacterCard } from './CharacterCard';

interface CharacterGridProps {
  entries: HanziEntry[];
  shown: number;
  onSelect: (entry: HanziEntry) => void;
  onLoadMore: () => void;
}

export function CharacterGrid({
  entries,
  shown,
  onSelect,
  onLoadMore,
}: CharacterGridProps) {
  const slice = entries.slice(0, shown);

  if (entries.length === 0) {
    return (
      <div className="empty">
        Nenhum caractere encontrado. Tente outra busca ou limpe os filtros.
      </div>
    );
  }

  return (
    <>
      <div className="grid">
        {slice.map((entry) => (
          <CharacterCard
            key={entry.r}
            entry={entry}
            onClick={onSelect}
          />
        ))}
      </div>
      {shown < entries.length && (
        <button className="more" onClick={onLoadMore}>
          Carregar mais
        </button>
      )}
    </>
  );
}
