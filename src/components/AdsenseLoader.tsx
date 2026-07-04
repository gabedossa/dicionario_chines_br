'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getConsent, onConsentChange, ConsentStatus } from '../utils/consent';

// Substitua ca-pub-XXXXXXXXXXXXXXXX pelo seu Publisher ID caso mude de conta.
const AD_CLIENT = 'ca-pub-3889679223756000';

export function AdsenseLoader() {
  const [consent, setConsentState] = useState<ConsentStatus>(null);

  useEffect(() => {
    setConsentState(getConsent());
    return onConsentChange(setConsentState);
  }, []);

  if (consent !== 'granted') return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
