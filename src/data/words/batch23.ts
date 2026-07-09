import type { CompactWord } from "../wordBuilder";

// Batch 23: Fase 1 — 100 kata paling sering muncul di 6 PDF Nahwu/Sharf (folder Nopush).
// Data diekstrak dari buku An-Nahwu al-Wadhih & Metode Al-Munir.
// Referensi: scripts/pdf_words_phase_plan.json
export const BATCH_23: CompactWord[] = [
  // ================================================================
  // PARTIKEL & KATA DEPAN (Particles/Prepositions)
  // ================================================================
  { id: "fi", ar: "فِي", root: "في", mid: "di, dalam, pada", men: "in, at, within", pos: "particle", freq: 0, rank: 1800, irab: "none" },
  { id: "ilaa", ar: "إِلَىٰ", root: "الي", mid: "ke, kepada, menuju", men: "to, toward, until", pos: "particle", freq: 0, rank: 1801, irab: "none" },
  { id: "alaa", ar: "عَلَىٰ", root: "علي", mid: "di atas, atas, terhadap", men: "on, upon, over", pos: "particle", freq: 0, rank: 1802, irab: "none" },
  { id: "inna", ar: "إِنَّ", root: "ان", mid: "sesungguhnya, bahwa (penegas)", men: "indeed, verily (emphasis particle)", pos: "particle", freq: 0, rank: 1803, irab: "none" },
  { id: "aw", ar: "أَوْ", root: "او", mid: "atau", men: "or", pos: "particle", freq: 0, rank: 1804, irab: "none" },
  { id: "amma", ar: "أَمْ", root: "ام", mid: "ataukah (pilihan)", men: "or (alternative question)", pos: "particle", freq: 0, rank: 1805, irab: "none" },
  { id: "illa2", ar: "إِلَّا", root: "الا", mid: "kecuali, melainkan", men: "except, unless", pos: "particle", freq: 0, rank: 1806, irab: "none" },
  { id: "idha", ar: "إِذَا", root: "اذا", mid: "apabila, jika, ketika", men: "when, if, whenever", pos: "particle", freq: 0, rank: 1807, irab: "none" },
  { id: "laa", ar: "لَا", root: "لا", mid: "tidak, jangan", men: "no, not, do not", pos: "particle", freq: 0, rank: 1808, irab: "none" },
  { id: "maa", ar: "مَا", root: "ما", mid: "apa, yang, tidak", men: "what, that which, not", pos: "particle", freq: 0, rank: 1809, irab: "none" },
  { id: "man", ar: "مَنْ", root: "من", mid: "siapa, barangsiapa", men: "who, whoever", pos: "particle", freq: 0, rank: 1810, irab: "none" },
  { id: "an", ar: "أَنْ", root: "ان", mid: "bahwa, untuk (penghubung)", men: "that, to (subordinating)", pos: "particle", freq: 0, rank: 1811, irab: "none" },
  { id: "lan", ar: "لَنْ", root: "لن", mid: "tidak akan (penafi masa depan)", men: "will not, never (future negator)", pos: "particle", freq: 0, rank: 1812, irab: "none" },
  { id: "lam", ar: "لَمْ", root: "لم", mid: "telah tidak (penafi lampau)", men: "did not (past negator)", pos: "particle", freq: 0, rank: 1813, irab: "none" },
  { id: "hal", ar: "هَلْ", root: "هل", mid: "apakah (kata tanya)", men: "is it? (interrogative)", pos: "particle", freq: 0, rank: 1814, irab: "none" },
  { id: "qad", ar: "قَدْ", root: "قد", mid: "sungguh, telah, kadang", men: "indeed, already, perhaps", pos: "particle", freq: 0, rank: 1815, irab: "none" },
  { id: "li", ar: "لِـ", root: "ل", mid: "untuk, bagi, milik", men: "for, to, belonging to", pos: "particle", freq: 0, rank: 1816, irab: "none" },
  { id: "bi", ar: "بِـ", root: "ب", mid: "dengan, di, karena", men: "with, by, in, because of", pos: "particle", freq: 0, rank: 1817, irab: "none" },
  { id: "ka", ar: "كَـ", root: "ك", mid: "seperti, bagaikan", men: "like, as", pos: "particle", freq: 0, rank: 1818, irab: "none" },
  { id: "wa", ar: "وَ", root: "و", mid: "dan, demi", men: "and, by (oath)", pos: "particle", freq: 0, rank: 1819, irab: "none" },
  { id: "fa", ar: "فَـ", root: "ف", mid: "maka, lalu", men: "then, so, and then", pos: "particle", freq: 0, rank: 1820, irab: "none" },
  { id: "thumma", ar: "ثُمَّ", root: "ثم", mid: "kemudian, lalu", men: "then, thereafter", pos: "particle", freq: 0, rank: 1821, irab: "none" },
  { id: "hatta", ar: "حَتَّىٰ", root: "حتي", mid: "hingga, sehingga, sampai", men: "until, even, so that", pos: "particle", freq: 0, rank: 1822, irab: "none" },
  { id: "bal", ar: "بَلْ", root: "بل", mid: "bahkan, tetapi (koreksi)", men: "rather, but, nay", pos: "particle", freq: 0, rank: 1823, irab: "none" },
  { id: "kallaa", ar: "كَلَّا", root: "كل", mid: "sekali-kali tidak, jangan", men: "no! certainly not!", pos: "particle", freq: 0, rank: 1824, irab: "none" },
  { id: "min", ar: "مِنْ", root: "من", mid: "dari, daripada, sebagian", men: "from, of, than", pos: "particle", freq: 0, rank: 1825, irab: "none" },
  { id: "an2", ar: "عَنْ", root: "عن", mid: "dari, tentang, mengenai", men: "about, from, concerning", pos: "particle", freq: 0, rank: 1826, irab: "none" },

  // ================================================================
  // ISTILAH NAHWU/SHARF (Grammar Terminology)
  // ================================================================
  { id: "fil2", ar: "فِعْل", root: "فعل", mid: "kata kerja, fi'il, perbuatan", men: "verb, action", pos: "noun", freq: 0, rank: 1827, wazan: "fi'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "ism_nahw2", ar: "اِسْم نَحْو", root: "سمو", mid: "isim (istilah nahwu: kata benda)", men: "noun (grammar term)", pos: "noun", freq: 0, rank: 1828, wazan: "if'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "harf_nahw", ar: "حَرْف", root: "حرف", mid: "huruf, partikel, kata tugas", men: "particle, letter, preposition", pos: "noun", freq: 0, rank: 1829, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "faail", ar: "فَاعِل", root: "فعل", mid: "pelaku, subjek, fa'il", men: "doer, agent, subject", pos: "noun", freq: 0, rank: 1830, wazan: "faa'il", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "maful", ar: "مَفْعُول", root: "فعل", mid: "objek, maf'ul, sasaran", men: "object, patient", pos: "noun", freq: 0, rank: 1831, wazan: "maf'uul", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "mudari", ar: "مُضَارِع", root: "ضرع", mid: "mudhari' (kata kerja kini/akan)", men: "present/future tense verb", pos: "noun", freq: 0, rank: 1832, wazan: "mufaa'il", form: "III", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "madhi", ar: "مَاضِي", root: "مضي", mid: "madhi (kata kerja lampau)", men: "past tense verb", pos: "noun", freq: 0, rank: 1833, wazan: "faa'i'", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "amr_nahw", ar: "أَمْر", root: "امر", mid: "amr (kata perintah)", men: "imperative, command", pos: "noun", freq: 0, rank: 1834, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "marfu", ar: "مَرْفُوع", root: "رفع", mid: "marfu' (i'rab rafa')", men: "nominative case (rafa')", pos: "noun", freq: 0, rank: 1835, wazan: "maf'uul", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "mansub", ar: "مَنْصُوب", root: "نصب", mid: "manshub (i'rab nashab)", men: "accusative case (nasb)", pos: "noun", freq: 0, rank: 1836, wazan: "maf'uul", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "majrur", ar: "مَجْرُور", root: "جرر", mid: "majrur (i'rab jarr)", men: "genitive case (jarr)", pos: "noun", freq: 0, rank: 1837, wazan: "maf'uul", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "majzum", ar: "مَجْزُوم", root: "جزم", mid: "majzum (i'rab jazm)", men: "jussive case (jazm)", pos: "noun", freq: 0, rank: 1838, wazan: "maf'uul", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "mabni", ar: "مَبْنِيّ", root: "بني", mid: "mabni (tetap, tidak berubah)", men: "indeclinable, fixed", pos: "adjective", freq: 0, rank: 1839, wazan: "maf'iy", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "murab", ar: "مُعْرَب", root: "عرب", mid: "mu'rab (dapat berubah i'rab)", men: "declinable, inflected", pos: "adjective", freq: 0, rank: 1840, wazan: "muf'al", form: "IV", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "mubtada2", ar: "مُبْتَدَأ", root: "بدء", mid: "mubtada' (subjek nominal)", men: "subject of nominal sentence", pos: "noun", freq: 0, rank: 1841, wazan: "mufta'al", form: "VIII", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "khabar_nahw", ar: "خَبَر", root: "خبر", mid: "khabar (predikat nominal)", men: "predicate of nominal sentence", pos: "noun", freq: 0, rank: 1842, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "jumlah", ar: "جُمْلَة", root: "جمل", mid: "kalimat, klausa, jumlah", men: "sentence, clause", pos: "noun", freq: 0, rank: 1843, wazan: "fu'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "irab2", ar: "إِعْرَاب", root: "عرب", mid: "i'rab (analisis gramatikal)", men: "grammatical analysis, parsing", pos: "noun", freq: 0, rank: 1844, wazan: "if'aal", form: "IV", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "sukun", ar: "سُكُون", root: "سكن", mid: "sukun (tanda mati)", men: "sukun (vowelless diacritic)", pos: "noun", freq: 0, rank: 1845, wazan: "fu'uul", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "fathah", ar: "فَتْحَة", root: "فتح", mid: "fathah (tanda a)", men: "fatha (a-vowel diacritic)", pos: "noun", freq: 0, rank: 1846, wazan: "fa'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "dhammah", ar: "ضَمَّة", root: "ضمم", mid: "dhammah (tanda u)", men: "damma (u-vowel diacritic)", pos: "noun", freq: 0, rank: 1847, wazan: "fa'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "kasrah", ar: "كَسْرَة", root: "كسر", mid: "kasrah (tanda i)", men: "kasra (i-vowel diacritic)", pos: "noun", freq: 0, rank: 1848, wazan: "fa'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "raf", ar: "رَفْع", root: "رفع", mid: "rafa' (kasus nominatif)", men: "nominative case", pos: "noun", freq: 0, rank: 1849, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "nasb", ar: "نَصْب", root: "نصب", mid: "nashab (kasus akusatif)", men: "accusative case", pos: "noun", freq: 0, rank: 1850, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "jarr", ar: "جَرّ", root: "جرر", mid: "jarr (kasus genitif)", men: "genitive case", pos: "noun", freq: 0, rank: 1851, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "jazm", ar: "جَزْم", root: "جزم", mid: "jazm (kasus apokopat)", men: "jussive case", pos: "noun", freq: 0, rank: 1852, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "qaidah", ar: "قَاعِدَة", root: "قعد", mid: "kaidah, aturan, pedoman", men: "rule, principle", pos: "noun", freq: 0, rank: 1853, wazan: "faa'ila", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "tamrin", ar: "تَمْرِين", root: "مرن", mid: "latihan, exercise", men: "exercise, drill, practice", pos: "noun", freq: 0, rank: 1854, wazan: "taf'iil", form: "II", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "mithal", ar: "مِثَال", root: "مثل", mid: "contoh, misal, perumpamaan", men: "example, model", pos: "noun", freq: 0, rank: 1855, wazan: "fi'aal", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "alaamah", ar: "عَلَامَة", root: "علم", mid: "tanda, ciri, markah", men: "sign, mark, indicator", pos: "noun", freq: 0, rank: 1856, wazan: "fa'aala", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "dhamir", ar: "ضَمِير", root: "ضمر", mid: "kata ganti, dhamir", men: "pronoun", pos: "noun", freq: 0, rank: 1857, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "mudhaf", ar: "مُضَاف", root: "ضيف", mid: "mudhaf (yang disandarkan)", men: "annexed noun (construct)", pos: "noun", freq: 0, rank: 1858, wazan: "mufa'al", form: "IV", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "mudhaf_ilayh_nahw", ar: "مُضَاف إِلَيْه", root: "ضيف", mid: "mudhaf ilayh (pelengkap sandang)", men: "possessor (annexed to)", pos: "noun", freq: 0, rank: 1859, wazan: "mufa'al", form: "IV", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "naat_nahw", ar: "نَعْت", root: "نعت", mid: "na'at (sifat/adjektif)", men: "adjective, attribute", pos: "noun", freq: 0, rank: 1860, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "badal_nahw", ar: "بَدَل", root: "بدل", mid: "badal (apposisi/pengganti)", men: "apposition, substitute", pos: "noun", freq: 0, rank: 1861, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "atf_nahw", ar: "عَطْف", root: "عطف", mid: "'athf (konjungsi/penghubung)", men: "conjunction, coupling", pos: "noun", freq: 0, rank: 1862, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "tawkid", ar: "تَوْكِيد", root: "وكد", mid: "tawkid (penegasan)", men: "emphasis, corroboration", pos: "noun", freq: 0, rank: 1863, wazan: "taf'iil", form: "II", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "hal_nahw", ar: "حَال", root: "حول", mid: "hal (keterangan keadaan)", men: "circumstantial adverb", pos: "noun", freq: 0, rank: 1864, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "tamyiz_nahw", ar: "تَمْيِيز", root: "ميز", mid: "tamyiz (spesifikasi/penjelas)", men: "specification, distinction", pos: "noun", freq: 0, rank: 1865, wazan: "taf'iil", form: "II", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "sahih", ar: "صَحِيح", root: "صحح", mid: "sahih, benar, sehat (kata)", men: "sound, regular (verb)", pos: "adjective", freq: 0, rank: 1866, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "mutall", ar: "مُعْتَلّ", root: "علل", mid: "mu'tal (kata lemah/cacat)", men: "weak, defective (verb)", pos: "adjective", freq: 0, rank: 1867, wazan: "mufta'l", form: "VIII", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },

  // ================================================================
  // KATA BENDA & KERJA UMUM (Common Nouns & Verbs)
  // ================================================================
  { id: "yakun", ar: "يَكُون", root: "كون", mid: "adalah, menjadi (mudhari')", men: "to be (imperfect)", pos: "verb", freq: 0, rank: 1868, wazan: "yaf'ul", form: "I", vf: "fiil_mudhari", irab: "raf" },
  { id: "takun", ar: "تَكُون", root: "كون", mid: "adalah (mudhari' feminin)", men: "to be (imperfect fem.)", pos: "verb", freq: 0, rank: 1869, wazan: "taf'ul", form: "I", vf: "fiil_mudhari", irab: "raf" },
  { id: "dalla", ar: "دَلَّ", root: "دلل", mid: "menunjukkan, mengindikasikan", men: "to indicate, to show", pos: "verb", freq: 0, rank: 1870, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none" },
  { id: "tadullu", ar: "تَدُلّ", root: "دلل", mid: "menunjukkan (mudhari' fem.)", men: "to indicate (imperfect)", pos: "verb", freq: 0, rank: 1871, wazan: "tafu'l", form: "I", vf: "fiil_mudhari", irab: "raf" },
  { id: "qala", ar: "قَال", root: "قول", mid: "berkata, mengatakan", men: "to say, to speak", pos: "verb", freq: 0, rank: 1872, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none" },
  { id: "husul", ar: "حُصُول", root: "حصل", mid: "perolehan, terjadinya, hasil", men: "occurrence, obtaining", pos: "noun", freq: 0, rank: 1873, wazan: "fu'uul", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "insan2", ar: "إِنْسَان", root: "انس", mid: "manusia, insan", men: "human, person", pos: "noun", freq: 0, rank: 1874, wazan: "if'aal", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "makan2", ar: "مَكَان", root: "مكن", mid: "tempat, lokasi", men: "place, location", pos: "noun", freq: 0, rank: 1875, wazan: "mafaal", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "mufid", ar: "مُفِيد", root: "فيد", mid: "berguna, bermanfaat, informatif", men: "useful, beneficial", pos: "adjective", freq: 0, rank: 1876, wazan: "mufiil", form: "IV", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "saabiq", ar: "سَابِق", root: "سبق", mid: "sebelumnya, terdahulu", men: "previous, preceding", pos: "adjective", freq: 0, rank: 1877, wazan: "faa'il", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "aakhar", ar: "آخَر", root: "اخر", mid: "lain, yang lain", men: "other, another", pos: "adjective", freq: 0, rank: 1878, wazan: "aaf'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "ukhra", ar: "أُخْرَىٰ", root: "اخر", mid: "lain (feminin)", men: "other (feminine)", pos: "adjective", freq: 0, rank: 1879, wazan: "fu'laa", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "thalith", ar: "ثَالِث", root: "ثلث", mid: "ketiga", men: "third", pos: "adjective", freq: 0, rank: 1880, wazan: "faa'il", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "thalathah", ar: "ثَلَاثَة", root: "ثلث", mid: "tiga", men: "three", pos: "number", freq: 0, rank: 1881, wazan: "fa'aala", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "khamsah", ar: "خَمْسَة", root: "خمس", mid: "lima", men: "five", pos: "number", freq: 0, rank: 1882, wazan: "fa'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "muslimun", ar: "مُسْلِمُون", root: "سلم", mid: "orang-orang muslim", men: "Muslims", pos: "noun", freq: 0, rank: 1883, wazan: "muf'iluun", form: "IV", g: "masculine", num: "plural", def: "indefinite", irab: "raf" },
  { id: "afal", ar: "أَفْعَال", root: "فعل", mid: "kata kerja (jamak)", men: "verbs, actions (plural)", pos: "noun", freq: 0, rank: 1884, wazan: "af'aal", form: "I", g: "masculine", num: "plural", def: "indefinite", irab: "raf" },
  { id: "asmaa", ar: "أَسْمَاء", root: "سمو", mid: "nama-nama, kata benda (jamak)", men: "names, nouns (plural)", pos: "noun", freq: 0, rank: 1885, wazan: "af'aal", form: "I", g: "masculine", num: "plural", def: "indefinite", irab: "raf" },
  { id: "amthilah", ar: "أَمْثِلَة", root: "مثل", mid: "contoh-contoh, misal (jamak)", men: "examples (plural)", pos: "noun", freq: 0, rank: 1886, wazan: "af'ila", form: "I", g: "feminine", num: "plural", def: "indefinite", irab: "raf" },
  { id: "kalimat", ar: "كَلِمَات", root: "كلم", mid: "kata-kata, kalimat (jamak)", men: "words (plural)", pos: "noun", freq: 0, rank: 1887, wazan: "fa'ilaat", form: "I", g: "feminine", num: "plural", def: "indefinite", irab: "raf" },
  { id: "aarab", ar: "أَعْرَب", root: "عرب", mid: "menganalisis i'rab, mengurai", men: "to parse grammatically", pos: "verb", freq: 0, rank: 1888, wazan: "af'ala", form: "IV", vf: "fiil_madhi", irab: "none" },
  { id: "haythu", ar: "حَيْثُ", root: "حيث", mid: "di mana, sebagaimana", men: "where, whereas", pos: "particle", freq: 0, rank: 1889, irab: "none" },
  { id: "awwal", ar: "أَوَّل", root: "اول", mid: "pertama, awal", men: "first, beginning", pos: "adjective", freq: 0, rank: 1890, wazan: "af'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },
  { id: "thaani", ar: "ثَانِي", root: "ثني", mid: "kedua", men: "second", pos: "adjective", freq: 0, rank: 1891, wazan: "faa'i'", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf" },

  // ================================================================
  // KATA GANTI & PRONOMINA (Pronouns)
  // ================================================================
  { id: "anta", ar: "أَنْتَ", root: "انت", mid: "kamu (laki-laki)", men: "you (masculine singular)", pos: "pronoun", freq: 0, rank: 1892, g: "masculine", num: "singular", irab: "none" },
  { id: "hiya", ar: "هِيَ", root: "هي", mid: "dia (perempuan)", men: "she, it (feminine)", pos: "pronoun", freq: 0, rank: 1893, g: "feminine", num: "singular", irab: "none" },
  { id: "haa", ar: "هَا", root: "ها", mid: "-nya (kata ganti objek fem.)", men: "her (attached pronoun)", pos: "pronoun", freq: 0, rank: 1894, g: "feminine", num: "singular", irab: "none" },

  // ================================================================
  // KATA DENGAN KLITIK (Words with attached clitics — untuk deteksi langsung)
  // ================================================================
  { id: "minha", ar: "مِنْهَا", root: "من", mid: "darinya (perempuan/benda)", men: "from her/it", pos: "particle", freq: 0, rank: 1895, irab: "none" },
  { id: "fiha", ar: "فِيهَا", root: "في", mid: "di dalamnya", men: "in it/her", pos: "particle", freq: 0, rank: 1896, irab: "none" },
  { id: "alayhi", ar: "عَلَيْهِ", root: "علي", mid: "atasnya, kepadanya (laki-laki)", men: "upon him/it", pos: "particle", freq: 0, rank: 1897, irab: "none" },
  { id: "alayha", ar: "عَلَيْهَا", root: "علي", mid: "atasnya, kepadanya (perempuan)", men: "upon her/it", pos: "particle", freq: 0, rank: 1898, irab: "none" },
  { id: "ilayhi", ar: "إِلَيْهِ", root: "الي", mid: "kepadanya (laki-laki)", men: "to him/it", pos: "particle", freq: 0, rank: 1899, irab: "none" },
  { id: "biha", ar: "بِهَا", root: "ب", mid: "dengannya (perempuan/benda)", men: "with her/it", pos: "particle", freq: 0, rank: 1900, irab: "none" },
];
