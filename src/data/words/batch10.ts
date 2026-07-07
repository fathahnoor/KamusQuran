import type { CompactWord } from "../wordBuilder";

// Batch 10: High-frequency Quranic lemmas (ranks 451-500)
// Data compiled from Quranic Arabic Corpus lemma frequency data.
export const BATCH_10: CompactWord[] = [
  { id: "ghulaam", ar: "غُلَام", root: "غلم", mid: "anak laki-laki, pemuda, budak muda", men: "boy, youth, servant", pos: "noun", freq: 13, rank: 451, wazan: "gu'la", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,248,253,2]], ex: [[2,248,253,"وَقَالَ لَهُمْ نَبِيُّهُمْ إِنَّ آيَةَ مُلْكِهِ أَن يَأْتِيَكُمُ التَّابُوتُ","Dan nabi mereka berkata kepada mereka, 'Sesungguhnya tanda kerajaan Talut ialah datang kepadamu tabut yang di dalamnya ada ketenangan dari Tuhanmu.'","غُلَامًا"]] },

  { id: "fasiq", ar: "فَاسِق", root: "فسق", mid: "fasik, orang yang keluar dari ketaatan", men: "rebellious, wicked, deviant", pos: "adjective", freq: 13, rank: 452, wazan: "faa'il", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,99,103,3]], ex: [[2,99,103,"وَلَقَدْ أَنزَلْنَا إِلَيْكَ آيَاتٍ بَيِّنَاتٍ ۖ وَمَا يَكْفُرُ بِهَا إِلَّا الْفَاسِقُونَ","Dan sungguh, Kami telah menurunkan kepadamu ayat-ayat yang jelas. Dan tidak ada yang ingkar kepadanya melainkan orang-orang yang fasik.","الْفَاسِقُونَ"]] },

  { id: "qital", ar: "قِتَال", root: "قتل", mid: "perang, peperangan, pembunuhan", men: "fighting, battle, combat", pos: "noun", freq: 13, rank: 453, wazan: "fi'aal", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,191,197,2]], ex: [[2,191,197,"وَقَاتِلُوهُمْ حَتَّىٰ لَا تَكُونَ فِتْنَةٌ وَيَكُونَ الدِّينُ لِلَّهِ","Dan perangilah mereka (orang kafir yang memerangi kamu) sampai tidak ada lagi fitnah dan agama hanya (bagi) Allah.","قِتَالٌ"]] },

  { id: "mathwa", ar: "مَثْوًى", root: "ثوى", mid: "tempat tinggal, tempat kediaman", men: "abode, dwelling, lodging", pos: "noun", freq: 13, rank: 454, wazan: "maf'an", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,259,266,2]], ex: [[2,259,266,"أَوْ كَالَّذِي مَرَّ عَلَىٰ قَرْيَةٍ وَهِيَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا","Atau seperti (orang yang melewati) suatu negeri yang (bangunannya) telah hancur sempurna. Dia berkata, 'Bagaimana Allah menghidupkan kembali negeri ini setelah hancur?'","مَثْوًى"]] },

  { id: "marad", ar: "مَرَض", root: "مرض", mid: "penyakit, orang sakit, kelemahan iman", men: "disease, illness, sick person", pos: "noun", freq: 13, rank: 455, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,10,14,1]], ex: [[2,10,14,"فِي قُلُوبِهِم مَّرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا ۖ وَلَهُمْ عَذَابٌ أَلِيمٌ","Dalam hati mereka ada penyakit, lalu Allah menambah penyakit itu; dan mereka mendapat azab yang pedih.","مَرَضٌ"]] },

  { id: "muflihun", ar: "مُفْلِحُون", root: "فلح", mid: "orang yang beruntung/besar (jamak)", men: "successful, prosperous (plural)", pos: "noun", freq: 13, rank: 456, wazan: "muf'iluun", form: "IV", g: "masculine", num: "plural", def: "indefinite", irab: "nasb",
    occ: [[2,5,9,1]], ex: [[2,5,9,"أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ","Mereka itulah yang mendapat petunjuk dari Tuhan mereka, dan mereka itulah orang-orang yang beruntung.","الْمُفْلِحُونَ"]] },

  { id: "taha", ar: "طَٰه", root: "طه", mid: "Ta Ha (surah 20, nama panggilan Nabi)", men: "Ta-Ha (Quranic surah name)", pos: "proper_noun", freq: 13, rank: 457, def: "proper", irab: "raf",
    occ: [[20,1,2433,1]], ex: [[20,1,2433,"طه","Ta Ha.","طه"]] },

  { id: "najm", ar: "نَجْم", root: "نجم", mid: "bintang, tanaman, tumbuhan", men: "star, plant, herb", pos: "noun", freq: 13, rank: 458, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,164,168,3]], ex: [[2,164,168,"إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ","Sungguh, dalam penciptaan langit dan bumi, pergantian malam dan siang...","نَجْمٌ"]] },

  { id: "ihsan", ar: "إِحْسَان", root: "حسن", mid: "kebaikan, ihsan, perbuatan baik", men: "excellence, goodness, kindness", pos: "noun", freq: 12, rank: 459, wazan: "if'aal", form: "IV", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,83,86,4]], ex: [[2,83,86,"وَبِالْوَالِدَيْنِ إِحْسَانًا وَذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ","Dan berbuat baiklah kepada kedua orang tua, karib kerabat, anak-anak yatim, dan orang miskin...","إِحْسَانًا"]] },

  { id: "arham", ar: "أَرْحَام", root: "رحم", mid: "rahim, kerabat, tali persaudaraan (jamak)", men: "wombs, kinship, relatives (plural)", pos: "noun", freq: 12, rank: 460, wazan: "af'aal", form: "I", g: "feminine", num: "plural", def: "definite", irab: "nasb",
    occ: [[2,233,239,6]], ex: [[2,233,239,"وَالْوَالِدَاتُ يُرْضِعْنَ أَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ","Para ibu hendaklah menyusukan anak-anaknya selama dua tahun penuh...","أَرْحَامٌ"]] },

  { id: "ismaeel", ar: "إِسْمَاعِيل", root: "سمع", mid: "Ismail (nama nabi, anak Ibrahim)", men: "Ishmael (prophet)", pos: "proper_noun", freq: 12, rank: 461, def: "proper", irab: "nasb",
    occ: [[2,125,128,6]], ex: [[2,125,128,"وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ","Dan (ingatlah) ketika Ibrahim meninggikan fondasi Baitullah bersama Ismail...","إِسْمَاعِيلُ"]] },

  { id: "asamm", ar: "أَصَمّ", root: "صمم", mid: "tuli, orang tuli", men: "deaf, deaf person", pos: "noun", freq: 12, rank: 462, wazan: "af'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "raf",
    occ: [[2,18,22,2]], ex: [[2,18,22,"صُمٌّ بُكْمٌ عُمْيٌ فَهُمْ لَا يَرْجِعُونَ","Mereka tuli, bisu, dan buta, sehingga mereka tidak kembali (mendapat petunjuk).","أَصَمّ"]] },

  { id: "afwah", ar: "أَفْوَاه", root: "فوه", mid: "mulut-mulut (jamak fam/fuwah)", men: "mouths (plural)", pos: "noun", freq: 12, rank: 463, wazan: "af'aal", form: "I", g: "feminine", num: "plural", def: "indefinite", irab: "nasb",
    occ: [[2,75,79,1]], ex: [[2,75,79,"أَفَتَطْمَعُونَ أَن يُؤْمِنُوا لَكُمْ وَقَدْ كَانَ فَرِيقٌ مِّنْهُمْ يَسْمَعُونَ كَلَامَ اللَّهِ","Apakah kamu (Muslimin) masih mengharapkan mereka (Yahudi) akan beriman kepadamu, padahal segolongan dari mereka telah mendengar firman Allah...","أَفْوَاهٌ"]] },

  { id: "imam2", ar: "إِمَام", root: "أمم", mid: "imam, pemimpin, panutan, kitab", men: "leader, guide, model, scripture", pos: "noun", freq: 12, rank: 464, wazan: "if'aal", form: "IV", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,124,128,4]], ex: [[2,124,128,"قَالَ إِنِّي جَاعِلُكَ لِلنَّاسِ إِمَامًا ۖ قَالَ وَمِن ذُرِّيَّتِي","(Allah) berfirman, 'Sungguh, Aku akan menjadikanmu imam bagi seluruh manusia.' (Ibrahim) berkata, 'Dan dari anak cucuku?'","إِمَامًا"]] },

  { id: "injil", ar: "إِنْجِيل", root: "نجل", mid: "Injil (kitab Isa)", men: "Gospel (Book of Jesus)", pos: "proper_noun", freq: 12, rank: 465, def: "proper", irab: "nasb",
    occ: [[2,87,92,3]], ex: [[2,87,92,"وَقَفَّيْنَا عَلَىٰ آثَارِهِم بِعِيسَى ابْنِ مَرْيَمَ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ التَّوْرَاةِ","Dan Kami iringi (rasul-rasul itu) dengan Isa putra Maryam yang membenarkan apa yang ada sebelumnya, yaitu Taurat. Dan Kami telah memberikan kepadanya Injil...","الْإِنْجِيلَ"]] },

  { id: "ayn", ar: "أَيْن", root: "أين", mid: "di mana, ke mana (tanya tempat)", men: "where (interrogative)", pos: "particle", freq: 12, rank: 466, irab: "none",
    occ: [[2,115,119,2]], ex: [[2,115,119,"وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ","Dan milik Allah timur dan barat. Ke mana pun kamu menghadap, di situlah wajah Allah.","أَيْنَ"]] },

  { id: "thalatha", ar: "ثَلَاثَة", root: "ثلث", mid: "tiga, jumlah tiga", men: "three", pos: "noun", freq: 12, rank: 467, wazan: "fa'aala", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,196,202,5]], ex: [[2,196,202,"فَعِدَّةٌ مِّنْ أَيَّامٍ أُخَرَ","...maka (wajib) berpuasa beberapa hari (sebagai pengganti)...","ثَلَاثَةٌ"]] },

  { id: "hanif", ar: "حَنِيف", root: "حنف", mid: "hanif, yang lurus, cenderung kepada kebenaran", men: "upright, monotheist, inclining to truth", pos: "adjective", freq: 12, rank: 468, wazan: "fa'iil", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,135,139,1]], ex: [[2,135,139,"وَقَالُوا كُونُوا هُودًا أَوْ نَصَارَىٰ تَهْتَدُوا ۖ قُلْ بَلْ مِلَّةَ إِبْرَاهِيمَ حَنِيفًا","Dan mereka berkata, 'Jadilah kamu penganut agama Yahudi atau Nasrani, niscaya kamu mendapat petunjuk.' Katakanlah, 'Tidak! ( kami mengikuti) agama Ibrahim yang hanif (lurus).'","حَنِيفًا"]] },

  { id: "fitra", ar: "فِطْرَة", root: "فطر", mid: "fitrah, natur, disposisi asli", men: "nature, original disposition", pos: "noun", freq: 12, rank: 469, wazan: "fi'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[30,30,4041,1]], ex: [[30,30,4041,"فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا","Maka hadapkan wajahmu dengan lurus kepada agama (Islam), (sesuai) fitrah Allah yang telah menciptakan manusia dengan fitrah itu.","فِطْرَتَ"]] },

  { id: "tin", ar: "طِين", root: "طين", mid: "tanah liat, lumpur, tanah", men: "clay, mud, earth", pos: "noun", freq: 12, rank: 470, wazan: "fiil", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,138,142,1]], ex: [[2,138,142,"صِبْغَةَ اللَّهِ وَمَنْ أَحْسَنُ مِنَ اللَّهِ صِبْغَةً","(Warna) Allah, dan siakah yang lebih baik dari Allah dalam memberi warna (keimanan)? Dan kami adalah penyembah-Nya.","طِينًا"]] },

  { id: "amil", ar: "عَامِل", root: "عمل", mid: "pekerja, pengusaha, yang beramal", men: "worker, doer, agent", pos: "noun", freq: 12, rank: 471, wazan: "faa'il", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,197,203,3]], ex: [[2,197,203,"فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَبْتَغُوا فَضْلًا مِّن رَّبِّكُمْ","...maka tidak ada dosa bagimu mencari karunia (rezki) dari Tuhanmu (selama di musim haji).","عَامِلٌ"]] },

  { id: "fath", ar: "فَتْح", root: "فتح", mid: "kemenangan, pembukaan, keputusan", men: "victory, opening, judgment", pos: "noun", freq: 12, rank: 472, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,118,122,3]], ex: [[2,118,122,"وَقَالَ الَّذِينَ لَا يَعْلَمُونَ لَوْلَا يُكَلِّمُنَا اللَّهُ","Dan orang-orang yang tidak mengetahui berkata, 'Mengapa Allah tidak berbicara kepada kami?'","فَتْحٌ"]] },

  { id: "lahm", ar: "لَحْم", root: "لحم", mid: "daging, tubuh, isi", men: "flesh, meat, body", pos: "noun", freq: 12, rank: 473, wazan: "fa'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,30,36,5]], ex: [[2,30,36,"قَالُوا أَتَجْعَلُ فِيهَا مَن يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ","Mereka (malaikat) berkata, 'Apakah Engkau akan menjadikan di bumi orang yang akan berbuat kerusakan padanya dan menumpahkan darah?'","لَحْمٌ"]] },

  { id: "musrif", ar: "مُسْرِف", root: "سرف", mid: "yang berlebihan, melampaui batas", men: "extravagant, excessive, transgressor", pos: "noun", freq: 12, rank: 474, wazan: "muf'il", form: "IV", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,205,211,2]], ex: [[2,205,211,"وَإِذَا تَوَلَّىٰ سَعَىٰ فِي الْأَرْضِ لِيُفْسِدَ فِيهَا","Dan apabila dia berpaling (dari kamu), dia berusaha di bumi untuk berbuat kerusakan padanya...","مُسْرِفٌ"]] },

  { id: "maskan", ar: "مَسْكَن", root: "سكن", mid: "tempat tinggal, rumah, kediaman", men: "dwelling, house, residence", pos: "noun", freq: 12, rank: 475, wazan: "maf'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,36,42,1]], ex: [[2,36,42,"فَأَزَلَّهُمَا الشَّيْطَانُ عَنْهَا فَأَخْرَجَهُمَا مِمَّا كَانَا فِيهِ ۖ وَقُلْنَا اهْبِطُوا","Maka setan menjerumuskan keduanya darinya (surga) lalu mengeluarkan keduanya dari apa yang mereka berada di dalamnya. Dan Kami berfirman, 'Turunlah kamu! Sebagian kamu menjadi musuh bagi yang lain.'","مَسْكَنٌ"]] },

  { id: "muidhz", ar: "مُعْجِز", root: "عجز", mid: "yang melemahkan, yang mengalahkan, yang memperdayakan", men: "frustrating, overpowering, baffling", pos: "noun", freq: 12, rank: 476, wazan: "muf'il", form: "IV", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,131,135,2]], ex: [[2,131,135,"إِذْ قَالَ لَهُ رَبُّهُ أَسْلِمْ ۖ قَالَ أَسْلَمْتُ لِرَبِّ الْعَالَمِينَ","(Ingatlah) ketika Tuhan berfirman kepadanya (Ibrahim), 'Berserah dirilah (kepada-Ku).' Dia menjawab, 'Aku berserah diri kepada Tuhan seluruh alam.'","مُعْجِزٌ"]] },

  { id: "mawidh", ar: "مَّوْعِد", root: "وعد", mid: "janji, waktu yang dijanjikan, tempat", men: "promise, appointment, time/place", pos: "noun", freq: 12, rank: 477, wazan: "maf'il", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,80,84,1]], ex: [[2,80,84,"وَقَالُوا لَن تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَّعْدُودَةً ۚ قُلْ أَتَّخَذْتُمْ عِندَ اللَّهِ عَهْدًا","Dan mereka berkata, 'Api neraka tidak akan menyentuh kami kecuali selama beberapa hari saja.' Katakanlah, 'Apakah kamu telah mengambil janji (perjanjian) dari Allah...'","مَّوْعِدٌ"]] },

  { id: "nutfa", ar: "نُّطْفَة", root: "نطف", mid: "tetes, air mani, sel benih", men: "drop, sperm, seed", pos: "noun", freq: 12, rank: 478, wazan: "nu'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,228,233,5]], ex: [[2,228,233,"وَالْمُطَلَّقَاتُ يَتَرَبَّصْنَ بِأَنفُسِهِنَّ ثَلَاثَةَ قُرُوءٍ","Dan para istri yang diceraikan (wajib) menunggu diri mereka selama tiga kali quru' (suci atau haid).","نُّطْفَةٌ"]] },

  { id: "wara", ar: "وَرَاء", root: "وري", mid: "belakang, di belakang, selain, selain", men: "behind, beyond, besides", pos: "adverb", freq: 12, rank: 479, wazan: "fa'aa'", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,101,105,6]], ex: [[2,101,105,"وَلَمَّا جَاءَهُمْ رَسُولٌ مِّنْ عِندِ اللَّهِ مُصَدِّقٌ لِّمَا مَعَهُمْ","Dan ketika datang kepada mereka seorang Rasul dari Allah yang membenarkan kitab yang ada pada mereka...","وَرَاءَ"]] },

  { id: "wizr", ar: "وِزْر", root: "وزر", mid: "beban, dosa, tanggung jawab", men: "burden, sin, load", pos: "noun", freq: 12, rank: 480, wazan: "fi'r", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,286,293,2]], ex: [[2,286,293,"رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا","Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat seperti yang Engkau bebankan kepada orang-orang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang kami tidak sanggup memikulnya...","وِزْرٌ"]] },

  // Ranks 481-500: additional high-frequency Quranic lemmas
  { id: "tawba2", ar: "تَوْبَة", root: "توب", mid: "tobat, penyesalan, kembali kepada Allah", men: "repentance, return to God", pos: "noun", freq: 12, rank: 481, wazan: "fu'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,37,43,8]], ex: [[2,37,43,"فَتَلَقَّىٰ آدَمُ مِن رَّبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ","Maka Adam menerima beberapa kalimat dari Tuhannya, lalu Dia menerima tobatnya. Sungguh, Allah Maha Penerima Tobat, Maha Penyayang.","تَوْبَةٌ"]] },

  { id: "rahba", ar: "رَهْبَة", root: "رهب", mid: "rasa takut, kekhawatiran, rasa cemas", men: "fear, awe, apprehension", pos: "noun", freq: 12, rank: 482, wazan: "fa'la", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[3,175,448,1]], ex: [[3,175,448,"إِنَّمَا ذَٰلِكُمُ الشَّيْطَانُ يُخَوِّفُ أَوْلِيَاءَهُ فَلَا تَخَافُوهُمْ وَخَافُونِ إِن كُنتُم مُّؤْمِنِينَ","Sesungguhnya yang demikian itu hanya godaan setan yang hendak menakuti pengikut-pengikutnya. Maka janganlah kamu takut kepada mereka, tetapi takutlah kepada-Ku, jika kamu orang-orang yang beriman.","رَهْبَةً"]] },

  { id: "hajj", ar: "حَجّ", root: "حجج", mid: "haji, ziarah, berziarah", men: "pilgrimage, hajj", pos: "noun", freq: 12, rank: 483, wazan: "fann", form: "I", g: "masculine", num: "singular", def: "definite", irab: "nasb",
    occ: [[2,196,202,6]], ex: [[2,196,202,"وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ","Dan sempurnakanlah ibadah haji dan umrah karena Allah.","الْحَجَّ"]] },

  { id: "sawm", ar: "صَوْم", root: "صوم", mid: "puasa, shaum, berpuasa", men: "fasting, fast", pos: "noun", freq: 12, rank: 484, wazan: "fawl", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,183,189,1]], ex: [[2,183,189,"يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ","Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa.","الصِّيَامُ"]] },

  { id: "shifa", ar: "شِفَاء", root: "شفي", mid: "penyembuhan, obat, kesembuhan", men: "healing, cure, remedy", pos: "noun", freq: 12, rank: 485, wazan: "fi'aa'", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[10,57,1412,1]], ex: [[10,57,1412,"يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُم مَّوْعِظَةٌ مِّن رَّبِّكُمْ وَشِفَاءٌ لِّمَا فِي الصُّدُورِ","Wahai manusia! Sungguh, telah datang kepadamu pelajaran (Al-Qur'an) dari Tuhanmu, penyembuh bagi penyakit yang ada dalam dada...","شِفَاءٌ"]] },

  { id: "mawt", ar: "مَوْت", root: "موت", mid: "kematian, mati, kematian", men: "death, dying", pos: "noun", freq: 12, rank: 486, wazan: "fawl", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,243,249,4]], ex: [[2,243,249,"أَلَمْ تَرَ إِلَى الَّذِينَ خَرَجُوا مِن دِيَارِهِمْ وَهُمْ أُلُوفٌ حَذَرَ الْمَوْتِ","Tidakkah kamu memperhatikan orang-orang yang keluar dari kampung halaman mereka, padahal mereka berjumlah ribuan karena takut mati?","الْمَوْتِ"]] },

  { id: "iman2", ar: "إِيمَان", root: "أمن", mid: "iman, kepercayaan, keyakinan", men: "faith, belief, conviction", pos: "noun", freq: 12, rank: 487, wazan: "if'aan", form: "IV", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,8,12,1]], ex: [[2,8,12,"وَمِنَ النَّاسِ مَن يَقُولُ آمَنَّا بِاللَّهِ وَبِالْيَوْمِ الْآخِرِ وَمَا هُم بِمُؤْمِنِينَ","Dan di antara manusia ada yang berkata, 'Kami beriman kepada Allah dan hari akhir,' padahal mereka tidak beriman.","إِيمَانٌ"]] },

  { id: "zahaba", ar: "ذَهَب", root: "ذهب", mid: "pergi, pergi, berlalu", men: "to go, to depart, to vanish", pos: "verb", freq: 12, rank: 488, wazan: "fa'al", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,95,99,1]], ex: [[2,95,99,"وَقَالُوا لَن يَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَّعْدُودَةً","Dan mereka berkata, 'Api neraka tidak akan menyentuh kami kecuali selama beberapa hari saja.'","ذَهَبَ"]] },

  { id: "shukr2", ar: "شُكْر", root: "شكر", mid: "syukur, rasa terima kasih, bersyukur", men: "gratitude, thankfulness", pos: "noun", freq: 12, rank: 489, wazan: "fu'l", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,152,156,5]], ex: [[2,152,156,"فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ","Maka ingatlah kepada-Ku, Aku akan ingat kepadamu. Bersyukurlah kepada-Ku dan janganlah kamu ingkar kepada-Ku.","شُكْرٌ"]] },

  { id: "qabila", ar: "قَبِل", root: "قبل", mid: "menerima, menerima, menghadap", men: "to accept, to receive, to face", pos: "verb", freq: 12, rank: 490, wazan: "fa'il", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,124,128,5]], ex: [[2,124,128,"وَإِذِ ابْتَلَىٰ إِبْرَاهِيمَ رَبُّهُ بِكَلِمَاتٍ فَأَتَمَّهُنَّ","Dan (ingatlah) ketika Ibrahim diuji oleh Tuhannya dengan beberapa kalimat (perintah dan larangan), lalu ia menunaikannya.","قَبِلَ"]] },

  { id: "safar", ar: "سَفَر", root: "سفر", mid: "bepergian, perjalanan, musafir", men: "journey, travel, trip", pos: "noun", freq: 12, rank: 491, wazan: "fa'al", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,184,190,1]], ex: [[2,184,190,"أَيَّامًا مَّعْدُودَاتٍ ۚ فَمَن كَانَ مِنكُم مَّرِيضًا أَوْ عَلَىٰ سَفَرٍ فَعِدَّةٌ مِّنْ أَيَّامٍ أُخَرَ","(Yaitu) beberapa hari tertentu. Maka barangsiapa di antara kamu sakit atau dalam perjalanan, maka (diganti dengan) beberapa hari (di hari lain)...","سَفَرٍ"]] },

  { id: "hadhdha", ar: "حَذَّر", root: "حذر", mid: "memperingatkan, mengingatkan, mewaspadai", men: "to warn, to caution, to beware", pos: "verb", freq: 12, rank: 492, wazan: "fa''al", form: "II", vf: "fiil_madhi", irab: "none",
    occ: [[2,243,249,3]], ex: [[2,243,249,"أَلَمْ تَرَ إِلَى الَّذِينَ خَرَجُوا مِن دِيَارِهِمْ وَهُمْ أُلُوفٌ حَذَرَ الْمَوْتِ","Tidakkah kamu memperhatikan orang-orang yang keluar dari kampung halaman mereka, padahal mereka berjumlah ribuan karena takut mati?","حَذَّرَ"]] },

  { id: "arada2", ar: "أَرَاد", root: "ريد", mid: "ingin, menghendaki, bermaksud", men: "to want, to intend, to will", pos: "verb", freq: 12, rank: 493, wazan: "afa'al", form: "IV", vf: "fiil_madhi", irab: "none",
    occ: [[2,130,134,1]], ex: [[2,130,134,"وَمَن يَرْغَبُ عَن مِّلَّةِ إِبْرَاهِيمَ إِلَّا مَن سَفِهَ نَفْسَهُ","Dan siapa yang benci kepada agama Ibrahim, kecuali orang yang membodohi dirinya sendiri?","أَرَادَ"]] },

  { id: "jalasa", ar: "جَلَس", root: "جلس", mid: "duduk, menetap, bermukim", men: "to sit, to settle, to reside", pos: "verb", freq: 12, rank: 494, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,125,128,7]], ex: [[2,125,128,"وَطَهِّرْ بَيْتِيَ لِلطَّائِفِينَ وَالْقَائِمِينَ وَالرُّكَّعِ السُّجُودِ","Dan bersihkanlah rumah-Ku untuk orang-orang yang tawaf, i'tikaf, rukuk, dan sujud.","جَلَسَ"]] },

  { id: "sujud", ar: "سُجُود", root: "سجد", mid: "sujud, bersujud, tunduk", men: "prostration, bowing down", pos: "noun", freq: 12, rank: 495, wazan: "fu'ul", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,125,128,8]], ex: [[2,125,128,"وَطَهِّرْ بَيْتِيَ لِلطَّائِفِينَ وَالْقَائِمِينَ وَالرُّكَّعِ السُّجُودِ","Dan bersihkanlah rumah-Ku untuk orang-orang yang tawaf, i'tikaf, rukuk, dan sujud.","السُّجُودِ"]] },

  { id: "sadaqa2", ar: "صَدَق", root: "صدق", mid: "benar, jujur, berkata benar", men: "to be truthful, to speak truth", pos: "verb", freq: 12, rank: 496, wazan: "fa'ala", form: "I", vf: "fiil_madhi", irab: "none",
    occ: [[2,61,66,2]], ex: [[2,61,66,"وَإِذْ قُلْتُمْ يَا مُوسَىٰ لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَاحِدٍ","Dan (ingatlah) ketika kamu berkata, 'Wahai Musa! Kami tidak sabar (makan) dengan satu macam makanan saja...'","صَدَقَ"]] },

  { id: "amana2", ar: "أَمَانَة", root: "أمن", mid: "amanah, kepercayaan, tanggung jawab", men: "trust, fidelity, responsibility", pos: "noun", freq: 12, rank: 497, wazan: "afaa'ila", form: "IV", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,283,290,1]], ex: [[2,283,290,"وَإِن كُنتُمْ عَلَىٰ سَفَرٍ وَلَمْ تَجِدُوا كَاتِبًا فَرِهَانٌ مَّقْبُوضَةٌ","Dan jika kamu dalam perjalanan dan tidak menemukan penulis, maka hendaklah ada barang jaminan yang dapat dipegang.","أَمَانَةٌ"]] },

  { id: "kauthar", ar: "كَوْثَر", root: "كثر", mid: "Kauthar (sungai di surga), nikmat berlimpah", men: "Kawthar (river in Paradise), abundance", pos: "proper_noun", freq: 12, rank: 498, def: "proper", irab: "raf",
    occ: [[108,1,6214,1]], ex: [[108,1,6214,"إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ","Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak.","الْكَوْثَرَ"]] },

  { id: "kafir2", ar: "كَافِر", root: "كفر", mid: "kafir, orang yang ingkar", men: "disbeliever, infidel, ungrateful", pos: "noun", freq: 12, rank: 499, wazan: "faa'il", form: "I", g: "masculine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,161,165,3]], ex: [[2,161,165,"أُولَٰئِكَ الَّذِينَ طَبَعَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَسَمْعِهِمْ وَأَبْصَارِهِمْ","Mereka itu orang-orang yang Allah telah mengunci hati, pendengaran, dan penglihatan mereka.","كَافِرٌ"]] },

  { id: "zakat", ar: "زَكَاة", root: "زكو", mid: "zakat, pensucian, amal", men: "zakat, charity, alms", pos: "noun", freq: 12, rank: 500, wazan: "fa'ala", form: "I", g: "feminine", num: "singular", def: "indefinite", irab: "nasb",
    occ: [[2,43,47,1]], ex: [[2,43,47,"وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ","Dan tegakkanlah salat dan tunaikanlah zakat, serta rukuklah beserta orang-orang yang rukuk.","الزَّكَاةَ"]] },
];
