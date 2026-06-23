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
            <b>Os 9.900 caracteres do conjunto completo</b>, ordenados por
            frequência (rank #1 = mais usado), com pinyin, definição e nível
            HSK. Os 347 do núcleo <b>HSK 1 e 2</b> têm tradução em português.{' '}
            <b>Dica:</b> os 5.000 primeiros já cobrem quase todo texto real; o
            resto é cauda rara.
          </p>
        </div>
      </div>
    </header>
  );
}
