import type { SentenceAnalysis, SentenceToken, SentenceObservation, MorphoFeatures, PosMajor } from "../types";
import { findByArabic, searchWords, HIGH_FREQ_WORDS } from "../data/morphologyIndex";

// --- Tokenization -------------------------------------------

/** Arabic punctuation and Quranic stop marks to split on. */
const AR_SPLIT_RE = /[\s\u060C\u061B\u061F\u06D4\u064B-\u065F\u0670\u06D6-\u06ED]+/u;

/** Detect whether input text is Arabic or Indonesian. */
export function detectLanguage(input: string): "ar" | "id" {
  const arabicChars = (input.match(/[\u0600-\u06FF]/g) ?? []).length;
  const latinChars = (input.match(/[a-zA-Z]/g) ?? []).length;
  return arabicChars > latinChars ? "ar" : "id";
}

/** Tokenize an Arabic sentence into word tokens, stripping diacritics for matching. */
export function tokenizeArabic(text: string): string[] {
  return text
    .split(AR_SPLIT_RE)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

/** Strip Arabic diacritics (tashkil) for normalized matching. */
export function stripDiacritics(arabic: string): string {
  return arabic.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, "");
}

// --- Matching ------------------------------------------------

/** Normalize an Arabic token for lookup (strip diacritics, remove leading waw). */
function normalizeForMatch(token: string): string {
  const bare = stripDiacritics(token);
  // Step 1: Remove conjunction prefixes (waw, fa) and definite article (al).
  const stripped = bare
    .replace(/^(و|ف)/, "")
    .replace(/^(ال)/, "")
    .replace(/[ةه]$/, "");
  // Step 2: Try removing attached prepositions, but only if the remaining
  // word is still long enough (>=3 chars) to avoid mangling words that
  // simply start with ب/ل/ك (e.g. بيت, كتاب, لكن).
  const withPrep = stripped.replace(/^(ب|ل|ك|من|الى|على|في|عن|مع|عند)/, "");
  return withPrep.length >= 3 ? withPrep : stripped || bare;
}

/** Attempt to find a matching word entry for an Arabic token. */
function matchArabicToken(token: string): { wordId?: string; lemma?: string; root?: string; meaningId?: string; posMajor?: PosMajor; morpho?: MorphoFeatures } {
  // 1. Exact match.
  const exact = findByArabic(token) ?? findByArabic(stripDiacritics(token));
  if (exact) {
    return { wordId: exact.id, lemma: exact.lemma, root: exact.root, meaningId: exact.meaningId, posMajor: exact.pos, morpho: exact.morpho };
  }
  // 2. Normalized match (strip prefixes).
  const normalized = normalizeForMatch(token);
  const normalizedMatch = findByArabic(normalized);
  if (normalizedMatch) {
    return { wordId: normalizedMatch.id, lemma: normalizedMatch.lemma, root: normalizedMatch.root, meaningId: normalizedMatch.meaningId, posMajor: normalizedMatch.pos, morpho: normalizedMatch.morpho };
  }
  // 3. Search within corpus for substring/partial.
  const searchResults = searchWords(token, 1);
  if (searchResults.length > 0) {
    const w = searchResults[0]!;
    return { wordId: w.id, lemma: w.lemma, root: w.root, meaningId: w.meaningId, posMajor: w.pos, morpho: w.morpho };
  }
  return {};
}

// --- Indonesian sentence handling ---------------------------

/** Map Indonesian words to Arabic equivalents via the corpus. */
function analyzeIndonesianSentence(input: string): SentenceAnalysis {
  const tokens = input.split(/\s+/).filter(Boolean);
  const sentenceTokens: SentenceToken[] = tokens.map((token, index) => {
    const matches = searchWords(token, 1);
    if (matches.length > 0) {
      const w = matches[0]!;
      return {
        index,
        surface: token,
        wordId: w.id,
        lemma: w.arabic,
        root: w.root,
        meaningId: w.meaningId,
        posMajor: w.pos,
        morpho: w.morpho,
        nahwuNote: w.nahwuNote,
        sharfNote: w.sharfNote,
        matched: true,
      };
    }
    return {
      index,
      surface: token,
      matched: false,
    };
  });

  const matchedCount = sentenceTokens.filter((t) => t.matched).length;
  const observations: SentenceObservation[] = [];
  if (matchedCount === 0) {
    observations.push({
      summary: "Tidak ada kata yang cocok dengan kosakatab Quran. Coba gunakan kata Arab atau terjemahan yang lebih spesifik.",
      notes: ["Masukkan kalimat Arab akan memberikan analisis morfologi yang lebih akurat."],
    });
  } else {
    observations.push({
      summary: `${matchedCount} dari ${tokens.length} kata berhasil dipetakan ke entri kosakatab Quran.`,
      notes: ["Untuk analisis nahwu tingkat kalimat (dependency graph), masukkan kalimat dalam bahasa Arab."],
    });
  }

  return {
    input,
    inputLang: "id",
    isQuranicAyah: false,
    tokens: sentenceTokens,
    observations,
  };
}

// --- Arabic sentence analysis (hybrid) ----------------------

/**
 * Analyze an Arabic sentence: tokenize, match each token against the corpus,
 * and produce a per-token morphological breakdown.
 * This is the hybrid approach (design.md §7.1): corpus-matched tokens get
 * full morphology; unmatched tokens get a best-effort POS estimate.
 */
