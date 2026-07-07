import { useState, useCallback, useMemo } from "react";
import type { SentenceAnalysis, SentenceToken } from "../types";
import { analyzeSentence, detectLanguage } from "../services/sentenceAnalysis";
import { useVoiceRecognition } from "../services/voiceRecognition";
import { SearchBar } from "../components/SearchBar";
import { isArabicText } from "../utils/arabic";

export function ModeKalimat() {
  const [input, setInput] = useState("");
  const [analysis, setAnalysis] = useState<SentenceAnalysis | null>(null);
  const [voiceLang, setVoiceLang] = useState<"ar" | "id">("ar");

  const inputLang = useMemo(() => detectLanguage(input), [input]);

  const handleVoiceResult = useCallback((transcript: string) => {
    setInput(transcript);
  }, []);

  const voice = useVoiceRecognition(handleVoiceResult);

  const handleSubmit = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    setAnalysis(analyzeSentence(text));
  }, [input]);

  const placeholder = useMemo(() => {
    if (inputLang === "ar") return "اكتب جملة عربية...";
    return "Ketik kalimat Arab atau Indonesia untuk dianalisis...";
  }, [inputLang]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="rounded-2xl border border-ink-200/60 bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:p-7">
        <h1 className="text-xl font-bold text-ink-900 sm:text-2xl">Mode Kalimat</h1>
        <p className="mt-1.5 text-sm text-ink-500">
          Masukkan kalimat Arab atau Indonesia. Setiap kata akan diurai menampilkan
          akar, lemma, arti, nahwu, dan sharf. Kalimat dari Al-Qur&apos;an mendapat
          analisis dependency graph.
        </p>
        <div className="mt-5">
          <SearchBar
            value={input}
            onChange={setInput}
            onSubmit={handleSubmit}
            placeholder={placeholder}
            voice={voice}
            voiceLang={voiceLang}
            onVoiceLangChange={setVoiceLang}
            inputLang={inputLang}
          />
        </div>
      </div>

      {/* Analysis result */}
      {analysis && (
        <div className="space-y-4 animate-fade-in">
          {/* Quranic ayah banner */}
          {analysis.isQuranicAyah && (
            <div className="rounded-2xl border border-accent-300/60 bg-gradient-to-r from-accent-50 to-accent-50/50 p-4 sm:p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-accent-700">
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                Kalimat ini cocok dengan ayat Al-Qur&apos;an
                {analysis.matchedAyah && ` yaitu ${analysis.matchedAyah}`}
              </p>
              <p className="mt-1.5 pl-7 text-xs text-accent-600">
                Analisis dependency graph (QADT) tersedia untuk ayat ini.
              </p>
            </div>
          )}

          {/* Token breakdown */}
          <div className="rounded-2xl border border-ink-200/60 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-ink-700">
              <svg className="h-4 w-4 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              Uraian Per Kata ({analysis.tokens.length} token)
            </h3>
            <div className="space-y-2.5 sm:space-y-3">
              {analysis.tokens.map((token) => (
                <TokenCard key={token.index} token={token} />
              ))}
            </div>
          </div>

          {/* Sentence-level observations */}
          {analysis.observations.length > 0 && (
            <div className="rounded-2xl border border-accent-200/60 bg-gradient-to-b from-accent-50/40 to-white/80 p-4 sm:p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-accent-700">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Observasi Tingkat Kalimat
              </h3>
              <div className="space-y-3">
                {analysis.observations.map((obs, i) => (
                  <div key={i} className="rounded-xl bg-white/60 p-3">
                    {obs.sentenceType && (
                      <div className="mb-1 inline-block rounded-full bg-accent-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-700">
                        {obs.sentenceType}
                      </div>
                    )}
                    <p className="text-sm leading-relaxed text-ink-700">{obs.summary}</p>
                    {obs.notes.length > 0 && (
                      <ul className="mt-1.5 list-inside list-disc text-xs text-ink-500">
                        {obs.notes.map((note, j) => (
                          <li key={j}>{note}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Initial state hint */}
      {!analysis && (
        <div className="rounded-2xl border border-dashed border-ink-300/60 bg-white/40 p-6 text-center sm:p-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50">
            <svg className="h-7 w-7 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <p className="font-medium text-ink-600">
            Masukkan kalimat untuk dianalisis, atau gunakan input suara.
          </p>
          <div className="mt-3 space-y-1.5 text-sm text-ink-400">
            <p>
              Contoh Arab: <span className="font-arabic text-accent-600">الحمد لله رب العالمين</span>
            </p>
            <p>
              Contoh Indonesia: &quot;Allah Maha Pengasih&quot;
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function TokenCard({ token }: { token: SentenceToken }) {
  const surfaceIsArabic = isArabicText(token.surface);
  return (
    <div
      className={`rounded-xl border p-3 transition-all sm:p-3.5 ${
        token.matched
          ? "border-ink-200/60 bg-white/80"
          : "border-dashed border-ink-300/60 bg-ink-50/40"
      }`}
    >
      <div className="flex items-baseline justify-between gap-2 sm:gap-3">
        <div className="flex min-w-0 items-baseline gap-2 sm:gap-3">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-100 text-[10px] font-bold text-ink-400">
            {token.index + 1}
          </span>
          {surfaceIsArabic ? (
            <span className="font-arabic text-xl font-medium text-ink-900 sm:text-2xl" dir="rtl">
              {token.surface}
            </span>
          ) : (
            <span className="text-xl font-medium text-ink-900 sm:text-2xl" dir="ltr">
              {token.surface}
            </span>
          )}
        </div>
        {token.matched ? (
          <span className="shrink-0 rounded-full bg-accent-100 px-2.5 py-0.5 text-[10px] font-bold text-accent-700">
            ✓ Cocok
          </span>
        ) : (
          <span className="shrink-0 rounded-full bg-ink-100 px-2.5 py-0.5 text-[10px] font-bold text-ink-500">
            Tebakan
          </span>
        )}
      </div>
      <div className="mt-2.5 grid grid-cols-1 gap-x-4 gap-y-1 text-xs sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3">
        {token.lemma && <Info label="Lemma" value={token.lemma} arabic />}
        {token.root && <Info label="Akar" value={token.root} arabic />}
        {token.meaningId && <Info label="Arti" value={token.meaningId} />}
        {token.posMajor && <Info label="Kelas Kata" value={token.posMajor} />}
        {surfaceIsArabic && token.morpho?.irab && token.morpho.irab !== "unknown" && (
          <Info label="I'rab" value={token.morpho.irab} />
        )}
        {surfaceIsArabic && token.morpho?.syntacticRoleLabel && (
          <Info label="Fungsi Sintaktis" value={token.morpho.syntacticRoleLabel} />
        )}
      </div>
      {surfaceIsArabic && token.nahwuNote && (
        <p className="mt-2.5 rounded-lg bg-accent-50/50 px-2.5 py-1.5 text-xs leading-relaxed text-ink-600">
          <span className="font-semibold text-accent-600">Nahwu:</span> {token.nahwuNote}
        </p>
      )}
      {surfaceIsArabic && token.sharfNote && (
        <p className="mt-1.5 rounded-lg bg-ink-50/80 px-2.5 py-1.5 text-xs leading-relaxed text-ink-600">
          <span className="font-semibold text-ink-600">Sharf:</span> {token.sharfNote}
        </p>
      )}
    </div>
  );
}

function Info({ label, value, arabic }: { label: string; value: string; arabic?: boolean }) {
  return (
    <div className="flex gap-1">
      <span className="font-semibold text-ink-400">{label}:</span>
      <span className={arabic ? "font-arabic text-sm text-ink-700" : "text-ink-700"} dir={arabic ? "rtl" : "ltr"}>
        {value}
      </span>
    </div>
  );
}
