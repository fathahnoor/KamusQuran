import type { SentenceToken } from "../types";

interface SentenceIrobTableProps {
  tokens: SentenceToken[];
}

/** Map irabStatus to a left-border color class. */
function irabBorderClass(status: string): string {
  if (status.includes("Marfu'")) return "border-l-4 border-l-emerald-400";
  if (status.includes("Manshub")) return "border-l-4 border-l-blue-400";
  if (status.includes("Majrur")) return "border-l-4 border-l-amber-400";
  if (status.includes("Majzum")) return "border-l-4 border-l-red-400";
  if (status.includes("Mabni")) return "border-l-4 border-l-ink-400";
  return "border-l-4 border-l-transparent";
}

/** Map irabStatus to a dot/badge color. */
function irabDotColor(status: string): string {
  if (status.includes("Marfu'")) return "bg-emerald-500";
  if (status.includes("Manshub")) return "bg-blue-500";
  if (status.includes("Majrur")) return "bg-amber-500";
  if (status.includes("Majzum")) return "bg-red-500";
  if (status.includes("Mabni")) return "bg-ink-500";
  return "bg-ink-300";
}

const IRAB_LEGEND: { label: string; color: string; dot: string }[] = [
  { label: "Marfu'", color: "border-emerald-400", dot: "bg-emerald-500" },
  { label: "Manshub", color: "border-blue-400", dot: "bg-blue-500" },
  { label: "Majrur", color: "border-amber-400", dot: "bg-amber-500" },
  { label: "Majzum", color: "border-red-400", dot: "bg-red-500" },
  { label: "Mabni", color: "border-ink-400", dot: "bg-ink-500" },
];

/**
 * SentenceIrobTable: full-sentence i'rob breakdown in tabular format.
 *
 * Static (non-interactive) table: each row shows the 6-column i'rob data
 * for one token. Click-to-expand was removed since the same per-word i'rob
 * info is already provided by the PerTokenIrobList section below.
 *
 * Color-coded rows by irabStatus (left border): green=Marfu', blue=Manshub,
 * amber=Majrur, red=Majzum, gray=Mabni.
 */
