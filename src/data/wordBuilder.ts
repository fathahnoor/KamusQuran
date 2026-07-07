import type {
  WordEntry,
  MorphoFeatures,
  PosMajor,
  VerbForm,
  DerivedForm,
  Gender,
  NumberCategory,
  Definiteness,
  IrabCase,
  SyntacticRole,
  OccurrenceRef,
  ExampleAyat,
} from "../types";
import { audioUrl } from "../services/alQuranApi";
import { SURAHS } from "./surahMeta";

// Precompute cumulative ayah counts for fast surah:ayah → globalAyahNumber lookup.
const AYAH_OFFSETS: number[] = (() => {
  const offsets: number[] = [0];
  let cumulative = 0;
  for (const s of SURAHS) {
    offsets.push(cumulative);
    cumulative += s.numberOfAyahs;
  }
  return offsets;
})();

/** Compute the global ayah number (1..6236) from surah + ayah-within-surah. */
export function toGlobalAyahNumber(surah: number, ayah: number): number {
  return (AYAH_OFFSETS[surah] ?? 0) + ayah;
}

// ============================================================
// Compact word format: minimizes per-word data size.
// The builder expands these into full WordEntry objects with
// auto-generated nahwu/sharf notes.
// ============================================================

export interface CompactWord {
  /** Stable id: lowercase transliteration. */
  id: string;
  /** Arabic headword/lemma (with diacritics where helpful). */
  ar: string;
  /** Triliteral root (3 letters). */
  root: string;
  /** Lemma (often same as ar). */
  lemma?: string;
  /** Indonesian primary meaning. */
  mid: string;
  /** English meaning (optional). */
  men?: string;
  /** Alternative Indonesian meanings. */
  alt?: string[];
  /** Part of speech. */
  pos: PosMajor;
  /** Total frequency in the Quran. */
  freq: number;
  /** Rank (1 = most frequent). */
  rank?: number;
  /** Morphological: wazan/pattern. */
  wazan?: string;
  /** Morphological: derived form (I-X). */
  form?: DerivedForm;
  /** Morphological: verb form category. */
  vf?: VerbForm;
  /** Morphological: gender. */
  g?: Gender;
  /** Morphological: number category. */
  num?: NumberCategory;
  /** Morphological: definiteness. */
  def?: Definiteness;
  /** Morphological: i'rab case. */
  irab?: IrabCase;
  /** Morphological: syntactic role. */
  role?: SyntacticRole;
  /** Occurrence refs: [surah, ayah, globalAyahNum, token?]. */
  occ?: [number, number, number, number?][];
  /** Example ayat: [surah, ayah, globalAyahNum, arabicText, translation, wordForm?]. */
  ex?: [number, number, number, string, string, string?][];
  /** Buckwalter transliteration. */
  bw?: string;
}

// --- Label maps (shared with WordResultPanel) ---------------

const POS_LABELS: Record<PosMajor, string> = {
  noun: "Isim (kata benda)",
  verb: "Fi'il (kata kerja)",
  particle: "Huruf (partikel)",
  pronoun: "Dhamir (kata ganti)",
  adjective: "Sifat (kata sifat)",
  adverb: "Zarf (kata keterangan)",
  number: "Bilangan",
  proper_noun: "Nama diri (proper noun)",
  interjection: "Seruan",
  resumption: "Penghubung",
  unknown: "Tidak diketahui",
};

const VERB_FORM_LABELS: Record<VerbForm, string> = {
  fiil_madhi: "Fi'il Madhi (lampau)",
  fiil_mudhari: "Fi'il Mudhari' (sekarang/akan datang)",
  fiil_amr: "Fi'il Amr (perintah)",
  fiil_mudhari_majzum: "Mudhari' Majzum",
  fiil_mudhari_mansub: "Mudhari' Mansub",
  fiil_mudhari_marfu: "Mudhari' Marfu'",
  masdar: "Masdar (infinitif)",
  unknown: "Tidak diketahui",
};

const DERIVED_FORM_LABELS: Record<DerivedForm, string> = {
  I: "Bentuk I (tsulatsi mujarrad)",
  II: "Bentuk II (taf'il)",
  III: "Bentuk III (mufa'alaa)",
  IV: "Bentuk IV (if'al)",
  V: "Bentuk V (tafa'ul)",
  VI: "Bentuk VI (tafaa'ul)",
  VII: "Bentuk VII (infi'al)",
  VIII: "Bentuk VIII (ifti'al)",
  IX: "Bentuk IX (if'ilal)",
  X: "Bentuk X (istif'al)",
  XI: "Bentuk XI",
  XII: "Bentuk XII",
  q1: "Quadriliteral I",
  q2: "Quadriliteral II",
  unknown: "Tidak diketahui",
};

const GENDER_LABELS: Record<Gender, string> = {
  masculine: "Mudzakkar (maskulin)",
  feminine: "Muannats (feminin)",
  common: "Bisa keduanya",
  unknown: "Tidak diketahui",
};

