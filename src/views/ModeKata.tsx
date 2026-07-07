import { useState, useCallback, useMemo, useEffect } from "react";
import type { WordEntry } from "../types";
import {
  searchWords,
  wordCount,
  WORDS_BY_FREQ,
  WORDS_BY_INDO,
  WORDS_BY_ARABIC,
} from "../data/morphologyIndex";
import { useVoiceRecognition } from "../services/voiceRecognition";
import { detectLanguage } from "../services/sentenceAnalysis";
import { SearchBar } from "../components/SearchBar";
import { WordResultPanel } from "../components/WordResultPanel";

export function ModeKata() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [selected, setSelected] = useState<WordEntry | null>(null);
  const [voiceLang, setVoiceLang] = useState<"ar" | "id">("ar");

  const inputLang = useMemo(() => detectLanguage(query), [query]);

  const handleVoiceResult = useCallback((transcript: string) => {
    setQuery(transcript);
  }, [setQuery]);

  const voice = useVoiceRecognition(handleVoiceResult);

  // Debounced live search: avoids lag on every keystroke.
  const [debouncedQuery, setDebouncedQuery] = useState("");
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(t);
  }, [query]);

  // submittedQuery is used only to trigger immediate search on Enter/Cari.
  // It's cleared on the next keystroke so debouncedQuery takes over for live search.
  useEffect(() => {
    if (submittedQuery && query !== submittedQuery) {
      setSubmittedQuery("");
    }
  }, [query, submittedQuery]);

  const handleSubmit = useCallback(() => {
    setSubmittedQuery(query);
    setSelected(null);
    // Bypass debounce by setting debouncedQuery immediately on submit.
    setDebouncedQuery(query);
  }, [query]);

  const activeQuery = submittedQuery || debouncedQuery;
  const results = useMemo(() => {
    if (!activeQuery.trim()) return [];
    return searchWords(activeQuery, 50);
  }, [activeQuery]);

  const placeholder = useMemo(() => {
    if (inputLang === "ar") return "اكتب كلمة عربية...";
    return "Ketik kata Arab atau Indonesia...";
  }, [inputLang]);

  const [showBrowse, setShowBrowse] = useState(false);
  const [sortBy, setSortBy] = useState<"freq" | "indo" | "arabic">("freq");

  // Pre-sorted arrays are computed ONCE at module load in morphologyIndex.ts.
  // No runtime .sort() ever happens here: the component just picks which
  // frozen array to render. This eliminates all possibility of ordering
  // degradation regardless of browser sort stability or click count.
  const browseWords =
    sortBy === "freq" ? WORDS_BY_FREQ
    : sortBy === "indo" ? WORDS_BY_INDO
    : WORDS_BY_ARABIC;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero card with search */}
      <div className="rounded-2xl border border-ink-200/60 bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:p-7">
        <h1 className="text-xl font-bold text-ink-900 sm:text-2xl">Mode Kata</h1>
        <p className="mt-1.5 text-sm text-ink-500">
          Cari kata Al-Qur&apos;an berdasarkan input Arab atau Indonesia. Lihat akar, lemma,
          nahwu, sharf, i&apos;rab, frekuensi, dan kemunculan.
        </p>
        <div className="mt-5">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSubmit={handleSubmit}
            placeholder={placeholder}
            voice={voice}
            voiceLang={voiceLang}
            onVoiceLangChange={setVoiceLang}
            inputLang={inputLang}
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="flex items-center gap-1.5 text-xs text-ink-400">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Basis data: {wordCount()} kata
          </p>
          <button
            onClick={() => setShowBrowse((v) => !v)}
            className="flex items-center gap-1 text-xs font-semibold text-accent-600 transition-colors hover:text-accent-700"
          >
            {showBrowse ? (
              <>
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                Sembunyikan
              </>
            ) : (
              <>
                Jelajahi semua
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Word browsing by frequency */}
      {showBrowse && !selected && (
        <div className="rounded-2xl border border-ink-200/60 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:p-5">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-sm font-bold text-ink-700">
              Jelajahi Kata ({browseWords.length} kata)
            </h3>
            <div className="flex items-center gap-1.5 rounded-lg bg-ink-100/80 p-1">
              <span className="px-1 text-xs text-ink-400">Urutkan:</span>
              {([
                { id: "freq" as const, label: "Frekuensi" },
                { id: "indo" as const, label: "A-Z Indo" },
                { id: "arabic" as const, label: "ا-ي Arab" },
              ]).map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSortBy(opt.id)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                    sortBy === opt.id
                      ? "bg-white text-accent-700 shadow-sm"
                      : "text-ink-500 hover:text-ink-700"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {browseWords.map((entry) => (
              <button
                key={`${sortBy}-${entry.id}`}
                onClick={() => {
                  setSelected(entry);
                  setShowBrowse(false);
                }}
                className="flex items-center justify-between rounded-xl border border-ink-200/60 bg-white px-3 py-2.5 text-left transition-all hover:border-accent-400 hover:bg-accent-50/30 hover:shadow-sm"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="font-arabic text-lg text-accent-700" dir="rtl">
                    {entry.arabic}
                  </span>
                  <span className="truncate text-xs text-ink-500">{entry.meaningId}</span>
                </div>
                <span className="ml-2 shrink-0 rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-bold text-ink-400">
                  {entry.frequency}×
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Result list */}
      {activeQuery && !selected && (
        <div className="space-y-2">
          {results.length === 0 ? (
            <div className="rounded-2xl border border-ink-200/60 bg-white/80 p-6 text-center text-ink-500 sm:p-8">
              <svg className="mx-auto mb-3 h-10 w-10 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <p className="font-medium">Tidak ada hasil untuk &quot;{activeQuery}&quot;.</p>
              <p className="mt-1.5 text-sm text-ink-400">
                Coba kata Arab tanpa harakat, atau kata kunci Indonesia yang lebih umum.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-ink-500">
                <span className="font-semibold text-ink-700">{results.length}</span> hasil ditemukan
              </p>
              {results.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => setSelected(entry)}
                  className="group flex w-full items-center justify-between rounded-xl border border-ink-200/60 bg-white/90 p-3.5 text-left shadow-sm transition-all hover:border-accent-400 hover:bg-accent-50/30 hover:shadow-md sm:p-4"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-arabic-display text-2xl font-bold text-accent-700 sm:text-3xl" dir="rtl">
                      {entry.arabic}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate font-medium text-ink-800">{entry.meaningId}</div>
                      <div className="mt-0.5 flex items-center gap-2 text-xs text-ink-400">
                        <span className="font-arabic text-accent-600/70">{entry.root}</span>
                        <span className="text-ink-300">·</span>
                        <span>{entry.frequency}×</span>
                        <span className="text-ink-300">·</span>
                        <span>{posShort(entry.pos)}</span>
                      </div>
                    </div>
                  </div>
                  <svg className="h-5 w-5 shrink-0 text-ink-300 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              ))}
            </>
          )}
        </div>
      )}

      {/* Detailed result */}
      {selected && (
        <div>
          <button
            onClick={() => setSelected(null)}
            className="mb-4 flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-ink-800"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Kembali ke hasil
          </button>
          <WordResultPanel entry={selected} />
        </div>
      )}

      {/* Initial state hint */}
      {!activeQuery && (
        <div className="rounded-2xl border border-dashed border-ink-300/60 bg-white/40 p-6 text-center sm:p-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50">
            <svg className="h-7 w-7 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <p className="font-medium text-ink-600">
            Mulai dengan mengetik kata Arab atau Indonesia, atau gunakan input suara.
          </p>
          <p className="mt-2 text-sm text-ink-400">
            Contoh: <span className="font-arabic text-accent-600">الله</span>, <span className="font-arabic text-accent-600">قول</span>,
            &quot;Tuhan&quot;, &quot;beriman&quot;
          </p>
        </div>
      )}
    </div>
  );
}

function posShort(p: string): string {
  const labels: Record<string, string> = {
    noun: "Isim",
    verb: "Fi'il",
    particle: "Huruf",
    pronoun: "Dhamir",
    adjective: "Sifat",
    proper_noun: "Nama diri",
  };
  return labels[p] ?? p;
}
