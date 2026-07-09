import type {
  SentenceAnalysis,
  SentenceToken,
  SentenceObservation,
  MorphoFeatures,
  PosMajor,
} from "../types";
import { findByArabic, searchWords, HIGH_FREQ_WORDS } from "../data/morphologyIndex";
import { generateStructuredIrab } from "../data/irabHeuristics";
import type { IrabInput } from "../data/irabHeuristics";
import { stripDiacritics, tokenizeArabic, isArabicText } from "../utils/arabic";

/** Detect whether input text is Arabic or Indonesian. */
export function detectLanguage(input: string): "ar" | "id" {
  if (!isArabicText(input)) return "id";
  const arabicChars = (input.match(/[\u0600-\u06FF]/g) ?? []).length;
  const latinChars = (input.match(/[a-zA-Z]/g) ?? []).length;
  return arabicChars > latinChars ? "ar" : "id";
}

// --- Matching ------------------------------------------------

/** Normalize an Arabic token for lookup (strip diacritics, remove leading waw). */
function normalizeForMatch(token: string): string {
  const bare = stripDiacritics(token);
  const stripped = bare
    .replace(/^(و|ف)/, "")
    .replace(/^(ال)/, "")
    .replace(/[ةه]$/, "");
  const withPrep = stripped.replace(/^(ب|ل|ك|من|الى|على|في|عن|مع|عند)/, "");
  return withPrep.length >= 3 ? withPrep : stripped || bare;
}

/** Attempt to find a matching word entry for an Arabic token. */
function matchArabicToken(token: string): {
  wordId?: string; lemma?: string; root?: string; meaningId?: string;
  posMajor?: PosMajor; morpho?: MorphoFeatures;
} {
  const exact = findByArabic(token) ?? findByArabic(stripDiacritics(token));
  if (exact) {
    return { wordId: exact.id, lemma: exact.lemma, root: exact.root, meaningId: exact.meaningId, posMajor: exact.pos, morpho: exact.morpho };
  }
  const normalized = normalizeForMatch(token);
  const normalizedMatch = findByArabic(normalized);
  if (normalizedMatch) {
    return { wordId: normalizedMatch.id, lemma: normalizedMatch.lemma, root: normalizedMatch.root, meaningId: normalizedMatch.meaningId, posMajor: normalizedMatch.pos, morpho: normalizedMatch.morpho };
  }
  const searchResults = searchWords(token, 1);
  if (searchResults.length > 0) {
    const w = searchResults[0]!;
    return { wordId: w.id, lemma: w.lemma, root: w.root, meaningId: w.meaningId, posMajor: w.pos, morpho: w.morpho };
  }
  return {};
}

// --- Indonesian sentence handling ---------------------------

/**
 * Analyze an Indonesian sentence:
 * 1. Map each word to its Arabic equivalent via the corpus.
 * 2. Set surface = Arabic lemma so i'rob engine works directly.
 * 3. Store the original Indonesian word in meaningId for display.
 * 4. Apply full context-aware i'rob and sentence observations.
 */
function analyzeIndonesianSentence(input: string): SentenceAnalysis {
  const indoWords = input.split(/\s+/).filter(Boolean);

  const sentenceTokens: SentenceToken[] = indoWords.map((word, index) => {
    const matches = searchWords(word, 1);
    if (matches.length > 0) {
      const w = matches[0]!;
      return {
        index,
        surface: w.arabic,  // Arabic word (for i'rob + display)
        lemma: w.arabic,
        root: w.root,
        meaningId: `${word} \u2192 ${w.meaningId}`, // Indonesian origin \u2192 meaning
        posMajor: w.pos,
        morpho: w.morpho,
        nahwuNote: w.nahwuNote,
        sharfNote: w.sharfNote,
        matched: true,
      };
    }
    return { index, surface: word, matched: false };
  });

  // Apply context-aware i'rob (surface is already Arabic).
  applyContextAwareIrab(sentenceTokens);

  // Build standard sentence observations.
  const observations = buildSentenceObservations(sentenceTokens, input);

  // Translation summary (for banner at top of results).
  // Include ALL words: matched → Arabic lemma, unmatched → original word.
  let arabicSummary = "";
  if (sentenceTokens.some((t) => t.matched)) {
    const arabicParts = sentenceTokens.map((t, i) => {
      if (t.matched) return t.lemma ?? t.surface;
      return indoWords[i] ?? t.surface;
    });
    const indoIn = indoWords.join(" ");
    const arabicOut = arabicParts.join(" ");
    arabicSummary = `${indoIn} \u2192 ${arabicOut}`;
  }

  const irabSummary = buildIrabSummary(sentenceTokens);
  if (irabSummary) observations.unshift(irabSummary);

  return {
    input,
    inputLang: "id",
    arabicSummary: arabicSummary || undefined,
    isQuranicAyah: false,
    tokens: sentenceTokens,
    observations,
  };
}

