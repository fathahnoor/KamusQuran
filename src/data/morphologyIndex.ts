import type { WordEntry } from "../types";
import { buildWordEntries, type CompactWord } from "./wordBuilder";
import { BATCH_01 } from "./words/batch01";
import { BATCH_02 } from "./words/batch02";
import { BATCH_03 } from "./words/batch03";
import { BATCH_04 } from "./words/batch04";
import { BATCH_05 } from "./words/batch05";
import { BATCH_06 } from "./words/batch06";
import { stripDiacritics } from "../utils/arabic";

// Aggregate all batches and build full WordEntry objects.
const ALL_COMPACT: CompactWord[] = [
  ...BATCH_01,
  ...BATCH_02,
  ...BATCH_03,
  ...BATCH_04,
  ...BATCH_05,
  ...BATCH_06,
];

/**
 * The bundled high-frequency word index (~300 words per design.md).
 * Compact data is expanded into full WordEntry objects with auto-generated
 * nahwu/sharf notes via the wordBuilder.
 * Duplicates (same Arabic lemma with different IDs) are deduplicated,
 * keeping the entry with the best rank (highest frequency).
 */
export const HIGH_FREQ_WORDS: WordEntry[] = (() => {
  const all = buildWordEntries(ALL_COMPACT);
  const seen = new Map<string, WordEntry>();
  for (const w of all) {
    const key = stripDiacritics(w.arabic);
    const existing = seen.get(key);
    // Keep the entry with the best (lowest) rank/frequency.
    if (!existing || (w.rank ?? w.frequency) < (existing.rank ?? existing.frequency)) {
      seen.set(key, w);
    }
  }
  return [...seen.values()].sort((a, b) => (a.rank ?? a.frequency) - (b.rank ?? b.frequency));
})();

// --- Search indices (built once at module load) ---

const byArabic = new Map<string, WordEntry>();
const byArabicNoDiacritics = new Map<string, WordEntry>();
const byRoot = new Map<string, WordEntry[]>();
const byId = new Map<string, WordEntry>();

for (const w of HIGH_FREQ_WORDS) {
  byArabic.set(w.arabic, w);
  byArabicNoDiacritics.set(stripDiacritics(w.arabic), w);
  byId.set(w.id, w);
  const rootList = byRoot.get(w.root) ?? [];
  rootList.push(w);
  byRoot.set(w.root, rootList);
}

/** Exact Arabic lemma lookup. */
export function findByArabic(arabic: string): WordEntry | undefined {
  return byArabic.get(arabic) ?? byArabicNoDiacritics.get(stripDiacritics(arabic));
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
 * Get words sorted by frequency rank (or frequency count as fallback).
 * Used for browsing the word list.
 */
export function getWordsByFrequency(limit?: number): WordEntry[] {
  // HIGH_FREQ_WORDS is already sorted by rank in the IIFE above.
  return limit ? HIGH_FREQ_WORDS.slice(0, limit) : HIGH_FREQ_WORDS;
}

/**
 * Fuzzy search across Arabic surface form, lemma, root, and Indonesian meaning.
 * Returns ranked results (exact match first, then substring).
 */
export function searchWords(query: string, limit = 50): WordEntry[] {
  const q = query.trim();
  if (!q) return [];
  const qLower = q.toLowerCase();
  const results = new Set<WordEntry>();
  const ranked: { entry: WordEntry; score: number }[] = [];

  // 1. Exact Arabic match.
  const exact = findByArabic(q);
  if (exact) ranked.push({ entry: exact, score: 100 });

  // 2. Arabic substring (lemma or root contains query).
  const isArabic = /[\u0600-\u06FF]/.test(q);
  if (isArabic) {
    const qNoDiac = stripDiacritics(q);
    for (const w of HIGH_FREQ_WORDS) {
      if (w.arabic.includes(q) || w.lemma.includes(q) || w.root.includes(q)) {
        results.add(w);
        ranked.push({ entry: w, score: w.arabic === q ? 90 : 70 });
      } else {
        // Also try matching without diacritics.
        const wNoDiac = stripDiacritics(w.arabic);
        const wLemmaNoDiac = stripDiacritics(w.lemma);
        if (wNoDiac.includes(qNoDiac) || wLemmaNoDiac.includes(qNoDiac)) {
          results.add(w);
          ranked.push({ entry: w, score: 65 });
        }
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
