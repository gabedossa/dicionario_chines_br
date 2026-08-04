'use client';

import { useEffect, useRef, useState } from 'react';
import { getConsent, onConsentChange, ConsentStatus } from '../utils/consent';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'rectangle' | 'vertical';
}

// Substitua os dois placeholders abaixo após criar sua conta no Google AdSense:
// - data-ad-client: seu Publisher ID  (ca-pub-XXXXXXXXXXXXXXXX)
// - slot: o Ad Unit ID de cada bloco (XXXXXXXXXX)
const AD_CLIENT = 'ca-pub-3889679223756000';

export function AdBanner({ slot, format = 'auto' }: AdBannerProps) {
  const pushed = useRef(false);
  const [consent, setConsentState] = useState<ConsentStatus>(null);

  useEffect(() => {
    setConsentState(getConsent());
    return onConsentChange(setConsentState);
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || consent !== 'granted' || pushed.current) return;
    pushed.current = true;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {}
  }, [consent]);

  // Sem consentimento, não renderiza o slot: evita requisições e cookies de anúncio.
  // Fora de produção, o script do AdSense nem é carregado (ver layout.tsx).
  if (consent !== 'granted' || process.env.NODE_ENV !== 'production') return null;

  return (
    <div className="ad-wrap">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
