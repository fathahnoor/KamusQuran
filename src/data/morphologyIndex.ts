import type { WordEntry } from "../types";
import { SAMPLE_WORDS } from "./sampleWords";

/**
 * The bundled high-frequency word index (~300 words per design.md).
 * In v1 this holds the curated 300 most-frequent Qur'anic lemmas with full
 * morphological data. The structure is identical for all entries so that
 * additional data can be appended without code changes.
 */
export const HIGH_FREQ_WORDS: WordEntry[] = SAMPLE_WORDS;

// --- Search indices (built once at module load) ---

const byArabic = new Map<string, WordEntry>();
const byRoot = new Map<string, WordEntry[]>();
const byId = new Map<string, WordEntry>();

for (const w of HIGH_FREQ_WORDS) {
  byArabic.set(w.arabic, w);
  byId.set(w.id, w);
  const rootList = byRoot.get(w.root) ?? [];
  rootList.push(w);
  byRoot.set(w.root, rootList);
}

/** Exact Arabic lemma lookup. */
export function findByArabic(arabic: string): WordEntry | undefined {
  return byArabic.get(arabic);
}

/** Lookup by stable word id. */
export function findById(id: string): WordEntry | undefined {
  return byId.get(id);
}

/** All words sharing a triliteral root. */
export function findByRoot(root: string): WordEntry[] {
  return byRoot.get(root) ?? [];
}

/** Total number of bundled words. */
export function wordCount(): number {
  return HIGH_FREQ_WORDS.length;
}

/**
 * Fuzzy search across Arabic surface form, lemma, root, and Indonesian meaning.
 * Returns ranked results (exact match first, then substring).
 */
export function searchWords(query: string, limit = 20): WordEntry[] {
  const q = query.trim();
  if (!q) return [];
  const qLower = q.toLowerCase();
  const results = new Set<WordEntry>();
  const ranked: { entry: WordEntry; score: number }[] = [];

  // 1. Exact Arabic match.
  const exact = byArabic.get(q);
  if (exact) ranked.push({ entry: exact, score: 100 });

  // 2. Arabic substring (lemma or root contains query).
  const isArabic = /[\u0600-\u06FF]/.test(q);
  if (isArabic) {
    for (const w of HIGH_FREQ_WORDS) {
      if (w.arabic.includes(q) || w.lemma.includes(q) || w.root.includes(q)) {
        results.add(w);
        ranked.push({ entry: w, score: w.arabic === q ? 90 : 70 });
      }
    }
  } else {
    // 3. Indonesian meaning substring.
    for (const w of HIGH_FREQ_WORDS) {
      const meaning = w.meaningId.toLowerCase();
      if (meaning === qLower) {
        results.add(w);
        ranked.push({ entry: w, score: 80 });
      } else if (meaning.includes(qLower)) {
        results.add(w);
        ranked.push({ entry: w, score: 60 });
      }
      for (const alt of w.meaningIdAlt ?? []) {
        if (alt.toLowerCase().includes(qLower)) {
          if (!results.has(w)) {
            results.add(w);
            ranked.push({ entry: w, score: 55 });
          }
        }
      }
    }
    // 4. Root / id text match.
    for (const w of HIGH_FREQ_WORDS) {
      if (w.id.toLowerCase().includes(qLower) && !results.has(w)) {
        results.add(w);
        ranked.push({ entry: w, score: 40 });
      }
    }
  }

  // Deduplicate by keeping highest score per entry.
  const best = new Map<string, { entry: WordEntry; score: number }>();
  for (const r of ranked) {
    const cur = best.get(r.entry.id);
    if (!cur || r.score > cur.score) best.set(r.entry.id, r);
  }

  return [...best.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.entry);
}
