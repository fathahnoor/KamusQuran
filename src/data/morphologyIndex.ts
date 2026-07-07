import type { WordEntry } from "../types";
import { buildWordEntries, type CompactWord } from "./wordBuilder";
import { BATCH_01 } from "./words/batch01";
import { BATCH_02 } from "./words/batch02";
import { BATCH_03 } from "./words/batch03";
import { BATCH_04 } from "./words/batch04";
import { BATCH_05 } from "./words/batch05";
import { BATCH_06 } from "./words/batch06";
import { BATCH_07 } from "./words/batch07";
import { BATCH_08 } from "./words/batch08";
import { BATCH_09 } from "./words/batch09";
import { BATCH_10 } from "./words/batch10";
import { BATCH_11 } from "./words/batch11";
import { BATCH_12 } from "./words/batch12";
import { BATCH_13 } from "./words/batch13";
import { BATCH_14 } from "./words/batch14";
import { BATCH_15 } from "./words/batch15";
import { BATCH_16 } from "./words/batch16";
import { BATCH_17 } from "./words/batch17";
import { BATCH_18 } from "./words/batch18";
import { BATCH_19 } from "./words/batch19";
import { BATCH_20 } from "./words/batch20";
import { BATCH_21 } from "./words/batch21";
import { BATCH_22 } from "./words/batch22";
import { stripDiacritics } from "../utils/arabic";

// Aggregate all batches and build full WordEntry objects.
const ALL_COMPACT: CompactWord[] = [
  ...BATCH_01,
  ...BATCH_02,
  ...BATCH_03,
  ...BATCH_04,
  ...BATCH_05,
  ...BATCH_06,
  ...BATCH_07,
  ...BATCH_08,
  ...BATCH_09,
  ...BATCH_10,
  ...BATCH_11,
  ...BATCH_12,
  ...BATCH_13,
  ...BATCH_14,
  ...BATCH_15,
  ...BATCH_16,
  ...BATCH_17,
  ...BATCH_18,
  ...BATCH_19,
  ...BATCH_20,
  ...BATCH_21,
  ...BATCH_22,
];

/**
 * The bundled high-frequency word index (~1000 words per design.md).
 * Compact data is expanded into full WordEntry objects with auto-generated
 * nahwu/sharf notes via the wordBuilder.
 * Duplicates (same Arabic lemma with different IDs) are deduplicated,
 * keeping the entry with the best rank (highest frequency).
 */
export const HIGH_FREQ_WORDS: WordEntry[] = (() => {
  const all = buildWordEntries(ALL_COMPACT);
  const seen = new Map<string, WordEntry>();
  for (const w of all) {
    // Deduplicate by full Arabic lemma (dengan harakat) agar homograf
    // seperti قُلْ (katakanlah) dan قَلَّ (sedikit, berkurang) tidak
    // saling menimpa saat di-strip diacritics.
    const key = w.arabic;
    const existing = seen.get(key);
    // Keep the entry with the best (lowest) rank/frequency.
    if (!existing || (w.rank ?? w.frequency) < (existing.rank ?? existing.frequency)) {
      seen.set(key, w);
    }
  }
  // Safety net: also ensure no duplicate IDs remain (which would cause
  // React key collisions). If two entries share an ID, keep the one with
  // the better rank and skip the other.
  const byId = new Map<string, WordEntry>();
  for (const w of seen.values()) {
    const existing = byId.get(w.id);
    if (existing) {
      // Duplicate ID detected: keep the best rank, warn about the drop.
      if ((w.rank ?? w.frequency) < (existing.rank ?? existing.frequency)) {
        console.warn(`Duplicate word id "${w.id}": keeping rank ${w.rank ?? w.frequency}, dropping rank ${existing.rank ?? existing.frequency}`);
        byId.set(w.id, w);
      } else {
        console.warn(`Duplicate word id "${w.id}": keeping rank ${existing.rank ?? existing.frequency}, dropping rank ${w.rank ?? w.frequency}`);
      }
    } else {
      byId.set(w.id, w);
    }
  }
  return [...byId.values()].sort((a, b) => (a.rank ?? a.frequency) - (b.rank ?? b.frequency));
})();

// --- Pre-sorted indices (computed ONCE at module load) ---
// These eliminate ALL runtime sorting. The browser just swaps which
// frozen array to render: no .sort() call ever happens in the React
// component, so there is no possibility of ordering degradation.

/** Total-order id comparator: guarantees no two items compare equal. */
function idCmp(a: WordEntry, b: WordEntry): number {
  return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
}

/** Words sorted by frequency descending, then rank, then id (total order). */
export const WORDS_BY_FREQ: readonly WordEntry[] = Object.freeze(
  [...HIGH_FREQ_WORDS].sort((a, b) => {
    const d = b.frequency - a.frequency;
    if (d !== 0) return d;
    const r = (a.rank ?? 0) - (b.rank ?? 0);
    if (r !== 0) return r;
    return idCmp(a, b);
  })
);

