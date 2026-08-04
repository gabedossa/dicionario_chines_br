import type { Metadata } from 'next';
import Script from 'next/script';
import { CookieConsent } from '../components/CookieConsent';
import './globals.css';

export const metadata: Metadata = {
  title: '汉字大全 · 9.900 Hanzi com pinyin e tradução',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,900&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400;1,6..72,500&family=Spline+Sans+Mono:wght@400;500&family=Noto+Serif+SC:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
        {/* Exigido pelo Google para verificar o site — deve estar sempre presente no <head>.
            A solicitação de anúncio em si (push por slot) só ocorre após consentimento, em AdBanner.tsx. */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3889679223756000"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
