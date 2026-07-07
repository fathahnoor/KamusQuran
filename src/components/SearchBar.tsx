import { useRef } from "react";
import type { UseVoiceRecognitionReturn } from "../services/voiceRecognition";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  voice: UseVoiceRecognitionReturn;
  voiceLang: "ar" | "id";
  onVoiceLangChange: (lang: "ar" | "id") => void;
  inputLang: "ar" | "id";
}

export function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = "Cari kata Arab atau Indonesia...",
  voice,
  voiceLang,
  onVoiceLangChange,
  inputLang,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isArabicInput = inputLang === "ar";

  const handleVoice = () => {
    if (voice.listening) {
      voice.stop();
    } else {
      voice.start(voiceLang);
    }
  };

  return (    <div className="space-y-2">
      {/* Search input row: wraps voice + search buttons below on mobile */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSubmit();
            }}
            placeholder={placeholder}
            dir={isArabicInput ? "rtl" : "ltr"}
            className={`w-full rounded-lg border border-ink-300 bg-white px-3 py-2.5 text-base text-ink-900 shadow-sm transition-colors placeholder:text-ink-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 sm:px-4 sm:py-3 ${
              isArabicInput ? "font-arabic text-xl" : "font-sans"
            }`
          }
            aria-label="Input pencarian"
          />
          {voice.interimTranscript && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 max-w-[60%] truncate text-sm italic text-ink-400">
              {voice.interimTranscript}
            </div>
          )}
        </div>

        {/* Action buttons row: voice + search, horizontally on all screens */}
        <div className="flex items-center gap-2">
          {voice.supported && (
            <button
              onClick={handleVoice}
              disabled={voice.listening}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors sm:h-12 sm:w-12 ${
                voice.listening
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-accent-600 text-ink-50 hover:bg-accent-700"
              }`}
              aria-label={voice.listening ? "Berhenti merekam" : "Mulai input suara"}
              title={voice.listening ? "Sedang mendengarkan..." : "Input suara"}
            >
              {voice.listening ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="7" y="7" width="10" height="10" rx="1" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              )}
            </button>
          )}

          <button
            onClick={onSubmit}
            className="flex h-11 flex-1 shrink-0 items-center justify-center rounded-lg bg-ink-800 px-5 text-sm font-semibold text-ink-50 transition-colors hover:bg-ink-900 sm:h-12 sm:flex-none"
          >
            Cari
          </button>
        </div>
      </div>

      {/* Voice language toggle + status — wraps on mobile */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">
        <span className="text-ink-500">Bahasa suara:</span>
        <div className="flex rounded-md border border-ink-300 bg-white">
          <button
            onClick={() => onVoiceLangChange("ar")}
            className={`px-2.5 py-1 text-xs transition-colors sm:px-3 sm:text-sm ${
              voiceLang === "ar" ? "bg-accent-600 text-ink-50" : "text-ink-600 hover:bg-ink-100"
            }`}
          >
            العربية
          </button>
          <button
            onClick={() => onVoiceLangChange("id")}
            className={`px-2.5 py-1 text-xs transition-colors sm:px-3 sm:text-sm ${
              voiceLang === "id" ? "bg-accent-600 text-ink-50" : "text-ink-600 hover:bg-ink-100"
            }`}
          >
            Indonesia
          </button>
        </div>
        {!voice.supported && (
          <span className="text-xs text-ink-400">
            (Suara tidak didukung — gunakan Chrome/Edge/Safari)
          </span>
        )}
        {voice.error && (
          <span className="text-xs text-red-600">{voice.error}</span>
        )}
      </div>
    </div>
  );
}
