import type { CompactWord } from "../wordBuilder";

// Batch 2: High-frequency Quranic lemmas (ranks 51-100)
export const BATCH_02: CompactWord[] = [
  { id: "rahma", ar: "رَحْمَة", root: "رحم", mid: "kasih sayang, rahmat", men: "mercy, compassion", pos: "noun", freq: 114, rank: 51, wazan: "fa'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb", role: "mutaaliq",
    occ: [[2,37,43,4],[2,128,132,2]], ex: [[2,128,132,"رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ","Ya Tuhan kami, jadikanlah kami orang-orang yang berserah diri kepada-Mu.","رَبَّنَا"]] },

  { id: "rasul", ar: "رَسُول", root: "رسل", mid: "rasul, utusan, rasul", men: "messenger, apostle", pos: "noun", freq: 367, rank: 52, wazan: "fauul", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb", role: "object",
    occ: [[2,87,90,1],[2,98,101,1]], ex: [[2,87,90,"وَلَقَدْ آتَيْنَا مُوسَىٰ الْكِتَابَ وَقَفَّيْنَا مِنْ بَعْدِهِ بِالرُّسُلِ","Dan sungguh, Kami telah memberikan Kitab kepada Musa dan Kami utus rasul-rasul setelahnya...","الرُّسُلِ"]] },

  { id: "nabi", ar: "نَبِيّ", root: "نبأ", mid: "nabi, nabi", men: "prophet", pos: "noun", freq: 75, rank: 53, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb", role: "object",
    occ: [[2,61,63,1],[2,91,94,1]], ex: [[2,61,63,"وَإِذْ قُلْتُمْ يَا مُوسَىٰ لَنْ نَصْبِرَ عَلَىٰ طَعَامٍ وَاحِدٍ","Dan (ingatlah) ketika kamu berkata: 'Wahai Musa, kami tidak sabar (makan) dengan satu jenis makanan saja.'","طَعَامٍ"]] },

  { id: "wahy", ar: "وَحْي", root: "وحى", mid: "wahyu, ilham, penyampaian", men: "revelation, inspiration", pos: "noun", freq: 77, rank: 54, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "jarr",
    occ: [[2,87,90,2],[6,59,1246,1]], ex: [[2,87,90,"وَقَفَّيْنَا مِنْ بَعْدِهِ بِالرُّسُلِ","Dan Kami utus rasul-rasul setelahnya...","بِالرُّسُلِ"]] },

  { id: "quran", ar: "قُرْآن", root: "قرأ", mid: "Al-Qur'an, bacaan", men: "Quran, recitation", pos: "proper_noun", freq: 69, rank: 55, wazan: "fu'laan", form: "I", def: "proper", irab: "raf",
    occ: [[2,185,189,1],[12,2,2353,1]], ex: [[2,185,189,"شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ","(Beberapa hari yang ditentukan itu ialah) bulan Ramadan, bulan yang di dalamnya diturunkan (permulaan) Al-Qur'an...","الْقُرْآنُ"]] },

  { id: "bayt", ar: "بَيْت", root: "بيت", mid: "rumah, bangunan, Ka'bah", men: "house, temple", pos: "noun", freq: 59, rank: 56, wazan: "fayl", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,125,129,1],[2,127,131,1]], ex: [[2,125,129,"وَإِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِلنَّاسِ","Dan (ingatlah) ketika Kami menjadikan rumah (Ka'bah) itu tempat berkumpul dan tempat kembali bagi manusia.","الْبَيْتَ"]] },

  { id: "kaaba", ar: "كَعْبَة", root: "كعب", mid: "Ka'bah", men: "Ka'bah", pos: "proper_noun", freq: 2, rank: 57, def: "proper", irab: "nasb",
    occ: [[5,95,1191,1]], ex: [[5,95,1191,"يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَقْتُلُوا الصَّيْدَ وَأَنتُمْ حُرُمٌ","Wahai orang-orang yang beriman! Janganlah kamu membunuh binatang buruan ketika kamu sedang ihram.","الصَّيْدَ"]] },

  { id: "iman", ar: "إِيمَان", root: "امن", mid: "iman, kepercayaan", men: "faith, belief", pos: "noun", freq: 45, rank: 58, wazan: "iifaal", form: "IV", g: "masculine", num: "singular", def: "definite", irab: "jarr",
    occ: [[2,62,65,6],[2,93,96,1]], ex: [[2,93,96,"وَأَنَا أَوَّلُ الْمُؤْمِنِينَ","Dan aku adalah orang yang pertama beriman.","الْمُؤْمِنِينَ"]] },

  { id: "kufr", ar: "كُفْر", root: "كفر", mid: "kekafiran, ingkar", men: "disbelief, ingratitude", pos: "noun", freq: 36, rank: 59, wazan: "fu'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,161,165,2],[2,191,195,1]], ex: [[2,161,165,"إِنَّ الَّذِينَ كَفَرُوا وَمَاتُوا وَهُمْ كُفَّارٌ","Sesungguhnya orang-orang yang kafir dan mati dalam keadaan kafir...","كَفَرُوا"]] },

  { id: "nur", ar: "نُور", root: "نور", mid: "cahaya, terang", men: "light", pos: "noun", freq: 49, rank: 60, wazan: "fu'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,17,21,1],[24,35,3517,1]], ex: [[2,17,21,"مَثَلُهُمْ كَمَثَلِ الَّذِي اسْتَوْقَدَ نَارًا فَلَمَّا أَضَاءَتْ مَا حَوْلَهُ","Perumpamaan mereka seperti orang yang menyalakan api, maka setelah api itu menerangi sekelilingnya...","نَارًا"]] },

  { id: "dhulumat", ar: "ظُلْمَة", root: "ظلم", mid: "kegelapan, kezaliman", men: "darkness, oppression", pos: "noun", freq: 27, rank: 61, wazan: "fu'la", form: "I", g: "feminine", num: "plural", def: "indefinite", irab: "jarr",
    occ: [[2,17,21,2],[2,20,26,2]], ex: [[2,17,21,"ذَهَبَ اللَّهُ بِنُورِهِمْ وَتَرَكَهُمْ فِي ظُلُمَاتٍ لَا يُبْصِرُونَ","Allah menghilangkan cahaya mereka dan membiarkan mereka dalam kegelapan, tidak dapat melihat.","ظُلُمَاتٍ"]] },

  { id: "jabr", ar: "جَبْر", root: "جبر", mid: "memaksa, kekuatan", men: "compulsion, force", pos: "noun", freq: 5, rank: 62, wazan: "fa'l", form: "I", def: "indefinite", irab: "nasb",
    occ: [[2,256,262,1]], ex: [[2,256,262,"لَا إِكْرَاهَ فِي الدِّينِ","Tidak ada paksaan dalam (menganut) agama.","إِكْرَاهَ"]] },

  { id: "ilm", ar: "عِلْم", root: "علم", mid: "ilmu, pengetahuan", men: "knowledge, science", pos: "noun", freq: 105, rank: 63, wazan: "fi'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,32,38,2],[2,120,123,1]], ex: [[2,32,38,"قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا","Mereka menjawab: 'Maha Suci Engkau, tidak ada yang kami ketahui selain dari apa yang telah Engkau ajarkan kepada kami.'","عِلْمَ"]] },

  { id: "hukm", ar: "حُكْم", root: "حكم", mid: "hukum, keputusan, keadilan", men: "judgment, ruling", pos: "noun", freq: 59, rank: 64, wazan: "fu'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,113,117,1],[2,213,217,1]], ex: [[2,113,117,"وَقَالَتِ الْيَهُودُ لَيْسَتِ النَّصَارَىٰ عَلَىٰ شَيْءٍ","Dan orang-orang Yahudi berkata: 'Orang-orang Nasrani itu tidak berpegang pada sesuatu (yang benar).'","شَيْءٍ"]] },

  { id: "qada", ar: "قَضَىٰ", root: "قضي", mid: "memutuskan, menetapkan, menyelesaikan", men: "to decree, to judge", pos: "verb", freq: 45, rank: 65, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,117,121,1],[2,210,216,1]], ex: [[2,117,121,"بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ وَإِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُنْ فَيَكُونُ","Pencipta langit dan bumi. Apabila Dia menetapkan sesuatu, Dia hanya berkata kepadanya: 'Jadilah!' maka jadilah ia.","قَضَىٰ"]] },

  { id: "amr", ar: "أَمْر", root: "امر", mid: "perintah, urusan, perkara", men: "command, affair, matter", pos: "noun", freq: 437, rank: 66, wazan: "fi'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,117,121,2],[2,210,216,2]], ex: [[2,117,121,"بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ وَإِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُنْ فَيَكُونُ","Pencipta langit dan bumi. Apabila Dia menetapkan sesuatu, Dia hanya berkata kepadanya: 'Jadilah!' maka jadilah ia.","أَمْرًا"]] },

  { id: "kun", ar: "كُن", root: "كون", mid: "jadilah (fi'il amr)", men: "Be! (imperative)", pos: "verb", freq: 13, rank: 67, wazan: "fu", form: "I", vf: "fiil_amr", irab: "none",
    occ: [[2,117,121,3],[2,117,121,4]], ex: [[2,117,121,"فَإِنَّمَا يَقُولُ لَهُ كُنْ فَيَكُونُ","Dia hanya berkata kepadanya: 'Jadilah!' maka jadilah ia.","كُن"]] },

  { id: "kawn", ar: "كَوْن", root: "كون", mid: "ada, menjadi, keberadaan", men: "being, existence", pos: "noun", freq: 21, rank: 68, wazan: "fawl", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf",
    occ: [[2,117,121,5],[2,117,121,6]], ex: [[2,117,121,"فَإِنَّمَا يَقُولُ لَهُ كُنْ فَيَكُونُ","Dia hanya berkata kepadanya: 'Jadilah!' maka jadilah ia.","يَكُونُ"]] },

  { id: "nasara", ar: "نَصْر", root: "نصر", mid: "pertolongan, kemenangan", men: "help, victory", pos: "noun", freq: 43, rank: 69, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,107,111,1],[2,111,115,1]], ex: [[2,107,111,"أَمْ تُرِيدُونَ أَنْ تَسْأَلُوا رَسُولَكُمْ","Ataukah kamu ingin bertanya kepada Rasul kalian...","رَسُولَكُمْ"]] },

  { id: "shaitan", ar: "شَيْطَان", root: "شطن", mid: "setan, iblis", men: "Satan, devil", pos: "proper_noun", freq: 88, rank: 70, wazan: "faylaan", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf",
    occ: [[2,36,42,1],[2,168,172,1]], ex: [[2,36,42,"فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا","Maka setan menjerumuskan keduanya darinya (surga)...","الشَّيْطَانُ"]] },

  { id: "azalla", ar: "أَزَلّ", root: "زلل", mid: "menjerumuskan, menjatuhkan", men: "to cause to slip", pos: "verb", freq: 5, rank: 71, wazan: "af'ala", form: "IV", vf: "fiil_madhi", irab: "none",
    occ: [[2,36,42,2]], ex: [[2,36,42,"فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا","Maka setan menjerumuskan keduanya darinya (surga)...","أَزَلَّهُمَا"]] },

  { id: "jinna", ar: "جِنّ", root: "جنه", mid: "jin, makhluk gaib", men: "jinn, spirits", pos: "noun", freq: 32, rank: 72, wazan: "finn", form: "I", g: "masculine", num: "collective", def: "indefinite", irab: "raf",
    occ: [[2,274,280,1],[6,128,1305,1]], ex: [[6,128,1305,"يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ","Wahai kaum jin dan manusia...","الْجِنِّ"]] },

  { id: "ins", ar: "إِنْس", root: "انس", mid: "manusia, golongan manusia", men: "mankind, humans", pos: "noun", freq: 11, rank: 73, wazan: "ifl", form: "IV", g: "masculine", num: "collective", def: "definite", irab: "raf",
    occ: [[6,128,1305,2]], ex: [[6,128,1305,"يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ","Wahai kaum jin dan manusia...","الْإِنسِ"]] },

  { id: "qissa", ar: "قَصَّ", root: "قصص", mid: "menceritakan, menceritakan", men: "to narrate, to tell", pos: "verb", freq: 27, rank: 74, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,274,280,2],[12,3,2354,1]], ex: [[12,3,2354,"نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ","Kami menceritakan kepadamu kisah yang paling baik...","نَقُصُّ"]] },

  { id: "mumin", ar: "مُؤْمِن", root: "امن", mid: "mukmin, orang beriman", men: "believer", pos: "noun", freq: 195, rank: 75, wazan: "mu'fil", form: "IV", g: "masculine", num: "singular", def: "definite", irab: "raf",
    occ: [[2,93,96,2],[2,103,106,1]], ex: [[2,93,96,"وَأَنَا أَوَّلُ الْمُؤْمِنِينَ","Dan aku adalah orang yang pertama beriman.","الْمُؤْمِنِينَ"]] },

  { id: "kafir", ar: "كَافِر", root: "كفر", mid: "kafir, orang yang ingkar", men: "disbeliever, infidel", pos: "noun", freq: 154, rank: 76, wazan: "faa'il", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf",
    occ: [[2,161,165,3],[3,12,375,1]], ex: [[2,161,165,"إِنَّ الَّذِينَ كَفَرُوا وَمَاتُوا وَهُمْ كُفَّارٌ","Sesungguhnya orang-orang yang kafir dan mati dalam keadaan kafir...","كُفَّارٌ"]] },

  { id: "abada3", ar: "عِبَادَة", root: "عبد", mid: "ibadah, persembahan", men: "worship, devotion", pos: "noun", freq: 28, rank: 77, wazan: "fi'ala", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,83,86,2],[2,132,136,1]], ex: [[2,83,86,"وَإِذْ أَخَذْنَا مِيثَاقَ بَنِي إِسْرَائِيلَ لَا تَعْبُدُونَ إِلَّا اللَّهَ","Dan (ingatlah) ketika Kami mengambil janji dari Bani Israil: Janganlah kamu menyembah selain Allah...","تَعْبُدُونَ"]] },

  { id: "ibnu", ar: "ابْن", root: "بنن", mid: "anak laki-laki, putra", men: "son", pos: "noun", freq: 35, rank: 78, wazan: "if'al", form: "I", g: "masculine", num: "singular", def: "construct", irab: "nasb",
    occ: [[2,83,86,3],[2,111,115,2]], ex: [[2,83,86,"وَإِذْ أَخَذْنَا مِيثَاقَ بَنِي إِسْرَائِيلَ","Dan (ingatlah) ketika Kami mengambil janji dari Bani Israil...","بَنِي"]] },

  { id: "israil", ar: "إِسْرَائِيل", root: "اسر", mid: "Israil (Yakub)", men: "Israel (Jacob)", pos: "proper_noun", freq: 43, rank: 79, def: "proper", irab: "jarr", role: "mudhaf_ilayh",
    occ: [[2,83,86,4],[2,140,143,1]], ex: [[2,83,86,"وَإِذْ أَخَذْنَا مِيثَاقَ بَنِي إِسْرَائِيلَ","Dan (ingatlah) ketika Kami mengambil janji dari Bani Israil...","إِسْرَائِيلَ"]] },

  { id: "wasiyya", ar: "وَصَىٰ", root: "وصي", mid: "berwasiat, memerintahkan", men: "to enjoin, to bequeath", pos: "verb", freq: 26, rank: 80, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,132,136,2],[2,180,184,1]], ex: [[2,132,136,"وَوَصَّىٰ بِهَا إِبْرَاهِيمُ بَنِيهِ","Dan Ibrahim mewasiatkan (ini) kepada anak-anaknya...","وَصَّىٰ"]] },

  { id: "ibrahim", ar: "إِبْرَاهِيم", root: "ابرهم", mid: "Ibrahim (Abraham)", men: "Abraham", pos: "proper_noun", freq: 69, rank: 81, def: "proper", irab: "raf", role: "mubtada",
    occ: [[2,124,128,1],[2,127,131,2]], ex: [[2,124,128,"وَإِذِ ابْتَلَىٰ إِبْرَاهِيمَ رَبُّهُ بِكَلِمَاتٍ","Dan (ingatlah) ketika Ibrahim diuji oleh Tuhannya dengan beberapa kalimat...","إِبْرَاهِيمَ"]] },

  { id: "ibtila", ar: "ابْتَلَىٰ", root: "بلو", mid: "menguji, mencoba", men: "to test, to try", pos: "verb", freq: 8, rank: 82, wazan: "ifta'ala", form: "VIII", vf: "fiil_madhi", irab: "none",
    occ: [[2,124,128,2],[2,124,128,3]], ex: [[2,124,128,"وَإِذِ ابْتَلَىٰ إِبْرَاهِيمَ رَبُّهُ بِكَلِمَاتٍ","Dan (ingatlah) ketika Ibrahim diuji oleh Tuhannya dengan beberapa kalimat...","ابْتَلَىٰ"]] },

  { id: "khalasa", ar: "خَلَص", root: "خلص", mid: "murni, ikhlas, khusus", men: "pure, sincere", pos: "adjective", freq: 15, rank: 83, wazan: "fa'ala", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf",
    occ: [[2,139,142,1],[3,64,407,1]], ex: [[3,64,407,"قُلْ يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَىٰ كَلِمَةٍ سَوَاءٍ بَيْنَنَا","Katakanlah: 'Wahai Ahli Kitab, marilah menuju ke suatu kalimat yang sama antara kami dan kamu...'","تَعَالَوْا"]] },

  { id: "wahd", ar: "وَحْد", root: "وحد", mid: "keesaan, kesatuan", men: "oneness, unity", pos: "noun", freq: 28, rank: 84, wazan: "fa'l", form: "I", def: "indefinite", irab: "nasb",
    occ: [[2,163,167,2]], ex: [[2,163,167,"وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ","Dan Tuhan kamu adalah Tuhan Yang Maha Esa...","وَاحِدٌ"]] },

  { id: "tasbih", ar: "تَسْبِيح", root: "سبح", mid: "tasbih, bertasbih, memuji", men: "glorification, praise", pos: "noun", freq: 16, rank: 85, wazan: "tafeiil", form: "II", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,30,36,6],[3,41,401,1]], ex: [[3,41,401,"قَالَ رَبِّ اجْعَلْ لِي آيَةً قَالَ آيَتُكَ أَلَّا تُكَلِّمَ النَّاسَ ثَلَاثَةَ أَيَّامٍ","Zakaria berkata: 'Ya Tuhanku, berilah aku tanda.' Allah berfirman: 'Tandanya adalah engkau tidak dapat berbicara dengan manusia selama tiga hari...'","تُكَلِّمَ"]] },

  { id: "hamd", ar: "حَمْد", root: "حمد", mid: "puji, syukur, pujian", men: "praise, gratitude", pos: "noun", freq: 38, rank: 86, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "raf", role: "mubtada",
    occ: [[1,2,2,1],[2,45,49,1]], ex: [[1,2,2,"الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ","Segala puji bagi Allah, Tuhan semesta alam.","الْحَمْدُ"]] },

  { id: "sujoood", ar: "سَجَد", root: "سجد", mid: "bersujud, tunduk", men: "to prostrate, to bow", pos: "verb", freq: 38, rank: 87, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,34,40,2],[2,125,129,2]], ex: [[2,34,40,"فَقَعُوا لَهُ سَاجِدِينَ","Maka tersungkurlah mereka bersujud kepadanya (Adam)...","سَاجِدِينَ"]] },

  { id: "ruku", ar: "رُكُوع", root: "ركع", mid: "rukuk, membungkuk dalam salat", men: "bowing (in prayer)", pos: "noun", freq: 8, rank: 88, wazan: "fu'ul", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "jarr",
    occ: [[2,43,47,2]], ex: [[2,43,47,"وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ","Dan dirikanlah salat, tunaikanlah zakat, dan rukuklah bersama orang-orang yang rukuk.","ارْكَعُوا"]] },

  { id: "zakat", ar: "زَكَاة", root: "زكو", mid: "zakat, pensucian, keberkahan", men: "zakat, charity, purification", pos: "noun", freq: 32, rank: 89, wazan: "fa'alaat", form: "I", g: "feminine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,43,47,3],[2,83,86,5]], ex: [[2,43,47,"وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ","Dan dirikanlah salat, tunaikanlah zakat, dan rukuklah bersama orang-orang yang rukuk.","الزَّكَاةَ"]] },

  { id: "miskin", ar: "مِسْكِين", root: "سكن", mid: "miskin, orang miskin", men: "poor, needy", pos: "noun", freq: 23, rank: 90, wazan: "mif'iil", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,83,86,6],[2,177,181,1]], ex: [[2,177,181,"لَيْسَ الْبِرَّ أَنْ تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ","Kebajikan itu bukanlah menghadapkan wajah ke arah timur dan barat...","الْمَشْرِقِ"]] },

  { id: "yatim", ar: "يَتِيم", root: "يتم", mid: "anak yatim", men: "orphan", pos: "noun", freq: 23, rank: 91, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,83,86,7],[2,177,181,2]], ex: [[2,177,181,"وَآتَى الْمَالَ عَلَىٰ حُبِّهِ ذَوِي الْقُرْبَىٰ وَالْيَتَامَىٰ","...dan memberikan harta yang dicintainya kepada kerabat, anak yatim...","الْيَتَامَىٰ"]] },

  { id: "ibn_sabil", ar: "سَبِيل", root: "سبل", mid: "jalan, cara, perjalanan", men: "way, path, road", pos: "noun", freq: 175, rank: 92, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,177,181,3],[2,177,181,4]], ex: [[2,177,181,"وَابْنِ السَّبِيلِ وَالسَّائِلِينَ وَفِي الرِّقَابِ","...dan ibnu sabil (musafir yang kehabisan bekal), dan orang yang meminta-minta, dan untuk (memerdekakan) budak...","السَّبِيلِ"]] },

  { id: "sail", ar: "سَأَل", root: "سأل", mid: "meminta, bertanya", men: "to ask, to request", pos: "verb", freq: 65, rank: 93, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,177,181,5]], ex: [[2,177,181,"وَالسَّائِلِينَ وَفِي الرِّقَابِ","...dan orang yang meminta-minta, dan untuk (memerdekakan) budak...","السَّائِلِينَ"]] },

  { id: "riqab", ar: "رَقَبَة", root: "رقب", mid: "budak, leher, diri", men: "slave, neck, self", pos: "noun", freq: 17, rank: 94, wazan: "fa'ala", form: "I", g: "feminine", num: "plural", def: "indefinite", irab: "jarr",
    occ: [[2,177,181,6]], ex: [[2,177,181,"وَفِي الرِّقَابِ","...dan untuk (memerdekakan) budak...","الرِّقَابِ"]] },

  { id: "salah2", ar: "صَلَّىٰ", root: "صلو", mid: "bersalat, mendoakan", men: "to pray", pos: "verb", freq: 99, rank: 95, wazan: "fa''ala", form: "II", vf: "fiil_madhi", irab: "none",
    occ: [[2,43,47,4]], ex: [[2,43,47,"وَأَقِيمُوا الصَّلَاةَ","Dan dirikanlah salat...","الصَّلَاةَ"]] },

  { id: "qawama", ar: "قَام", root: "قوم", mid: "berdiri, menegakkan", men: "to stand, to establish", pos: "verb", freq: 126, rank: 96, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,43,47,1]], ex: [[2,43,47,"وَأَقِيمُوا الصَّلَاةَ","Dan dirikanlah salat...","أَقِيمُوا"]] },

  { id: "fatiha", ar: "فَاتِحَة", root: "فتح", mid: "pembukaan, kunci", men: "opening, key", pos: "noun", freq: 4, rank: 97, wazan: "faa'ila", form: "I", g: "feminine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,107,111,2]], ex: [[2,107,111,"إِنَّ اللَّهَ لَا يَظْلِمُ النَّاسَ شَيْئًا","Sesungguhnya Allah tidak menzalimi manusia sedikit pun...","شَيْئًا"]] },

  { id: "fath", ar: "فَتْح", root: "فتح", mid: "kemenangan, pembukaan", men: "victory, opening, conquest", pos: "noun", freq: 29, rank: 98, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,107,111,3]], ex: [[2,107,111,"إِنَّ اللَّهَ لَا يَظْلِمُ النَّاسَ شَيْئًا","Sesungguhnya Allah tidak menzalimi manusia sedikit pun...","شَيْئًا"]] },

  { id: "zulum", ar: "ظَلَم", root: "ظلم", mid: "menzalimi, berbuat zalim", men: "to wrong, to oppress", pos: "verb", freq: 115, rank: 99, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,107,111,4],[2,229,235,1]], ex: [[2,107,111,"إِنَّ اللَّهَ لَا يَظْلِمُ النَّاسَ شَيْئًا","Sesungguhnya Allah tidak menzalimi manusia sedikit pun...","يَظْلِمُ"]] },

  { id: "umma", ar: "أُمَّة", root: "امم", mid: "umat, bangsa, komunitas", men: "nation, community, ummah", pos: "noun", freq: 64, rank: 100, wazan: "fum'a", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,128,132,3],[2,134,137,2]], ex: [[2,128,132,"رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً","Ya Tuhan kami, jadikanlah kami orang-orang yang berserah diri kepada-Mu dan (jadikanlah) dari anak cucu kami umat yang berserah diri kepada-Mu...","أُمَّةً"]] },
];
