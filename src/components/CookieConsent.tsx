'use client';

import { useEffect, useState } from 'react';
import { getConsent, setConsent } from '../utils/consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  const decide = (status: 'granted' | 'denied') => {
    setConsent(status);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-[var(--line)] bg-[var(--ink-2)] px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-[var(--bone-dim)]">
          Usamos cookies para exibir anúncios (Google AdSense) e medir audiência. Ao aceitar, você
          concorda com o uso de cookies para personalização de anúncios. Veja nossa{' '}
          <a href="/privacidade" className="text-[var(--seal-bright)] underline">
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide('denied')}
            className="rounded-lg border border-[var(--line)] px-4 py-2 text-xs font-medium tracking-wide text-[var(--bone-dim)] hover:text-[var(--bone)]"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => decide('granted')}
            className="rounded-lg bg-[var(--seal)] px-4 py-2 text-xs font-medium tracking-wide text-white hover:bg-[var(--seal-bright)]"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