export function SentenceIrobTable({ tokens }: SentenceIrobTableProps) {
  const irabTokens = tokens.filter((t) => t.structuredIrab);
  if (irabTokens.length === 0) return null;

  const columns = ["#", "Kata", "Arti", "Jenis", "Kedudukan", "I'rob", "Tanda", "'Amil"] as const;

  return (
    <div className="space-y-3">
      {/* Section header */}
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-xs font-bold text-white shadow-sm shadow-accent-200">
            ج
          </div>
          <h3 className="text-sm font-bold text-ink-700">Tabel I&apos;rob Kalimat</h3>
        </div>

        {/* Color legend */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
          {IRAB_LEGEND.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-1 text-[10px] text-ink-500">
              <span className={`inline-block h-2 w-2 rounded-full ${item.dot}`} />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto rounded-xl border border-ink-200/60 shadow-sm md:block">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-accent-50/80 to-white">
              {columns.map((col, colIdx) => (
                <th
                  key={col}
                  className={`whitespace-nowrap px-2 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-accent-700 ${
                    colIdx === 0 ? "pl-3" : ""
                  } ${colIdx === columns.length - 1 ? "pr-3" : ""}`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {irabTokens.map((token, rowIdx) => {
              const s = token.structuredIrab!;
              const matched = token.matched;
              const borderClass = irabBorderClass(s.irabStatus);
              return (
                <tr key={token.index}>
                  <td colSpan={columns.length} className="p-0">
                    <div className={borderClass}>
                      <div
                        className={`flex w-full items-center text-left ${
                          rowIdx % 2 === 0 ? "bg-white" : "bg-ink-50/30"
                        } ${!matched ? "opacity-70" : ""}`}
                      >
                        <div className="whitespace-nowrap px-2 py-2.5 first:pl-3">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink-100 text-[10px] font-bold text-ink-400">
                            {rowIdx + 1}
                          </span>
                        </div>
                        <div
                          className={`whitespace-nowrap px-2 py-2.5 font-arabic text-base ${
                            matched ? "text-ink-900" : "text-ink-600"
                          }`}
                          dir="rtl"
                        >
                          {token.surface}
                        </div>
                        <div className="whitespace-nowrap px-2 py-2.5 text-ink-600">
                          {token.meaningId || "–"}
                        </div>
                        <div className="whitespace-nowrap px-2 py-2.5 text-ink-700">
                          {s.jenis}
                        </div>
                        <div className="whitespace-nowrap px-2 py-2.5 font-medium text-ink-800">
                          {s.kedudukan}
                        </div>
                        <div className="whitespace-nowrap px-2 py-2.5">
                          <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-2 py-0.5 text-[10px] font-semibold text-accent-700">
                            <span className={`inline-block h-1.5 w-1.5 rounded-full ${irabDotColor(s.irabStatus)}`} />
                            {s.irabStatus}
                          </span>
                        </div>
                        <div className="whitespace-nowrap px-2 py-2.5">
                          <code className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-[11px] text-ink-700">
                            {s.tanda}
                          </code>
                        </div>
                        <div className="flex-1 whitespace-nowrap px-2 py-2.5 text-[11px] text-ink-600 last:pr-3">
                          {s.amil}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile card layout */}
      <div className="space-y-3 md:hidden">
        {irabTokens.map((token, idx) => {
          const s = token.structuredIrab!;
          const matched = token.matched;
          const borderClass = irabBorderClass(s.irabStatus);
          return (
            <div
              key={token.index}
              className={`rounded-xl border text-left ${borderClass} ${
                matched
                  ? "border-ink-200/60 bg-white/90"
                  : "border-dashed border-ink-300/60 bg-ink-50/40"
              }`}
            >
              <div className="p-3">
                {/* Token number + Arabic word header */}
                <div className="mb-2.5 flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-100 text-[10px] font-bold text-ink-400">
                    {idx + 1}
                  </span>
                  <span className="font-arabic text-lg font-medium text-ink-900" dir="rtl">
                    {token.surface}
                  </span>
                  {token.meaningId && (
                    <span className="text-xs text-ink-400">· {token.meaningId}</span>
                  )}
                  {!matched && (
                    <span className="ml-auto shrink-0 rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-bold text-ink-500">
                      Tebakan
                    </span>
                  )}
                  <span className={`ml-auto inline-flex items-center gap-1 rounded-full bg-accent-50 px-2 py-0.5 text-[10px] font-semibold text-accent-700 ${!matched ? "ml-0" : ""}`}>
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${irabDotColor(s.irabStatus)}`} />
                    {s.irabStatus}
                  </span>
                </div>

                {/* I'rab detail grid */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                  <MobileField label="Jenis" value={s.jenis} />
                  <MobileField label="Kedudukan" value={s.kedudukan} />
                  <MobileField label="Tanda" value={s.tanda} code />
                  <MobileField label="'Amil" value={s.amil} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Color legend (mobile) */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 md:hidden">
        {IRAB_LEGEND.map((item) => (
          <span key={item.label} className="inline-flex items-center gap-1 text-[10px] text-ink-500">
            <span className={`inline-block h-2 w-2 rounded-full ${item.dot}`} />
            {item.label}
          </span>
        ))}
      </div>

      {/* Inductive conclusion (Nahwu al-Wadhih style), combined sentence-level summary */}
      <div className="rounded-xl border-l-4 border-accent-400 bg-gradient-to-r from-accent-50/60 to-white/80 p-3.5 sm:p-4">
        <p className="flex items-start gap-2 text-xs leading-relaxed text-ink-600 sm:text-sm">
          <span className="mt-0.5 shrink-0 rounded bg-accent-100 px-1.5 py-0.5 font-arabic text-xs text-accent-700">
            استنتاج
          </span>
          <span>
            Kalimat ini terdiri dari {irabTokens.length} kata:{" "}
            {irabTokens.map((t, i) => {
              const s = t.structuredIrab!;
              return (
                <span key={t.index}>
                  <span className="font-arabic font-medium">{t.surface}</span>{" "}
                  ({s.jenis}, {s.kedudukan}, {s.irabStatus}{" "}
                  dengan tanda {s.tanda})
                  {i < irabTokens.length - 1 ? ", " : "."}
                </span>
              );
            })}
          </span>
        </p>
      </div>
    </div>
  );
}

function MobileField({
  label,
  value,
  badge,
  code,
}: {
  label: string;
  value: string;
  badge?: boolean;
  code?: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <span className="shrink-0 font-semibold text-ink-400">{label}:</span>
      {badge ? (
        <span className="inline-flex items-center rounded-full bg-accent-50 px-2 py-0.5 text-[10px] font-semibold text-accent-700">
          {value}
        </span>
      ) : code ? (
        <code className="rounded bg-ink-100 px-1 py-0.5 font-mono text-[10px] text-ink-700">
          {value}
        </code>
      ) : (
        <span className="text-ink-700">{value}</span>
      )}
    </div>
  );
}