// --- v3.0 Context-Aware I'rab Engine -------------------------

/** Known Arabic particles/words for context-aware i'rab detection. */
const HURUF_JARR = new Set(["من", "إلى", "عن", "على", "في", "ب", "ل", "ك", "حتى", "منذ", "رب"]);
const INNA_AKHWATUHA = new Set(["إن", "أن", "كأن", "لكن", "ليت", "لعل"]);
const KAANA_AKHWATUHA = new Set(["كان", "أصبح", "أمسى", "أضحى", "ظل", "بات", "صار", "ليس", "ما زال", "ما برح", "ما فتىء", "ما انفك", "ما دام"]);
const HURUF_ATHF = new Set(["و", "ف", "ثم", "أو", "أم", "بل", "لكن"]);

/** Check if a token (diacritic-stripped) is a known hurf jarr. */
function isJarr(surface: string): boolean {
  const bare = stripDiacritics(surface);
  return HURUF_JARR.has(bare) || bare.startsWith("ب") && bare.length === 1;
}

/** Check if a token is inna or one of its sisters. */
function isInnaAkhwatuha(surface: string): boolean {
  return INNA_AKHWATUHA.has(stripDiacritics(surface));
}

/** Check if a token is kaana or one of its sisters. */
function isKaanaAkhwatuha(surface: string): boolean {
  return KAANA_AKHWATUHA.has(stripDiacritics(surface));
}

/** Check if a token is a conjunction (athf). */
function isAthf(surface: string): boolean {
  return HURUF_ATHF.has(stripDiacritics(surface));
}

/** Build an IrabInput from a SentenceToken for the heuristic engine. */
function buildIrabInputFromToken(t: SentenceToken): IrabInput {
  const m = t.morpho;
  return {
    arabic: t.surface,
    pos: t.posMajor ?? "unknown",
    vf: m?.verbForm,
    num: m?.number,
    g: m?.gender,
    def: m?.definiteness,
    irab: m?.irab,
    role: m?.syntacticRole,
    wazan: m?.wazan,
    root: m?.root,
  };
}

/**
 * Apply context-aware i'rab to a list of sentence tokens.
 * Detects patterns like hurf jarr + majrur, inna + isim inna (manshub),
 * kaana + isim kaana (marfu'), idhafah, 'athf, and updates each token's
 * structuredIrab accordingly.
 */
function applyContextAwareIrab(tokens: SentenceToken[]): void {
  if (tokens.length === 0) return;

  // First pass: detect context patterns
  const ctx = new Array<ContextHint>(tokens.length).fill("none");

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i]!;

    // Huruf Jarr -> next token is Majrur
    if (isJarr(t.surface) && i + 1 < tokens.length) {
      ctx[i] = "jarr";
      ctx[i + 1] = "majrur_by_jarr";
    }

    // Inna wa akhwatuha -> next token is Isim Inna (Manshub), next+1 is Khabar Inna (Marfu')
    if (isInnaAkhwatuha(t.surface) && i + 1 < tokens.length) {
      ctx[i + 1] = "ism_inna";
      if (i + 2 < tokens.length) {
        ctx[i + 2] = "khabar_inna";
      }
    }

    // Kaana wa akhwatuha -> next token is Isim Kaana (Marfu'), next+1 is Khabar Kaana (Manshub)
    if (isKaanaAkhwatuha(t.surface) && i + 1 < tokens.length) {
      ctx[i + 1] = "ism_kaana";
      if (i + 2 < tokens.length) {
        ctx[i + 2] = "khabar_kaana";
      }
    }

    // Idhafah: two consecutive nouns (don't overwrite majrur_by_jarr).
    if (i > 0 && ctx[i] !== "majrur_by_jarr") {
      const prev = tokens[i - 1];
      if (prev && (prev.posMajor === "noun" || prev.posMajor === "proper_noun") &&
          (t.posMajor === "noun" || t.posMajor === "proper_noun")) {
        ctx[i] = "mudhaf_ilayh";
      }
    }

    // 'Athf: token after conjunction follows previous token's i'rab
    if (i > 0 && isAthf(tokens[i - 1]!.surface)) {
      ctx[i] = "mathuf";
    }
  }

  // Second pass: generate structured i'rab for each token with context.
  // Skip unmatched tokens (Latin surface text) — i'rob is meaningless for them.
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i]!;
    if (!t.matched) continue;
    const hint = ctx[i];
    const input = buildIrabInputFromToken(t);

    if (hint && hint !== "none") {
      applyContextOverride(input, hint, i, tokens);
    }

    t.structuredIrab = generateStructuredIrab(input);
  }
}

