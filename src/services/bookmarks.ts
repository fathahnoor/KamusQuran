import type { Bookmark, BookmarkExport, WordEntry } from "../types";

const STORAGE_KEY = "kamus-quran:bookmarks:v1";

function readStore(): Bookmark[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Bookmark[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function writeStore(items: Bookmark[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    // Quota exceeded or storage disabled: surface to caller.
    throw new Error("Gagal menyimpan bookmark: penyimpanan browser penuh atau dinonaktifkan.");
  }
}

/** Get all bookmarks, newest first. */
export function getBookmarks(): Bookmark[] {
  return readStore().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/** Check if a word is bookmarked. */
export function isBookmarked(wordId: string): boolean {
  return readStore().some((b) => b.wordId === wordId);
}

/** Add a bookmark for a word entry. No-op if already bookmarked. */
export function addBookmark(entry: WordEntry, note?: string): void {
  const items = readStore();
  if (items.some((b) => b.wordId === entry.id)) return;
  const bookmark: Bookmark = {
    wordId: entry.id,
    arabic: entry.arabic,
    meaningId: entry.meaningId,
    root: entry.root,
    createdAt: new Date().toISOString(),
    note,
  };
  writeStore([bookmark, ...items]);
}

/** Remove a bookmark by word id. */
export function removeBookmark(wordId: string): void {
  writeStore(readStore().filter((b) => b.wordId !== wordId));
}

/** Toggle a bookmark; returns the new bookmarked state. */
export function toggleBookmark(entry: WordEntry): boolean {
  if (isBookmarked(entry.id)) {
    removeBookmark(entry.id);
    return false;
  }
  addBookmark(entry);
  return true;
}

/** Export bookmarks as a downloadable JSON file. */
export function exportBookmarks(): BookmarkExport {
  return {
    app: "kamus-quran",
    version: 1,
    exportedAt: new Date().toISOString(),
    bookmarks: getBookmarks(),
  };
}

/** Trigger a browser download of the bookmark JSON. */
export function downloadBookmarks(): void {
  const payload = exportBookmarks();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `kamus-quran-bookmark-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/** Import bookmarks from a JSON string (file content). Merges with existing. */
export function importBookmarks(jsonContent: string): { added: number; skipped: number } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonContent);
  } catch {
    throw new Error("File JSON tidak valid.");
  }

  const payload = parsed as Partial<BookmarkExport>;
  if (payload?.app !== "kamus-quran" || !Array.isArray(payload.bookmarks)) {
    throw new Error("File tidak cocok dengan format bookmark Kamus Quran.");
  }

  const existing = readStore();
  const existingIds = new Set(existing.map((b) => b.wordId));
  let added = 0;
  let skipped = 0;
  for (const b of payload.bookmarks) {
    if (!b?.wordId || !b?.arabic) {
      skipped++;
      continue;
    }
    if (existingIds.has(b.wordId)) {
      skipped++;
      continue;
    }
    existing.push({
      wordId: b.wordId,
      arabic: b.arabic,
      meaningId: b.meaningId ?? "",
      root: b.root ?? "",
      createdAt: b.createdAt ?? new Date().toISOString(),
      note: b.note,
    });
    added++;
  }
  writeStore(existing);
  return { added, skipped };
}
