# Changelog

All notable changes to Kamus Quran will be documented in this file.

---

## [v3.1] ,  Ekspansi 1.234 Kata (2026-07)

### 📚 Dataset Expansion

- **1.234 kata**: 500 Quran frekuensi tinggi + 734 kata Arab sehari-hari
- **batch19**: 8 kata ganti Arab (saya, kami, kamu, dia, mereka, kalian)
- **batch20-21**: ~186 kosakata sehari-hari (bilangan, warna, keluarga, tubuh, makanan, hewan, alam, waktu, tempat, kata kerja/sifat/tugas)
- **batch22**: ~177 kata (profesi, hari, arah, material, alat, elektronik, kata benda abstrak)

### 🐛 Fixes

- Mode Kalimat input Indonesia: false match "saya"→"rahmat" (threshold startsWith diperketat)
- Latin text tidak lagi dapat i'rob palsu (skip unmatched tokens di applyContextAwareIrab)
- Terjemahan Arab ringkasan tampil di atas tabel i'rob (bukan di bawah Observasi)
- Format build timestamp: `YYYY/MM/DD-HH:MM:SS` (GMT+7/WIB)
- Hapus semua em dash (—) dari codebase, ganti dengan tanda baca Indonesia

---

## [v3.0] ,  I'rob Sistematis (2026-07)

### ✨ I'rob Sistematis ,  Metode Al-Munir + Nahwu al-Wadhih

- **Tabel I'rob 6 Kolom** di Mode Kata: Kata → Jenis → Kedudukan → I'rob → Tanda → 'Amil
- **Kesimpulan Induktif** ala An-Nahwu al-Wadhih: penjelasan penalaran gramatikal
- **Heuristic Engine** (300+ baris): auto-generate i'rob dari POS, gender, number, i'rab case, syntactic role
- **Manual override**: field `tnd` dan `aml` di batch data untuk koreksi spesifik

### ✨ Mode Kalimat ,  Full Sentence I'rob

- **SentenceIrobTable**: tabel i'rob utuh per kalimat (8 kolom: #, Kata, Arti, Jenis, Kedudukan, I'rob, Tanda, 'Amil)
- **Context-Aware Engine**: deteksi otomatis huruf jarr, inna/akhwatuha, kaana/akhwatuha, idhafah, 'athf
- **Color-coded rows** by irabStatus: emerald=Marfu', blue=Manshub, amber=Majrur, red=Majzum, gray=Mabni
- **Clickable inline detail**: klik row → expand lemma, akar, nahwu/sharf + IrobTable
- **Ringkasan I'rob** di akhir analisis kalimat

### 🧪 Testing

- **Vitest** setup + **30+ unit tests** untuk heuristic engine i'rab
- Diacritic-stripped particle detection fix (فِي → Huruf Jarr, إِنَّ → Huruf Naskh)

### 📝 Dokumentasi

- AboutView: tambah i'rob sistematis, SentenceIrobTable, unit tests
- Footer: "v3.0 ,  I'rob Sistematis (Metode Al-Munir + Nahwu al-Wadhih)"
- README: i'rob section, referensi kitab, 1002 kata, Vitest, npm test
- Meta description: sebut v3.0 + i'rob sistematis

---

## [v2.0] ,  1002 Kata + UI Modern (2026-06)

### 📚 Dataset Expansion

- **1002 kata**: 500 Quran frekuensi tinggi + 502 kata Arab sehari-hari
- 18 batch file (`batch01.ts` – `batch18.ts`)
- Global ayah number komputasional (bukan hardcoded)

### 🎨 UI/UX Overhaul

- Tema modern: slate + emerald dengan glassmorphism
- Animasi fade-in, shimmer loading, pulse glow
- Diacritic toggle (sembunyikan/tampilkan harakat)
- TTS pengucapan kata Arab (Web Speech API)
- Code splitting (React.lazy) untuk secondary views

### 📖 Mode Kata

- Pencarian Arab & Indonesia (diacritic-insensitive)
- Browse by frequency rank, A-Z (Indonesia & Arab)
- WordResultPanel: akar, lemma, POS, wazan, gender, number, definiteness, i'rab, fungsi sintaktis
- Audio tilawah (Mishary Alafasy), tafsir Jalalayn
- Pre-computed frozen sorted arrays (zero runtime sort)

### 🔤 Mode Kalimat

- Tokenisasi per kata + POS matching
- Observasi kalimat: jumlah fi'liyyah/ismiyyah, deteksi idhafah
- Deteksi ayat Quran + QADT dependency graph banner

### 🎤 Voice + Bookmark

- Voice recognition (ar-SA + id-ID) dengan toggle bahasa
- Bookmark localStorage + export/import JSON dengan validasi

### 🐛 Fixes

- Hapus 179 contoh ayat fabricated di batch12-18
- Perbaiki data: `suuq` (pasar) yang salah
- Duplikat word ID fix + leading non-alpha di meaningId
- Total-order sort (eliminasi ordering degradation)

---

## [v1.0] ,  Initial Release (2026-05)

### 🏗️ Foundation

- React + TypeScript + Vite + Tailwind CSS
- GitHub Pages deploy via GitHub Actions
- Font Arab: Amiri + Noto Naskh Arabic

### 📖 Mode Kata (Basic)

- 300 kata frekuensi tinggi (batch01-06)
- `wordBuilder.ts` ,  compact format → full WordEntry
- `morphologyIndex.ts` ,  search, deduplikasi, pre-sorted indices
- `arabic.ts` ,  stripDiacritics, tokenizeArabic, isArabicText
- Pencarian Arab + Indonesia
- WordResultPanel dengan field morfologi dasar

### 🔤 Mode Kalimat (Basic)

- `sentenceAnalysis.ts` ,  tokenisasi + POS matching hybrid
- `ModeKalimat.tsx` ,  token cards dengan info lemma/root/arti

### 🎤 Voice + Bookmark

- `voiceRecognition.ts` ,  Web Speech API untuk ar-SA & id-ID
- `bookmarks.ts` ,  localStorage + export/import

### 🎵 Audio + Tafsir

- `alQuranApi.ts` ,  AlQuran Cloud integration (Mishary + Jalalayn)

### 📄 Pages

- AboutView ,  metodologi, sumber data, version info
- BookmarkView ,  daftar bookmark dengan empty state CTA

### 🚀 CI/CD

- GitHub Actions auto-deploy ke GitHub Pages
- Histats visitor tracking
- Favicon
