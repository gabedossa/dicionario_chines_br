let voices: SpeechSynthesisVoice[] = [];

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const loadVoices = () => {
    voices = window.speechSynthesis.getVoices();
  };
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function pickChineseVoice(): SpeechSynthesisVoice | undefined {
  return (
    voices.find((v) => v.lang === 'zh-CN') ||
    voices.find((v) => v.lang?.toLowerCase().startsWith('zh')) ||
    undefined
  );
}

export function isTtsSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function speakChinese(text: string): void {
  if (!isTtsSupported() || !text) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.9;

  const voice = pickChineseVoice();
  if (voice) utterance.voice = voice;

  window.speechSynthesis.speak(utterance);
}
