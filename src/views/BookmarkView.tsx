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
      // Reset input so the same file can be re-selected.
      e.target.value = "";
    },
    [refresh]
  );

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-ink-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-ink-900">Bookmark</h1>
            <p className="mt-1 text-sm text-ink-500">
              Kumpulan kata tersimpan. Data disimpan lokal di browser — tidak ada login.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              disabled={bookmarks.length === 0}
              className="rounded-md border border-ink-300 px-3 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-100 disabled:opacity-50"
            >
              Export JSON
            </button>
            <button
              onClick={handleImportClick}
              className="rounded-md border border-ink-300 px-3 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-100"
            >
              Import JSON
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
            className={`mt-3 rounded-md p-2 text-sm ${
              message.type === "success"
                ? "bg-accent-50 text-accent-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}
      </div>

      {/* Bookmark list */}
      {bookmarks.length === 0 ? (
        <div className="rounded-lg border border-dashed border-ink-300 bg-white/50 p-8 text-center">
          <p className="text-ink-500">Belum ada bookmark.</p>
          <button
            onClick={onNavigateToKata}
            className="mt-3 rounded-md bg-accent-600 px-4 py-2 text-sm font-medium text-ink-50 hover:bg-accent-700"
          >
            Cari kata untuk dibookmark
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-sm text-ink-500">{bookmarks.length} kata tersimpan</p>
          {bookmarks.map((b) => (
            <div
              key={b.wordId}
              className="flex items-center justify-between rounded-lg border border-ink-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="font-arabic-display text-3xl font-bold text-accent-700" dir="rtl">
                  {b.arabic}
                </span>
                <div>
                  <div className="font-medium text-ink-800">{b.meaningId}</div>
                  <div className="text-xs text-ink-400">
                    Akar: {b.root} · Disimpan: {new Date(b.createdAt).toLocaleDateString("id-ID")}
                  </div>
                  {b.note && <div className="mt-1 text-xs italic text-ink-500">{b.note}</div>}
                </div>
              </div>
              <button
                onClick={() => handleDelete(b.wordId)}
                className="rounded-md p-2 text-ink-400 transition-colors hover:bg-red-50 hover:text-red-600"
                aria-label="Hapus bookmark"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
