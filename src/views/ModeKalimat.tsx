import { useState, useCallback, useMemo } from "react";
import type { SentenceAnalysis, SentenceToken } from "../types";
import { analyzeSentence, detectLanguage } from "../services/sentenceAnalysis";
import { useVoiceRecognition } from "../services/voiceRecognition";
import { SearchBar } from "../components/SearchBar";

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
    <div className="space-y-6">
      <div className="rounded-lg border border-ink-200 bg-white p-4 shadow-sm sm:p-6">
        <h1 className="text-xl font-bold text-ink-900 sm:text-2xl">Mode Kalimat</h1>
        <p className="mt-1 text-sm text-ink-500">
          Masukkan kalimat Arab atau Indonesia. Setiap kata akan diurai menampilkan
          akar, lemma, arti, nahwu, dan sharf. Kalimat dari Al-Qur&apos;an mendapat
          analisis dependency graph.
        </p>
        <div className="mt-4">
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
        <div className="space-y-4">
          {/* Quranic ayah banner */}
          {analysis.isQuranicAyah && (
            <div className="rounded-lg border border-accent-500 bg-accent-50/40 p-3 sm:p-4">
              <p className="text-sm font-semibold text-accent-700">
                ✓ Kalimat ini cocok dengan ayat Al-Qur&apos;an
                {analysis.matchedAyah && ` — ${analysis.matchedAyah}`}
              </p>
              <p className="mt-1 text-xs text-accent-600">
                Analisis dependency graph (QADT) tersedia untuk ayat ini.
              </p>
            </div>
          )}

          {/* Token breakdown */}
          <div className="rounded-lg border border-ink-200 bg-white p-3 shadow-sm sm:p-4">
            <h3 className="mb-3 text-sm font-bold text-ink-700">
              Uraian Per Kata ({analysis.tokens.length} token)
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {analysis.tokens.map((token) => (
                <TokenCard key={token.index} token={token} />
              ))}
            </div>
          </div>

          {/* Sentence-level observations */}
          {analysis.observations.length > 0 && (
            <div className="rounded-lg border-l-4 border-accent-500 bg-accent-50/30 p-3 sm:p-4">
              <h3 className="mb-2 text-sm font-bold text-accent-700">
                Observasi Tingkat Kalimat
              </h3>
              <div className="space-y-3">
                {analysis.observations.map((obs, i) => (
                  <div key={i}>
                    {obs.sentenceType && (
                      <div className="text-xs font-semibold uppercase text-accent-600">
                        {obs.sentenceType}
                      </div>
                    )}
                    <p className="text-sm leading-relaxed text-ink-700">{obs.summary}</p>
                    {obs.notes.length > 0 && (
                      <ul className="mt-1 list-inside list-disc text-xs text-ink-500">
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
        <div className="rounded-lg border border-dashed border-ink-300 bg-white/50 p-5 text-center sm:p-8">
          <p className="text-ink-500">
            Masukkan kalimat untuk dianalisis, atau gunakan input suara.
          </p>
          <p className="mt-2 text-sm text-ink-400">
            Contoh Arab: <span className="font-arabic">الحمد لله رب العالمين</span>
          </p>
          <p className="text-sm text-ink-400">
            Contoh Indonesia: &quot;Allah Maha Pengasih&quot;
          </p>
        </div>
      )}
    </div>
  );
}

function TokenCard({ token }: { token: SentenceToken }) {
  return (
    <div
      className={`rounded-md border p-2.5 sm:p-3 ${
        token.matched
          ? "border-ink-200 bg-ink-50/40"
          : "border-dashed border-ink-300 bg-ink-50/20"
      }`}
    >
      <div className="flex items-baseline justify-between gap-2 sm:gap-3">
        <div className="flex min-w-0 items-baseline gap-2 sm:gap-3">
          <span className="text-xs text-ink-400">#{token.index + 1}</span>
          <span className="font-arabic text-xl font-medium text-ink-900 sm:text-2xl" dir="rtl">
            {token.surface}
          </span>
        </div>
        {token.matched ? (
          <span className="rounded bg-accent-100 px-2 py-0.5 text-xs font-medium text-accent-700">
            Cocok
          </span>
        ) : (
          <span className="rounded bg-ink-200 px-2 py-0.5 text-xs font-medium text-ink-500">
            Tebakan
          </span>
        )}
      </div>
      <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-1 text-xs sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3">
        {token.lemma && <Info label="Lemma" value={token.lemma} arabic />}
        {token.root && <Info label="Akar" value={token.root} arabic />}
        {token.meaningId && <Info label="Arti" value={token.meaningId} />}
        {token.posMajor && <Info label="Kelas Kata" value={token.posMajor} />}
        {token.morpho?.irab && token.morpho.irab !== "unknown" && (
          <Info label="I'rab" value={token.morpho.irab} />
        )}
        {token.morpho?.syntacticRoleLabel && (
          <Info label="Fungsi Sintaktis" value={token.morpho.syntacticRoleLabel} />
        )}
      </div>
      {token.nahwuNote && (
        <p className="mt-2 text-xs leading-relaxed text-ink-500">
          <span className="font-semibold text-accent-600">Nahwu:</span> {token.nahwuNote}
        </p>
      )}
      {token.sharfNote && (
        <p className="mt-2 text-xs leading-relaxed text-ink-500">
          <span className="font-semibold text-ink-600">Sharf:</span> {token.sharfNote}
        </p>
      )}
    </div>
  );
}

function Info({ label, value, arabic }: { label: string; value: string; arabic?: boolean }) {
  return (
    <div>
      <span className="font-semibold text-ink-400">{label}: </span>
      <span className={arabic ? "font-arabic text-sm" : ""} dir={arabic ? "rtl" : "ltr"}>
        {value}
      </span>
    </div>
  );
}
