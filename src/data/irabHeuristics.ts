// ============================================================
// v3.0 I'rab Heuristic Engine
// ============================================================
// Generates structured i'rab analysis following the Al-Munir
// tabular methodology (Kata → Jenis → Kedudukan → I'rob →
// Tanda → 'Amil) combined with Nahwu al-Wadhih's inductive
// conclusion format.
//
// All rules operate on individual fields to avoid circular
// dependencies with wordBuilder.ts.
// ============================================================

import type {
  StructuredIrab,
  PosMajor,
  VerbForm,
  NumberCategory,
  Gender,
  Definiteness,
  IrabCase,
  SyntacticRole,
} from "../types";
import { stripDiacritics } from "../utils/arabic";

// --- Public API ---------------------------------------------

export interface IrabInput {
  arabic: string;
  pos: PosMajor;
  vf?: VerbForm;
  num?: NumberCategory;
  g?: Gender;
  def?: Definiteness;
  irab?: IrabCase;
  role?: SyntacticRole;
  wazan?: string;
  root?: string;
  /** Manual override for tanda i'rob (from batch data). */
  tnd?: string;
  /** Manual override for 'amil (from batch data). */
  aml?: string;
}

/**
 * Generate a structured i'rab analysis following the Al-Munir
 * 6-column tabular format with Nahwu al-Wadhih inductive conclusion.
 */
export function generateStructuredIrab(input: IrabInput): StructuredIrab {
  const jenis = inferJenis(input);
  const kedudukan = inferKedudukan(input);
  const irabStatus = inferIrabStatus(input);
  const tanda = input.tnd || inferTanda(input, jenis, irabStatus);
  const amil = input.aml || inferAmil(input, kedudukan, irabStatus);
  const penjelasan = buildPenjelasan(input.arabic, jenis, kedudukan, irabStatus, tanda, amil);

  return { kata: input.arabic, jenis, kedudukan, irabStatus, tanda, amil, penjelasan };
}

// --- Jenis (Word Type Classification) -----------------------

function inferJenis(input: IrabInput): string {
  const { pos, num, vf, g } = input;

  if (pos === "noun" || pos === "adjective" || pos === "proper_noun") {
    let label = "Isim";
    // Number qualifier
    if (num === "singular") label += " Mufrad";
    else if (num === "dual") label += " Mutsanna";
    else if (num === "plural" || num === "broken_plural") label += " Jamak";
    else if (num === "collective") label += " Jamak (Kolektif)";
    // Gender hint
    if (g === "feminine" && num !== "dual" && num !== "plural") label += " Mu'annats";
    else if (g === "masculine" && num !== "dual" && num !== "plural") label += " Mudzakkar";
    // Special: proper noun
    if (pos === "proper_noun") label += " (Nama Diri)";
    if (pos === "adjective") label += " (Sifat)";
    return label;
  }

  if (pos === "verb") {
    switch (vf) {
      case "fiil_madhi": return "Fi'il Madhi";
      case "fiil_mudhari": return "Fi'il Mudhari'";
      case "fiil_mudhari_mansub": return "Fi'il Mudhari' Manshub";
      case "fiil_mudhari_majzum": return "Fi'il Mudhari' Majzum";
      case "fiil_mudhari_marfu": return "Fi'il Mudhari' Marfu'";
      case "fiil_amr": return "Fi'il Amr";
      case "masdar": return "Masdar";
      case "unknown":
      default:
        return "Fi'il";
    }
  }

  if (pos === "particle") {
    // Subclassification heuristics based on wazan/function
    if (input.wazan) {
      const w = input.wazan.toLowerCase();
      if (w.includes("jar")) return "Huruf Jarr";
      if (w.includes("athf") || w.includes("'athf")) return "Huruf 'Athf";
      if (w.includes("nafi")) return "Huruf Nafi";
      if (w.includes("nida")) return "Huruf Nida'";
      if (w.includes("istifham")) return "Huruf Istifham";
      if (w.includes("tawkid")) return "Huruf Tawkid";
      if (w.includes("syarat") || w.includes("sharat")) return "Huruf Syarat";
      if (w.includes("inna") || w.includes("naskh")) return "Huruf Naskh";
    }
    // Fallback: direct Arabic string comparison for common particles (stripped of diacritics).
    const bare = stripDiacritics(input.arabic);
    if (["في", "على", "إلى", "من", "عن", "ب", "ل", "ك", "حتى", "منذ"].includes(bare)) {
      return "Huruf Jarr";
    }
    if (["و", "ف", "ثم", "أو", "أم", "بل", "لكن"].includes(bare)) {
      return "Huruf 'Athf";
    }
    if (["إن", "أن", "كأن", "لكن", "ليت", "لعل"].includes(bare)) {
      return "Huruf Naskh (Inna wa Akhwatuha)";
    }
    if (["لا", "ما", "لم", "لن", "ليس"].includes(bare)) {
      return "Huruf Nafi";
    }
    return "Huruf";
  }

  if (pos === "pronoun") {
    return "Dhamir";
  }

  if (pos === "adverb") {
    return "Zarf (Kata Keterangan)";
  }

  if (pos === "number") {
    return "Bilangan";
  }

  if (pos === "interjection") {
    return "Huruf Nida' / Seruan";
  }

  return "Kata";
}

