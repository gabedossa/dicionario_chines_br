import type { Metadata } from 'next';
import Script from 'next/script';
import { CookieConsent } from '../components/CookieConsent';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seudominio.com.br';
const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === 'true';
const ADS_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-3889679223756000';

export const metadata: Metadata = {
  title: '汉字大全 · 9.900 Hanzi com pinyin e tradução',
  description:
    'Dicionário visual de caracteres chineses (hanzi) com tradução direta ao português brasileiro. Busque por caractere, pinyin ou significado; filtre por nível HSK e tom.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: '汉字大全 · 9.900 Hanzi com pinyin e tradução',
    description:
      'Dicionário visual de caracteres chineses (hanzi) com tradução direta ao português brasileiro.',
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: '汉字大全 · 9.900 Hanzi com pinyin e tradução',
    description:
      'Dicionário visual de caracteres chineses (hanzi) com tradução direta ao português brasileiro.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,900&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400;1,6..72,500&family=Spline+Sans+Mono:wght@400;500&family=Noto+Serif+SC:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
        {/* Script do AdSense só é carregado quando NEXT_PUBLIC_ADS_ENABLED=true.
            O push de cada slot ainda depende do consentimento do usuário (AdBanner.tsx). */}
        {ADS_ENABLED && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
