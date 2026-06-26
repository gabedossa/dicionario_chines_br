import { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
}

// Substitua os dois placeholders abaixo após criar sua conta no Google AdSense:
// - data-ad-client: seu Publisher ID  (ca-pub-XXXXXXXXXXXXXXXX)
// - slot: o Ad Unit ID de cada bloco (XXXXXXXXXX)
const AD_CLIENT = 'ca-pub-3889679223756000';

export function AdBanner({ slot, format = 'auto' }: AdBannerProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {}
  }, []);

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