// --- Kedudukan (Syntactic Position) -------------------------

function inferKedudukan(input: IrabInput): string {
  const { role, pos, vf } = input;

  // Map syntactic role to Al-Munir Indonesian labels
  if (role && role !== "unknown") {
    const roleMap: Record<string, string> = {
      subject: "Fa'il",
      object: "Maf'ul Bih",
      mudhaf_ilayh: "Mudhaf Ilayh",
      mubtada: "Mubtada'",
      khabar: "Khabar",
      khabar_munqati: "Khabar Munqati",
      naat: "Na'at (Sifat)",
      badal: "Badal",
      tawkid: "Tawkid",
      atf: "Ma'thuf",
      hal: "Hal",
      tamyiz: "Tamyiz",
      mutaaliq: "Muta'alliq",
      sila: "Silah",
      mustathna: "Mustatsna",
      khabar_inna: "Khabar Inna",
      ism_inna: "Isim Inna",
      ism_kaana: "Isim Kaana",
      khabar_kaana: "Khabar Kaana",
      mafhi: "Maf'ul Bih (Majrur)",
      mufrad: "Mufrad",
      jamid: "Jamid (Mabni)",
      sibgha: "Sibghah",
      zamir: "Dhamir",
      ism_ishara: "Isim Isyarah",
    };
    return roleMap[role] ?? role;
  }

  // Fallback: infer from POS + verb form
  if (pos === "verb" && vf === "fiil_amr") {
    return "Fi'il Amr (Kata Perintah)";
  }
  if (pos === "verb") {
    return "Fi'il (Kata Kerja)";
  }
  if (pos === "particle") {
    return "Huruf (Mabni, tidak berkedudukan)";
  }
  if (pos === "pronoun") {
    return "Dhamir (Kata Ganti)";
  }

  return "Isim (berubah sesuai 'amil)";
}

// --- I'rab Status (Grammatical Status) ----------------------

function inferIrabStatus(input: IrabInput): string {
  const { irab, pos, vf } = input;

  // Fi'il madhi and amr are always mabni
  if (pos === "verb" && (vf === "fiil_madhi" || vf === "fiil_amr")) {
    return "Mabni";
  }
  // Particles and pronouns are always mabni
  if (pos === "particle" || pos === "pronoun") {
    return "Mabni";
  }

  // Map i'rab case to Al-Munir status
  switch (irab) {
    case "raf": return "Marfu'";
    case "nasb": return "Manshub";
    case "jarr": return "Majrur";
    case "jazm": return "Majzum";
    case "none": return "Mabni";
    case "mushaddad": return "Mabni (Musyaddad)";
    case "unknown":
    default:
      if (pos === "verb" && vf === "fiil_mudhari") return "Marfu'"; // default mudhari'
      if (pos === "noun" || pos === "adjective") return "Marfu'"; // default isim
      break;
  }
  return "Marfu'";
}

// --- Tanda I'rab (Explicit Sign/Marker) ---------------------

