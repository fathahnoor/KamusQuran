import type { CompactWord } from "../wordBuilder";

// Batch 1: Top 50 highest-frequency Quranic lemmas (ranks 1-50)
// Data compiled from Quranic Arabic Corpus lemma frequency data.
export const BATCH_01: CompactWord[] = [
  // --- Rank 1-10: Ultra-high frequency ---
  { id: "allah", ar: "اَللَّه", root: "اله", mid: "Allah, Tuhan (nama diri)", men: "Allah, God", pos: "proper_noun", freq: 2699, rank: 1, def: "proper", irab: "none", role: "mubtada", g: "masculine", num: "singular",
    occ: [[1,1,1,1],[2,7,11,1],[112,1,6222,1]],
    ex: [[1,1,1,"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.","الله"],[112,1,6222,"قُلْ هُوَ اللَّهُ أَحَدٌ","Katakanlah: Dialah Allah, Yang Maha Esa.","الله"]] },

  { id: "qawl", ar: "قَوْل", root: "قول", mid: "perkataan, ucapan, kata", men: "saying, word", pos: "noun", freq: 1722, rank: 2, wazan: "fu'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf", role: "mubtada",
    occ: [[2,7,11,1],[4,46,646,1]],
    ex: [[2,7,11,"خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ","Allah telah mengunci hati dan pendengaran mereka.","قُلُوبِ"]] },

  { id: "kafara", ar: "كَفَر", root: "كفر", mid: "kafir, ingkar, tidak beriman", men: "to disbelieve", pos: "verb", freq: 525, rank: 3, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,6,10,1],[2,161,165,1]],
    ex: [[2,6,10,"إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ","Sesungguhnya orang-orang kafir, sama saja bagi mereka kau beri peringatan atau tidak, mereka tidak akan beriman.","كَفَرُوا"]] },

  { id: "amana", ar: "آمَن", root: "امن", mid: "beriman, percaya, merasa aman", men: "to believe, to have faith", pos: "verb", freq: 538, rank: 4, wazan: "af'ala", form: "IV", vf: "fiil_madhi", irab: "none",
    occ: [[2,3,5,1],[2,62,65,1]],
    ex: [[2,62,65,"إِنَّ الَّذِينَ آمَنُوا وَالَّذِينَ هَادُوا وَالنَّصَارَىٰ وَالصَّابِئِينَ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ","Sesungguhnya orang-orang beriman, orang-orang Yahudi, Nasrani, dan Shabiin: barangsiapa beriman kepada Allah dan hari akhir...","آمَنَ"]] },

  { id: "rabb", ar: "رَبّ", root: "رب", mid: "Tuhan, pengurus, pemelihara, pencipta", men: "Lord, sustainer", pos: "noun", freq: 980, rank: 5, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "construct", irab: "raf", role: "mudhaf_ilayh",
    occ: [[1,2,2,2],[2,1,8,1]],
    ex: [[1,2,2,"الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ","Segala puji bagi Allah, Tuhan semesta alam.","رَبِّ"]] },

  { id: "alamin", ar: "عَالَم", root: "علم", mid: "semesta alam, dunia, makhluk", men: "worlds, creation", pos: "noun", freq: 81, rank: 6, wazan: "faa'il", form: "I", g: "masculine", num: "plural", def: "definite", irab: "jarr", role: "mudhaf_ilayh",
    occ: [[1,2,2,3],[2,47,52,1]],
    ex: [[1,2,2,"الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ","Segala puji bagi Allah, Tuhan semesta alam.","الْعَالَمِينَ"]] },

  { id: "rahman", ar: "رَحْمَٰن", root: "رحم", mid: "Maha Pengasih (atribut Allah)", men: "The Most Gracious", pos: "proper_noun", freq: 57, rank: 7, wazan: "fa'laan", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf", role: "naat",
    occ: [[1,3,3,1],[2,163,167,1]],
    ex: [[1,3,3,"الرَّحْمَٰنِ الرَّحِيمِ","Yang Maha Pengasih lagi Maha Penyayang.","الرَّحْمَٰنِ"]] },

  { id: "rahim", ar: "رَحِيم", root: "رحم", mid: "Maha Penyayang (atribut Allah)", men: "The Most Merciful", pos: "adjective", freq: 115, rank: 8, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf", role: "naat",
    occ: [[1,3,3,2],[2,143,147,1]],
    ex: [[1,3,3,"الرَّحْمَٰنِ الرَّحِيمِ","Yang Maha Pengasih lagi Maha Penyayang.","الرَّحِيمِ"]] },

  { id: "malik", ar: "مَلِك", root: "ملك", mid: "raja, penguasa, pemilik", men: "king, sovereign", pos: "noun", freq: 219, rank: 9, wazan: "fa'il", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf", role: "badal",
    occ: [[1,4,4,1],[2,247,252,1]],
    ex: [[1,4,4,"مَالِكِ يَوْمِ الدِّينِ","Penguasa hari pembalasan.","مَالِكِ"]] },

  { id: "iyyaka", ar: "إِيَّاك", root: "اياك", mid: "kepada-Mu (kata ganti objek)", men: "You (object pronoun)", pos: "pronoun", freq: 9, rank: 10, g: "masculine", num: "singular", def: "definite", irab: "nasb", role: "object",
    occ: [[1,5,5,1],[1,5,5,3]],
    ex: [[1,5,5,"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ","Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami memohon pertolongan.","إِيَّاكَ"]] },

  // --- Rank 11-20 ---
  { id: "abada", ar: "عَبَد", root: "عبد", mid: "beribadah, menyembah, mengabdi", men: "to worship, to serve", pos: "verb", freq: 275, rank: 11, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[1,5,5,2],[2,83,86,1]],
    ex: [[1,5,5,"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ","Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami memohon pertolongan.","نَعْبُدُ"]] },

  { id: "istana", ar: "اسْتَعَان", root: "عون", mid: "memohon pertolongan", men: "to seek help", pos: "verb", freq: 9, rank: 12, wazan: "istaf'ala", form: "X", vf: "fiil_madhi", irab: "none",
    occ: [[1,5,5,4]],
    ex: [[1,5,5,"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ","Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami memohon pertolongan.","نَسْتَعِينُ"]] },

  { id: "hidaya", ar: "هَدَىٰ", root: "هدي", mid: "memberi petunjuk, membimbing", men: "to guide", pos: "verb", freq: 316, rank: 13, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[1,6,6,2],[2,5,7,1]],
    ex: [[1,6,6,"اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ","Tunjukkanlah kami jalan yang lurus.","اهْدِنَا"]] },

  { id: "sirat", ar: "صِرَاط", root: "صرط", mid: "jalan, jalur, lintasan", men: "path, way", pos: "noun", freq: 45, rank: 14, wazan: "fi'al", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb", role: "object",
    occ: [[1,6,6,3],[2,142,146,1]],
    ex: [[1,6,6,"اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ","Tunjukkanlah kami jalan yang lurus.","الصِّرَاطَ"]] },

  { id: "mustaqim", ar: "مُسْتَقِيم", root: "قوم", mid: "lurus, benar, tegak", men: "straight, upright", pos: "adjective", freq: 42, rank: 15, wazan: "mustaf'il", form: "X", g: "masculine", num: "singular", def: "definite", irab: "nasb", role: "naat",
    occ: [[1,6,6,4],[2,142,146,2]],
    ex: [[1,6,6,"اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ","Tunjukkanlah kami jalan yang lurus.","الْمُسْتَقِيمَ"]] },

  { id: "anama", ar: "أَنْعَم", root: "نعم", mid: "memberi nikmat, memberkati", men: "to bestow favor", pos: "verb", freq: 42, rank: 16, wazan: "af'ala", form: "IV", vf: "fiil_madhi", irab: "none",
    occ: [[1,7,7,1],[2,150,154,1]],
    ex: [[1,7,7,"صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ","(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepada mereka.","أَنْعَمْتَ"]] },

  { id: "ghadab", ar: "غَضَب", root: "غضب", mid: "marah, murka, kemarahan", men: "anger, wrath", pos: "noun", freq: 23, rank: 17, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "jarr", role: "mutaaliq",
    occ: [[1,7,7,7]],
    ex: [[1,7,7,"غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ","(bukan) jalan orang-orang yang murka kepada mereka dan bukan (pula) jalan orang-orang yang sesat.","الْمَغْضُوبِ"]] },

  { id: "dall", ar: "ضَلَّ", root: "ضلل", mid: "tersesat, menyimpang", men: "to go astray", pos: "verb", freq: 47, rank: 18, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[1,7,7,9]],
    ex: [[1,7,7,"غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ","(bukan) jalan orang-orang yang murka kepada mereka dan bukan (pula) jalan orang-orang yang sesat.","الضَّالِّينَ"]] },

  { id: "kitab", ar: "كِتَاب", root: "كتب", mid: "kitab, buku, tulisan, wahyu", men: "book, scripture, writing", pos: "noun", freq: 261, rank: 19, wazan: "fi'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf", role: "mubtada",
    occ: [[2,1,8,1],[2,2,9,1]],
    ex: [[2,2,9,"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ","Kitab (Al-Qur'an) ini tidak ada keraguan di dalamnya, petunjuk bagi orang-orang yang bertakwa.","الْكِتَابُ"]] },

  { id: "taqwa", ar: "تَقْوَىٰ", root: "وقي", mid: "takwa, ketakwaan, kesalehan", men: "piety, God-consciousness", pos: "noun", freq: 258, rank: 20, wazan: "taf'ila", form: "VIII", g: "feminine", num: "singular", def: "indefinite", irab: "jarr", role: "mutaaliq",
    occ: [[2,2,9,7],[2,21,27,1]],
    ex: [[2,2,9,"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ","Kitab (Al-Qur'an) ini tidak ada keraguan di dalamnya, petunjuk bagi orang-orang yang bertakwa.","لِلْمُتَّقِينَ"]] },

  // --- Rank 21-30 ---
  { id: "yuminuna", ar: "يُؤْمِن", root: "امن", mid: "beriman (mudhari')", men: "to believe (imperfect)", pos: "verb", freq: 366, rank: 21, wazan: "yuf'ilu", form: "IV", vf: "fiil_mudhari", irab: "raf",
    occ: [[2,3,5,3],[2,62,65,2]],
    ex: [[2,3,5,"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ","(yaitu) orang-orang yang beriman kepada yang ghaib, mendirikan salat, dan menafkahkan sebagian rezeki yang Kami berikan kepada mereka.","يُؤْمِنُونَ"]] },

  { id: "ghayb", ar: "غَيْب", root: "غيب", mid: "yang gaib, tersembunyi, tak terlihat", men: "the unseen, hidden", pos: "noun", freq: 60, rank: 22, wazan: "fayl", form: "I", g: "masculine", num: "singular", def: "definite", irab: "jarr", role: "mutaaliq",
    occ: [[2,3,5,4]],
    ex: [[2,3,5,"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ","(yaitu) orang-orang yang beriman kepada yang ghaib, mendirikan salat, dan menafkahkan sebagian rezeki yang Kami berikan kepada mereka.","الْغَيْبِ"]] },

  { id: "salah", ar: "صَلَاة", root: "صلو", mid: "salat, doa, ibadah", men: "prayer, salat", pos: "noun", freq: 83, rank: 23, wazan: "fa'alaat", form: "I", g: "feminine", num: "singular", def: "definite", irab: "nasb", role: "object",
    occ: [[2,3,5,7],[2,43,47,1]],
    ex: [[2,3,5,"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ","(yaitu) orang-orang yang beriman kepada yang ghaib, mendirikan salat, dan menafkahkan sebagian rezeki yang Kami berikan kepada mereka.","الصَّلَاةَ"]] },

  { id: "razaqa", ar: "رَزَق", root: "رزق", mid: "memberi rezeki, memberi nafkah", men: "to provide, to sustain", pos: "verb", freq: 123, rank: 24, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,3,5,9],[2,22,28,1]],
    ex: [[2,3,5,"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ","(yaitu) orang-orang yang beriman kepada yang ghaib, mendirikan salat, dan menafkahkan sebagian rezeki yang Kami berikan kepada mereka.","رَزَقْنَاهُمْ"]] },

  { id: "nafaqa", ar: "نَفَق", root: "نفق", mid: "membelanjakan, menafkahkan", men: "to spend, to expend", pos: "verb", freq: 92, rank: 25, wazan: "fa'ala", form: "I", vf: "fiil_mudhari", irab: "raf",
    occ: [[2,3,5,11]],
    ex: [[2,3,5,"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ","(yaitu) orang-orang yang beriman kepada yang ghaib, mendirikan salat, dan menafkahkan sebagian rezeki yang Kami berikan kepada mereka.","يُنفِقُونَ"]] },

  { id: "sama", ar: "سَمَاء", root: "سمو", mid: "langit, surga", men: "sky, heaven", pos: "noun", freq: 310, rank: 26, wazan: "fa'ala'", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf", role: "mubtada",
    occ: [[2,22,28,1],[2,29,35,1]],
    ex: [[2,22,28,"الَّذِينَ يَنقُضُونَ عَهْدَ اللَّهِ مِنْ بَعْدِ مِيثَاقِهِ وَيَقْطَعُونَ مَا أَمَرَ اللَّهُ بِهِ أَنْ يُوصَلَ","(yaitu) orang-orang yang memutuskan perjanjian Allah setelah diikat dengan kuat.","سَمَاء"]] },

  { id: "ard", ar: "أَرْض", root: "ارض", mid: "bumi, tanah, daratan", men: "earth, land", pos: "noun", freq: 461, rank: 27, wazan: "fa'l", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf", role: "mubtada",
    occ: [[2,22,28,2],[2,29,35,2]],
    ex: [[2,29,35,"هُوَ الَّذِي خَلَقَ لَكُمْ مَا فِي الْأَرْضِ جَمِيعًا ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ","Dialah yang menciptakan untuk kamu semua yang ada di bumi, kemudian Dia menuju ke langit...","الْأَرْضِ"]] },

  { id: "khalaqa", ar: "خَلَق", root: "خلق", mid: "menciptakan, membuat", men: "to create", pos: "verb", freq: 255, rank: 28, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,22,28,3],[2,29,35,3]],
    ex: [[2,29,35,"هُوَ الَّذِي خَلَقَ لَكُمْ مَا فِي الْأَرْضِ جَمِيعًا ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ","Dialah yang menciptakan untuk kamu semua yang ada di bumi, kemudian Dia menuju ke langit...","خَلَقَ"]] },

  { id: "qawm", ar: "قَوْم", root: "قوم", mid: "kaum, bangsa, suku", men: "people, nation, tribe", pos: "noun", freq: 383, rank: 29, wazan: "fa'l", form: "I", g: "masculine", num: "collective", def: "indefinite", irab: "raf", role: "mubtada",
    occ: [[2,126,129,1],[2,134,137,1]],
    ex: [[2,134,137,"وَقَالُوا كُونُوا هُودًا أَوْ نَصَارَىٰ تَهْتَدُوا","Dan mereka berkata: 'Jadilah kamu penganut agama Yahudi atau Nasrani, niscaya kamu mendapat petunjuk.'","قَوْم"]] },

  { id: "alam", ar: "عَلِم", root: "علم", mid: "mengetahui, mengetahi", men: "to know, to be aware", pos: "verb", freq: 854, rank: 30, wazan: "fa'ila", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,30,36,1],[2,32,38,1]],
    ex: [[2,30,36,"وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا","Dan Dia mengajarkan kepada Adam nama-nama (benda) seluruhnya.","عَلَّمَ"]] },

  // --- Rank 31-40 ---
  { id: "nas", ar: "نَاس", root: "انس", mid: "manusia, orang-orang", men: "mankind, people", pos: "noun", freq: 241, rank: 31, wazan: "fa'al", form: "IV", g: "masculine", num: "plural", def: "definite", irab: "raf", role: "mubtada",
    occ: [[2,30,36,2],[114,1,6231,1]],
    ex: [[114,1,6231,"قُلْ أَعُوذُ بِرَبِّ النَّاسِ","Katakanlah: Aku berlindung kepada Tuhan manusia.","النَّاسِ"]] },

  { id: "khalifa", ar: "خَلِيفَة", root: "خلف", mid: "khalifah, pengganti, penerus", men: "successor, caliph", pos: "noun", freq: 7, rank: 32, wazan: "fa'iila", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb", role: "object",
    occ: [[2,30,36,3]],
    ex: [[2,30,36,"إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً","Sesungguhnya Aku akan menjadikan seorang khalifah di bumi.","خَلِيفَةً"]] },

  { id: "malaika", ar: "مَلَائِكَة", root: "ملك", mid: "malaikat", men: "angels", pos: "noun", freq: 88, rank: 33, wazan: "mafa'ilat", form: "I", g: "feminine", num: "plural", def: "indefinite", irab: "raf", role: "subject",
    occ: [[2,30,36,5],[2,34,40,1]],
    ex: [[2,30,36,"قَالُوا أَتَجْعَلُ فِيهَا مَنْ يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ","Mereka (malaikat) berkata: 'Apakah Engkau akan menjadikan di dalamnya orang yang akan berbuat kerusakan?'","قَالُوا"]] },

  { id: "jahannam", ar: "جَهَنَّم", root: "جهنم", mid: "Jahannam (neraka)", men: "Jahannam (hell)", pos: "proper_noun", freq: 77, rank: 34, def: "proper", irab: "raf", role: "khabar",
    occ: [[2,24,30,1],[2,39,45,1]],
    ex: [[2,24,30,"فَإِنْ لَمْ تَفْعَلُوا وَلَنْ تَفْعَلُوا فَاتَّقُوا النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ","Maka jika kamu tidak dapat membuat (dan kamu pasti tidak akan dapat membuat), takutilah api yang bahan bakarnya manusia dan batu...","النَّارَ"]] },

  { id: "nar", ar: "نَار", root: "نور", mid: "api, neraka", men: "fire, hellfire", pos: "noun", freq: 145, rank: 35, wazan: "fa'al", form: "I", g: "feminine", num: "singular", def: "definite", irab: "nasb", role: "object",
    occ: [[2,24,30,6],[2,39,45,2]],
    ex: [[2,24,30,"فَإِنْ لَمْ تَفْعَلُوا وَلَنْ تَفْعَلُوا فَاتَّقُوا النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ","Maka jika kamu tidak dapat membuat (dan kamu pasti tidak akan dapat membuat), takutilah api yang bahan bakarnya manusia dan batu...","النَّارَ"]] },

  { id: "janna", ar: "جَنَّة", root: "جنه", mid: "surga, kebun", men: "paradise, garden", pos: "noun", freq: 66, rank: 36, wazan: "fanna", form: "I", g: "feminine", num: "singular", def: "definite", irab: "raf", role: "khabar",
    occ: [[2,25,31,1],[2,35,41,1]],
    ex: [[2,25,31,"وَبَشِّرِ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أَنَّ لَهُمْ جَنَّاتٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ","Dan sampaikanlah kabar gembira kepada orang-orang yang beriman dan berbuat baik bahwa untuk mereka (disediakan) surga-surga yang mengalir di bawahnya sungai-sungai.","جَنَّاتٍ"]] },

  { id: "abada2", ar: "أَبَد", root: "ابد", mid: "selamanya, untuk selama-lamanya", men: "eternity, forever", pos: "noun", freq: 94, rank: 37, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,25,31,8],[2,39,45,5]],
    ex: [[2,25,31,"خَالِدِينَ فِيهَا أَبَدًا","Mereka kekal di dalamnya selama-lamanya.","أَبَدًا"]] },

  { id: "adhab", ar: "عَذَاب", root: "عذب", mid: "azab, siksa, penderitaan", men: "punishment, torment", pos: "noun", freq: 289, rank: 38, wazan: "fa'aal", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,7,11,9],[2,24,30,4]],
    ex: [[2,7,11,"وَلَهُمْ عَذَابٌ عَظِيمٌ","...dan bagi mereka azab yang berat.","عَذَابٌ"]] },

  { id: "habisa", ar: "حَبِس", root: "حبس", mid: "menahan, menangguh", men: "to withhold, to detain", pos: "verb", freq: 12, rank: 39, wazan: "fa'ila", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,27,33,1]],
    ex: [[2,27,33,"فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا فَأَخْرَجَهُمَا مِمَّا كَانَا فِيهِ","Maka setan menjerumuskan keduanya darinya (surga) lalu mengeluarkan keduanya dari apa yang mereka berada di dalamnya...","فَأَخْرَجَهُمَا"]] },

  { id: "halif", ar: "خَلَف", root: "خلف", mid: "menggantikan, meninggalkan", men: "to leave behind, to succeed", pos: "verb", freq: 12, rank: 40, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,30,36,3]],
    ex: [[2,30,36,"إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً","Sesungguhnya Aku akan menjadikan seorang khalifah di bumi.","خَلِيفَةً"]] },

  // --- Rank 41-50 ---
  { id: "kalima", ar: "كَلِمَة", root: "كلم", mid: "kalimat, perkataan, janji", men: "word, statement, promise", pos: "noun", freq: 25, rank: 41, wazan: "fa'ila", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "raf", role: "mubtada",
    occ: [[2,37,43,1],[2,124,128,1]],
    ex: [[2,37,43,"فَتَلَقَّىٰ آدَمُ مِنْ رَبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ","Maka Adam menerima beberapa kalimat dari Tuhannya, lalu Dia menerima tobatnya.","كَلِمَاتٍ"]] },

  { id: "toba", ar: "تَاب", root: "توب", mid: "bertobat, kembali", men: "to repent, to return", pos: "verb", freq: 87, rank: 42, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,37,43,3],[2,128,132,1]],
    ex: [[2,37,43,"فَتَلَقَّىٰ آدَمُ مِنْ رَبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ","Maka Adam menerima beberapa kalimat dari Tuhannya, lalu Dia menerima tobatnya.","تَابَ"]] },

  { id: "batil", ar: "بَاطِل", root: "بطل", mid: "batil, sia-sia, salah", men: "false, vain, void", pos: "adjective", freq: 30, rank: 43, wazan: "fa'il", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb", role: "khabar",
    occ: [[2,42,48,1],[2,42,48,2]],
    ex: [[2,42,48,"وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتُكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ","Dan janganlah kamu campur adukkan yang hak dengan yang batil, dan janganlah kamu sembunyikan yang hak itu, padahal kamu mengetahui.","الْبَاطِلِ"]] },

  { id: "haqq", ar: "حَقّ", root: "حقق", mid: "benar, hak, kebenaran", men: "truth, right, due", pos: "noun", freq: 282, rank: 44, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb", role: "object",
    occ: [[2,42,48,3],[2,42,48,5]],
    ex: [[2,42,48,"وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتُكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ","Dan janganlah kamu campur adukkan yang hak dengan yang batil, dan janganlah kamu sembunyikan yang hak itu, padahal kamu mengetahui.","الْحَقَّ"]] },

  { id: "salih", ar: "صَالِح", root: "صلح", mid: "saleh, baik, lurus", men: "righteous, good", pos: "adjective", freq: 19, rank: 45, wazan: "fa'il", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb", role: "naat",
    occ: [[2,25,31,3],[2,62,65,5]],
    ex: [[2,25,31,"وَبَشِّرِ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ","Dan sampaikanlah kabar gembira kepada orang-orang yang beriman dan berbuat baik.","الصَّالِحَاتِ"]] },

  { id: "yom", ar: "يَوْم", root: "يوم", mid: "hari, hari kiamat", men: "day, Day of Judgment", pos: "noun", freq: 474, rank: 46, wazan: "fawl", form: "I", g: "masculine", num: "singular", def: "definite", irab: "jarr", role: "mutaaliq",
    occ: [[1,4,4,2],[2,62,65,8]],
    ex: [[1,4,4,"مَالِكِ يَوْمِ الدِّينِ","Penguasa hari pembalasan.","يَوْمِ"]] },

  { id: "din", ar: "دِين", root: "دين", mid: "agama, pembalasan, ketundukan", men: "religion, judgment", pos: "noun", freq: 94, rank: 47, wazan: "fi'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "jarr", role: "mudhaf_ilayh",
    occ: [[1,4,4,3]],
    ex: [[1,4,4,"مَالِكِ يَوْمِ الدِّينِ","Penguasa hari pembalasan.","الدِّينِ"]] },

  { id: "qalb", ar: "قَلْب", root: "قلب", mid: "hati, sanubari, pusat", men: "heart, core", pos: "noun", freq: 168, rank: 48, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "jarr", role: "mutaaliq",
    occ: [[2,7,11,2],[2,10,14,1]],
    ex: [[2,7,11,"خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ","Allah telah mengunci hati dan pendengaran mereka.","قُلُوبِهِمْ"]] },

  { id: "sama2", ar: "سَمِع", root: "سمع", mid: "mendengar, memperdengarkan", men: "to hear, to listen", pos: "verb", freq: 187, rank: 49, wazan: "fa'ila", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,7,11,5],[2,7,11,6]],
    ex: [[2,7,11,"خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ","Allah telah mengunci hati dan pendengaran mereka.","سَمْعِهِمْ"]] },

  { id: "basar", ar: "بَصَر", root: "بصر", mid: "penglihatan, melihat", men: "sight, vision", pos: "noun", freq: 148, rank: 50, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "definite", irab: "jarr", role: "mutaaliq",
    occ: [[2,7,11,7],[2,20,26,1]],
    ex: [[2,7,11,"وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ","Dan pada penglihatan mereka ada tudung.","أَبْصَارِهِمْ"]] },
];
