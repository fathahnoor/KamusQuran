import { useState } from "react";
import type { SentenceToken } from "../types";
import { IrobTable } from "./IrobTable";
import { isArabicText } from "../utils/arabic";

interface PerTokenIrobListProps {
  tokens: SentenceToken[];
}

/**
 * PerTokenIrobList: shows a full IrobTable card for EACH token in a sentence.
 *
 * Mirrors Mode Kata's WordResultPanel: every token gets its own card with
 * Arabic word, meaning, full 6-column IrobTable (Kata → Jenis → Kedudukan →
 * I'rob → Tanda → 'Amil), inductive conclusion, and quick linguistic info.
 * All cards are visible by default, no clicking needed.
 */
export function PerTokenIrobList({ tokens }: PerTokenIrobListProps) {
  const irabTokens = tokens.filter((t) => t.structuredIrab);
  if (irabTokens.length === 0) return null;

  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-3">
      {/* Section header (collapsible) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="per-token-irob-body"
        className="flex w-full items-center justify-between gap-2 rounded-lg py-1 text-left transition-colors hover:bg-accent-50/40 sm:py-1.5"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-xs font-bold text-white shadow-sm shadow-accent-200">
            إ
          </div>
          <h3 className="text-sm font-bold text-ink-700">
            Tabel I&apos;rob Per Kata
            <span className="ml-1.5 rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-bold text-ink-500">
              {irabTokens.length}
            </span>
          </h3>
        </div>
        <svg
          className={`h-4 w-4 shrink-0 text-ink-400 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Cards: one per token */}
      {open && (
        <div
          id="per-token-irob-body"
          className="space-y-4 animate-fade-in"
        >
          {irabTokens.map((token, idx) => {
          const s = token.structuredIrab!;
          const matched = token.matched;
          const surfaceIsArabic = isArabicText(token.surface);

          return (
            <div
              key={token.index}
              className={`animate-stagger overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-md ${
                matched
                  ? "border-ink-200/60 bg-white/90"
                  : "border-dashed border-ink-300/60 bg-ink-50/50"
              }`}
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              {/* Card header: word + meaning + match badge */}
              <div className="flex items-start justify-between gap-3 border-b border-ink-100 bg-gradient-to-r from-ink-50/50 to-white px-4 py-3 sm:px-5 sm:py-3.5">
                <div className="flex min-w-0 items-baseline gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-[11px] font-bold text-accent-700">
                    {idx + 1}
                  </span>
                  <div className="min-w-0">
                    {surfaceIsArabic ? (
                      <span className="font-arabic-display text-2xl font-bold leading-tight text-ink-900 sm:text-3xl" dir="rtl">
                        {token.surface}
                      </span>
                    ) : (
                      <span className="text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">
                        {token.surface}
                      </span>
                    )}
                    {token.meaningId && (
                      <p className="mt-0.5 text-sm font-semibold text-ink-600">
                        {token.meaningId}
                      </p>
                    )}
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                    matched
                      ? "bg-accent-100 text-accent-700"
                      : "bg-ink-100 text-ink-500"
                  }`}
                >
                  {matched ? "✓ Cocok" : "Tebakan"}
                </span>
              </div>

              {/* Card body: IrobTable + quick info */}
              <div className="space-y-3 p-4 sm:p-5">
                {/* Full IrobTable (like Mode Kata) */}
                <IrobTable irab={s} />

                {/* Quick linguistic info grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:grid-cols-3">
                  {token.lemma && <LInfo label="Lemma" value={token.lemma} arabic />}
                  {token.root && <LInfo label="Akar" value={token.root} arabic />}
                  {token.morpho?.wazan && <LInfo label="Wazan" value={token.morpho.wazan} />}
                  {token.morpho?.gender && token.morpho.gender !== "unknown" && (
                    <LInfo label="Gender" value={token.morpho.gender} />
                  )}
                  {token.morpho?.number && token.morpho.number !== "unknown" && (
                    <LInfo label="Jumlah" value={token.morpho.number} />
                  )}
                  {token.posMajor && <LInfo label="Kelas Kata" value={token.posMajor} />}
                  {token.morpho?.definiteness && token.morpho.definiteness !== "unknown" && (
                    <LInfo label="Kefinitifan" value={token.morpho.definiteness} />
                  )}
                </div>

                {/* Nahwu / Sharf notes */}
                {token.nahwuNote && (
                  <div className="rounded-lg border-l-3 border-accent-400 bg-accent-50/40 px-3 py-2">
                    <p className="text-xs leading-relaxed text-ink-600">
                      <span className="font-semibold text-accent-600">Nahwu:</span>{" "}
                      {token.nahwuNote}
                    </p>
                  </div>
                )}
                {token.sharfNote && (
                  <div className="rounded-lg border-l-3 border-ink-400 bg-ink-50/40 px-3 py-2">
                    <p className="text-xs leading-relaxed text-ink-600">
                      <span className="font-semibold text-ink-600">Sharf:</span>{" "}
                      {token.sharfNote}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        </div>
      )}
    </div>
  );
}

function LInfo({ label, value, arabic }: { label: string; value: string; arabic?: boolean }) {
  return (
    <div className="flex gap-1.5">
      <span className="shrink-0 font-semibold text-ink-400">{label}:</span>
      <span
        className={arabic ? "font-arabic text-sm text-ink-700" : "text-ink-700"}
        dir={arabic ? "rtl" : "ltr"}
      >
        {value}
      </span>
    </div>
  );
}
