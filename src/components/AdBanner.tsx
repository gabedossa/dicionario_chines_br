'use client';

import { useEffect, useRef, useState } from 'react';
import { getConsent, onConsentChange, ConsentStatus } from '../utils/consent';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'horizontal' | 'rectangle' | 'vertical';
}

const AD_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-3889679223756000';
const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === 'true';

export function AdBanner({ slot, format = 'auto' }: AdBannerProps) {
  const pushed = useRef(false);
  const [consent, setConsentState] = useState<ConsentStatus>(null);

  useEffect(() => {
    setConsentState(getConsent());
    return onConsentChange(setConsentState);
  }, []);

  useEffect(() => {
    if (!ADS_ENABLED || !slot || consent !== 'granted' || pushed.current) return;
    pushed.current = true;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {}
  }, [consent, slot]);

  // Só renderiza o slot se anúncios estiverem habilitados, houver consentimento e um slot válido.
  if (!ADS_ENABLED || !slot || consent !== 'granted') return null;

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
