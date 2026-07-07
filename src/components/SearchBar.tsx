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

  return (
    <div className="space-y-2">
      {/* Search input row */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
        <div className="relative flex-1">
          {/* Search icon inside input */}
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
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
            className={`w-full rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-base text-ink-900 shadow-sm transition-all placeholder:text-ink-400 focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/20 sm:py-3.5 ${
              isArabicInput ? "font-arabic text-xl !pr-4 !pl-12" : "font-sans !pl-11"
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

        {/* Action buttons row */}
        <div className="flex items-center gap-2">
          {voice.supported && (
            <button
              onClick={handleVoice}
              disabled={voice.listening}
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all ${
                voice.listening
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-ink-100 text-ink-600 hover:bg-ink-200"
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
            className="flex h-12 flex-1 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 px-6 text-sm font-semibold text-white shadow-sm shadow-accent-500/30 transition-all hover:shadow-md hover:shadow-accent-500/40 active:scale-[0.98] sm:h-12 sm:flex-none"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Cari
          </button>
        </div>
      </div>

      {/* Voice language toggle + status */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">
        <span className="text-ink-500">Bahasa suara:</span>
        <div className="flex rounded-lg border border-ink-200 bg-white p-0.5">
          <button
            onClick={() => onVoiceLangChange("ar")}
            className={`rounded-md px-3 py-1 text-xs font-medium transition-all sm:text-sm ${
              voiceLang === "ar" ? "bg-accent-600 text-white shadow-sm" : "text-ink-600 hover:bg-ink-100"
            }`}
          >
            العربية
          </button>
          <button
            onClick={() => onVoiceLangChange("id")}
            className={`rounded-md px-3 py-1 text-xs font-medium transition-all sm:text-sm ${
              voiceLang === "id" ? "bg-accent-600 text-white shadow-sm" : "text-ink-600 hover:bg-ink-100"
            }`}
          >
            Indonesia
          </button>
        </div>
        {!voice.supported && (
          <span className="text-xs text-ink-400">
            (Suara tidak didukung: gunakan Chrome/Edge/Safari)
          </span>
        )}
        {voice.error && (
          <span className="text-xs text-red-600">{voice.error}</span>
        )}
      </div>
    </div>
  );
}
