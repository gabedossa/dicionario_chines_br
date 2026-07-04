export type ConsentStatus = 'granted' | 'denied' | null;

const KEY = 'cookie_consent';
const EVENT = 'cookie-consent-changed';

export function getConsent(): ConsentStatus {
  if (typeof window === 'undefined') return null;
  const v = window.localStorage.getItem(KEY);
  return v === 'granted' || v === 'denied' ? v : null;
}

export function setConsent(status: 'granted' | 'denied') {
  window.localStorage.setItem(KEY, status);
  window.dispatchEvent(new CustomEvent<ConsentStatus>(EVENT, { detail: status }));
}

export function onConsentChange(cb: (status: ConsentStatus) => void) {
  const handler = (e: Event) => cb((e as CustomEvent<ConsentStatus>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}
