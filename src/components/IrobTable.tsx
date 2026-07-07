import type { StructuredIrab } from "../types";

interface IrobTableProps {
  irab: StructuredIrab;
}

type RowVariant = "arabic" | "badge" | "code" | "default";

interface IrabRow {
  label: string;
  value: string;
  variant: RowVariant;
}

/**
 * IrobTable — structured i'rab table.
 *
 * Columns: Kata → Jenis → Kedudukan → I'rob → Tanda → 'Amil
 *
 * Responsive:
 * - Desktop (sm+): horizontal table with sticky header
 * - Mobile (<sm): card-based layout with label-value pairs
 *
 * Includes inductive conclusion (Nahwu al-Wadhih style) at the bottom.
 * Both desktop and mobile views are driven from a single `rows` array.
 */
export function IrobTable({ irab }: IrobTableProps) {
  const rows: IrabRow[] = [
    { label: "Kata", value: irab.kata, variant: "arabic" },
    { label: "Jenis", value: irab.jenis, variant: "default" },
    { label: "Kedudukan", value: irab.kedudukan, variant: "default" },
    { label: "I'rob", value: irab.irabStatus, variant: "badge" },
    { label: "Tanda", value: irab.tanda, variant: "code" },
    { label: "'Amil / Sebab", value: irab.amil, variant: "default" },
  ];

  const renderValue = (row: IrabRow, isDesktop: boolean) => {
    switch (row.variant) {
      case "arabic":
        return (
          <span className="font-arabic text-base text-ink-900" dir="rtl">
            {row.value}
          </span>
        );
      case "badge":
        return (
          <span className="inline-flex items-center rounded-full bg-accent-50 px-2 py-0.5 text-xs font-semibold text-accent-700">
            {row.value}
          </span>
        );
      case "code":
        return (
          <code className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-xs text-ink-700">
            {row.value}
          </code>
        );
      default:
        return (
          <span className={isDesktop ? "" : "font-medium text-ink-700"}>
            {row.value}
          </span>
        );
    }
  };

  return (
    <div className="space-y-3">
      {/* Section header */}
      <div className="flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-xs font-bold text-white shadow-sm shadow-accent-200">
          إ
        </div>          <h4 className="text-sm font-bold text-ink-700">Tabel I&apos;rob</h4>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-xl border border-ink-200/60 shadow-sm sm:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-accent-50/80 to-white">
              {rows.map((r) => (
                <th
                  key={r.label}
                  className="px-3 py-2.5 text-left text-xs font-bold uppercase tracking-wider text-accent-700 first:pl-4 last:pr-4"
                >
                  {r.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white transition-colors hover:bg-accent-50/30">
              {rows.map((r) => (
                <td
                  key={r.label}
                  className="px-3 py-3 text-ink-700 first:pl-4 last:pr-4"
                >
                  {renderValue(r, true)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile card layout */}
      <div className="space-y-2 sm:hidden">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between rounded-xl border border-ink-200/60 bg-white/90 p-3 shadow-sm"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-400">
              {row.label}
            </span>
            <span className="text-sm">{renderValue(row, false)}</span>
          </div>
        ))}
      </div>

      {/* Inductive conclusion (Nahwu al-Wadhih style) */}
      {irab.penjelasan && (
        <div className="rounded-xl border-l-4 border-accent-400 bg-gradient-to-r from-accent-50/60 to-white/80 p-3.5 sm:p-4">
          <p className="flex items-start gap-2 text-xs leading-relaxed text-ink-600 sm:text-sm">
            <span className="mt-0.5 shrink-0 rounded bg-accent-100 px-1.5 py-0.5 font-arabic text-xs text-accent-700">
              استنتاج
            </span>
            <span>{irab.penjelasan}</span>
          </p>
        </div>
      )}
    </div>
  );
}
