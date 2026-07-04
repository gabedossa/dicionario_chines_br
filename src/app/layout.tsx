import type { Metadata } from 'next';
import { CookieConsent } from '../components/CookieConsent';
import { AdsenseLoader } from '../components/AdsenseLoader';
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
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,900&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400;1,6..72,500&family=Spline+Sans+Mono:wght@400;500&family=Noto+Serif+SC:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <CookieConsent />
        {/* Só carrega o script do AdSense depois que o usuário aceita cookies */}
        <AdsenseLoader />
      </body>
    </html>
  );
}
