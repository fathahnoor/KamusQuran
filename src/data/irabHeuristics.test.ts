// ============================================================
// Unit Tests: irabHeuristics.ts (v3.0 Core Engine)
// ============================================================
import { describe, it, expect } from "vitest";
import { generateStructuredIrab } from "./irabHeuristics";

// --- Jenis (Word Type) --------------------------------------

describe("inferJenis — Word Type Classification", () => {
  it("should classify noun singular masculine", () => {
    const result = generateStructuredIrab({
      arabic: "كِتَاب",
      pos: "noun",
      num: "singular",
      g: "masculine",
    });
    expect(result.jenis).toBe("Isim Mufrad Mudzakkar");
  });

  it("should classify noun dual", () => {
    const result = generateStructuredIrab({
      arabic: "كِتَابَانِ",
      pos: "noun",
      num: "dual",
    });
    expect(result.jenis).toBe("Isim Mutsanna");
  });

  it("should classify noun feminine", () => {
    const result = generateStructuredIrab({
      arabic: "رَحْمَة",
      pos: "noun",
      num: "singular",
      g: "feminine",
    });
    expect(result.jenis).toBe("Isim Mufrad Mu'annats");
  });

  it("should classify proper noun", () => {
    const result = generateStructuredIrab({
      arabic: "مُحَمَّد",
      pos: "proper_noun",
      num: "singular",
    });
    expect(result.jenis).toContain("Nama Diri");
  });

  it("should classify fi'il madhi", () => {
    const result = generateStructuredIrab({
      arabic: "كَتَبَ",
      pos: "verb",
      vf: "fiil_madhi",
    });
    expect(result.jenis).toBe("Fi'il Madhi");
  });

  it("should classify fi'il mudhari'", () => {
    const result = generateStructuredIrab({
      arabic: "يَكْتُبُ",
      pos: "verb",
      vf: "fiil_mudhari",
    });
    expect(result.jenis).toBe("Fi'il Mudhari'");
  });

  it("should classify fi'il amr", () => {
    const result = generateStructuredIrab({
      arabic: "اُكْتُبْ",
      pos: "verb",
      vf: "fiil_amr",
    });
    expect(result.jenis).toBe("Fi'il Amr");
  });

  it("should classify particle as mabni", () => {
    const result = generateStructuredIrab({
      arabic: "فِي",
      pos: "particle",
    });
    expect(result.jenis).toBe("Huruf Jarr");
    expect(result.irabStatus).toBe("Mabni");
  });

  it("should classify inna as Huruf Naskh", () => {
    const result = generateStructuredIrab({
      arabic: "إِنَّ",
      pos: "particle",
    });
    expect(result.jenis).toBe("Huruf Naskh (Inna wa Akhwatuha)");
  });

  it("should classify pronoun", () => {
    const result = generateStructuredIrab({
      arabic: "هُوَ",
      pos: "pronoun",
    });
    expect(result.jenis).toBe("Dhamir");
    expect(result.irabStatus).toBe("Mabni");
  });
});

// --- I'rab Status -------------------------------------------

describe("inferIrabStatus — Grammatical Status", () => {
  it("should return Marfu' for raf noun", () => {
    const result = generateStructuredIrab({
      arabic: "كِتَابٌ",
      pos: "noun",
      irab: "raf",
      num: "singular",
    });
    expect(result.irabStatus).toBe("Marfu'");
  });

  it("should return Manshub for nasb noun", () => {
    const result = generateStructuredIrab({
      arabic: "كِتَابًا",
      pos: "noun",
      irab: "nasb",
      num: "singular",
    });
    expect(result.irabStatus).toBe("Manshub");
  });

  it("should return Majrur for jarr noun", () => {
    const result = generateStructuredIrab({
      arabic: "كِتَابٍ",
      pos: "noun",
      irab: "jarr",
      num: "singular",
    });
    expect(result.irabStatus).toBe("Majrur");
  });

  it("should return Mabni for fi'il madhi", () => {
    const result = generateStructuredIrab({
      arabic: "كَتَبَ",
      pos: "verb",
      vf: "fiil_madhi",
      irab: "none",
    });
    expect(result.irabStatus).toBe("Mabni");
  });

  it("should return Mabni for particle", () => {
    const result = generateStructuredIrab({
      arabic: "مِنْ",
      pos: "particle",
      irab: "none",
    });
    expect(result.irabStatus).toBe("Mabni");
  });
});

// --- Tanda I'rab --------------------------------------------