type ContextHint =
  | "none"
  | "jarr"
  | "majrur_by_jarr"
  | "ism_inna"
  | "khabar_inna"
  | "ism_kaana"
  | "khabar_kaana"
  | "mudhaf_ilayh"
  | "mathuf";

/** Override IrabInput fields based on syntactic context hint. */
function applyContextOverride(
  input: IrabInput,
  hint: ContextHint,
  idx: number,
  tokens: SentenceToken[]
): void {
  switch (hint) {
    case "jarr":
      input.irab = "none";
      input.role = undefined;
      break;

    case "majrur_by_jarr": {
      input.irab = "jarr";
      input.role = "mafhi";
      const prev = idx > 0 ? stripDiacritics(tokens[idx - 1]!.surface) : "";
      if (!input.aml) {
        input.aml = prev ? `Huruf Jarr (${prev})` : "Huruf Jarr sebelumnya";
      }
      break;
    }

    case "ism_inna":
      input.irab = "nasb";
      input.role = "ism_inna";
      if (!input.aml) input.aml = "Inna wa akhwatuha";
      break;

    case "khabar_inna":
      input.irab = "raf";
      input.role = "khabar_inna";
      if (!input.aml) input.aml = "Inna wa akhwatuha";
      break;

    case "ism_kaana":
      input.irab = "raf";
      input.role = "ism_kaana";
      if (!input.aml) input.aml = "Kaana wa akhwatuha";
      break;

    case "khabar_kaana":
      input.irab = "nasb";
      input.role = "khabar_kaana";
      if (!input.aml) input.aml = "Kaana wa akhwatuha";
      break;

    case "mudhaf_ilayh":
      input.irab = "jarr";
      input.role = "mudhaf_ilayh";
      if (!input.aml) {
        const prevWord = idx > 0 ? tokens[idx - 1]!.surface : "";
        input.aml = `Mudhaf sebelumnya (${prevWord})`;
      }
      break;

    case "mathuf":
      if (idx >= 2) {
        const maathufAlayh = tokens[idx - 2]!;
        const prevIrab = maathufAlayh.structuredIrab;
        if (prevIrab) {
          input.irab = irabStatusToCase(prevIrab.irabStatus);
          if (!input.aml) {
            input.aml = `Ma'thuf 'alayh (${maathufAlayh.surface}) + Huruf 'Athf`;
          }
        }
      }
      input.role = "atf";
      break;
  }
}

/** Convert an i'rab status string back to IrabCase. */
function irabStatusToCase(status: string): import("../types").IrabCase {
  switch (status) {
    case "Marfu'": return "raf";
    case "Manshub": return "nasb";
    case "Majrur": return "jarr";
    case "Majzum": return "jazm";
    case "Mabni": return "none";
    default: return "unknown";
  }
}

// --- Arabic sentence analysis (hybrid) ----------------------

function analyzeArabicSentence(input: string): SentenceAnalysis {
  const rawTokens = tokenizeArabic(input);
  const tokens: SentenceToken[] = rawTokens.map((token, index) => {
    const match = matchArabicToken(token);
    if (match.wordId) {
      return {
        index, surface: token, wordId: match.wordId, lemma: match.lemma,
        root: match.root, meaningId: match.meaningId, posMajor: match.posMajor,
        morpho: match.morpho, matched: true,
      };
    }
    return { index, surface: token, posMajor: guessPosByHeuristic(token), matched: false };
  });

  applyContextAwareIrab(tokens);
  const observations = buildSentenceObservations(tokens, input);
  const quranMatch = checkIfQuranicAyah(input, tokens);

  const irabSummary = buildIrabSummary(tokens);
  if (irabSummary) observations.unshift(irabSummary);

  return {
    input,
    inputLang: "ar",
    isQuranicAyah: quranMatch.isQuranic,
    matchedAyah: quranMatch.matchedAyah,
    matchedGlobalAyah: quranMatch.globalAyahNumber,
    tokens,
    observations,
  };
}

/** Heuristic POS guess for unmatched Arabic tokens. */
function guessPosByHeuristic(token: string): PosMajor {
  const bare = stripDiacritics(token);
  const particles = ["من", "في", "على", "إلى", "عن", "مع", "ثم", "و", "ف", "ب", "ل", "إن", "أن", "لا", "ما", "لم", "لن", "قد", "كان", "هو", "هي", "هم"];
  if (particles.includes(bare)) return "particle";
  if (bare.startsWith("ال")) return "noun";
  if (bare.length <= 2) return "particle";
  return "noun";
}

// --- I'rab Summary (v3.0) -----------------------------------

