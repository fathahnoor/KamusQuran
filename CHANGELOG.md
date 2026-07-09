# Changelog

All notable changes to Kamus Quran will be documented in this file.

---

## [v3.4] — Terjemahan Kalimat via API (2026-07)

### ✨ Mode Kalimat: Terjemahan Kalimat Utuh via API

- **Google Translate API** sebagai primary engine untuk terjemahan kalimat utuh Arab↔Indonesia
- **MyMemory API** sebagai fallback jika Google Translate gagal
- Arti Kalimat tidak lagi gabungan kata-per-kata (campuran Latin-Arab yang membingungkan)
- Loading skeleton, error state, graceful fallback ke word-by-word hanya jika semua kata matched
- Cache in-memory untuk menghindari panggilan API berulang

### ✨ Mode Kata: Auto-Translate Kata Tak Dikenal

- **NoResultsFallback**: jika kata tidak ada di database, otomatis terjemahkan via API
- Tampilkan hasil terjemahan dengan badge "Terjemahan" (emerald)
- Loading spinner saat menerjemahkan, error state jika API gagal

### 🛠️ Teknis

- `src/services/translation.ts`: service baru dengan dual-engine (Google + MyMemory) + cache
- 3 file baru/terupdate: `translation.ts`, `ModeKalimat.tsx`, `ModeKata.tsx`

---

## [v3.3] — Complete Phase Plan + 10.000+ Kata (2026-07)

### 📚 Dataset Completion: 10.000+ Kata

- **3.620 kata baru** dari fase 61-97 (batch83-119)
- **97 fase phase plan SELESAI** — seluruh kosakata kitab Nahwu/Sharf terkuras
- Total database: ~7.600+ → **10.000+ kata**
- Batch range: batch01-119 (119 batch files)

---

## [v3.2] — Massive Corpus Expansion + Kemenag Translation (2026-07)

### 📚 Dataset Expansion: 7.000+ Kata

- **5.000+ kata baru** dari kitab Nahwu/Sharf (PDF extraction via phase plan)
- **batch23-82**: 60 batch auto-generated dari 60 fase PDF
- Total database: 1.250+ → **7.000+ kata**
- POS detection: noun, verb, particle auto-detected
- Root derivation + root-based meaning fallbacks

### ✨ Mode Kalimat: Terjemahan Kemenag + Bilingual

- **QuranTranslationBanner**: deteksi otomatis cuplikan ayat Quran, tampilkan terjemahan resmi Kemenag RI via AlQuran Cloud API
- **SentenceMeaningBanner**: arti kalimat bilingual (Indonesia→Arab dan Arab→Indonesia)
- Loading/error states untuk API fetch
- Async fetch dengan cancel token (no race condition)

### 🔧 Data Quality

- Audit script (`scripts/audit_words.mjs`) untuk validasi data
- Dedup: normalized Arabic + diacritic-aware deduplication
- Root fallback curation dari dictionary existing

---

## [v3.1] ,  Ekspansi 1.250+ Kata (2026-07)

### 📚 Dataset Expansion

- **1.250+ kata**: 500+ Quran frekuensi tinggi + 750+ kata Arab sehari-hari
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
