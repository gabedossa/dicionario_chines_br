# 汉字大全 — Compêndio de Hanzi

Dicionário visual de caracteres chineses (hanzi) com tradução direta ao português brasileiro, ordenados por frequência de uso real.

## Funcionalidades

- **Busca** por caractere (汉), pinyin (`hàn`) ou significado em português
- **Filtro por nível HSK** (1 a 6) para focar no vocabulário do seu nível de estudo
- **Filtro por tom** (1°, 2°, 3°, 4° e neutro)
- **Modal de detalhes** ao clicar em qualquer caractere, com:
  - Ranking de frequência
  - Pronúncia em pinyin
  - Tradução em português
  - Nível HSK e número de traços
  - Palavras compostas que usam o caractere
  - Frase de exemplo com pinyin e tradução
- **Textos para leitura** agrupados por nível HSK, com cada frase apresentada em chinês, pinyin e tradução

## Tecnologias

- [Next.js](https://nextjs.org/) (App Router, export estático) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) para código novo (o visual principal usa CSS customizado em `src/styles/global.css`)
- [Google AdSense](https://www.google.com/adsense/) com banner de consentimento de cookies

## Como rodar

```bash
npm install
npm run dev
```

O app estará disponível em `http://localhost:3000`.

## Build para produção

```bash
npm run build
```

Gera um export estático na pasta `out/`, pronto para hospedagem em qualquer servidor estático.

## Estrutura do projeto

```text
src/
├── app/
│   ├── layout.tsx        # Layout raiz: metadata, fontes, script do AdSense
│   ├── page.tsx          # Página inicial (renderiza App.tsx)
│   ├── globals.css       # Import do Tailwind + do CSS customizado
│   └── privacidade/
│       └── page.tsx      # Política de Privacidade
├── App.tsx               # Componente principal (estado, filtros, layout da página)
├── components/
│   ├── Header.tsx        # Cabeçalho com marca e descrição
│   ├── Controls.tsx      # Barra de busca e filtros (HSK, tom, textos)
│   ├── CharacterGrid.tsx # Grade paginada de caracteres
│   ├── CharacterCard.tsx # Card individual de cada hanzi
│   ├── DetailModal.tsx   # Modal com detalhes do caractere
│   ├── ReadingModal.tsx  # Modal com textos para leitura
│   ├── AdBanner.tsx      # Slot de anúncio do Google AdSense
│   ├── CookieConsent.tsx # Banner de consentimento de cookies
│   └── Footer.tsx
├── data/
│   ├── hanzi.json        # Base de dados dos caracteres
│   └── texts.ts          # Textos de leitura por nível HSK
├── types/
│   └── hanzi.ts          # Interfaces TypeScript
└── utils/
    ├── pinyin.ts          # Detecção de tom e normalização de pinyin
    └── consent.ts         # Estado de consentimento de cookies (localStorage)

public/
└── ads.txt               # Declaração de vendedor autorizado do AdSense
```
