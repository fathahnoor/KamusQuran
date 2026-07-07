import type { CompactWord } from "../wordBuilder";

// Batch 19: Kata ganti (pronouns) untuk Mode Kalimat ID→AR.
// Semua kata ganti adalah mabni (irab: none), pos: pronoun.
// Note: أَنْتَ / أَنْتِ both strip to انت so they can't coexist as separate
// entries (deduplication would drop one). Merged via alt meanings.
export const BATCH_19: CompactWord[] = [
  { id: "ana", ar: "أَنَا", root: "انا", mid: "saya, aku", men: "I, me", pos: "pronoun", freq: 0, rank: 1271, wazan: "ana", form: "I", g: "common", num: "singular", def: "definite", irab: "none" },
  { id: "nahnu", ar: "نَحْنُ", root: "نحن", mid: "kami, kita", men: "we, us", pos: "pronoun", freq: 0, rank: 1272, wazan: "nahnu", form: "I", g: "common", num: "plural", def: "definite", irab: "none" },
  { id: "anta", ar: "أَنْتَ", root: "انت", mid: "kamu, anda", alt: ["kamu (perempuan)", "anda (perempuan)"], men: "you (sing.)", pos: "pronoun", freq: 0, rank: 1273, wazan: "anta", form: "I", g: "common", num: "singular", def: "definite", irab: "none" },
  { id: "huwa", ar: "هُوَ", root: "هو", mid: "dia, ia (laki-laki)", men: "he, it (masc.)", pos: "pronoun", freq: 0, rank: 1274, wazan: "huwa", form: "I", g: "masculine", num: "singular", def: "definite", irab: "none" },
  { id: "hiya", ar: "هِيَ", root: "هي", mid: "dia, ia (perempuan)", men: "she, it (fem.)", pos: "pronoun", freq: 0, rank: 1275, wazan: "hiya", form: "I", g: "feminine", num: "singular", def: "definite", irab: "none" },
  { id: "hum", ar: "هُمْ", root: "هم", mid: "mereka (laki-laki)", alt: ["mereka"], men: "they (masc. pl.)", pos: "pronoun", freq: 0, rank: 1276, wazan: "hum", form: "I", g: "masculine", num: "plural", def: "definite", irab: "none" },
  { id: "hunna", ar: "هُنَّ", root: "هن", mid: "mereka (perempuan)", men: "they (fem. pl.)", pos: "pronoun", freq: 0, rank: 1277, wazan: "hunna", form: "I", g: "feminine", num: "plural", def: "definite", irab: "none" },
  { id: "antum", ar: "أَنْتُمْ", root: "انت", mid: "kalian (laki-laki)", alt: ["kalian"], men: "you (masc. pl.)", pos: "pronoun", freq: 0, rank: 1278, wazan: "antum", form: "I", g: "masculine", num: "plural", def: "definite", irab: "none" },
];
