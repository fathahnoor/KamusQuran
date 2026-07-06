// ============================================================
// Kamus Quran — Core Domain Types
// ============================================================
// These types model the linguistic data for the app per design.md §4 (depth level 3)
// and §5 (Mode Kata / Mode Kalimat). All downstream modules depend on these.

// --- Qur'an location primitives -----------------------------

/** Global ayah index (1..6236) used by AlQuran Cloud API. */
export type AyahNumber = number;

/** Surah number (1..114). */
export type SurahNumber = number;

/** Ayah-within-surah index (1..n). */
export type AyahInSurah = number;

/** Token index within an ayah (1..m), per Quranic Arabic Corpus. */
export type TokenIndex = number;

/** Canonical location string "surah:ayah" for ayah-level references. */
export type AyahLocation = `${SurahNumber}:${AyahInSurah}`;

/** Canonical location string "surah:ayah:token" per QAC convention. */
export type TokenLocation = `${SurahNumber}:${AyahInSurah}:${TokenIndex}`;

// --- Morphological primitives (sharf) -----------------------

/** Major part of speech buckets used in Qur'anic Arabic. */
export type PosMajor =
  | "noun"
  | "verb"
  | "particle"
  | "pronoun"
  | "adjective"
  | "adverb"
  | "number"
  | "proper_noun"
  | "interjection"
  | "resumption"
  | "unknown";

/** Verb tense/form categories (fi'il) — sharf layer. */
export type VerbForm =
  | "fiil_madhi"
  | "fiil_mudhari"
  | "fiil_amr"
  | "fiil_mudhari_majzum"
  | "fiil_mudhari_mansub"
  | "fiil_mudhari_marfu"
  | "masdar"
  | "unknown";

/** Derived form (bab/thulathi mujarrad vs mazid). Roman numeral I–X + quadriliteral. */
export type DerivedForm =
  | "I"
  | "II"
  | "III"
  | "IV"
  | "V"
  | "VI"
  | "VII"
  | "VIII"
  | "IX"
  | "X"
  | "XI"
  | "XII"
  | "q1"
  | "q2"
  | "unknown";

export type Gender = "masculine" | "feminine" | "common" | "unknown";
export type NumberCategory =
  | "singular"
  | "dual"
  | "plural"
  | "broken_plural"
  | "collective"
  | "unknown";
export type Definiteness =
  | "definite"
  | "indefinite"
  | "construct"
  | "proper"
  | "unknown";

/** Grammatical case (i'rab) — nahwu layer. */
export type IrabCase =
  | "raf"
  | "nasb"
  | "jarr"
  | "jazm"
  | "mushaddad"
  | "none"
  | "unknown";

/** Syntactic function/role — nahwu layer (depth level 3, design.md §4). */
export type SyntacticRole =
  | "subject" // fa'il
  | "object" // maf'ul bih
  | "mudhaf_ilayh" // genitive complement
  | "mubtada" // topic
  | "khabar" // comment
  | "khabar_munqati" // disconnected predicate
  | "naat" // adjective
  | "badal" // apposition/substitute
  | "tawkid" // corroboration
  | "atf" // conjunction
  | "hal" // circumstantial
  | "tamyiz" // specification
  | "mutaaliq" // prepositional phrase complement
  | "sila" // relative clause
  | "mustathna" // excepted
  | "khabar_inna" // predicate of inna
  | "ism_inna" // noun of inna
  | "ism_kaana" // noun of kaana
  | "khabar_kaana" // predicate of kaana
  | "mafhi" // object of preposition
  | "mufrad" // singular word role (subject/predicate base)
  | "jamid" // frozen/indeclinable
  | "sibgha" // descriptive role
  | "zamir" // pronoun reference
  | "ism_ishara" // demonstrative
  | "unknown";

/** Relation to another token in the dependency graph (QADT). */
export interface DependencyRelation {
  /** Index of the head token within the ayah (0 = root of sentence). */
  head: number;
  /** Edge label / dependency type. */
  relation: DependencyEdge;
  /** Location of head token (for cross-reference). */
  headLocation?: TokenLocation;
}