const NUMBER_LABELS: Record<NumberCategory, string> = {
  singular: "Mufrad (tunggal)",
  dual: "Mutsanna (dua)",
  plural: "Jamak (lebih dari dua)",
  broken_plural: "Jamak taksir (plural tak beraturan)",
  collective: "Jamak (kolektif)",
  unknown: "Tidak diketahui",
};

const DEFINITENESS_LABELS: Record<Definiteness, string> = {
  definite: "Ma'rifah (definit)",
  indefinite: "Nakirah (indefinit)",
  construct: "Mudhaf (konstruksi sandang)",
  proper: "Nama diri (proper)",
  unknown: "Tidak diketahui",
};

const IRAB_LABELS: Record<IrabCase, string> = {
  raf: "Rafa' (subjek)",
  nasb: "Nashab (objek)",
  jarr: "Jarr (genitif)",
  jazm: "Jazm (apokopat)",
  mushaddad: "Musyaddad",
  none: "Mabni (tetap)",
  unknown: "Tidak diketahui",
};

const ROLE_LABELS: Record<SyntacticRole, string> = {
  subject: "Fa'il (subjek)",
  object: "Maf'ul bih (objek)",
  mudhaf_ilayh: "Mudhaf ilayh (pelengkap sandang)",
  mubtada: "Mubtada' (topik)",
  khabar: "Khabar (predikat)",
  khabar_munqati: "Khabar munqati",
  naat: "Naat (sifat)",
  badal: "Badal (apposisi)",
  tawkid: "Tawkid (penegas)",
  atf: "Atf (konjungsi)",
  hal: "Hal (keadaan)",
  tamyiz: "Tamyiz (spesifikasi)",
  mutaaliq: "Muta'aliq (frasa preposisional)",
  sila: "Sila (klausa relatif)",
  mustathna: "Mustatsna (pengecualian)",
  khabar_inna: "Khabar inna",
  ism_inna: "Isim inna",
  ism_kaana: "Isim kaana",
  khabar_kaana: "Khabar kaana",
  mafhi: "Maf'ul huruf",
  mufrad: "Mufrad",
  jamid: "Jamid (tetap)",
  sibgha: "Sibgha",
  zamir: "Zamir (kata ganti)",
  ism_ishara: "Isim isyarah (kata tunjuk)",
  unknown: "Tidak diketahui",
};

// --- Auto-generate nahwu note --------------------------------

function generateNahwuNote(cw: CompactWord): string {
  const parts: string[] = [];
  const pos = cw.pos;
  const irab = cw.irab;
  const role = cw.role;

  // Base description by POS
  if (pos === "verb") {
    if (cw.vf === "fiil_madhi") {
      parts.push("Fi'il madhi (kata kerja lampau), mabni 'ala fathah (tetap pada fathah).");
    } else if (cw.vf === "fiil_mudhari") {
      parts.push("Fi'il mudhari' (kata kerja sekarang/akan datang), mu'rab, berubah i'rab-nya tergantung 'amil (rafa'/nashab/jazm).");
    } else if (cw.vf === "fiil_amr") {
      parts.push("Fi'il amr (kata perintah), mabni 'ala sukun (tetap pada sukun).");
    } else if (cw.vf === "masdar") {
      parts.push("Masdar (infinitif), sebagai isim, i'rab-nya berubah-ubah tergantung posisi sintaktis.");
    } else {
      parts.push("Fi'il, i'rab mengikuti jenis dan posisi sintaktis.");
    }
  } else if (pos === "noun" || pos === "adjective" || pos === "proper_noun") {
    parts.push("Isim, mu'rab (berubah i'rab-nya).");
    if (cw.def === "construct") {
      parts.push("Sering muncul dalam idafah (konstruksi sandang) sebagai mudhaf.");
    } else if (cw.def === "proper") {
      parts.push("Nama diri, mabni (tetap), tetapi i'rab mengikuti posisi dalam kalimat.");
    } else if (cw.def === "definite") {
      parts.push("Ma'rifah (definit), dengan alif lam atau idafah.");
    } else if (cw.def === "indefinite") {
      parts.push("Nakirah (indefinit).");
    }
  } else if (pos === "particle") {
    parts.push("Huruf (partikel), mabni (tetap), tidak ber-i'rab.");
  } else if (pos === "pronoun") {
    parts.push("Dhamir (kata ganti), mabni, i'rab mengikuti fungsi sintaktis.");
  }

  // I'rab detail
  if (irab && irab !== "unknown") {
    parts.push(`Dalam posisi umum: ${IRAB_LABELS[irab]}.`);
  }

  // Syntactic role
  if (role && role !== "unknown") {
    parts.push(`Fungsi sintaktis: ${ROLE_LABELS[role]}.`);
  }

  // Number/gender detail for nouns
  if (cw.num && cw.num !== "unknown" && (pos === "noun" || pos === "adjective")) {
    const genderPart = cw.g && cw.g !== "unknown" ? `, ${GENDER_LABELS[cw.g]}` : "";
    parts.push(`${NUMBER_LABELS[cw.num]}${genderPart}.`);
  }

  return parts.join(" ").trim() || "Informasi nahwu belum tersedia untuk kata ini.";
}

// --- Auto-generate sharf note --------------------------------

