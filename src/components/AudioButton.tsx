import { speakChinese } from '../utils/tts';

interface AudioButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function AudioButton({ text, label, className = '' }: AudioButtonProps) {
  return (
    <button
      type="button"
      className={`audio-btn ${className}`.trim()}
      aria-label={label ? `Ouvir: ${label}` : 'Ouvir pronúncia'}
      onClick={(e) => {
        e.stopPropagation();
        speakChinese(text);
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 9v6h4l5 5V4L8 9H4z"
          fill="currentColor"
        />
        <path
          d="M16.5 8.5a5 5 0 0 1 0 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          suppressHydrationWarning
        />
        <path
          d="M19 6a9 9 0 0 1 0 12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity=".6"
          suppressHydrationWarning
        />
      </svg>
    </button>
  );
}