export type DependencyEdge =
  | "subject"
  | "object"
  | "predicate"
  | "adjunct"
  | "modifier"
  | "coordination"
  | "subordination"
  | "exclamation"
  | "imperfect"
  | "conditional"
  | "circumstantial"
  | "preposition"
  | "relative"
  | "substitutive"
  | "negative"
  | "interrogative"
  | "emphatic"
  | "amendment"
  | "prevention"
  | "demand"
  | "exhortation"
  | "resumption"
  | "result"
  | "purpose"
  | "comment"
  | "inceptive"
  | "honorific"
  | "epithet"
  | "apposition"
  | "conjunction"
  | "unknown";

// --- Composite morphological features -----------------------

/** Full morphological feature set for a single token (sharf + nahwu). */
export interface MorphoFeatures {
  posMajor: PosMajor;
  /** Granular QAC POS tag (e.g. "N", "V", "PREP", "DEM", "REL", "PRON"). */
  posTag?: string;
  verbForm?: VerbForm;
  derivedForm?: DerivedForm;
  /** Arabic transliterated wazan/pattern, e.g. "fa'ala", "tafa''ala". */
  wazan?: string;
  root?: string;
  lemma?: string;
  stem?: string;
  gender?: Gender;
  number?: NumberCategory;
  definiteness?: Definiteness;
  person?: 1 | 2 | 3;
  /** I'rab case ending. */
  irab?: IrabCase;
  /** Human-readable i'rab explanation in Indonesian. */
  irabNote?: string;
  /** Syntactic role in context (nahwu). */
  syntacticRole?: SyntacticRole;
  /** Syntactic role label in Indonesian for display. */
  syntacticRoleLabel?: string;
  /** Dependency relation if part of a QADT-annotated ayah. */
  dependency?: DependencyRelation;
  /** Prefix morphemes (e.g. "وَ", "بِ", "الْ"). */
  prefixes?: string[];
  /** Suffix morphemes (e.g. pronoun suffixes, nunation). */
  suffixes?: string[];
  /** Raw QAC feature string for traceability. */
  rawFeatures?: string;
}

// --- Word entry (Mode Kata result) --------------------------

/** A single occurrence location with surrounding ayah context. */
export interface OccurrenceRef {
  surah: SurahNumber;
  ayah: AyahInSurah;
  /** Ayah global number for API/audio lookups. */
  globalAyahNumber: AyahNumber;
  /** Token index within that ayah where this word appears. */
  token?: TokenIndex;
}

/** Example ayat for a word entry — a curated short list. */
export interface ExampleAyat {
  surah: SurahNumber;
  ayah: AyahInSurah;
  globalAyahNumber: AyahNumber;
  /** Uthmani Arabic text of the ayah. */
  arabicText: string;
  /** Indonesian translation (Kemenag). */
  translation: string;
  /** The specific word form as it appears in this ayah (with inflection). */
  wordForm?: string;
  /** Audio URL (AlQuran Cloud CDN). */
  audioUrl?: string;
}

/** Brief tafsir entry related to a word. */
export interface WordTafsir {
  /** Edition identifier (e.g. "id.jalalayn"). */
  edition: string;
  /** Tafsir text in Indonesian (or source language). */
  text: string;
  /** Surah:ayah anchor. */
  anchor: AyahLocation;
}

/**
 * A high-frequency Qur'anic word entry — the primary object in Mode Kata.
 * Models design.md §5.1 requirements.
 */