function generateSharfNote(cw: CompactWord): string {
  const parts: string[] = [];
  const root = cw.root;

  if (cw.wazan) {
    parts.push(`Akar ${root}, wazan '${cw.wazan}'.`);
  } else {
    parts.push(`Akar ${root}.`);
  }

  if (cw.form && cw.form !== "unknown" && cw.form !== "I") {
    parts.push(`Bentuk ${DERIVED_FORM_LABELS[cw.form]}.`);
  } else if (cw.form === "I") {
    parts.push("Bentuk I (tsulatsi mujarrad, bentuk dasar).");
  }

  if (cw.pos === "verb") {
    if (cw.vf === "fiil_madhi") {
      parts.push("Fi'il madhi (lampau).");
    } else if (cw.vf === "fiil_mudhari") {
      parts.push("Fi'il mudhari' (sekarang/akan datang).");
    } else if (cw.vf === "fiil_amr") {
      parts.push("Fi'il amr (perintah).");
    }
  } else if (cw.pos === "noun" && cw.wazan) {
    // Derive masdar pattern hint
    if (cw.wazan === "fa'l" || cw.wazan === "fu'l") {
      parts.push("Pola masdar ringkas (3-huruf).");
    } else if (cw.wazan === "faa'il") {
      parts.push("Pola isim fa'il (pelaku).");
    } else if (cw.wazan === "maf'ul") {
      parts.push("Pola isim maf'ul (objek pasif).");
    } else if (cw.wazan === "fa'ilatun" || cw.wazan === "fa'laatun") {
      parts.push("Pola isim dengan akhiran ta' marbuta.");
    }
  } else if (cw.pos === "particle") {
    parts.push("Huruf, tidak mengalami tasrif (perubahan morfologis).");
  } else if (cw.pos === "pronoun") {
    parts.push("Dhamir, bentuk tetap, tidak mengalami tasrif.");
  }

  return parts.join(" ").trim() || "Informasi sharf belum tersedia untuk kata ini.";
}

// --- Build full WordEntry from compact data ------------------

export function buildWordEntry(cw: CompactWord): WordEntry {
  const lemma = cw.lemma ?? cw.ar;

  const morpho: MorphoFeatures = {
    posMajor: cw.pos,
    root: cw.root,
    lemma,
    wazan: cw.wazan,
    derivedForm: cw.form,
    verbForm: cw.vf,
    gender: cw.g,
    number: cw.num,
    definiteness: cw.def,
    irab: cw.irab ?? (cw.pos === "verb" || cw.pos === "particle" || cw.pos === "pronoun" ? "none" : "raf"),
    syntacticRole: cw.role,
    syntacticRoleLabel: cw.role ? ROLE_LABELS[cw.role] : undefined,
  };

  // Generate i'rab note
  if (morpho.irab && morpho.irab !== "unknown") {
    const base = IRAB_LABELS[morpho.irab];
    if (morpho.irab === "none") {
      morpho.irabNote = `${base}. Kata ini tetap akhirnya, tidak berubah i'rab.`;
    } else {
      morpho.irabNote = `${base}. I'rab dapat berubah tergantung 'amil dan posisi dalam kalimat.`;
    }
  }

  // Build occurrences: compute correct globalAyahNumber from surah+ayah.
  // (Hardcoded values in batch data were unreliable; computing ensures correctness.)
  const occurrences: OccurrenceRef[] = (cw.occ ?? []).map(([surah, ayah, _globalAyahNumber, token]) => ({
    surah,
    ayah,
    globalAyahNumber: toGlobalAyahNumber(surah, ayah),
    token,
  }));

  // Build example ayat with audio URLs: compute correct globalAyahNumber.
  const examples: ExampleAyat[] = (cw.ex ?? []).map(([surah, ayah, _globalAyahNumber, arabicText, translation, wordForm]) => {
    const correctGlobal = toGlobalAyahNumber(surah, ayah);
    return {
      surah,
      ayah,
      globalAyahNumber: correctGlobal,
      arabicText,
      translation,
      wordForm,
      audioUrl: audioUrl(correctGlobal),
    };
  });

  return {
    id: cw.id,
    arabic: cw.ar,
    buckwalter: cw.bw,
    root: cw.root,
    lemma,
    meaningId: cw.mid,
    meaningIdAlt: cw.alt,
    meaningEn: cw.men,
    pos: cw.pos,
    frequency: cw.freq,
    rank: cw.rank,
    occurrences,
    morpho,
    nahwuNote: generateNahwuNote(cw),
    sharfNote: generateSharfNote(cw),
    examples,
  };
}

/** Build all entries from compact data, sorted by rank. */
export function buildWordEntries(words: CompactWord[]): WordEntry[] {
  return words
    .map(buildWordEntry)
    .sort((a, b) => (a.rank ?? a.frequency) - (b.rank ?? b.frequency));
}

// Re-export label maps for UI components
export {
  POS_LABELS,
  VERB_FORM_LABELS,
  DERIVED_FORM_LABELS,
  GENDER_LABELS,
  NUMBER_LABELS,
  DEFINITENESS_LABELS,
  IRAB_LABELS,
  ROLE_LABELS,
};