function analyzeArabicSentence(input: string): SentenceAnalysis {
  const rawTokens = tokenizeArabic(input);
  const tokens: SentenceToken[] = rawTokens.map((token, index) => {
    const match = matchArabicToken(token);
    if (match.wordId) {
      return {
        index,
        surface: token,
        wordId: match.wordId,
        lemma: match.lemma,
        root: match.root,
        meaningId: match.meaningId,
        posMajor: match.posMajor,
        morpho: match.morpho,
        matched: true,
      };
    }
    // Unmatched: best-effort POS classification by heuristic.
    return {
      index,
      surface: token,
      posMajor: guessPosByHeuristic(token),
      matched: false,
    };
  });

  // Sentence-level observations.
  const observations = buildSentenceObservations(tokens, input);
  // Check if input matches a known Qur'anic ayah (simplified: check token count + first token).
  const isQuranic = checkIfQuranicAyah(input, tokens);

  return {
    input,
    inputLang: "ar",
    isQuranicAyah: isQuranic,
    tokens,
    observations,
  };
}

/** Heuristic POS guess for unmatched Arabic tokens. */
function guessPosByHeuristic(token: string): PosMajor {
  const bare = stripDiacritics(token);
  // Common particles.
  const particles = ["من", "في", "على", "إلى", "عن", "مع", "ثم", "و", "ف", "ب", "ل", "إن", "أن", "لا", "ما", "لم", "لن", "قد", "كان", "هو", "هي", "هم"];
  if (particles.includes(bare)) return "particle";
  // Definite article.
  if (bare.startsWith("ال")) return "noun";
  // Ends with tanwin-like or is short → likely particle.
  if (bare.length <= 2) return "particle";
  return "noun";
}

/** Build sentence-level grammatical observations (nahwu). */
function buildSentenceObservations(tokens: SentenceToken[], _input: string): SentenceObservation[] {
  const observations: SentenceObservation[] = [];
  const posTags = tokens.map((t) => t.posMajor ?? "unknown");
  const verbCount = posTags.filter((p) => p === "verb").length;
  const nounCount = posTags.filter((p) => p === "noun" || p === "proper_noun" || p === "adjective").length;

  // Determine sentence type: jumlah fi'liyyah vs ismiyyah.
  if (verbCount > 0 && tokens[0]?.posMajor === "verb") {
    observations.push({
      sentenceType: "jumlah fi'liyyah (kalimat verbal)",
      summary: "Kalimat dimulai dengan fi'il (kata kerja) — jumlah fi'liyyah.",
      notes: ["Unsur: fi'il + fa'il (pelaku) + maf'ul (objek) bila ada."],
    });
  } else if (nounCount > 0 && tokens[0]?.posMajor !== "verb") {
    observations.push({
      sentenceType: "jumlah ismiyyah (kalimat nominal)",
      summary: "Kalimat dimulai dengan isim — jumlah ismiyyah.",
      notes: ["Unsur: mubtada' (subjek) + khabar (predikat)."],
    });
  }

  // Detect idafah (construct state) — two consecutive nouns where first is mudhaf.
  for (let i = 0; i < tokens.length - 1; i++) {
    const cur = tokens[i];
    const next = tokens[i + 1];
    if (next && cur?.matched && next?.matched && (cur.posMajor === "noun" || cur.posMajor === "proper_noun") && (next.posMajor === "noun" || next.posMajor === "proper_noun")) {
      observations.push({
        summary: `Terdapat idafah (sandangan): "${cur.lemma ?? cur.surface}" → "${next.lemma ?? next.surface}".`,
        notes: [`${cur.surface} sebagai mudhaf, ${next.surface} sebagai mudhaf ilayh (majzur).`],
      });
    }
  }

  // Note unmatched tokens.
  const unmatched = tokens.filter((t) => !t.matched);
  if (unmatched.length > 0) {
    observations.push({
      summary: `${unmatched.length} kata tidak ditemukan dalam kosakatab Quran — ditampilkan dengan tebakan POS berdasarkan heuristik.`,
      notes: unmatched.map((t) => `"${t.surface}" → diperkirakan: ${t.posMajor ?? "tidak diketahui"}`),
    });
  }

  if (observations.length === 0) {
    observations.push({
      summary: "Tidak ada observasi struktural khusus terdeteksi.",
      notes: [],
    });
  }

  return observations;
}

/** Check whether input corresponds to a known Qur'anic ayah (simplified heuristic). */
function checkIfQuranicAyah(input: string, tokens: SentenceToken[]): boolean {
  const bare = stripDiacritics(input).replace(/\s+/g, " ").trim();
  if (tokens.length < 2) return false; // Avoid false positives for single-word input.
  // Check against example ayat from bundled words.
  for (const word of HIGH_FREQ_WORDS) {
    for (const ex of word.examples) {
      const exBare = stripDiacritics(ex.arabicText).replace(/\s+/g, " ").trim();
      // Only mark Quranic if the input is a substantial match (>=60% of ayah).
      if (exBare === bare) return true;
      if (bare.length >= exBare.length * 0.6 && exBare.includes(bare)) return true;
    }
  }
  return false;
}

// --- Public API ---------------------------------------------

/** Analyze a sentence (Arabic or Indonesian) for Mode Kalimat. */
export function analyzeSentence(input: string): SentenceAnalysis {
  const lang = detectLanguage(input);
  if (lang === "ar") {
    return analyzeArabicSentence(input);
  }
  return analyzeIndonesianSentence(input);
}