export interface WordEntry {
  /** Stable internal id — typically the lemma in transliteration. */
  id: string;
  /** Arabic lemma / headword. */
  arabic: string;
  /** Buckwalter transliteration (for matching against QAC). */
  buckwalter?: string;
  root: string;
  lemma: string;
  /** Indonesian primary meaning. */
  meaningId: string;
  /** Additional Indonesian synonyms/variants. */
  meaningIdAlt?: string[];
  /** English meaning (optional, for cross-check). */
  meaningEn?: string;
  pos: PosMajor;
  /** Frequency: total occurrences across the Qur'an. */
  frequency: number;
  /** All surah:ayah locations where this word (by lemma/root) occurs. */
  occurrences: OccurrenceRef[];
  /** Morphological features aggregated/representative for the lemma. */
  morpho: MorphoFeatures;
  /** Nahwu explanation in Indonesian (sentential context summary). */
  nahwuNote?: string;
  /** Sharf explanation in Indonesian (morphology derivation summary). */
  sharfNote?: string;
  /** Curated example ayat (3-5 recommended). */
  examples: ExampleAyat[];
  /** Brief tafsir relevant to the word, if available. */
  tafsir?: WordTafsir[];
  /** Audio pronunciation URL for the headword (per-ayah audio via examples). */
  audioBaseUrl?: string;
  /** Rank in the high-frequency list (1 = most frequent). */
  rank?: number;
}

// --- Sentence analysis (Mode Kalimat) ----------------------

/** A single token in a sentence-level breakdown. */
export interface SentenceToken {
  index: number;
  /** Arabic surface form as typed/recognized. */
  surface: string;
  /** Matched lemma/word entry id (if found in corpus). */
  wordId?: string;
  /** Matched Arabic lemma (if any). */
  lemma?: string;
  root?: string;
  meaningId?: string;
  posMajor?: PosMajor;
  morpho?: MorphoFeatures;
  /** Nahwu context note for this token within the sentence. */
  nahwuNote?: string;
  /** Sharf context note for this token. */
  sharfNote?: string;
  /** Whether token matched against bundled corpus (vs rule-based fallback). */
  matched: boolean;
}

/** Sentence-level observations (grammatical structure summary). */
export interface SentenceObservation {
  /** e.g. "jumlah ismiyyah" (nominal sentence), "jumlah fi'liyyah" (verbal). */
  sentenceType?: string;
  /** Human-readable structure summary in Indonesian. */
  summary: string;
  /** Notable grammatical phenomena (e.g. "terdapat idafah", "terdapat hal"). */
  notes: string[];
}

/** Full Mode Kalimat analysis result. */
export interface SentenceAnalysis {
  /** Original input text. */
  input: string;
  /** Detected input language. */
  inputLang: "ar" | "id";
  /** Whether this is a Qur'anic ayah match (enables QADT dependency graph). */
  isQuranicAyah: boolean;
  /** Matched ayah location if Quranic. */
  matchedAyah?: AyahLocation;
  /** Per-token breakdown. */
  tokens: SentenceToken[];
  /** Sentence-level observations. */
  observations: SentenceObservation[];
  /** Dependency graph if QADT-annotated ayah. */
  dependencyGraph?: DependencyRelation[];
}

// --- Bookmarks (design.md §9) -------------------------------

export interface Bookmark {
  wordId: string;
  arabic: string;
  meaningId: string;
  root: string;
  /** ISO timestamp of bookmark creation. */
  createdAt: string;
  /** Optional user note. */
  note?: string;
}

/** Shape of the export/import JSON file. */
export interface BookmarkExport {
  app: "kamus-quran";
  version: 1;
  exportedAt: string;
  bookmarks: Bookmark[];
}

// --- AlQuran Cloud API types --------------------------------

export interface AlQuranEdition {
  identifier: string;
  language: string;
  name: string;
  englishName: string;
  format: "text" | "audio";
  type: "quran_ayah" | "translation" | "tafsir" | "transliteration";
  direction?: string;
}

export interface AlQuranAyah {
  number: AyahNumber;
  text: string;
  edition: { identifier: string; language: string; name: string };
  surah: {
    number: SurahNumber;
    name: string;
    englishName: string;
    numberOfAyahs: number;
    revelationType: string;
  };
  numberInSurah: AyahInSurah;
  juz: number;
  page: number;
  sajda: boolean;
  audio?: string;
}

export interface AlQuranSearchResult {
  number: AyahNumber;
  text: string;
  edition: { identifier: string };
  surah: { number: SurahNumber; englishName: string; numberOfAyahs: number };
  numberInSurah: AyahInSurah;
}

// --- UI state -----------------------------------------------

export type AppMode = "kata" | "kalimat";
export type AppView = "kata" | "kalimat" | "bookmark" | "about";
