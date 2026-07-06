import { useState, useCallback, useMemo } from "react";
import type { WordEntry } from "../types";
import { searchWords, wordCount } from "../data/morphologyIndex";
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

  const results = useMemo(() => {
    if (!submittedQuery) return [];
    return searchWords(submittedQuery, 50);
  }, [submittedQuery]);

  const handleSubmit = useCallback(() => {
    setSubmittedQuery(query);
    setSelected(null);
  }, [query]);

  const placeholder = useMemo(() => {
    if (inputLang === "ar") return "اكتب كلمة عربية...";
    return "Ketik kata Arab atau Indonesia...";
  }, [inputLang]);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-ink-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-ink-900">Mode Kata</h1>
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
        <p className="mt-2 text-xs text-ink-400">
          Basis data: {wordCount()} kata frekuensi tinggi (target ~300 kata v1)
        </p>
      </div>

      {/* Result list */}
      {submittedQuery && !selected && (
        <div className="space-y-2">
          {results.length === 0 ? (
            <div className="rounded-lg border border-ink-200 bg-white p-6 text-center text-ink-500">
              <p>Tidak ada hasil untuk &quot;{submittedQuery}&quot;.</p>
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
                  className="flex w-full items-center justify-between rounded-lg border border-ink-200 bg-white p-4 text-left shadow-sm transition-colors hover:border-accent-500 hover:bg-accent-50/30"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-arabic-display text-3xl font-bold text-accent-700" dir="rtl">
                      {entry.arabic}
                    </span>
                    <div>
                      <div className="font-medium text-ink-800">{entry.meaningId}</div>
                      <div className="text-xs text-ink-400">
                        Akar: {entry.root} · {entry.frequency}× · {posShort(entry.pos)}
                      </div>
                    </div>
                  </div>
                  <svg className="h-5 w-5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      {!submittedQuery && (
        <div className="rounded-lg border border-dashed border-ink-300 bg-white/50 p-8 text-center">
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
