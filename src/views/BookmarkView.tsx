import { useState, useEffect, useCallback, useRef } from "react";
import type { Bookmark } from "../types";
import { getBookmarks, removeBookmark, downloadBookmarks, importBookmarks } from "../services/bookmarks";

interface BookmarkViewProps {
  onNavigateToKata: () => void;
}

export function BookmarkView({ onNavigateToKata }: BookmarkViewProps) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const refresh = useCallback(() => setBookmarks(getBookmarks()), []);
  useEffect(() => refresh(), [refresh]);

  const handleDelete = useCallback(
    (wordId: string) => {
      removeBookmark(wordId);
      refresh();
    },
    [refresh]
  );

  const handleExport = useCallback(() => {
    try {
      downloadBookmarks();
      setMessage({ type: "success", text: "Bookmark berhasil diekspor sebagai JSON." });
    } catch {
      setMessage({ type: "error", text: "Gagal mengekspor bookmark." });
    }
  }, []);

  const handleImportClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const content = String(reader.result);
          const result = importBookmarks(content);
          refresh();
          setMessage({
            type: "success",
            text: `Impor berhasil: ${result.added} ditambahkan, ${result.skipped} dilewati.`,
          });
        } catch (err) {
          setMessage({ type: "error", text: err instanceof Error ? err.message : "Gagal mengimpor." });
        }
      };
      reader.onerror = () => setMessage({ type: "error", text: "Gagal membaca file." });
      reader.readAsText(file);
      e.target.value = "";
    },
    [refresh]
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="rounded-2xl border border-ink-200/60 bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-xl font-bold text-ink-900 sm:text-2xl">
              <svg className="h-6 w-6 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              Bookmark
            </h1>
            <p className="mt-1.5 text-sm text-ink-500">
              Kumpulan kata tersimpan. Data disimpan lokal di browser, tidak ada login.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleExport}
              disabled={bookmarks.length === 0}
              className="flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3.5 py-2 text-sm font-medium text-ink-600 transition-all hover:bg-ink-50 hover:shadow-sm disabled:opacity-40"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export
            </button>
            <button
              onClick={handleImportClick}
              className="flex items-center gap-1.5 rounded-xl border border-ink-200 bg-white px-3.5 py-2 text-sm font-medium text-ink-600 transition-all hover:bg-ink-50 hover:shadow-sm"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Import
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json,.json"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>
        {message && (
          <div
            className={`mt-4 flex items-center gap-2 rounded-xl p-3 text-sm ${
              message.type === "success"
                ? "bg-accent-50 text-accent-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {message.type === "success" ? (
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            ) : (
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            )}
            {message.text}
          </div>
        )}
      </div>

      {/* Bookmark list */}
      {bookmarks.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-ink-300/60 bg-white/40 p-6 text-center sm:p-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50">
            <svg className="h-7 w-7 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <p className="font-medium text-ink-600">Belum ada bookmark.</p>
          <button
            onClick={onNavigateToKata}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent-500/30 transition-all hover:shadow-md active:scale-[0.98]"
          >
            Cari kata untuk dibookmark
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="space-y-2.5">
          <p className="flex items-center gap-1.5 text-sm text-ink-500">
            <span className="font-semibold text-ink-700">{bookmarks.length}</span> kata tersimpan
          </p>
          {bookmarks.map((b) => (
            <div
              key={b.wordId}
              className="group flex items-center justify-between rounded-xl border border-ink-200/60 bg-white/90 p-3.5 shadow-sm transition-all hover:shadow-md sm:p-4"
            >
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <span className="font-arabic-display text-2xl font-bold text-accent-700 sm:text-3xl" dir="rtl">
                  {b.arabic}
                </span>
                <div className="min-w-0">
                  <div className="truncate font-medium text-ink-800">{b.meaningId}</div>
                  <div className="mt-0.5 flex items-center gap-2 text-xs text-ink-400">
                    <span className="font-arabic text-accent-600/70">{b.root}</span>
                    <span className="text-ink-300">·</span>
                    <span>{new Date(b.createdAt).toLocaleDateString("id-ID")}</span>
                  </div>
                  {b.note && <div className="mt-1 text-xs italic text-ink-500">{b.note}</div>}
                </div>
              </div>
              <button
                onClick={() => handleDelete(b.wordId)}
                className="rounded-lg p-2 text-ink-300 transition-all hover:bg-red-50 hover:text-red-500"
                aria-label="Hapus bookmark"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
