import type { CompactWord } from "../wordBuilder";

// Batch 5: High-frequency Quranic lemmas (ranks 201-250)
export const BATCH_05: CompactWord[] = [
  { id: "ibrahim2", ar: "إِبْرَاهِيم", root: "ابرهم", mid: "Ibrahim (Nabi)", men: "Abraham (Prophet)", pos: "proper_noun", freq: 69, rank: 201, def: "proper", irab: "nasb",
    occ: [[2,130,134,1],[2,135,139,1]], ex: [[2,130,134,"وَمَنْ يَرْغَبُ عَنْ مِلَّةِ إِبْرَاهِيمَ إِلَّا مَنْ سَفِهَ نَفْسَهُ","Dan siapa (pula) yang benci kepada agama Ibrahim, kecuali orang yang memperbodoh dirinya sendiri...","إِبْرَاهِيمَ"]] },

  { id: "ismail", ar: "إِسْمَاعِيل", root: "سمع", mid: "Ismail (Nabi)", men: "Ishmael", pos: "proper_noun", freq: 12, rank: 202, def: "proper", irab: "nasb",
    occ: [[2,125,129,2],[2,133,136,1]], ex: [[2,125,129,"وَإِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِلنَّاسِ وَأَمْنًا","Dan (ingatlah) ketika Kami menjadikan rumah (Ka'bah) itu tempat berkumpul dan tempat kembali bagi manusia, dan (tempat) yang aman...","الْبَيْتَ"]] },

  { id: "ishaq", ar: "إِسْحَاق", root: "سحق", mid: "Ishaq (Nabi)", men: "Isaac", pos: "proper_noun", freq: 15, rank: 203, def: "proper", irab: "nasb",
    occ: [[2,133,136,2],[2,140,143,1]], ex: [[2,133,136,"أَمْ كُنْتُمْ شُهَدَاءَ إِذْ حَضَرَ يَعْقُوبَ الْمَوْتُ","Ataukah kamu hadir ketika maut akan datang kepada Yakub...","يَعْقُوبَ"]] },

  { id: "yaqub", ar: "يَعْقُوب", root: "عقب", mid: "Yakub (Nabi)", men: "Jacob", pos: "proper_noun", freq: 16, rank: 204, def: "proper", irab: "nasb",
    occ: [[2,132,136,1],[2,133,136,3]], ex: [[2,132,136,"وَوَصَّىٰ بِهَا إِبْرَاهِيمُ بَنِيهِ وَيَعْقُوبُ","Dan Ibrahim mewasiatkan (ini) kepada anak-anaknya, demikian pula Yakub...","يَعْقُوبُ"]] },

  { id: "yusuf", ar: "يُوسُف", root: "وسف", mid: "Yusuf (Nabi)", men: "Joseph", pos: "proper_noun", freq: 27, rank: 205, def: "proper", irab: "nasb",
    occ: [[12,4,2355,1],[12,7,2358,1]], ex: [[12,4,2355,"إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا","(Ingatlah) ketika Yusuf berkata kepada ayahnya: 'Wahai ayahku! Sungguh, aku bermimpi melihat sebelas bintang...'","يُوسُفُ"]] },

  { id: "dawud", ar: "دَاوُود", root: "دود", mid: "Daud (Nabi)", men: "David", pos: "proper_noun", freq: 16, rank: 206, def: "proper", irab: "nasb",
    occ: [[2,251,256,1],[38,17,4588,1]], ex: [[2,251,256,"فَهَزَمُوهُمْ بِإِذْنِ اللَّهِ وَقَتَلَ دَاوُودُ جَالُوتَ","Maka mereka mengalahkan mereka dengan izin Allah. Daud membunuh Jalut...","دَاوُودُ"]] },

  { id: "sulayman", ar: "سُلَيْمَان", root: "سلم", mid: "Sulaiman (Nabi)", men: "Solomon", pos: "proper_noun", freq: 17, rank: 207, def: "proper", irab: "nasb",
    occ: [[2,102,105,2],[27,15,3799,1]], ex: [[2,102,105,"وَمَا كَفَرَ سُلَيْمَانُ وَلَٰكِنَّ الشَّيَاطِينَ كَفَرُوا","...dan Sulaiman tidak kafir, tetapi setan-setan yang kafir...","سُلَيْمَانُ"]] },

  { id: "zakariya", ar: "زَكَرِيَّا", root: "زكر", mid: "Zakaria (Nabi)", men: "Zechariah", pos: "proper_noun", freq: 7, rank: 208, def: "proper", irab: "raf",
    occ: [[3,37,370,1],[3,38,371,1]], ex: [[3,37,370,"فَتَقَبَّلَهَا رَبُّهَا بِقَبُولٍ حَسَنٍ","Maka Tuhannya menerimanya (Maryam) dengan penerimaan yang baik...","رَبُّهَا"]] },

  { id: "yahya", ar: "يَحْيَىٰ", root: "حيا", mid: "Yahya (Nabi)", men: "John the Baptist", pos: "proper_noun", freq: 5, rank: 209, def: "proper", irab: "nasb",
    occ: [[3,39,372,1],[19,7,2990,1]], ex: [[19,7,2990,"يَا زَكَرِيَّا إِنَّا نُبَشِّرُكَ بِغُلَامٍ اسْمُهُ يَحْيَىٰ","'(Wahai Zakaria!) Sesungguhnya Kami memberi kabar gembira kepadamu dengan seorang anak laki-laki yang namanya Yahya.'","يَحْيَىٰ"]] },

  { id: "adam", ar: "آدَم", root: "ادم", mid: "Adam (manusia pertama)", men: "Adam", pos: "proper_noun", freq: 25, rank: 210, wazan: "aafaal", form: "I", def: "proper", irab: "nasb",
    occ: [[2,31,37,1],[2,33,39,1]], ex: [[2,31,37,"وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا","Dan Dia mengajarkan kepada Adam nama-nama (benda) seluruhnya...","آدَمَ"]] },

  { id: "nuh", ar: "نُوح", root: "نوح", mid: "Nuh (Nabi)", men: "Noah", pos: "proper_noun", freq: 43, rank: 211, def: "proper", irab: "nasb",
    occ: [[3,33,366,1],[4,163,725,2]], ex: [[4,163,725,"إِنَّا أَوْحَيْنَا إِلَيْكَ كَمَا أَوْحَيْنَا إِلَىٰ نُوحٍ","Sungguh, Kami telah mewahyukan kepadamu (Muhammad) sebagaimana Kami telah mewahyukan kepada Nuh...","نُوحٍ"]] },

  { id: "hud", ar: "هُود", root: "هدد", mid: "Hud (Nabi)", men: "Hud (Prophet)", pos: "proper_noun", freq: 7, rank: 212, def: "proper", irab: "nasb",
    occ: [[7,65,1276,1],[11,50,1956,1]], ex: [[11,50,1956,"وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا","Dan kepada kaum 'Ade (Kami utus) saudara mereka, Hud...","هُودًا"]] },

  { id: "salih", ar: "صَالِح", root: "صلح", mid: "Salih (Nabi)", men: "Salih (Prophet)", pos: "proper_noun", freq: 9, rank: 213, def: "proper", irab: "nasb",
    occ: [[7,73,1283,1],[11,61,1954,1]], ex: [[11,61,1954,"وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا","Dan kepada kaum Tsamude (Kami utus) saudara mereka, Salih...","صَالِحًا"]] },

  { id: "lut", ar: "لُوط", root: "لوط", mid: "Lut (Nabi)", men: "Lot", pos: "proper_noun", freq: 27, rank: 214, def: "proper", irab: "nasb",
    occ: [[7,80,1290,1],[11,70,1952,1]], ex: [[7,80,1290,"وَلُوطًا إِذْ قَالَ لِقَوْمِهِ","Dan (Kami utus) Lut, ketika dia berkata kepada kaumnya...","لُوطًا"]] },

  { id: "shuaib", ar: "شُعَيْب", root: "شعب", mid: "Syu'aib (Nabi)", men: "Shuaib (Prophet)", pos: "proper_noun", freq: 11, rank: 215, def: "proper", irab: "nasb",
    occ: [[7,85,1295,1],[11,84,1977,1]], ex: [[11,84,1977,"وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا","Dan kepada kaum Madyan (Kami utus) saudara mereka, Syu'aib...","شُعَيْبًا"]] },

  { id: "firawn", ar: "فِرْعَوْن", root: "فرع", mid: "Fir'aun (Raja Mesir)", men: "Pharaoh", pos: "proper_noun", freq: 74, rank: 216, wazan: "fi'al", form: "I", def: "proper", irab: "nasb",
    occ: [[2,49,53,1],[2,50,54,1]], ex: [[2,49,53,"وَإِذْ نَجَّيْنَاكُمْ مِنْ آلِ فِرْعَوْنَ يَسُومُونَكُمْ سُوءَ الْعَذَابِ","Dan (ingatlah) ketika Kami selamatkan kamu dari (kezaliman) keluarga Fir'aun yang menimpakan kepada kamu penderitaan yang sangat berat...","فِرْعَوْنَ"]] },

  { id: "haman", ar: "هَامَان", root: "همن", mid: "Haman (menteri Fir'aun)", men: "Haman (Pharaoh's minister)", pos: "proper_noun", freq: 6, rank: 217, def: "proper", irab: "nasb",
    occ: [[28,6,3676,1],[28,8,3678,1]], ex: [[28,6,3676,"وَنُمَكِّنَ لَهُمْ فِي الْأَرْضِ وَنُرِيَ فِرْعَوْنَ وَهَامَانَ","...dan Kami hendak meneguhkan kedudukan mereka di bumi, dan Kami hendak memperlihatkan kepada Fir'aun dan Haman...","هَامَانَ"]] },

  { id: "qarun", ar: "قَارُون", root: "قور", mid: "Qarun (orang kaya)", men: "Korah (wealthy man)", pos: "proper_noun", freq: 4, rank: 218, def: "proper", irab: "nasb",
    occ: [[28,76,3746,1],[28,76,3746,2]], ex: [[28,76,3746,"إِنَّ قَارُونَ كَانَ مِنْ قَوْمِ مُوسَىٰ فَبَغَىٰ عَلَيْهِمْ","Sesungguhnya Qarun termasuk kaum Musa, lalu dia berlaku sombong terhadap mereka...","قَارُونَ"]] },

  { id: "jaluut", ar: "جَالُوت", root: "جلت", mid: "Jalut (raja)", men: "Goliath", pos: "proper_noun", freq: 2, rank: 219, def: "proper", irab: "nasb",
    occ: [[2,249,254,1],[2,251,256,2]], ex: [[2,249,254,"فَلَمَّا فَصَلَ طَالُوتُ بِالْجُنُودِ قَالَ إِنَّ اللَّهَ مُبْتَلِيكُمْ","Maka ketika Thalut membawa tentara, dia berkata: 'Sesungguhnya Allah akan menguji kamu...'","طَالُوتُ"]] },

  { id: "talut", ar: "طَالُوت", root: "طلت", mid: "Thalut (raja)", men: "Saul (king)", pos: "proper_noun", freq: 2, rank: 220, def: "proper", irab: "raf",
    occ: [[2,247,252,1],[2,249,254,2]], ex: [[2,247,252,"وَقَالَ لَهُمْ نَبِيُّهُمْ إِنَّ اللَّهَ قَدْ بَعَثَ لَكُمْ طَالُوتَ مَلِكًا","Dan nabi mereka berkata kepada mereka: 'Sungguh, Allah telah mengutus Thalut menjadi raja bagimu.'","طَالُوتَ"]] },

  { id: "madyan", ar: "مَدْيَن", root: "مدي", mid: "Madyan (kota/kaum)", men: "Midian (city/people)", pos: "proper_noun", freq: 10, rank: 221, def: "proper", irab: "nasb",
    occ: [[7,85,1295,2],[11,84,1977,2]], ex: [[7,85,1295,"وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا","Dan kepada kaum Madyan (Kami utus) saudara mereka, Syu'aib...","مَدْيَنَ"]] },

  { id: "thaamud", ar: "ثَمُود", root: "ثمد", mid: "Tsamud (kaum)", men: "Thamud (ancient people)", pos: "proper_noun", freq: 24, rank: 222, def: "proper", irab: "nasb",
    occ: [[7,73,1283,2],[11,61,1954,2]], ex: [[7,73,1283,"وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا","Dan kepada kaum Tsamud (Kami utus) saudara mereka, Salih...","ثَمُودَ"]] },

  { id: "aad", ar: "عَاد", root: "عدد", mid: "'Aad (kaum kuno)", men: "'Ad (ancient people)", pos: "proper_noun", freq: 24, rank: 223, wazan: "fa'al", form: "I", def: "proper", irab: "nasb",
    occ: [[7,65,1276,2],[11,50,1956,2]], ex: [[7,65,1276,"وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا","Dan kepada kaum 'Ade (Kami utus) saudara mereka, Hud...","عَادٍ"]] },

  { id: "iblise", ar: "إِبْلِيس", root: "بلس", mid: "Iblis (setan)", men: "Iblis (Satan)", pos: "proper_noun", freq: 11, rank: 224, wazan: "if'iil", form: "I", def: "proper", irab: "raf",
    occ: [[2,34,40,1],[2,34,40,4]], ex: [[2,34,40,"وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ","Dan (ingatlah) ketika Kami berfirman kepada para malaikat: 'Sujudlah kamu kepada Adam!' Maka mereka sujud kecuali Iblis...","إِبْلِيسَ"]] },

  { id: "khayr", ar: "خَيْر", root: "خير", mid: "kebaikan, lebih baik, kebajikan", men: "good, better, goodness", pos: "noun", freq: 163, rank: 225, wazan: "fayl", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,27,33,1],[2,180,184,2]], ex: [[2,27,33,"فَأَخْرَجَهُمَا مِمَّا كَانَا فِيهِ وَقُلْنَا اهْبِطُوا","...lalu mengeluarkan keduanya dari apa yang mereka berada di dalamnya, dan Kami berfirman: 'Turunlah kamu semua!'","اهْبِطُوا"]] },

  { id: "sharr", ar: "شَرّ", root: "شرر", mid: "kejahatan, buruk, buruknya", men: "evil, bad, worse", pos: "noun", freq: 66, rank: 226, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,79,82,1],[2,81,84,1]], ex: [[2,81,84,"بَلَىٰ مَنْ كَسَبَ سَيِّئَةً وَأَحَاطَتْ بِهِ خَطِيئَتُهُ","Benar! Barangsiapa berbuat kejahatan dan dosanya mengepungnya...","سَيِّئَةً"]] },

  { id: "hasana", ar: "حَسُن", root: "حسن", mid: "baik, indah, bagus", men: "to be good, to be beautiful", pos: "verb", freq: 12, rank: 227, wazan: "fa'ula", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,195,199,1],[2,267,273,1]], ex: [[2,195,199,"وَأَحْسِنُوا إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ","...dan berbuat baiklah. Sungguh, Allah menyukai orang-orang yang berbuat baik.","أَحْسِنُوا"]] },

  { id: "ihsan", ar: "إِحْسَان", root: "حسن", mid: "kebaikan, ihsan", men: "excellence, benevolence", pos: "noun", freq: 5, rank: 228, wazan: "if'aal", form: "IV", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,195,199,2]], ex: [[2,195,199,"إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ","Sungguh, Allah menyukai orang-orang yang berbuat baik.","الْمُحْسِنِينَ"]] },

  { id: "faahisha", ar: "فَاحِشَة", root: "فحش", mid: "perbuatan keji, dosa besar", men: "indecency, abomination", pos: "noun", freq: 24, rank: 229, wazan: "faa'ila", form: "I", g: "feminine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,169,173,1],[4,19,668,1]], ex: [[2,169,173,"إِنَّمَا يَأْمُرُكُمْ بِالسُّوءِ وَالْفَحْشَاءِ","...dia (setan) hanya menyuruh kamu berbuat buruk dan keji...","الْفَحْشَاءِ"]] },

  { id: "haraam", ar: "حَرَام", root: "حرم", mid: "haram, terlarang, suci", men: "forbidden, sacred, inviolable", pos: "adjective", freq: 73, rank: 230, wazan: "fa'aal", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,144,148,3],[2,191,195,2]], ex: [[2,144,148,"فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ","...maka hadapkanlah wajahmu ke arah Masjidilharam.","الْحَرَامِ"]] },

  { id: "halaal", ar: "حَلَال", root: "حلل", mid: "halal, boleh, dihalalkan", men: "lawful, permitted", pos: "adjective", freq: 34, rank: 231, wazan: "fa'aal", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,168,172,2],[2,235,239,1]], ex: [[2,168,172,"يَا أَيُّهَا النَّاسُ كُلُوا مِمَّا فِي الْأَرْضِ حَلَالًا طَيِّبًا","Wahai manusia! Makanlah dari (makanan) yang halal dan baik yang terdapat di bumi...","حَلَالًا"]] },

  { id: "tayyib", ar: "طَيِّب", root: "طيب", mid: "baik, bersih, enak", men: "good, pure, wholesome", pos: "adjective", freq: 40, rank: 232, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,168,172,3],[2,57,60,1]], ex: [[2,168,172,"يَا أَيُّهَا النَّاسُ كُلُوا مِمَّا فِي الْأَرْضِ حَلَالًا طَيِّبًا","Wahai manusia! Makanlah dari (makanan) yang halal dan baik yang terdapat di bumi...","طَيِّبًا"]] },

  { id: "khabith", ar: "خَبِيث", root: "خبث", mid: "buruk, jelek, najis", men: "bad, evil, impure", pos: "adjective", freq: 7, rank: 233, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[3,118,414,1]], ex: [[3,118,414,"يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَتَّخِذُوا بِطَانَةً مِنْ دُونِكُمْ","Wahai orang-orang yang beriman! Janganlah kamu ambil menjadi kepercayaanmu orang-orang yang di luar kalanganmu...","بِطَانَةً"]] },

  { id: "najis", ar: "نَجَس", root: "نجس", mid: "najis, kotor", men: "impure, unclean", pos: "adjective", freq: 1, rank: 234, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[9,28,1198,1]], ex: [[9,28,1198,"يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْمُشْرِكُونَ نَجَسٌ","Wahai orang-orang yang beriman! Sesungguhnya musyrikin itu najis...","نَجَسٌ"]] },

  { id: "taahir", ar: "طَاهِر", root: "طهر", mid: "suci, bersih", men: "pure, clean", pos: "adjective", freq: 5, rank: 235, wazan: "faa'il", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[9,108,1223,1]], ex: [[9,108,1223,"لَمَسْجِدٌ أُسِّسَ عَلَى التَّقْوَىٰ مِنْ أَوَّلِ يَوْمٍ أَحَقُّ أَنْ تَقُومَ فِيهِ","...sesungguhnya masjid yang didirikan atas dasar takwa (Masjid Quba), sejak hari pertama adalah lebih layak bagimu (Nabi) shalat di dalamnya...","التَّقْوَىٰ"]] },

  { id: "mukarram", ar: "مُكَرَّم", root: "كرم", mid: "dimuliakan, terhormat", men: "honored, respected", pos: "adjective", freq: 4, rank: 236, wazan: "mufa''al", form: "II", g: "masculine", num: "singular", def: "indefinite", irab: "raf",
    occ: [[21,26,4076,1]], ex: [[21,26,4076,"وَقَالُوا اتَّخَذَ الرَّحْمَٰنُ وَلَدًا سُبْحَانَهُ","Dan mereka berkata: 'Tuhan Maha Pengasih mengambil anak.' Maha Suci Dia...","سُبْحَانَهُ"]] },

  { id: "karim", ar: "كَرِيم", root: "كرم", mid: "mulia, dermawan, terhormat", men: "noble, generous", pos: "adjective", freq: 8, rank: 237, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[27,40,3824,1]], ex: [[27,40,3824,"قَالَ الَّذِي عِنْدَهُ عِلْمٌ مِنَ الْكِتَابِ","Berkatalah orang yang mempunyai pengetahuan dari Al-Kitab...","عِلْمٌ"]] },

  { id: "dhulm", ar: "ظُلْم", root: "ظلم", mid: "kezaliman, perlakuan salah", men: "oppression, injustice", pos: "noun", freq: 114, rank: 238, wazan: "fu'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,35,41,2]], ex: [[2,35,41,"وَلَا تَقْرَبَا هَٰذِهِ الشَّجَرَةَ فَتَكُونَا مِنَ الظَّالِمِينَ","...dan janganlah kamu berdua mendekati pohon ini, niscaya kamu berdua termasuk orang yang zalim.","الظَّالِمِينَ"]] },

  { id: "adl", ar: "عَدْل", root: "عدل", mid: "adil, keadilan", men: "justice, fairness", pos: "noun", freq: 28, rank: 239, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,48,52,2]], ex: [[2,48,52,"وَاتَّقُوا يَوْمًا لَا تَجْزِي نَفْسٌ عَنْ نَفْسٍ شَيْئًا","Dan takutilah hari (kiamat) ketika seseorang tidak dapat mengganti orang lain sedikit pun...","شَيْئًا"]] },

  { id: "qist", ar: "قِسْط", root: "قسط", mid: "keadilan, keadilan pembagian", men: "justice, equity", pos: "noun", freq: 15, rank: 240, wazan: "fi'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,282,289,1],[4,3,615,1]], ex: [[4,3,615,"وَإِنْ خِفْتُمْ أَلَّا تُقْسِطُوا فِي الْيَتَامَىٰ","Dan jika kamu takut tidak dapat berlaku adil terhadap (hak) anak yatim (perempuan)...","تُقْسِطُوا"]] },

  { id: "shukr2", ar: "شَكَر", root: "شكر", mid: "bersyukur, berterima kasih", men: "to be grateful", pos: "verb", freq: 26, rank: 241, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,152,156,2]], ex: [[2,152,156,"فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ","Maka ingatlah kepada-Ku, Aku akan ingat kepadamu. Bersyukurlah kepada-Ku dan janganlah kamu ingkar kepada-Ku.","وَاشْكُرُوا"]] },

  { id: "kufr2", ar: "كُفْر", root: "كفر", mid: "kekafiran, ingkar", men: "disbelief, rejection", pos: "noun", freq: 36, rank: 242, wazan: "fu'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,152,156,3]], ex: [[2,152,156,"وَلَا تَكْفُرُونِ","...dan janganlah kamu ingkar kepada-Ku.","تَكْفُرُونِ"]] },

  { id: "tawba", ar: "تَوْبَة", root: "توب", mid: "tobat, kembali (kepada Allah)", men: "repentance", pos: "noun", freq: 12, rank: 243, wazan: "fa'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,37,43,4],[2,128,132,4]], ex: [[2,37,43,"فَتَلَقَّىٰ آدَمُ مِنْ رَبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ","Maka Adam menerima beberapa kalimat dari Tuhannya, lalu Dia menerima tobatnya...","تَابَ"]] },

  { id: "maghfira", ar: "مَغْفِرَة", root: "غفر", mid: "pengampunan, ampunan", men: "forgiveness, pardon", pos: "noun", freq: 29, rank: 244, wazan: "maf'ila", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,37,43,5],[2,160,164,1]], ex: [[2,160,164,"إِلَّا الَّذِينَ تَابُوا وَأَصْلَحُوا وَبَيَّنُوا","...kecuali orang-orang yang tobat dan memperbaiki (dirinya) dan menjelaskan (kebenaran)...","تَابُوا"]] },

  { id: "ghafara", ar: "غَفَر", root: "غفر", mid: "mengampuni, menutupi (dosa)", men: "to forgive, to cover (sins)", pos: "verb", freq: 39, rank: 245, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,37,43,6],[2,192,196,1]], ex: [[2,192,196,"فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ","...maka sungguh, Allah Maha Pengampun, Maha Penyayang.","غَفُورٌ"]] },

  { id: "ghafur", ar: "غَفُور", root: "غفر", mid: "Maha Pengampun (atribut Allah)", men: "The Most Forgiving", pos: "adjective", freq: 92, rank: 246, wazan: "fuul", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf",
    occ: [[2,173,177,1],[2,182,186,1]], ex: [[2,173,177,"فَمَنِ اضْطُرَّ غَيْرَ بَاغٍ وَلَا عَادٍ فَلَا إِثْمَ عَلَيْهِ","...maka siapa terpaksa (memakannya) bukan karena dia menginginkannya dan tidak (pula) melampaui batas, maka tidak ada dosa baginya. Sungguh, Allah Maha Pengampun, Maha Penyayang.","اللَّهُ"]] },

  { id: "sami", ar: "سَمِيع", root: "سمع", mid: "Maha Mendengar (atribut Allah)", men: "The All-Hearing", pos: "adjective", freq: 46, rank: 247, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf",
    occ: [[2,127,131,1],[2,137,141,1]], ex: [[2,127,131,"وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ","Dan (ingatlah) ketika Ibrahim meninggikan fondasi Baitullah bersama Ismail...","إِسْمَاعِيلُ"]] },

  { id: "basir", ar: "بَصِير", root: "بصر", mid: "Maha Melihat (atribut Allah)", men: "The All-Seeing", pos: "adjective", freq: 42, rank: 248, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf",
    occ: [[2,110,114,1],[2,125,129,3]], ex: [[2,110,114,"وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ","...dan dirikanlah salat dan tunaikanlah zakat. Dan kebaikan apa saja yang kamu usahakan untuk dirimu, niscaya kamu akan mendapat pahalanya di sisi Allah.","الزَّكَاةَ"]] },

  { id: "alim2", ar: "عَلِيم", root: "علم", mid: "Maha Mengetahui (atribut Allah)", men: "The All-Knowing", pos: "adjective", freq: 140, rank: 249, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf",
    occ: [[2,32,38,4],[2,77,80,1]], ex: [[2,77,80,"أَلَا إِنَّهُمْ يَثْنُونَ صُدُورَهُمْ","Ingatlah, sesungguhnya mereka (Yahudi) menyembunyikan apa yang ada dalam hati mereka...","يَثْنُونَ"]] },

  { id: "hakim", ar: "حَكِيم", root: "حكم", mid: "Maha Bijaksana (atribut Allah)", men: "The All-Wise", pos: "adjective", freq: 95, rank: 250, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf",
    occ: [[2,32,38,5],[2,129,133,1]], ex: [[2,129,133,"رَبَّنَا وَابْعَثْ فِيهِمْ رَسُولًا مِنْهُمْ","Ya Tuhan kami, utuslah di antara mereka seorang rasul dari kalangan mereka...","رَسُولًا"]] },
];