function buildIrabSummary(tokens: SentenceToken[]): SentenceObservation | null {
  const withIrab = tokens.filter((t) => t.structuredIrab);
  if (withIrab.length === 0) return null;

  const counts: Record<string, number> = {};
  for (const t of withIrab) {
    const s = t.structuredIrab!;
    const key = `${s.irabStatus} ${s.kedudukan}`;
    counts[key] = (counts[key] ?? 0) + 1;
  }

  const summaryParts: string[] = [];
  for (const [key, count] of Object.entries(counts)) {
    summaryParts.push(`${count}\u00d7 ${key}`);
  }

  return {
    sentenceType: undefined,
    summary: `Ringkasan I'rob: ${summaryParts.join(", ")}.`,
    notes: [
      "Analisis kontekstual: mendeteksi huruf jarr, inna/akhwatuha, kaana/akhwatuha, idhafah, dan 'athf.",
      "Kata yang tidak dikenali dianalisis menggunakan heuristik POS.",
    ],
  };
}

// --- Sentence Observations ----------------------------------

function buildSentenceObservations(tokens: SentenceToken[], _input: string): SentenceObservation[] {
  const observations: SentenceObservation[] = [];
  const posTags = tokens.map((t) => t.posMajor ?? "unknown");
  const verbCount = posTags.filter((p) => p === "verb").length;
  const nounCount = posTags.filter((p) => p === "noun" || p === "proper_noun" || p === "adjective").length;

  if (verbCount > 0 && tokens[0]?.posMajor === "verb") {
    observations.push({
      sentenceType: "jumlah fi'liyyah (kalimat verbal)",
      summary: "Kalimat dimulai dengan fi'il (kata kerja), yaitu jumlah fi'liyyah.",
      notes: ["Unsur: fi'il + fa'il (pelaku) + maf'ul (objek) bila ada."],
    });
  } else if (nounCount > 0 && tokens[0]?.posMajor !== "verb") {
    observations.push({
      sentenceType: "jumlah ismiyyah (kalimat nominal)",
      summary: "Kalimat dimulai dengan isim, yaitu jumlah ismiyyah.",
      notes: ["Unsur: mubtada' (subjek) + khabar (predikat)."],
    });
  }

  for (let i = 0; i < tokens.length - 1; i++) {
    const cur = tokens[i];
    const next = tokens[i + 1];
    if (next && cur?.matched && next?.matched &&
        (cur.posMajor === "noun" || cur.posMajor === "proper_noun") &&
        (next.posMajor === "noun" || next.posMajor === "proper_noun")) {
      observations.push({
        summary: `Terdapat idafah: "${cur.lemma ?? cur.surface}" \u2192 "${next.lemma ?? next.surface}".`,
        notes: [`${cur.surface} sebagai mudhaf, ${next.surface} sebagai mudhaf ilayh (majrur).`],
      });
    }
  }

  const unmatched = tokens.filter((t) => !t.matched);
  if (unmatched.length > 0) {
    observations.push({
      summary: `${unmatched.length} kata tidak ditemukan dalam kosakata Quran.`,
      notes: unmatched.map((t) => `"${t.surface}" \u2192 ${t.posMajor ?? "tidak diketahui"}`),
    });
  }

  if (observations.length === 0) {
    observations.push({ summary: "Tidak ada observasi struktural khusus terdeteksi.", notes: [] });
  }
  return observations;
}

/** Quranic ayah match result. */
interface QuranAyahMatch {
  isQuranic: boolean;
  matchedAyah?: `${number}:${number}`;
  globalAyahNumber?: number;
}

/** Check whether input corresponds to a known Qur'anic ayah excerpt. */
function checkIfQuranicAyah(input: string, tokens: SentenceToken[]): QuranAyahMatch {
  const bare = stripDiacritics(input).replace(/\s+/g, " ").trim();
  if (tokens.length < 2) return { isQuranic: false };
  for (const word of HIGH_FREQ_WORDS) {
    for (const ex of word.examples) {
      const exBare = stripDiacritics(ex.arabicText).replace(/\s+/g, " ").trim();
      if (exBare === bare) {
        return {
          isQuranic: true,
          matchedAyah: `${ex.surah}:${ex.ayah}`,
          globalAyahNumber: ex.globalAyahNumber,
        };
      }
      if (bare.length >= exBare.length * 0.6 && exBare.includes(bare)) {
        return {
          isQuranic: true,
          matchedAyah: `${ex.surah}:${ex.ayah}`,
          globalAyahNumber: ex.globalAyahNumber,
        };
      }
    }
  }
  return { isQuranic: false };
}

// --- Public API ---------------------------------------------

export function analyzeSentence(input: string): SentenceAnalysis {
  const lang = detectLanguage(input);
  if (lang === "ar") return analyzeArabicSentence(input);
  return analyzeIndonesianSentence(input);
}
