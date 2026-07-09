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
import { BATCH_23 } from "./words/batch23";
import { BATCH_24 } from "./words/batch24";
import { BATCH_25 } from "./words/batch25";
import { BATCH_26 } from "./words/batch26";
import { BATCH_27 } from "./words/batch27";
import { BATCH_28 } from "./words/batch28";
import { BATCH_29 } from "./words/batch29";
import { BATCH_30 } from "./words/batch30";
import { BATCH_31 } from "./words/batch31";
import { BATCH_32 } from "./words/batch32";
import { BATCH_33 } from "./words/batch33";
import { BATCH_34 } from "./words/batch34";
import { BATCH_35 } from "./words/batch35";
import { BATCH_36 } from "./words/batch36";
import { BATCH_37 } from "./words/batch37";
import { BATCH_38 } from "./words/batch38";
import { BATCH_39 } from "./words/batch39";
import { BATCH_40 } from "./words/batch40";
import { BATCH_41 } from "./words/batch41";
import { BATCH_42 } from "./words/batch42";
import { BATCH_43 } from "./words/batch43";
import { BATCH_44 } from "./words/batch44";
import { BATCH_45 } from "./words/batch45";
import { BATCH_46 } from "./words/batch46";
import { BATCH_47 } from "./words/batch47";
import { BATCH_48 } from "./words/batch48";
import { BATCH_49 } from "./words/batch49";
import { BATCH_50 } from "./words/batch50";
import { BATCH_51 } from "./words/batch51";
import { BATCH_52 } from "./words/batch52";
import { BATCH_53 } from "./words/batch53";
import { BATCH_54 } from "./words/batch54";
import { BATCH_55 } from "./words/batch55";
import { BATCH_56 } from "./words/batch56";
import { BATCH_57 } from "./words/batch57";
import { BATCH_58 } from "./words/batch58";
import { BATCH_59 } from "./words/batch59";
import { BATCH_60 } from "./words/batch60";
import { BATCH_61 } from "./words/batch61";
import { BATCH_62 } from "./words/batch62";
import { BATCH_63 } from "./words/batch63";
import { BATCH_64 } from "./words/batch64";
import { BATCH_65 } from "./words/batch65";
import { BATCH_66 } from "./words/batch66";
import { BATCH_67 } from "./words/batch67";
import { BATCH_68 } from "./words/batch68";
import { BATCH_69 } from "./words/batch69";
import { BATCH_70 } from "./words/batch70";
import { BATCH_71 } from "./words/batch71";
import { BATCH_72 } from "./words/batch72";
import { BATCH_73 } from "./words/batch73";
import { BATCH_74 } from "./words/batch74";
import { BATCH_75 } from "./words/batch75";
import { BATCH_76 } from "./words/batch76";
import { BATCH_77 } from "./words/batch77";
import { BATCH_78 } from "./words/batch78";
import { BATCH_79 } from "./words/batch79";
import { BATCH_80 } from "./words/batch80";
import { BATCH_81 } from "./words/batch81";
import { BATCH_82 } from "./words/batch82";
import { stripDiacritics, normalizeAlef } from "../utils/arabic";

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
  ...BATCH_23,
  ...BATCH_24,
  ...BATCH_25,
  ...BATCH_26,
  ...BATCH_27,
  ...BATCH_28,
  ...BATCH_29,
  ...BATCH_30,
  ...BATCH_31,
  ...BATCH_32,
  ...BATCH_33,
  ...BATCH_34,
  ...BATCH_35,
  ...BATCH_36,
  ...BATCH_37,
  ...BATCH_38,
  ...BATCH_39,
  ...BATCH_40,
  ...BATCH_41,
  ...BATCH_42,
  ...BATCH_43,
  ...BATCH_44,
  ...BATCH_45,
  ...BATCH_46,
  ...BATCH_47,
  ...BATCH_48,
  ...BATCH_49,
  ...BATCH_50,
  ...BATCH_51,
  ...BATCH_52,
  ...BATCH_53,
  ...BATCH_54,
  ...BATCH_55,
  ...BATCH_56,
  ...BATCH_57,
  ...BATCH_58,
  ...BATCH_59,
  ...BATCH_60,
  ...BATCH_61,
  ...BATCH_62,
  ...BATCH_63,
  ...BATCH_64,
  ...BATCH_65,
  ...BATCH_66,
  ...BATCH_67,
  ...BATCH_68,
  ...BATCH_69,
  ...BATCH_70,
  ...BATCH_71,
  ...BATCH_72,
  ...BATCH_73,
  ...BATCH_74,
  ...BATCH_75,
  ...BATCH_76,
  ...BATCH_77,
  ...BATCH_78,
  ...BATCH_79,
  ...BATCH_80,
  ...BATCH_81,
  ...BATCH_82,
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
    const qNoDiac = normalizeAlef(stripDiacritics(q));
    for (const w of HIGH_FREQ_WORDS) {
      // Arabic substring — normalisasi alef + strip diacritics agar
      // input tanpa hamza (mis. "احد") tetap match Quranic "أَحَد",
      // dan tidak kalah oleh entry daily dgn root yg cocok (ahad2).
      const wNorm = normalizeAlef(stripDiacritics(w.arabic));
      const wLemmaNorm = normalizeAlef(stripDiacritics(w.lemma));
      const wRootNorm = normalizeAlef(w.root);
      if (wNorm.includes(qNoDiac) || wLemmaNorm.includes(qNoDiac) || wRootNorm.includes(qNoDiac)) {
        results.add(w);
        ranked.push({ entry: w, score: w.arabic === q ? 90 : 70 });
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
