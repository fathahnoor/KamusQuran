// ============================================================
// Shared Arabic text utilities — used by both data layer and
// sentence analysis service to avoid circular imports.
// ============================================================

/** Strip Arabic diacritics (tashkil/harakat) for normalized matching. */
export function stripDiacritics(arabic: string): string {
  return arabic.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, "");
}

/** Check if a string contains Arabic characters. */
export function isArabicText(text: string): boolean {
  return /[\u0600-\u06FF]/.test(text);
}

/** Arabic punctuation and Quranic stop marks for tokenization. */
export const ARABIC_SPLIT_RE = /[\s\u060C\u061B\u061F\u06D4\u064B-\u065F\u0670\u06D6-\u06ED]+/u;

/** Tokenize an Arabic sentence into word tokens. */
export function tokenizeArabic(text: string): string[] {
  return text
    .split(ARABIC_SPLIT_RE)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}
