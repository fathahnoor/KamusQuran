import type { CompactWord } from "../wordBuilder";

// Batch 4: High-frequency Quranic lemmas (ranks 151-200)
export const BATCH_04: CompactWord[] = [
  { id: "hal", ar: "هَل", root: "هل", mid: "apakah (partikel tanya)", men: "is, whether (question particle)", pos: "particle", freq: 37, rank: 151, irab: "none",
    occ: [[2,49,53,1],[2,67,70,1]], ex: [[2,49,53,"وَإِذْ نَجَّيْنَاكُمْ مِنْ آلِ فِرْعَوْنَ","Dan (ingatlah) ketika Kami selamatkan kamu dari (kezaliman) keluarga Fir'aun...","نَجَّيْنَاكُمْ"]] },

  { id: "qad", ar: "قَدْ", root: "قدد", mid: "telah, sungguh (partikel penegas)", men: "already, indeed (particle)", pos: "particle", freq: 141, rank: 152, irab: "none",
    occ: [[2,24,30,1],[2,118,122,1]], ex: [[2,118,122,"وَقَالَ الَّذِينَ لَا يَعْلَمُونَ لَوْلَا يُكَلِّمُنَا اللَّهُ","Dan orang-orang yang tidak mengetahui berkata: 'Mengapa Allah tidak berbicara kepada kami?'","لَوْلَا"]] },

  { id: "lamma", ar: "لَمَّا", root: "لما", mid: "ketika, sehingga (partikel temporal)", men: "when, until (temporal particle)", pos: "particle", freq: 43, rank: 153, irab: "none",
    occ: [[2,54,57,2],[2,67,70,2]], ex: [[2,54,57,"وَإِذْ قُلْتُمْ يَا مُوسَىٰ لَنْ نُؤْمِنَ لَكَ حَتَّىٰ نَرَىٰ اللَّهَ جَهْرَةً","Dan (ingatlah) ketika kamu berkata: 'Wahai Musa, kami tidak akan beriman kepadamu sebelum kami melihat Allah secara langsung.'","لَنْ"]] },

  { id: "lamma2", ar: "لَمْ", root: "لما", mid: "tidak (nafi jazm)", men: "not (negation particle, jussive)", pos: "particle", freq: 133, rank: 154, irab: "none",
    occ: [[2,6,10,2],[2,16,20,1]], ex: [[2,6,10,"لَا يُؤْمِنُونَ","...mereka tidak akan beriman.","يُؤْمِنُونَ"]] },

  { id: "la", ar: "لَا", root: "لا", mid: "tidak (partikel nafi)", men: "no, not (negation particle)", pos: "particle", freq: 1384, rank: 155, irab: "none",
    occ: [[1,5,5,1],[2,6,10,3]], ex: [[2,6,10,"لَا يُؤْمِنُونَ","...mereka tidak akan beriman.","لَا"]] },

  { id: "lan", ar: "لَنْ", root: "لنن", mid: "tidak akan (nafi nasib)", men: "will not (negation, subjunctive)", pos: "particle", freq: 43, rank: 156, irab: "none",
    occ: [[2,6,10,4],[2,24,30,2]], ex: [[2,24,30,"وَلَنْ تَفْعَلُوا","...dan kamu pasti tidak akan dapat membuat (satu surat seperti Al-Qur'an).","تَفْعَلُوا"]] },

  { id: "ma", ar: "مَا", root: "ماو", mid: "apa, tidak (nafi/tanya/relatif)", men: "what, that which, not", pos: "particle", freq: 2944, rank: 157, irab: "none",
    occ: [[1,5,5,2],[2,3,5,1]], ex: [[2,3,5,"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ","(yaitu) orang-orang yang beriman kepada yang ghaib, mendirikan salat, dan menafkahkan sebagian rezeki yang Kami berikan kepada mereka.","مِمَّا"]] },

  { id: "man", ar: "مَنْ", root: "منن", mid: "siapa, barangsiapa (relatif)", men: "who, whoever", pos: "pronoun", freq: 760, rank: 158, irab: "raf",
    occ: [[2,24,30,3],[2,26,32,1]], ex: [[2,26,32,"فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا فَأَخْرَجَهُمَا مِمَّا كَانَا فِيهِ","Maka setan menjerumuskan keduanya darinya (surga) lalu mengeluarkan keduanya dari apa yang mereka berada di dalamnya...","مِمَّا"]] },

  { id: "ma2", ar: "مَا", root: "ماو", mid: "apa (isim tanya)", men: "what (interrogative)", pos: "pronoun", freq: 2944, rank: 159, irab: "nasb",
    occ: [[2,30,36,1]], ex: [[2,30,36,"قَالُوا أَتَجْعَلُ فِيهَا مَنْ يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ","Mereka (malaikat) berkata: 'Apakah Engkau akan menjadikan di dalamnya orang yang akan berbuat kerusakan?'","أَتَجْعَلُ"]] },

  { id: "min", ar: "مِنْ", root: "منن", mid: "dari, sebagian dari (preposisi)", men: "from, of (preposition)", pos: "particle", freq: 2845, rank: 160, irab: "none",
    occ: [[2,3,5,2],[2,22,28,1]], ex: [[2,3,5,"وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ","...dan menafkahkan sebagian rezeki yang Kami berikan kepada mereka.","مِمَّا"]] },

  { id: "fi", ar: "فِي", root: "فيي", mid: "di, dalam (preposisi)", men: "in, at (preposition)", pos: "particle", freq: 1701, rank: 161, irab: "none",
    occ: [[2,2,9,1],[2,7,11,1]], ex: [[2,2,9,"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ","Kitab (Al-Qur'an) ini tidak ada keraguan di dalamnya...","فِيهِ"]] },

  { id: "ala", ar: "عَلَىٰ", root: "علو", mid: "atas, di atas (preposisi)", men: "on, upon (preposition)", pos: "particle", freq: 1494, rank: 162, irab: "none",
    occ: [[2,7,11,2],[2,22,28,2]], ex: [[2,7,11,"خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ","Allah telah mengunci hati mereka...","عَلَىٰ"]] },

  { id: "ila", ar: "إِلَىٰ", root: "الى", mid: "ke, kepada (preposisi)", men: "to, toward (preposition)", pos: "particle", freq: 1333, rank: 163, irab: "none",
    occ: [[2,5,7,2],[2,144,148,1]], ex: [[2,144,148,"فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ","...maka hadapkanlah wajahmu ke arah Masjidilharam.","شَطْرَ"]] },

  { id: "an", ar: "عَنْ", root: "عنن", mid: "dari, tentang (preposisi)", men: "from, about (preposition)", pos: "particle", freq: 645, rank: 164, irab: "none",
    occ: [[2,36,42,1],[2,74,77,1]], ex: [[2,36,42,"فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا","Maka setan menjerumuskan keduanya darinya (surga)...","عَنْهَا"]] },

  { id: "maa3", ar: "مَعَ", root: "مع", mid: "bersama, dengan (preposisi)", men: "with, together (preposition)", pos: "particle", freq: 89, rank: 165, irab: "none",
    occ: [[2,43,47,1]], ex: [[2,43,47,"وَارْكَعُوا مَعَ الرَّاكِعِينَ","...dan rukuklah bersama orang-orang yang rukuk.","مَعَ"]] },

  { id: "bayna", ar: "بَيْن", root: "بين", mid: "antara (preposisi)", men: "between (preposition)", pos: "particle", freq: 196, rank: 166, irab: "none",
    occ: [[2,22,28,3],[2,115,119,1]], ex: [[2,115,119,"وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ","Dan milik Allah timur dan barat. Ke mana pun kamu menghadap, di situlah wajah Allah...","وَجْهُ"]] },

  { id: "wa", ar: "وَ", root: "ووو", mid: "dan (huruf athaf)", men: "and (conjunction)", pos: "particle", freq: 4064, rank: 167, irab: "none",
    occ: [[1,1,1,1],[2,1,8,1]], ex: [[1,1,1,"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.","الرَّحْمَٰنِ"]] },

  { id: "fa", ar: "فَ", root: "ففف", mid: "maka, lalu (huruf athaf/athf)", men: "then, so (conjunction)", pos: "particle", freq: 1643, rank: 168, irab: "none",
    occ: [[2,6,10,1],[2,17,21,1]], ex: [[2,17,21,"فَلَمَّا أَضَاءَتْ مَا حَوْلَهُ","...maka setelah api itu menerangi sekelilingnya...","فَلَمَّا"]] },

  { id: "thumma", ar: "ثُمَّ", root: "ثمم", mid: "kemudian, lalu (urutan)", men: "then, moreover (conjunction)", pos: "particle", freq: 145, rank: 169, irab: "none",
    occ: [[2,29,35,1],[2,35,41,1]], ex: [[2,29,35,"ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ","...kemudian Dia menuju ke langit...","ثُمَّ"]] },

  { id: "aw", ar: "أَوْ", root: "اوو", mid: "atau (huruf athaf)", men: "or (conjunction)", pos: "particle", freq: 313, rank: 170, irab: "none",
    occ: [[2,23,29,1],[2,62,65,1]], ex: [[2,23,23,"وَإِنْ كُنْتُمْ فِي رَيْبٍ مِمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا","Dan jika kamu ragu terhadap apa yang Kami turunkan kepada hamba Kami (Muhammad)...","رَيْبٍ"]] },

  { id: "lakin", ar: "لَٰكِن", root: "لكن", mid: "tetapi, namun (istidrak)", men: "but, however (conjunction)", pos: "particle", freq: 133, rank: 171, irab: "none",
    occ: [[2,102,105,1]], ex: [[2,102,105,"وَمَا كَفَرَ سُلَيْمَانُ وَلَٰكِنَّ الشَّيَاطِينَ كَفَرُوا","...dan Sulaiman tidak kafir, tetapi setan-setan yang kafir...","وَلَٰكِنَّ"]] },

  { id: "bal", ar: "بَلْ", root: "بلل", mid: "bahkan, sebaliknya (inkari/istidrak)", men: "rather, nay (conjunction)", pos: "particle", freq: 123, rank: 172, irab: "none",
    occ: [[2,8,12,1]], ex: [[2,8,8,"وَمِنَ النَّاسِ مَنْ يَقُولُ آمَنَّا بِاللَّهِ وَبِالْيَوْمِ الْآخِرِ وَمَا هُمْ بِمُؤْمِنِينَ","Dan di antara manusia ada yang berkata: 'Kami beriman kepada Allah dan hari akhir,' padahal mereka tidak beriman.","وَمَا"]] },

  { id: "idh", ar: "إِذْ", root: "اذن", mid: "ketika (isim zaman)", men: "when (temporal)", pos: "noun", freq: 218, rank: 173, wazan: "idh", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,30,36,1],[2,40,46,1]], ex: [[2,40,46,"يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ","Wahai Bani Israil! Ingatlah nikmat-Ku yang telah Aku berikan kepadamu...","اذْكُرُوا"]] },

  { id: "idha", ar: "إِذَا", root: "اذن", mid: "apabila, jika (zaman/syarth)", men: "when, if (conditional/temporal)", pos: "particle", freq: 339, rank: 174, irab: "none",
    occ: [[2,22,28,4],[2,27,33,1]], ex: [[2,27,33,"فَأَخْرَجَهُمَا مِمَّا كَانَا فِيهِ وَقُلْنَا اهْبِطُوا","...lalu mengeluarkan keduanya dari apa yang mereka berada di dalamnya, dan Kami berfirman: 'Turunlah kamu semua!'","اهْبِطُوا"]] },

  { id: "hatta", ar: "حَتَّىٰ", root: "حتى", mid: "sampai, hingga (ghayah/ibtida)", men: "until, even (preposition/conjunction)", pos: "particle", freq: 371, rank: 175, irab: "none",
    occ: [[2,24,30,1],[2,214,218,1]], ex: [[2,214,218,"يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ","Wahai orang-orang yang beriman! Mohonlah pertolongan (kepada Allah) dengan sabar dan salat...","اسْتَعِينُوا"]] },

  { id: "min2", ar: "مِنْ", root: "منن", mid: "dari (preposisi tarfidhiyyah)", men: "from (elative preposition)", pos: "particle", freq: 2845, rank: 176, irab: "none",
    occ: [[2,22,28,5]], ex: [[2,22,28,"الَّذِينَ يَنقُضُونَ عَهْدَ اللَّهِ مِنْ بَعْدِ مِيثَاقِهِ","(yaitu) orang-orang yang memutuskan perjanjian Allah setelah diikat dengan kuat...","مِيثَاقِهِ"]] },

  { id: "ilman", ar: "عِلْم", root: "علم", mid: "ilmu pengetahuan (jaarr)", men: "knowledge (genitive context)", pos: "noun", freq: 105, rank: 177, wazan: "fi'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "jarr",
    occ: [[2,32,38,3]], ex: [[2,32,38,"قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا","Mereka menjawab: 'Maha Suci Engkau, tidak ada yang kami ketahui selain dari apa yang telah Engkau ajarkan kepada kami.'","عِلْمَ"]] },

  { id: "tawakkal", ar: "تَوَكَّل", root: "وكل", mid: "bertawakal, berserah diri", men: "to trust, to rely on", pos: "verb", freq: 53, rank: 178, wazan: "tafa''ala", form: "V", vf: "fiil_madhi", irab: "none",
    occ: [[2,233,237,1],[3,159,433,1]], ex: [[3,159,433,"فَبِمَا رَحْمَةٍ مِنَ اللَّهِ لِنْتَ لَهُمْ","Maka berkat rahmat Allah kamu berlaku lemah lembut kepada mereka...","لِنْتَ"]] },

  { id: "sabr", ar: "صَبْر", root: "صبر", mid: "kesabaran, tabah", men: "patience, perseverance", pos: "noun", freq: 54, rank: 179, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "jarr",
    occ: [[2,45,49,2],[2,153,157,1]], ex: [[2,153,157,"يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ","Wahai orang-orang yang beriman! Mohonlah pertolongan (kepada Allah) dengan sabar dan salat...","الصَّبْرِ"]] },

  { id: "shukr", ar: "شُكْر", root: "شكر", mid: "bersyukur, syukur", men: "gratitude, thankfulness", pos: "noun", freq: 26, rank: 180, wazan: "fu'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,152,156,1]], ex: [[2,152,156,"فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ","Maka ingatlah kepada-Ku, Aku akan ingat kepadamu. Bersyukurlah kepada-Ku dan janganlah kamu ingkar kepada-Ku.","وَاشْكُرُوا"]] },

  { id: "dhikr", ar: "ذِكْر", root: "ذكر", mid: "mengingat, zikir, sebutan", men: "remembrance, mention", pos: "noun", freq: 74, rank: 181, wazan: "fi'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,114,118,1],[2,151,155,1]], ex: [[2,151,155,"كَمَا أَرْسَلْنَا فِيكُمْ رَسُولًا مِنْكُمْ","Sebagaimana Kami telah mengutus kepada kamu seorang Rasul dari (kalangan) kamu...","رَسُولًا"]] },

  { id: "hadith", ar: "حَدِيث", root: "حدث", mid: "percakapan, berita, cerita", men: "narration, discourse, news", pos: "noun", freq: 27, rank: 182, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,68,71,1],[12,6,2357,1]], ex: [[12,6,2357,"وَكَذَٰلِكَ يَجْتَبِيكَ رَبُّكَ وَيُعَلِّمُكَ مِنْ تَأْوِيلِ الْأَحَادِيثِ","Dan demikianlah Tuhanmu memilihmu (Yusuf) dan diajarkan-Nya kepadamu sebagian dari takwil mimpi...","الْأَحَادِيثِ"]] },

  { id: "qissa2", ar: "قِصَّة", root: "قصص", mid: "kisah, cerita", men: "story, narrative", pos: "noun", freq: 29, rank: 183, wazan: "fi'la", form: "I", g: "feminine", num: "singular", def: "definite", irab: "nasb",
    occ: [[12,3,2354,1]], ex: [[12,3,2354,"نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ","Kami menceritakan kepadamu kisah yang paling baik...","الْقَصَصِ"]] },

  { id: "ayah", ar: "آيَة", root: "ايو", mid: "ayat, tanda, mukjizat", men: "sign, verse, miracle", pos: "noun", freq: 382, rank: 184, wazan: "fa'ala", form: "I", g: "feminine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,1,8,1],[2,99,102,1]], ex: [[2,99,102,"وَلَقَدْ أَنْزَلْنَا إِلَيْكَ آيَاتٍ بَيِّنَاتٍ","Dan sungguh, Kami telah menurunkan kepadamu ayat-ayat yang jelas...","آيَاتٍ"]] },

  { id: "bayyinat", ar: "بَيِّنَة", root: "بين", mid: "bukti, keterangan jelas", men: "clear proof, evidence", pos: "noun", freq: 36, rank: 185, wazan: "fa'iila", form: "II", g: "feminine", num: "plural", def: "indefinite", irab: "nasb",
    occ: [[2,72,75,1],[2,159,163,2]], ex: [[2,159,163,"إِنَّ الَّذِينَ يَكْتُمُونَ مَا أَنْزَلْنَا مِنَ الْبَيِّنَاتِ","Sesungguhnya orang-orang yang menyembunyikan apa yang telah Kami turunkan berupa keterangan-keterangan...","الْبَيِّنَاتِ"]] },

  { id: "furqan", ar: "فُرْقَان", root: "فرق", mid: "pembeda, kriteria, Furqan", men: "criterion, differentiation", pos: "noun", freq: 7, rank: 186, wazan: "fu'laan", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,53,56,1]], ex: [[2,53,56,"وَإِذْ آتَيْنَا مُوسَىٰ الْكِتَابَ وَالْفُرْقَانَ","Dan (ingatlah) ketika Kami memberikan kepada Musa Kitab (Taurat) dan kriteria (pembeda)...","الْفُرْقَانَ"]] },

  { id: "tawrat", ar: "تَوْرَاة", root: "ورى", mid: "Taurat (Kitab Musa)", men: "Torah", pos: "proper_noun", freq: 18, rank: 187, def: "proper", irab: "nasb",
    occ: [[2,53,56,2],[2,63,66,1]], ex: [[2,63,66,"وَإِذْ أَخَذْنَا مِيثَاقَكُمْ وَرَفَعْنَا فَوْقَكُمُ الطُّورَ","Dan (ingatlah) ketika Kami mengambil janji dari kamu dan Kami angkat gunung (Thur) di atasmu...","الطُّورَ"]] },

  { id: "injil", ar: "إِنْجِيل", root: "اجل", mid: "Injil (Kitab Isa)", men: "Gospel", pos: "proper_noun", freq: 12, rank: 188, def: "proper", irab: "nasb",
    occ: [[3,3,369,1],[3,65,408,1]], ex: [[3,3,369,"نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِمَا بَيْنَ يَدَيْهِ وَأَنْزَلَ التَّوْرَاةَ وَالْإِنْجِيلَ","Dia menurunkan kepadamu (Muhammad) Kitab (Al-Qur'an) dengan benar, membenarkan (Kitab-kitab) sebelumnya, dan Dia menurunkan Taurat dan Injil...","الْإِنْجِيلَ"]] },

  { id: "zabur", ar: "زَبُور", root: "زبر", mid: "Zabur (Kitab Daud)", men: "Psalms (of David)", pos: "proper_noun", freq: 3, rank: 189, def: "proper", irab: "nasb",
    occ: [[4,163,725,1],[17,55,2274,1]], ex: [[4,163,725,"إِنَّا أَوْحَيْنَا إِلَيْكَ كَمَا أَوْحَيْنَا إِلَىٰ نُوحٍ وَالنَّبِيِّينَ مِنْ بَعْدِهِ","Sungguh, Kami telah mewahyukan kepadamu (Muhammad) sebagaimana Kami telah mewahyukan kepada Nuh dan nabi-nabi setelahnya...","نُوحٍ"]] },

  { id: "suhuf", ar: "صُحُف", root: "صحف", mid: "lembaran, shuhuf (wahyu)", men: "scrolls, scriptures", pos: "noun", freq: 8, rank: 190, wazan: "fu'ul", form: "I", g: "feminine", num: "plural", def: "definite", irab: "nasb",
    occ: [[87,18,6090,1]], ex: [[87,18,6090,"إِنَّ هَٰذَا لَفِي الصُّحُفِ الْأُولَىٰ","Sungguh, ini (pesan-pesan) terdapat dalam shuhuf (kitab-kitab) yang terdahulu...","الصُّحُفِ"]] },

  { id: "mus_haf", ar: "مُصْحَف", root: "صحف", mid: "mushaf, naskah Al-Qur'an", men: "mushaf, Quran codex", pos: "noun", freq: 0, rank: 191, wazan: "muf'al", form: "I", def: "definite", irab: "nasb",
    occ: [[2,185,189,1]], ex: [[2,185,189,"شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ","(Beberapa hari yang ditentukan itu ialah) bulan Ramadan, bulan yang di dalamnya diturunkan (permulaan) Al-Qur'an...","الْقُرْآنُ"]] },

  { id: "baqara", ar: "بَقَر", root: "بقر", mid: "sapi, lembu betina", men: "cow, heifer", pos: "noun", freq: 9, rank: 192, wazan: "fa'ala", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,67,70,1],[2,68,71,1]], ex: [[2,67,70,"وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً","Dan (ingatlah) ketika Musa berkata kepada kaumnya: 'Sesungguhnya Allah menyuruh kamu menyembelih seekor sapi betina.'","بَقَرَةً"]] },

  { id: "baqara2", ar: "بَقَرَة", root: "بقر", mid: "sapi betina (khusus)", men: "a cow (specific)", pos: "noun", freq: 9, rank: 193, wazan: "fa'ala", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,67,70,2]], ex: [[2,67,70,"إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً","Sesungguhnya Allah menyuruh kamu menyembelih seekor sapi betina.","بَقَرَةً"]] },

  { id: "thawr", ar: "طُور", root: "طور", mid: "gunung (Thur/Sinai)", men: "mountain (Sinai)", pos: "proper_noun", freq: 10, rank: 194, def: "proper", irab: "nasb",
    occ: [[2,63,66,2],[2,93,96,2]], ex: [[2,63,66,"وَإِذْ أَخَذْنَا مِيثَاقَكُمْ وَرَفَعْنَا فَوْقَكُمُ الطُّورَ","Dan (ingatlah) ketika Kami mengambil janji dari kamu dan Kami angkat gunung (Thur) di atasmu...","الطُّورَ"]] },

  { id: "maida", ar: "مَائِدَة", root: "ميد", mid: "hidangan, meja makan", men: "table, spread (of food)", pos: "noun", freq: 4, rank: 195, wazan: "faa'ila", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[5,112,1257,1],[5,114,1259,1]], ex: [[5,112,1257,"إِذْ قَالَ الْحَوَارِيُّونَ يَا عِيسَى ابْنَ مَرْيَمَ هَلْ يَسْتَطِيعُ رَبُّكَ أَنْ يُنَزِّلَ عَلَيْنَا مَائِدَةً","(Ingatlah) ketika pengikut-pengikut Isa berkata: 'Wahai Isa bin Maryam! Apakah Tuhanmu mampu menurunkan hidangan dari langit kepada kami?'","مَائِدَةً"]] },

  { id: "isa", ar: "عِيسَىٰ", root: "عيس", mid: "Isa (Yesus)", men: "Jesus", pos: "proper_noun", freq: 25, rank: 196, def: "proper", irab: "nasb",
    occ: [[2,87,90,3],[2,253,258,2]], ex: [[2,253,258,"تِلْكَ الرُّسُلُ فَضَّلْنَا بَعْضَهُمْ عَلَىٰ بَعْضٍ مِنْهُمْ مَنْ كَلَّمَ اللَّهُ","Rasul-rasul itu Kami lebihkan sebagian dari mereka atas sebagian yang lain. Di antaranya ada yang diajak berbicara oleh Allah...","الرُّسُلُ"]] },

  { id: "maryam", ar: "مَرْيَم", root: "ريم", mid: "Maryam (Maria)", men: "Mary (mother of Jesus)", pos: "proper_noun", freq: 34, rank: 197, def: "proper", irab: "jarr", role: "mudhaf_ilayh",
    occ: [[2,87,90,4],[3,42,392,1]], ex: [[3,42,392,"وَإِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ اصْطَفَاكِ","Dan (ingatlah) ketika malaikat berkata: 'Wahai Maryam! Sungguh, Allah telah memilih kamu...'","مَرْيَمُ"]] },

  { id: "musa", ar: "مُوسَىٰ", root: "موس", mid: "Musa (Musa)", men: "Moses", pos: "proper_noun", freq: 136, rank: 198, def: "proper", irab: "nasb",
    occ: [[2,53,56,3],[2,60,63,1]], ex: [[2,60,63,"وَإِذِ اسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِ فَقُلْنَا اضْرِب بِّعَصَاكَ الْحَجَرَ","Dan (ingatlah) ketika Musa memohon air untuk kaumnya, lalu Kami berfirman: 'Pukullah batu itu dengan tongkatmu.'","مُوسَىٰ"]] },

  { id: "muhammad", ar: "مُحَمَّد", root: "حمد", mid: "Muhammad (Nabi)", men: "Muhammad (Prophet)", pos: "proper_noun", freq: 4, rank: 199, wazan: "mufa''al", form: "II", def: "proper", irab: "raf",
    occ: [[3,144,421,1],[48,29,4943,1]], ex: [[3,144,421,"مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ","Muhammad itu bukanlah ayah dari seorang pun di antara kamu...","مُحَمَّدٌ"]] },

  { id: "ahmad", ar: "أَحْمَد", root: "حمد", mid: "Ahmad (nama Nabi)", men: "Ahmad (name of the Prophet)", pos: "proper_noun", freq: 1, rank: 200, wazan: "af'al", form: "II", def: "proper", irab: "nasb",
    occ: [[61,6,5352,1]], ex: [[61,6,5352,"وَإِذْ قَالَ عِيسَى ابْنُ مَرْيَمَ يَا بَنِي إِسْرَائِيلَ إِنِّي رَسُولُ اللَّهِ إِلَيْكُمْ","Dan (ingatlah) ketika Isa bin Maryam berkata: 'Wahai Bani Israil! Sesungguhnya aku utusan Allah kepadamu...'","رَسُولُ"]] },
];
