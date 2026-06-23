export function Header() {
  return (
    <header>
      <div className="brand">
        <div className="seal" aria-hidden="true">
          <span>汉</span>
          <span>字</span>
          <span>大</span>
          <span>全</span>
        </div>
        <div>
          <div className="zh">汉字大全</div>
          <h1>
            Compêndio de <em>Hanzi</em>
          </h1>
          <p>
            Dicionário visual de hanzi ordenados por frequência de uso real.
            Filtre por nível HSK ou tom, busque por caractere, pinyin ou
            significado — cada entrada traz pronúncia e tradução direta ao
            português.
          </p>
        </div>
      </div>
    </header>
  );
}
