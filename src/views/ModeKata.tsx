import { useState, useCallback, useMemo, useEffect } from "react";
import type { WordEntry } from "../types";
import { searchWords, wordCount, getWordsByFrequency } from "../data/morphologyIndex";
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

  // Debounced live search — avoids lag on every keystroke.
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
  const browseWords = useMemo(() => getWordsByFrequency(), []);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-ink-200 bg-white p-4 shadow-sm sm:p-6">
        <h1 className="text-xl font-bold text-ink-900 sm:text-2xl">Mode Kata</h1>
        <p className="mt-1 text-sm text-ink-500">
          Cari kata Al-Qur&apos;an berdasarkan input Arab atau Indonesia. Lihat akar, lemma,
          nahwu, sharf, i&apos;rab, frekuensi, dan kemunculan.
        </p>
        <div className="mt-4">
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
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="text-xs text-ink-400">
            Basis data: {wordCount()} kata
          </p>
          <button
            onClick={() => setShowBrowse((v) => !v)}
            className="text-xs font-medium text-accent-600 hover:text-accent-700"
          >
            {showBrowse ? "Sembunyikan" : "Jelajahi semua →"}
          </button>
        </div>
      </div>

      {/* Word browsing by frequency */}
      {showBrowse && !selected && (
        <div className="rounded-lg border border-ink-200 bg-white p-3 shadow-sm sm:p-4">
          <h3 className="mb-3 text-sm font-bold text-ink-700">
            Kata Berdasarkan Frekuensi ({browseWords.length} kata)
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {browseWords.map((entry) => (
              <button
                key={entry.id}
                onClick={() => {
                  setSelected(entry);
                  setShowBrowse(false);
                }}
                className="flex items-center justify-between rounded-md border border-ink-200 px-3 py-2 text-left transition-colors hover:border-accent-500 hover:bg-accent-50/30"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="font-arabic text-lg text-accent-700" dir="rtl">
                    {entry.arabic}
                  </span>
                  <span className="truncate text-xs text-ink-500">{entry.meaningId}</span>
                </div>
                <span className="ml-2 shrink-0 text-xs font-bold text-ink-300">
                  {entry.rank ?? entry.frequency}×
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
            <div className="rounded-lg border border-ink-200 bg-white p-4 text-center text-ink-500 sm:p-6">
              <p>Tidak ada hasil untuk &quot;{activeQuery}&quot;.</p>
              <p className="mt-1 text-sm">
                Coba kata Arab tanpa harakat, atau kata kunci Indonesia yang lebih umum.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-ink-500">{results.length} hasil ditemukan</p>
              {results.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => setSelected(entry)}
                  className="flex w-full items-center justify-between rounded-lg border border-ink-200 bg-white p-3 text-left shadow-sm transition-colors hover:border-accent-500 hover:bg-accent-50/30 sm:p-4"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-arabic-display text-2xl font-bold text-accent-700 sm:text-3xl" dir="rtl">
                      {entry.arabic}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate font-medium text-ink-800">{entry.meaningId}</div>
                      <div className="text-xs text-ink-400">
                        {entry.root} · {entry.frequency}× · {posShort(entry.pos)}
                      </div>
                    </div>
                  </div>
                  <svg className="h-5 w-5 shrink-0 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            className="mb-4 flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-ink-800"
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
        <div className="rounded-lg border border-dashed border-ink-300 bg-white/50 p-5 text-center sm:p-8">
          <p className="text-ink-500">
            Mulai dengan mengetik kata Arab atau Indonesia, atau gunakan input suara.
          </p>
          <p className="mt-2 text-sm text-ink-400">
            Contoh: <span className="font-arabic">الله</span>, <span className="font-arabic">قول</span>,
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
