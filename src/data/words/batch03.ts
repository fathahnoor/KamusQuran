import type { CompactWord } from "../wordBuilder";

// Batch 3: High-frequency Quranic lemmas (ranks 101-150)
export const BATCH_03: CompactWord[] = [
  { id: "najw", ar: "نَجْو", root: "نجو", mid: "pembicaraan rahasia, bisikan", men: "secret talk, whisper", pos: "noun", freq: 20, rank: 101, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,13,17,1],[58,9,5401,1]], ex: [[58,9,5401,"يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا تَنَاجَيْتُمْ فَلَا تَتَنَاجَوْا بِالْإِثْمِ وَالْعُدْوَانِ","Wahai orang-orang yang beriman! Apabila kamu membicara secara rahasia, janganlah membicarakan dosa dan permusuhan...","تَنَاجَيْتُمْ"]] },

  { id: "ithm", ar: "إِثْم", root: "اثم", mid: "dosa, pelanggaran", men: "sin, offense", pos: "noun", freq: 48, rank: 102, wazan: "ifl", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "jarr",
    occ: [[2,13,17,2],[5,2,1157,1]], ex: [[5,2,1157,"يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ","Wahai orang-orang yang beriman! Penuhilah akad-akad itu...","أَوْفُوا"]] },

  { id: "udwan", ar: "عُدْوَان", root: "عدو", mid: "permusuhan, pelanggaran", men: "aggression, transgression", pos: "noun", freq: 23, rank: 103, wazan: "fu'laan", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "jarr",
    occ: [[2,13,17,3],[2,194,198,1]], ex: [[2,194,198,"الشَّهْرُ الْحَرَامُ بِالشَّهْرِ الْحَرَامِ وَالْحُرُمَاتُ قِصَاصٌ","Bulan haram dengan bulan haram, dan (pelanggaran) terhadap hal-hal yang dihormati dibalas dengan balasan yang setimpal...","قِصَاصٌ"]] },

  { id: "wasat", ar: "وَسَط", root: "وسط", mid: "tengah, pertengahan, moderat", men: "middle, moderate, just", pos: "adjective", freq: 7, rank: 104, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,143,147,1]], ex: [[2,143,147,"وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا","Dan demikian pula Kami telah menjadikan kamu (umat) pertengahan...","وَسَطًا"]] },

  { id: "shahid", ar: "شَاهِد", root: "شهد", mid: "saksi, persaksi", men: "witness", pos: "noun", freq: 156, rank: 105, wazan: "faa'il", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf",
    occ: [[2,143,147,2],[3,18,384,1]], ex: [[3,18,384,"شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ","Allah menyaksikan bahwa tidak ada Tuhan selain Dia...","شَهِدَ"]] },

  { id: "shahada", ar: "شَهَادَة", root: "شهد", mid: "kesaksian, syahadat", men: "testimony, witness", pos: "noun", freq: 25, rank: 106, wazan: "fa'alaa", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,143,147,3]], ex: [[2,143,147,"لِتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ","...agar kamu menjadi saksi atas (perbuatan) manusia...","شُهَدَاءَ"]] },

  { id: "qibla", ar: "قِبْلَة", root: "قبل", mid: "kiblat, arah salat", men: "qibla, prayer direction", pos: "noun", freq: 7, rank: 107, wazan: "fi'la", form: "I", g: "feminine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,143,147,4],[2,144,148,1]], ex: [[2,144,148,"قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ","Sungguh, Kami (sering) melihat wajahmu menengadah ke langit...","وَجْهِكَ"]] },

  { id: "wajh", ar: "وَجْه", root: "وجه", mid: "wajah, diri, hadapan", men: "face, countenance", pos: "noun", freq: 96, rank: 108, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,144,148,2],[2,272,278,1]], ex: [[2,144,148,"قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ","Sungguh, Kami (sering) melihat wajahmu menengadah ke langit...","وَجْهِكَ"]] },

  { id: "sadaqa", ar: "صَدَق", root: "صدق", mid: "benar, jujur, berkata benar", men: "to speak truth, to be truthful", pos: "verb", freq: 61, rank: 109, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,61,63,2],[2,91,94,2]], ex: [[2,91,94,"وَلَمَّا جَاءَهُمْ رَسُولٌ مِنْ عِنْدِ اللَّهِ مُصَدِّقٌ لِمَا مَعَهُمْ","Dan ketika datang kepada mereka seorang Rasul dari sisi Allah yang membenarkan kitab yang ada pada mereka...","مُصَدِّقٌ"]] },

  { id: "kadhaba", ar: "كَذَب", root: "كذب", mid: "berdusta, mendustakan", men: "to lie, to deny", pos: "verb", freq: 79, rank: 110, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,10,14,2],[2,34,40,3]], ex: [[2,10,14,"فِي قُلُوبِهِمْ مَرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا","Di dalam hati mereka ada penyakit, lalu ditambah Allah penyakitnya...","مَرَضٌ"]] },

  { id: "mard", ar: "مَرَض", root: "مرض", mid: "penyakit, sakit", men: "disease, illness", pos: "noun", freq: 24, rank: 111, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf",
    occ: [[2,10,14,3]], ex: [[2,10,14,"فِي قُلُوبِهِمْ مَرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا","Di dalam hati mereka ada penyakit, lalu ditambah Allah penyakitnya...","مَرَضٌ"]] },

  { id: "zad", ar: "زَاد", root: "زيد", mid: "menambah, menambahi", men: "to increase, to add", pos: "verb", freq: 104, rank: 112, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,10,14,4]], ex: [[2,10,14,"فَزَادَهُمُ اللَّهُ مَرَضًا","...lalu ditambah Allah penyakitnya...","زَادَهُمُ"]] },

  { id: "khawf", ar: "خَوْف", root: "خوف", mid: "takut, ketakutan, rasa takut", men: "fear, dread", pos: "noun", freq: 44, rank: 113, wazan: "fawl", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,38,44,1],[2,40,46,1]], ex: [[2,38,44,"قُلْنَا اهْبِطُوا مِنْهَا جَمِيعًا فَإِمَّا يَأْتِيَنَّكُمْ مِنِّي هُدًى","Kami berfirman: 'Turunlah kamu semua dari surga ini! Kemudian jika datang petunjuk-Ku kepadamu...'","اهْبِطُوا"]] },

  { id: "huzn", ar: "حُزْن", root: "حزن", mid: "kesedihan, duka", men: "sorrow, grief", pos: "noun", freq: 18, rank: 114, wazan: "fu'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,38,44,2]], ex: [[2,38,44,"فَمَنْ تَبِعَ هُدَايَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ","...maka barangsiapa mengikuti petunjuk-Ku, tidak ada kekhawatiran terhadap mereka dan tidak (pula) mereka bersedih hati.","يَحْزَنُونَ"]] },

  { id: "farah", ar: "فَرِح", root: "فرح", mid: "bergembira, berbangga", men: "to rejoice, to exult", pos: "verb", freq: 16, rank: 115, wazan: "fa'ila", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,69,72,1],[2,94,97,1]], ex: [[2,69,72,"قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَنَا مَا لَوْنُهَا","Mereka berkata: 'Mohonkanlah kepada Tuhanmu untuk kami agar Dia menerangkan kepada kami warnanya...'","يُبَيِّنْ"]] },

  { id: "bayyana", ar: "بَيَّن", root: "بين", mid: "menjelaskan, memperjelas", men: "to clarify, to explain", pos: "verb", freq: 115, rank: 116, wazan: "fa''ala", form: "II", vf: "fiil_madhi", irab: "none",
    occ: [[2,69,72,2],[2,75,78,1]], ex: [[2,75,78,"أَفَتَطْمَعُونَ أَنْ يُؤْمِنُوا لَكُمْ","Maka apakah kamu (Muslimin) sangat mengharapkan mereka (Yahudi) akan beriman kepadamu...","يُؤْمِنُوا"]] },

  { id: "tibyan", ar: "تِبْيَان", root: "بين", mid: "penjelasan, penerangan", men: "clarification, explanation", pos: "noun", freq: 9, rank: 117, wazan: "tif'aal", form: "II", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,159,163,1]], ex: [[2,159,163,"إِنَّ الَّذِينَ يَكْتُمُونَ مَا أَنْزَلْنَا مِنَ الْبَيِّنَاتِ","Sesungguhnya orang-orang yang menyembunyikan apa yang telah Kami turunkan berupa keterangan-keterangan...","الْبَيِّنَاتِ"]] },

  { id: "anzala", ar: "أَنْزَل", root: "نزل", mid: "menurunkan (dari atas)", men: "to send down, to reveal", pos: "verb", freq: 280, rank: 118, wazan: "anzala", form: "IV", vf: "fiil_madhi", irab: "none",
    occ: [[2,2,9,2],[2,41,45,1]], ex: [[2,2,9,"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ","Kitab (Al-Qur'an) ini tidak ada keraguan di dalamnya, petunjuk bagi orang-orang yang bertakwa.","هُدًى"]] },

  { id: "tanzil", ar: "تَنْزِيل", root: "نزل", mid: "penurunan (wahyu)", men: "revelation, sending down", pos: "noun", freq: 28, rank: 119, wazan: "tunfiil", form: "II", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,4,6,1]], ex: [[2,4,6,"وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ","...dan orang-orang yang beriman kepada apa (Al-Qur'an) yang diturunkan kepadamu (Muhammad) dan apa yang telah diturunkan sebelummu...","أُنْزِلَ"]] },

  { id: "ahkam", ar: "أَحْكَام", root: "حكم", mid: "ketentuan, hukum-hukum", men: "rulings, statutes", pos: "noun", freq: 11, rank: 120, wazan: "af'aal", form: "I", g: "masculine", num: "plural", def: "definite", irab: "nasb",
    occ: [[2,43,47,5]], ex: [[2,43,47,"وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ","Dan dirikanlah salat, tunaikanlah zakat, dan rukuklah bersama orang-orang yang rukuk.","الصَّلَاةَ"]] },

  { id: "muhkam", ar: "مُحْكَم", root: "حكم", mid: "tegas, jelas, kokoh", men: "clear, decisive", pos: "adjective", freq: 9, rank: 121, wazan: "muf'al", form: "II", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[3,7,373,1]], ex: [[3,7,373,"هُوَ الَّذِي أَنْزَلَ عَلَيْكَ الْكِتَابَ مِنْهُ آيَاتٌ مُحْكَمَاتٌ هُنَّ أُمُّ الْكِتَابِ","Dialah yang menurunkan kepadamu (Muhammad) Kitab (Al-Qur'an). Sebagian ayatnya adalah ayat-ayat muhkamat (jelas), itulah induk (pokok) Kitab...","مُحْكَمَاتٌ"]] },

  { id: "mutashabih", ar: "مُتَشَابِه", root: "شبه", mid: "serupa, samar", men: "ambiguous, similar", pos: "adjective", freq: 11, rank: 122, wazan: "mutafa'il", form: "VI", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[3,7,373,2]], ex: [[3,7,373,"وَأُخَرُ مُتَشَابِهَاتٌ","...dan yang lain (ayat-ayat) mutashabihat (samar)...","مُتَشَابِهَاتٌ"]] },

  { id: "tafsir", ar: "تَفْسِير", root: "فسر", mid: "tafsir, penafsiran", men: "interpretation, exegesis", pos: "noun", freq: 3, rank: 123, wazan: "tafeiil", form: "II", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[3,7,373,3]], ex: [[3,7,373,"وَمَا يَعْلَمُ تَأْوِيلَهُ إِلَّا اللَّهُ","...dan tidak ada yang mengetahui ta'wilnya selain Allah...","تَأْوِيلَهُ"]] },

  { id: "tawil", ar: "تَأْوِيل", root: "أول", mid: "takwil, penafsiran, akibat", men: "interpretation, outcome", pos: "noun", freq: 17, rank: 124, wazan: "tafeiil", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[3,7,373,4]], ex: [[3,7,373,"وَمَا يَعْلَمُ تَأْوِيلَهُ إِلَّا اللَّهُ","...dan tidak ada yang mengetahui ta'wilnya selain Allah...","تَأْوِيلَهُ"]] },

  { id: "khala", ar: "خَلَا", root: "خلو", mid: "kecuali, selain", men: "except, besides", pos: "particle", freq: 12, rank: 125, irab: "none",
    occ: [[2,102,105,1]], ex: [[2,102,105,"وَمَا كَفَرَ سُلَيْمَانُ وَلَٰكِنَّ الشَّيَاطِينَ كَفَرُوا","...dan Sulaiman tidak kafir, tetapi setan-setan yang kafir...","سُلَيْمَانُ"]] },

  { id: "rahba", ar: "رَهْبَة", root: "رهب", mid: "takut, rasa takut, ketakutan", men: "fear, awe, dread", pos: "noun", freq: 13, rank: 126, wazan: "fa'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,40,46,2]], ex: [[2,40,46,"يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ","Wahai Bani Israil! Ingatlah nikmat-Ku yang telah Aku berikan kepadamu...","نِعْمَتِيَ"]] },

  { id: "raghba", ar: "رَغْبَة", root: "رغب", mid: "keinginan, hasrat", men: "desire, eagerness", pos: "noun", freq: 13, rank: 127, wazan: "fa'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[21,90,4114,1]], ex: [[21,90,4114,"فَاسْتَجَبْنَا لَهُ وَوَهَبْنَا لَهُ يَحْيَىٰ","Maka Kami memperkenankan permohonannya dan Kami memberikan kepadanya Yahya...","فَاسْتَجَبْنَا"]] },

  { id: "qurb", ar: "قُرْب", root: "قرب", mid: "kedekatan, dekat", men: "nearness, proximity", pos: "noun", freq: 11, rank: 128, wazan: "fu'l", form: "I", def: "indefinite", irab: "nasb",
    occ: [[2,236,240,1]], ex: [[2,236,240,"لَا جُنَاحَ عَلَيْكُمْ إِنْ طَلَّقْتُمُ النِّسَاءَ","Tidak ada dosa bagimu dalam menceraikan istri...","طَلَّقْتُمُ"]] },

  { id: "buid", ar: "بَعْد", root: "بعد", mid: "setelah, sesudah, belakangan", men: "after, afterwards", pos: "noun", freq: 255, rank: 129, wazan: "fawl", form: "I", g: "masculine", num: "singular", def: "definite", irab: "jarr",
    occ: [[2,22,28,4],[2,36,42,3]], ex: [[2,36,42,"فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا فَأَخْرَجَهُمَا مِمَّا كَانَا فِيهِ","Maka setan menjerumuskan keduanya darinya (surga) lalu mengeluarkan keduanya dari apa yang mereka berada di dalamnya...","فَأَخْرَجَهُمَا"]] },

  { id: "qabl", ar: "قَبْل", root: "قبل", mid: "sebelum, terdahulu", men: "before, prior", pos: "noun", freq: 174, rank: 130, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "jarr",
    occ: [[2,4,6,2],[2,87,90,3]], ex: [[2,4,6,"وَمَا أُنْزِلَ مِنْ قَبْلِكَ","...dan apa yang telah diturunkan sebelummu...","قَبْلِكَ"]] },

  { id: "akhira", ar: "آخِر", root: "اخر", mid: "akhir, terakhir, kemudian", men: "last, final, latter", pos: "adjective", freq: 77, rank: 131, wazan: "faa'il", form: "I", g: "masculine", num: "singular", def: "definite", irab: "jarr",
    occ: [[2,8,12,1],[2,62,65,9]], ex: [[2,8,12,"وَمِنَ النَّاسِ مَنْ يَقُولُ آمَنَّا بِاللَّهِ وَبِالْيَوْمِ الْآخِرِ","Dan di antara manusia ada yang berkata: 'Kami beriman kepada Allah dan hari akhir,' padahal mereka tidak beriman.","الْآخِرِ"]] },

  { id: "awwal", ar: "أَوَّل", root: "اول", mid: "pertama, awal, terdahulu", men: "first, beginning, former", pos: "adjective", freq: 35, rank: 132, wazan: "af'al", form: "I", g: "masculine", num: "singular", def: "definite", irab: "jarr",
    occ: [[2,4,6,3]], ex: [[2,4,6,"وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ","...dan orang-orang yang beriman kepada apa (Al-Qur'an) yang diturunkan kepadamu (Muhammad) dan apa yang telah diturunkan sebelummu...","قَبْلِكَ"]] },

  { id: "dunya", ar: "دُنْيَا", root: "دنو", mid: "dunia, dekat, kehidupan dunia", men: "world, near, worldly life", pos: "noun", freq: 115, rank: 133, wazan: "fu'laa", form: "I", g: "feminine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,85,88,2],[2,86,89,1]], ex: [[2,86,89,"أُولَٰئِكَ الَّذِينَ اشْتَرَوُا الْحَيَاةَ الدُّنْيَا بِالْآخِرَةِ","Mereka itu orang-orang yang membeli kehidupan dunia dengan (kehidupan) akhirat...","الدُّنْيَا"]] },

  { id: "hayat", ar: "حَيَاة", root: "حيا", mid: "kehidupan, hidup", men: "life, living", pos: "noun", freq: 71, rank: 134, wazan: "fa'ala", form: "I", g: "feminine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,86,89,2]], ex: [[2,86,89,"أُولَٰئِكَ الَّذِينَ اشْتَرَوُوا الْحَيَاةَ الدُّنْيَا بِالْآخِرَةِ","Mereka itu orang-orang yang membeli kehidupan dunia dengan (kehidupan) akhirat...","الْحَيَاةَ"]] },

  { id: "mawt", ar: "مَوْت", root: "موت", mid: "kematian, mati", men: "death, dying", pos: "noun", freq: 40, rank: 135, wazan: "fawl", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,28,34,1],[2,161,165,4]], ex: [[2,28,34,"كَيْفَ تَكْفُرُونَ بِاللَّهِ وَكُنْتُمْ أَمْوَاتًا فَأَحْيَاكُمْ","Bagaimana kamu ingkar kepada Allah, padahal kamu (dahulu) mati, lalu Dia menghidupkan kamu...","أَمْوَاتًا"]] },

  { id: "baeth", ar: "بَعْث", root: "بعث", mid: "kebangkitan, membangkitkan", men: "resurrection, to raise", pos: "noun", freq: 33, rank: 136, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,28,34,2],[2,56,59,1]], ex: [[2,28,34,"ثُمَّ يُمِيتُكُمْ ثُمَّ يُحْيِيكُمْ ثُمَّ إِلَيْهِ تُرْجَعُونَ","Kemudian Dia mematikan kamu, lalu menghidupkan kamu, kemudian kepada-Nya kamu dikembalikan.","يُحْيِيكُمْ"]] },

  { id: "qiyama", ar: "قِيَامَة", root: "قوم", mid: "kiamat, hari kebangkitan", men: "resurrection, standing", pos: "noun", freq: 70, rank: 137, wazan: "fi'ala", form: "I", g: "feminine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,85,88,3],[2,113,117,2]], ex: [[2,85,88,"وَقَالُوا لَنْ تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَعْدُودَةً","Dan mereka berkata: 'Api neraka tidak akan menyentuh kami kecuali beberapa hari saja.'","النَّارُ"]] },

  { id: "jabarut", ar: "جَبَرُوت", root: "جبر", mid: "keperkasaan, keagungan", men: "majesty, omnipotence", pos: "noun", freq: 1, rank: 138, def: "indefinite", irab: "jarr",
    occ: [[59,23,5420,1]], ex: [[59,23,5420,"هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ","Dialah Allah yang tidak ada Tuhan selain Dia, Yang Mengetahui yang gaib dan yang nyata...","الشَّهَادَةِ"]] },

  { id: "malakut", ar: "مَلَكُوت", root: "ملك", mid: "kerajaan, kekuasaan", men: "kingdom, dominion", pos: "noun", freq: 3, rank: 139, wazan: "malakuut", form: "I", g: "masculine", num: "singular", def: "definite", irab: "jarr",
    occ: [[6,75,1249,1]], ex: [[6,75,1249,"وَكَذَٰلِكَ نُرِي إِبْرَاهِيمَ مَلَكُوتَ السَّمَاوَاتِ وَالْأَرْضِ","Dan demikianlah Kami perlihatkan kepada Ibrahim kerajaan langit dan bumi...","مَلَكُوتَ"]] },

  { id: "quds", ar: "قُدْس", root: "قدس", mid: "kesucian, suci", men: "holiness, sanctity", pos: "noun", freq: 3, rank: 140, wazan: "fu'l", form: "I", def: "indefinite", irab: "jarr",
    occ: [[2,87,90,4]], ex: [[2,87,90,"وَقَفَّيْنَا مِنْ بَعْدِهِ بِالرُّسُلِ وَآتَيْنَا عِيسَى ابْنَ مَرْيَمَ الْبَيِّنَاتِ","...dan Kami utus rasul-rasul setelahnya, dan Kami memberikan kepada Isa bin Maryam bukti-bukti kebenaran...","عِيسَىٰ"]] },

  { id: "ruh", ar: "رُوح", root: "روح", mid: "roh, jiwa, wahyu", men: "spirit, soul, revelation", pos: "noun", freq: 21, rank: 141, wazan: "fu'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,87,90,5],[2,253,258,1]], ex: [[2,253,258,"تِلْكَ الرُّسُلُ فَضَّلْنَا بَعْضَهُمْ عَلَىٰ بَعْضٍ","Rasul-rasul itu Kami lebihkan sebagian dari mereka atas sebagian yang lain...","الرُّسُلُ"]] },

  { id: "nafs", ar: "نَفْس", root: "نفس", mid: "diri, jiwa, pribadi", men: "soul, self, person", pos: "noun", freq: 281, rank: 142, wazan: "fa'l", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,48,52,1],[2,54,57,1]], ex: [[2,48,52,"وَاتَّقُوا يَوْمًا لَا تَجْزِي نَفْسٌ عَنْ نَفْسٍ شَيْئًا","Dan takutilah hari (kiamat) ketika seseorang tidak dapat mengganti orang lain sedikit pun...","نَفْسٌ"]] },

  { id: "qalama2", ar: "قَلَم", root: "قلم", mid: "pena, pena tulis", men: "pen, writing instrument", pos: "noun", freq: 4, rank: 143, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[68,1,5498,1]], ex: [[68,1,5498,"ن وَالْقَلَمِ وَمَا يَسْطُرُونَ","Nun. Demi pena dan apa yang mereka tuliskan...","الْقَلَمِ"]] },

  { id: "kitaba", ar: "كَتَب", root: "كتب", mid: "menulis, menetapkan, mewajibkan", men: "to write, to prescribe", pos: "verb", freq: 108, rank: 144, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,183,187,1]], ex: [[2,183,187,"يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ","Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa...","كُتِبَ"]] },

  { id: "shahr", ar: "شَهْر", root: "شهر", mid: "bulan (kalender), bulan", men: "month", pos: "noun", freq: 12, rank: 145, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,185,189,2]], ex: [[2,185,189,"شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ","(Beberapa hari yang ditentukan itu ialah) bulan Ramadan, bulan yang di dalamnya diturunkan (permulaan) Al-Qur'an...","رَمَضَانَ"]] },

  { id: "ramadan", ar: "رَمَضَان", root: "رمض", mid: "Ramadan (bulan puasa)", men: "Ramadan (fasting month)", pos: "proper_noun", freq: 1, rank: 146, def: "proper", irab: "nasb",
    occ: [[2,185,189,3]], ex: [[2,185,189,"شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ","(Beberapa hari yang ditentukan itu ialah) bulan Ramadan, bulan yang di dalamnya diturunkan (permulaan) Al-Qur'an...","رَمَضَانَ"]] },

  { id: "sawm", ar: "صَوْم", root: "صوم", mid: "puasa, shaum", men: "fasting", pos: "noun", freq: 2, rank: 147, wazan: "fawl", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,183,187,2]], ex: [[2,183,187,"يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ","Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa...","الصِّيَامُ"]] },

  { id: "kaana", ar: "كَان", root: "كون", mid: "ada, menjadi, adalah (kaana)", men: "to be, was (kaana)", pos: "verb", freq: 1719, rank: 148, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,7,11,8],[2,17,21,3]], ex: [[2,7,11,"وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ","Dan pada penglihatan mereka ada tudung, dan bagi mereka azab yang berat.","غِشَاوَةٌ"]] },

  { id: "laysa", ar: "لَيْس", root: "ليس", mid: "tidak, bukan (laysa)", men: "is not (laysa)", pos: "verb", freq: 67, rank: 149, wazan: "fa'al", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,42,48,4]], ex: [[2,42,48,"وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتُكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ","Dan janganlah kamu campur adukkan yang hak dengan yang batil, dan janganlah kamu sembunyikan yang hak itu, padahal kamu mengetahui.","وَأَنتُمْ"]] },

  { id: "inna", ar: "إِنَّ", root: "انن", mid: "sesungguhnya (inna)", men: "indeed, verily (inna)", pos: "particle", freq: 815, rank: 150, irab: "none",
    occ: [[2,6,10,1],[2,7,11,1]], ex: [[2,6,10,"إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ","Sesungguhnya orang-orang kafir, sama saja bagi mereka...","إِنَّ"]] },
];