function inferTanda(input: IrabInput, jenis: string, irabStatus: string): string {
  const { pos, vf } = input;
  // Use input.num (not destructured) to avoid TS narrowing issue
  // when the same field is checked in multiple branches.
  const num = input.num;

  // Mabni → always "Tetap (Mabni)"
  if (irabStatus === "Mabni") {
    if (pos === "verb" && vf === "fiil_madhi") return "Fathah (Mabni)";
    if (pos === "verb" && vf === "fiil_amr") return "Sukun (Mabni)";
    if (pos === "particle") return "Sukun (Mabni)";
    return "Tetap (Mabni)";
  }

  // Isim Mutsanna
  if (num === "dual") {
    if (irabStatus === "Marfu'") return "Alif";
    return "Ya'";
  }

  // Jamak Mu'annats Salim → Kasrah untuk Manshub (not Fathah).
  // Check BEFORE Jamak Mudzakkar Salim since both can have num=plural/broken_plural.
  if (jenis.includes("Mu'annats") && (num === "plural" || num === "broken_plural")) {
    if (irabStatus === "Manshub") return "Kasrah";
  }

  // Jamak Mudzakkar Salim (num=plural, not broken_plural/collective)
  if (num === "plural") {
    if (irabStatus === "Marfu'") return "Wawu";
    return "Ya'";
  }

  // Fi'il Mudhari'
  if (pos === "verb" && vf === "fiil_mudhari") {
    if (irabStatus === "Marfu'") return "Dhammah";
    if (irabStatus === "Manshub") return "Fathah";
    if (irabStatus === "Majzum") return "Sukun";
  }

  // Standard signs for singular isim
  if (irabStatus === "Marfu'") return "Dhammah";
  if (irabStatus === "Manshub") return "Fathah";
  if (irabStatus === "Majrur") return "Kasrah";
  if (irabStatus === "Majzum") return "Sukun";

  return "Dhammah";
}

// --- 'Amil (Governor / Cause of I'rab) ----------------------

function inferAmil(input: IrabInput, _kedudukan: string, irabStatus: string): string {
  const { pos, role } = input;

  // Mabni items have no 'amil (or it's intrinsic)
  if (irabStatus === "Mabni") {
    if (pos === "verb") return "Mabni 'ala al-asl (kata kerja mabni secara default)";
    if (pos === "particle") return "Mabni 'ala al-asl (huruf selalu mabni)";
    return "Mabni (kata tetap)";
  }

  // Map kedudukan to 'amil
  if (role) {
    const amilMap: Record<string, string> = {
      subject: "Fi'il yang mendahuluinya",
      object: "Fi'il + Fa'il sebelumnya",
      mudhaf_ilayh: "Mudhaf sebelumnya (idhafah)",
      mubtada: "Ibtida' (permulaan kalimat)",
      khabar: "Mubtada' sebelumnya",
      naat: "Man'ut (kata yang disifati) sebelumnya",
      badal: "Mubdal minhu (kata yang diganti) sebelumnya",
      tawkid: "Mu'akkad (kata yang dikuatkan) sebelumnya",
      atf: "Ma'thuf 'alayh (kata sebelumnya) + Huruf 'Athf",
      hal: "Shahib al-hal (pelaku keadaan)",
      tamyiz: "Mumayyaz (kata yang dispesifikasi) sebelumnya",
      mutaaliq: "Huruf Jarr sebelumnya",
      sila: "Isim Maushul sebelumnya",
      mustathna: "Mustatsna minhu + Huruf Istitsna'",
      khabar_inna: "Inna wa akhwatuha",
      ism_inna: "Inna wa akhwatuha",
      ism_kaana: "Kaana wa akhwatuha",
      khabar_kaana: "Kaana wa akhwatuha",
      mafhi: "Huruf Jarr sebelumnya",
    };
    if (amilMap[role]) return amilMap[role];
  }

  // Fallback based on i'rab status
  if (irabStatus === "Marfu'") return "Amil Rafa' (umum)";
  if (irabStatus === "Manshub") return "Amil Nashab (umum)";
  if (irabStatus === "Majrur") return "Amil Jarr (umum)";
  if (irabStatus === "Majzum") return "Amil Jazm (umum)";

  return "Tidak diketahui";
}

// --- Penjelasan (Inductive Conclusion: Nahwu al-Wadhih) -----

function buildPenjelasan(
  arabic: string,
  jenis: string,
  kedudukan: string,
  irabStatus: string,
  tanda: string,
  amil: string
): string {
  // Nahwu al-Wadhih inductive style:
  // "Setelah diamati, kata X adalah [Jenis] yang berkedudukan sebagai [Kedudukan].
  //  Oleh karena itu, i'rob-nya [I'rob] dengan tanda [Tanda], disebabkan oleh [Amil]."
  return (
    `Berdasarkan pengamatan: kata '${arabic}' adalah ${jenis} ` +
    `yang berkedudukan sebagai ${kedudukan}. ` +
    `Oleh karena itu, i'rob-nya ${irabStatus} dengan tanda ${tanda}, ` +
    `disebabkan oleh ${amil}.`
  );
}