/** Words sorted by Indonesian meaning (case-insensitive), then id. */
export const WORDS_BY_INDO: readonly WordEntry[] = Object.freeze(
  [...HIGH_FREQ_WORDS].sort((a, b) => {
    const ai = a.meaningId.toLowerCase();
    const bi = b.meaningId.toLowerCase();
    if (ai !== bi) return ai < bi ? -1 : 1;
    return idCmp(a, b);
  })
);

/** Words sorted by Arabic (diacritics stripped), then id. */
export const WORDS_BY_ARABIC: readonly WordEntry[] = Object.freeze(
  [...HIGH_FREQ_WORDS].sort((a, b) => {
    const aa = stripDiacritics(a.arabic);
    const bb = stripDiacritics(b.arabic);
    if (aa !== bb) return aa < bb ? -1 : 1;
    return idCmp(a, b);
  })
);

// --- Search indices (built once at module load) ---

const byArabic = new Map<string, WordEntry>();
const byArabicNoDiacritics = new Map<string, WordEntry>();
const byRoot = new Map<string, WordEntry[]>();
const byId = new Map<string, WordEntry>();

for (const w of HIGH_FREQ_WORDS) {
  byArabic.set(w.arabic, w);
  // Keep the entry with the best (lowest) rank per stripped key,
  // NOT last-wins. This ensures homograf seperti قُلْ (rank 51)
  // dan قَلَّ (rank 614) tetap mendapat entry yang benar saat
  // dicari tanpa harakat.
  const strippedKey = stripDiacritics(w.arabic);
  const existing = byArabicNoDiacritics.get(strippedKey);
  if (!existing || (w.rank ?? w.frequency) < (existing.rank ?? existing.frequency)) {
    byArabicNoDiacritics.set(strippedKey, w);
  }
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
 * Returns a mutable copy so callers can't accidentally mutate the frozen array.
 */
export function getWordsByFrequency(limit?: number): WordEntry[] {
  return limit ? WORDS_BY_FREQ.slice(0, limit) : [...WORDS_BY_FREQ];
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
    // 3. Indonesian meaning matching: word-level to avoid false positives.
    // Split meaning into individual words and match against query words.
    // '/' is included as a delimiter so 'ghayah/ibtida' splits into separate words.
    const SPLIT_RE = /[\s,;·()/]+/;
    const queryWords = qLower.split(/\s+/).filter(Boolean);
    for (const w of HIGH_FREQ_WORDS) {
      const meaning = w.meaningId.toLowerCase();
      // Exact full-meaning match.
      if (meaning === qLower) {
        results.add(w);
        ranked.push({ entry: w, score: 80 });
        continue;
      }
      // Word-level match: query must match a whole word in the meaning.
      const meaningWords = meaning.split(SPLIT_RE).filter(Boolean);
      let bestAltScore = 0;
      for (const qw of queryWords) {
        // Exact word match (highest score for word-level).
        // Also match very short queries (<=3 chars) only on exact word match
        // to prevent false positives like 'ayah' matching 'ghayah'.
        if (meaningWords.includes(qw)) {
          if (bestAltScore < 70) {
            results.add(w);
            bestAltScore = Math.max(bestAltScore, 70);
          }
          continue;
        }
        // Word starts-with match (for inflected forms like "beriman" → "iman").
        // Requires the longer word to be at least 3 chars longer than the
        // shorter one, e.g. "ajar"→"mengajar" (diff=5) OK, "saya"→"sayang" (diff=2) blocked.
        for (const mw of meaningWords) {
          if (mw.startsWith(qw) && qw.length >= 4 && mw.length - qw.length >= 3) {
            if (bestAltScore < 55) {
              results.add(w);
              bestAltScore = Math.max(bestAltScore, 55);
            }
          } else if (qw.startsWith(mw) && mw.length >= 4 && qw.length - mw.length >= 3) {
            if (bestAltScore < 55) {
              results.add(w);
              bestAltScore = Math.max(bestAltScore, 55);
            }
          }
          // Within-word substring fallback removed: it caused false positives
          // like 'ayah' matching 'ghayah'. startsWith handles most inflected forms.
        }
      }
      if (bestAltScore > 0) {
        ranked.push({ entry: w, score: bestAltScore });
      }
      // Check alternative meanings.
      for (const alt of w.meaningIdAlt ?? []) {
        const altLower = alt.toLowerCase();
        const altWords = altLower.split(SPLIT_RE).filter(Boolean);
        for (const qw of queryWords) {
          if (altWords.includes(qw) || altLower === qLower) {
            if (!results.has(w)) {
              results.add(w);
              ranked.push({ entry: w, score: 50 });
            }
          }
        }
      }
    }
    // 4. Root / id text match.
    for (const w of HIGH_FREQ_WORDS) {
      if (w.id.toLowerCase() === qLower) {
        if (!results.has(w)) {
          results.add(w);
          ranked.push({ entry: w, score: 45 });
        }
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