describe("inferTanda — I'rab Sign/Marker", () => {
  it("should give Dhammah for mufrad marfu'", () => {
    const result = generateStructuredIrab({
      arabic: "زَيْدٌ",
      pos: "noun",
      num: "singular",
      irab: "raf",
    });
    expect(result.tanda).toBe("Dhammah");
  });

  it("should give Fathah for mufrad manshub", () => {
    const result = generateStructuredIrab({
      arabic: "زَيْدًا",
      pos: "noun",
      num: "singular",
      irab: "nasb",
    });
    expect(result.tanda).toBe("Fathah");
  });

  it("should give Kasrah for mufrad majrur", () => {
    const result = generateStructuredIrab({
      arabic: "كِتَابٍ",
      pos: "noun",
      num: "singular",
      irab: "jarr",
    });
    expect(result.tanda).toBe("Kasrah");
  });

  it("should give Wawu for jamak mudzakkar salim marfu'", () => {
    const result = generateStructuredIrab({
      arabic: "مُسْلِمُونَ",
      pos: "noun",
      num: "plural",
      irab: "raf",
    });
    expect(result.tanda).toBe("Wawu");
  });

  it("should give Ya' for jamak mudzakkar salim manshub", () => {
    const result = generateStructuredIrab({
      arabic: "مُسْلِمِينَ",
      pos: "noun",
      num: "plural",
      irab: "nasb",
    });
    expect(result.tanda).toBe("Ya'");
  });

  it("should give Alif for mutsanna marfu'", () => {
    const result = generateStructuredIrab({
      arabic: "رَجُلَانِ",
      pos: "noun",
      num: "dual",
      irab: "raf",
    });
    expect(result.tanda).toBe("Alif");
  });

  it("should give Fathah (Mabni) for fi'il madhi", () => {
    const result = generateStructuredIrab({
      arabic: "كَتَبَ",
      pos: "verb",
      vf: "fiil_madhi",
      irab: "none",
    });
    expect(result.tanda).toBe("Fathah (Mabni)");
  });

  it("should give Sukun (Mabni) for fi'il amr", () => {
    const result = generateStructuredIrab({
      arabic: "اُكْتُبْ",
      pos: "verb",
      vf: "fiil_amr",
      irab: "none",
    });
    expect(result.tanda).toBe("Sukun (Mabni)");
  });
});

// --- 'Amil --------------------------------------------------

describe("inferAmil — Governor/Cause of I'rab", () => {
  it("should return Ibtida' for mubtada", () => {
    const result = generateStructuredIrab({
      arabic: "اللَّهُ",
      pos: "noun",
      irab: "raf",
      role: "mubtada",
    });
    expect(result.amil).toBe("Ibtida' (permulaan kalimat)");
  });

  it("should return Mubtada' for khabar", () => {
    const result = generateStructuredIrab({
      arabic: "كَرِيمٌ",
      pos: "adjective",
      irab: "raf",
      role: "khabar",
    });
    expect(result.amil).toBe("Mubtada' sebelumnya");
  });

  it("should return fi'il for subject", () => {
    const result = generateStructuredIrab({
      arabic: "زَيْدٌ",
      pos: "noun",
      irab: "raf",
      role: "subject",
    });
    expect(result.amil).toBe("Fi'il yang mendahuluinya");
  });
});

// --- Manual Override ----------------------------------------

describe("Manual Override (tnd / aml)", () => {
  it("should use manual tnd override when provided", () => {
    const result = generateStructuredIrab({
      arabic: "اللَّه",
      pos: "proper_noun",
      num: "singular",
      g: "masculine",
      irab: "raf",
      role: "mubtada",
      tnd: "Dhammah",
    });
    expect(result.tanda).toBe("Dhammah");
  });

  it("should use manual aml override when provided", () => {
    const result = generateStructuredIrab({
      arabic: "الْحَمْدُ",
      pos: "noun",
      irab: "raf",
      role: "mubtada",
      aml: "Ibtida' kalam",
    });
    expect(result.amil).toBe("Ibtida' kalam");
  });
});

// --- Penjelasan (Inductive Conclusion) ----------------------

describe("buildPenjelasan — Inductive Conclusion", () => {
  it("should generate a meaningful conclusion", () => {
    const result = generateStructuredIrab({
      arabic: "كِتَابٌ",
      pos: "noun",
      num: "singular",
      g: "masculine",
      irab: "raf",
    });
    expect(result.penjelasan).toBeDefined();
    expect(result.penjelasan?.length).toBeGreaterThan(30);
    expect(result.penjelasan).toContain("كِتَابٌ");
    expect(result.penjelasan).toContain("Marfu'");
    expect(result.penjelasan).toContain("Dhammah");
  });
});

// --- Integration: Full Al-Munir 6-column output -------------

describe("Full StructuredIrab Output", () => {
  it("should produce all 7 fields", () => {
    const result = generateStructuredIrab({
      arabic: "زَيْدٌ",
      pos: "noun",
      num: "singular",
      g: "masculine",
      irab: "raf",
      role: "mubtada",
    });

    expect(result.kata).toBe("زَيْدٌ");
    expect(result.jenis).toContain("Isim");
    expect(result.kedudukan).toBe("Mubtada'");
    expect(result.irabStatus).toBe("Marfu'");
    expect(result.tanda).toBe("Dhammah");
    expect(result.amil).toContain("Ibtida'");
    expect(result.penjelasan).toBeDefined();
  });
});
