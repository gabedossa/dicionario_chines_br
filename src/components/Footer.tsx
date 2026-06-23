export function Footer() {
  return (
    <footer>
      <p>
        Ordenação por frequência e níveis HSK a partir do conjunto{' '}
        <b>hanziDB</b>; definições por caractere de <b>Make Me a Hanzi</b>;
        pinyin gerado com <b>pypinyin</b> (leitura mais comum). Tradução em
        português dos 347 caracteres de HSK 1–2 revisada manualmente. A base
        tem 10.000 entradas, das quais 100 são duplicatas (removidas)
        resultando em <b>9.900 caracteres únicos</b>; cerca de 1.056 dos mais
        raros (rank acima de 5.000) não têm glosa na base e aparecem só com
        pinyin e traços.
      </p>
      <p style={{ marginTop: 8 }}>
        A <b>cor de tom</b> segue a convenção de estudo: 1° âmbar · 2° jade ·
        3° azul · 4° vermelhão · neutro cinza.
      </p>
    </footer>
  );
}
