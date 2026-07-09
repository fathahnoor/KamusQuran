# TODO ,  Kamus Quran

> **v3.4**: terjemahan kalimat utuh via Google Translate API + fallback MyMemory, auto-translate kata tak dikenal
> **v3.3**: 10.000+ kata, batch23-119 (kitab Nahwu/Sharf), 97 fase phase plan selesai
> **v3.2**: 7.000+ kata, batch23-82, terjemahan Kemenag, arti kalimat bilingual
> **v3.1**: 1.250+ kata (500+ Quran + 750+ sehari-hari), batch19-22, kata ganti, kosakata harian
> **v3.0**: I'rob Sistematis (Metode Al-Munir + Nahwu al-Wadhih)
> **v2.0**: 1.002 kata, Mode Kata lengkap, Mode Kalimat, bookmark, voice, audio/tafsir
> Deploy live di https://fathahnoor.github.io/KamusQuran/

---

# 🔥 v3.0 ,  I'rob Sistematis (Metode Al-Munir + Nahwu al-Wadhih)

## Referensi Kitab (folder `Nopush/`):
- `An-Nahwu al-Wadhih Jilid 1_Nahwu`: klasifikasi kata → mu'rab/mabni → kedudukan → i'rob → tanda (inductive)
- `An-Nahwu al-Wadhih Jilid 1_Sharf`: wazan, pola morfologi, tasrif
- `Metode Al-Munir-Jilid 1-Nahwu`: i'rob dasar dengan tabel terstruktur (question-driven: "Apa kata ini? Apa kedudukannya? Apa i'robnya? Apa tandanya?")
- `Metode Al-Munir-Jilid 2-Sharf`: pola sharf sistematis dengan tabel
- `Metode Al-Munir-Jilid 3-Nahwu`: i'rob lanjutan, isim-isim khusus, fi'il mudhari', amil jazm, pola kalimat kompleks
- `Kunci Jawaban-Al-Munir-Jilid 1-Nahwu`: contoh jawaban i'rob per kata & per kalimat

## Pola I'rob yang Diterapkan:
Al-Munir Tabular Format: **Kata → Jenis → Kedudukan → I'rob → Tanda → 'Amil/Sebab**
Nahwu al-Wadhih Inductive: **Amati → Klasifikasi → Simpulkan** (observation → classification → deduction)

---

## 📋 v3.0 ,  Phase 1: Data Layer (Types & Heuristic Engine)

### 1.1 Definisikan tipe `StructuredIrab` di `src/types.ts`
- [ ] Buat interface `StructuredIrab`:
  ```ts
  interface StructuredIrab {
    kata: string;      // Kata Arab dengan harakat
    jenis: string;     // Hasil inferensi: "Isim Mufrad", "Fi'il Madhi", "Huruf Jarr", dll.
    kedudukan: string; // SyntacticRole dalam bahasa Indonesia: "Mubtada'", "Fa'il", "Maf'ul Bih", dll.
    irabStatus: string;// "Marfu'", "Manshub", "Majrur", "Majzum", "Mabni"
    tanda: string;     // "Dhammah", "Fathah", "Kasrah", "Wawu", "Alif", "Ya'", "Tetap/Mabni"
    amil: string;      // Governor/sebab: "Ibtida'", "Fi'il sebelumnya", "Huruf Jarr (في)", dll.
    penjelasan?: string; // Ringkasan deduksi (Nahwu al-Wadhih inductive conclusion)
  }
  ```
- [ ] Tambahkan `structuredIrab?: StructuredIrab` ke `MorphoFeatures`
- [ ] Tambahkan `structuredIrab?: StructuredIrab` ke `SentenceToken`
- [ ] Tambahkan field opsional `tnd?: string` (tanda i'rob spesifik) dan `aml?: string` ('amil spesifik) ke `CompactWord`

### 1.2 Buat heuristic engine `src/data/irabHeuristics.ts`
- [ ] Buat fungsi `generateStructuredIrab(cw: CompactWord, arabicWord: string): StructuredIrab`
- [ ] Rules engine **Jenis** ,  inferensi dari `pos + num + vf`:
  - `pos=noun + num=singular` → "Isim Mufrad"
  - `pos=noun + num=dual` → "Isim Mutsanna"
  - `pos=noun + num=plural` → "Jamak Taksir"
  - `pos=verb + vf=fiil_madhi` → "Fi'il Madhi"
  - `pos=verb + vf=fiil_mudhari` → "Fi'il Mudhari'"
  - `pos=verb + vf=fiil_amr` → "Fi'il Amr"
  - `pos=particle` → "Huruf" (+ subkategori: "Huruf Jarr", "Huruf 'Athf", "Huruf Nida'", dll.)
  - `pos=pronoun` → "Dhamir" (+ subkategori: "Dhamir Munfasil", "Dhamir Muttasil")
- [ ] Rules engine **Kedudukan** ,  mapping dari `syntacticRole`:
  - `subject` → "Fa'il"
  - `object` → "Maf'ul Bih"
  - `mubtada` → "Mubtada'"
  - `khabar` → "Khabar"
  - `mudhaf_ilayh` → "Mudhaf Ilayh"
  - `naat` → "Na'at (Sifat)"
  - `hal` → "Hal (Keadaan)"
  - `tamyiz` → "Tamyiz"
  - `badal` → "Badal"
  - `atf` → "Ma'thuf"
  - `khabar_inna` → "Khabar Inna"
  - `ism_inna` → "Isim Inna"
  - ... (lengkapi semua role di `types.ts`)
- [ ] Rules engine **I'rob Status** ,  dari `irab case`:
  - `raf` → "Marfu'"
  - `nasb` → "Manshub"
  - `jarr` → "Majrur"
  - `jazm` → "Majzum"
  - `none` → "Mabni" (kata tetap, tidak berubah)
- [ ] Rules engine **Tanda I'rob** ,  kombinasi jenis + i'rob case:
  - Isim Mufrad + Marfu' → "Dhammah"
  - Isim Mufrad + Manshub → "Fathah"
  - Isim Mufrad + Majrur → "Kasrah"
  - Isim Mutsanna + Marfu' → "Alif"
  - Jamak Mudzakkar Salim + Marfu' → "Wawu"
  - Jamak Muannats Salim + Manshub/Majrur → "Kasrah"
  - Fi'il Mudhari' + Marfu' → "Dhammah"
  - Fi'il Mudhari' + Manshub → "Fathah"
  - Fi'il Mudhari' + Majzum → "Sukun"
  - Mabni → "Tetap (Mabni)"
  - Isim Maqsur/Manqus → "Taqdiri (dikira-kirakan)"
- [ ] Rules engine **'Amil** ,  heuristik berdasarkan kedudukan:
  - Mubtada' → "Ibtida' (permulaan kalimat)"
  - Khabar → "Mubtada' sebelumnya"
  - Fa'il → "Fi'il sebelumnya"
  - Maf'ul Bih → "Fi'il + Fa'il sebelumnya"
  - Majrur → "Huruf Jarr / Idhafah"
  - Majzum → "Amil Jazm sebelumnya"
  - Manshub (fi'il) → "Amil Nashab sebelumnya"
- [ ] Rules engine **Penjelasan** ,  deduksi induktif ala Nahwu al-Wadhih:
  - Gabungkan semua kolom dalam 1-2 kalimat: "Kata X adalah [Jenis], berkedudukan sebagai [Kedudukan], ber-i'rob [I'rob] dengan tanda [Tanda] karena [Amil]."

### 1.3 Integrasikan heuristic engine ke `wordBuilder.ts`
- [ ] Import dan panggil `generateStructuredIrab()` di `buildWordEntry()`
- [ ] Update `generateNahwuNote()` untuk menyertakan ringkasan dari `StructuredIrab.penjelasan`
- [ ] Field `tnd` dan `aml` dari CompactWord akan override hasil heuristic jika diisi manual

---

## 📋 v3.0 ,  Phase 2: UI Mode Kata (WordResultPanel)

### 2.1 Tambahkan Tabel I'rob Al-Munir di WordResultPanel
- [ ] Buat komponen baru `<IrobTable entry={entry} />` di `src/components/IrobTable.tsx`
- [ ] Render tabel dengan kolom: **Kata | Jenis | Kedudukan | I'rob | Tanda | 'Amil**
- [ ] Header kolom interaktif: klik/hover menampilkan tooltip pertanyaan ala Al-Munir:
  - "Apa kata ini?" (Kata)
  - "Apa jenisnya?" (Jenis)
  - "Apa kedudukannya?" (Kedudukan)
  - "Apa i'robnya?" (I'rob)
  - "Apa tandanya?" (Tanda)
  - "Apa 'amil/sebabnya?" ('Amil)
- [ ] Desain tabel: warna latar bergantian (zebra stripe), font Arab untuk kata, border minimal
- [ ] Tabel responsive: di mobile bisa jadi card-based layout (bukan tabel horizontal)
- [ ] Integrasikan `<IrobTable>` ke `WordResultPanel` di bawah section Nahwu/Sharf notes

### 2.2 Tambahkan Deduksi Induktif (Nahwu al-Wadhih style)
- [ ] Di bawah tabel, tampilkan **kesimpulan induktif** 1-2 kalimat
- [ ] Format: "Berdasarkan pengamatan: [kata] adalah [jenis] yang berkedudukan sebagai [kedudukan]. Oleh karena itu, i'robnya [irab] dengan tanda [tanda]. Sebabnya: [amil]."
- [ ] Style: card dengan background accent, italic untuk kesan akademik

### 2.3 Retain existing nahwuNote/sharfNote
- [ ] Jangan hapus nahwuNote/sharfNote yang sudah ada ,  jadikan sebagai complementary info
- [ ] Tabel I'rob = ringkasan terstruktur; nahwuNote = penjelasan naratif

---

## 📋 v3.0 ,  Phase 3: Mode Kalimat (Full Sentence I'rob)

### 3.1 Upgrade `sentenceAnalysis.ts` dengan Context-Aware I'rob
- [ ] Tambah fungsi `analyzeSentenceWithIrab(input: string): SentenceAnalysis`
- [ ] Context-aware detection:
  - Deteksi huruf jarr (في, على, من, إلى, عن, ب, ل, ك) → token berikutnya: Status="Majrur", Amil="Huruf Jarr (X)"
  - Deteksi inna wa akhwatuha (إن, أن, كأن, لكن, ليت, لعل) → token berikutnya: Kedudukan="Isim Inna" (Manshub)
  - Deteksi kaana wa akhwatuha (كان, أصبح, أمسى, ليس, dll.) → token berikutnya: Kedudukan="Isim Kaana" (Marfu'), token setelahnya: "Khabar Kaana" (Manshub)
  - Deteksi idhafah: dua isim berturut-turut → pertama Mudhaf, kedua Mudhaf Ilayh (Majrur)
  - Deteksi na'at-man'ut: isim + isim dengan kesamaan gender/number/definiteness
  - Deteksi 'athf: huruf 'athf (و, ف, ثم, أو) → token setelahnya mengikuti i'rob token sebelumnya
- [ ] Untuk setiap token, panggil `generateStructuredIrab()` dengan context token sebelum/sesudah
- [ ] Tambahkan `structuredIrab` ke setiap `SentenceToken`

### 3.2 Upgrade UI `ModeKalimat.tsx` ,  Tabel I'rob Penuh
- [ ] Ganti tampilan daftar `TokenCard` menjadi **satu tabel besar I'rob**
- [ ] Kolom: **# | Kata | Jenis | Kedudukan | I'rob | Tanda | 'Amil**
- [ ] Baris header menggunakan pertanyaan Al-Munir
- [ ] Token yang matched dengan corpus: background hijau muda; unmatched: background abu-abu
- [ ] Di bawah tabel, tetap tampilkan `SentenceObservation` (jenis kalimat, catatan)
- [ ] Jika ayat Quran terdeteksi: tampilkan banner + full dependency graph

### 3.3 Tambahkan I'rob Summary di Bawah Tabel
- [ ] Ringkasan struktur i'rob kalimat: jumlah + jenis setiap komponen
- [ ] Contoh: "Kalimat ini terdiri dari: 2 Isim Marfu' (Mubtada' + Khabar), 1 Fi'il Madhi Mabni Fathah, 1 Huruf Jarr + Majrur"

---

## 📋 v3.0 ,  Phase 4: Data Enrichment (Manual Touch untuk Akurasi Tinggi)

### 4.1 Field override di CompactWord
- [ ] Gunakan field `tnd` (tanda) dan `aml` ('amil) di CompactWord untuk kasus khusus
- [ ] Prioritaskan nilai manual dari data batch di atas heuristic
- [ ] Dokumentasikan rule priority: `CompactWord override > heuristic inference > default fallback`

### 4.2 Data audit untuk field i'rob spesifik
- [ ] Audit batch01-03 (150+ kata paling frequent): pastikan `irab`, `role`, `g`, `num`, `def` terisi
- [ ] Tambahkan `tnd` dan `aml` manual untuk kata-kata yang heuristic-nya tidak akurat
- [ ] Verifikasi tanda i'rob khusus: isim maqsur, isim manqus, jamak mudzakkar salim, asma'ul khomsah

---

## 📋 v3.0 ,  Phase 5: Polishing & Testing

### 5.1 Testing
- [ ] Unit tests untuk `irabHeuristics.ts` ,  semua rules Jenis, Kedudukan, I'rob, Tanda, Amil
- [ ] Unit tests untuk context-aware i'rob di `sentenceAnalysis.ts`
- [ ] Snapshot tests untuk `IrobTable.tsx` component

### 5.2 I'rob-aware search
- [ ] Di Mode Kata, tambahkan filter/search berdasarkan kedudukan i'rob (opsional, nice-to-have)
- [ ] Contoh: user bisa cari "semua kata yang bisa jadi Mubtada'"

### 5.3 Update About & Dokumentasi
- [ ] Update AboutView dengan penjelasan metodologi i'rob Al-Munir + Nahwu al-Wadhih
- [ ] Tambahkan credit ke kitab sumber di Nopush/
- [ ] Update README dengan fitur v3.0
- [ ] Update version ke v3.0 di About

---

## ✅ Sudah Selesai (v1 progress)

- [x] Dataset 300 kata frekuensi tinggi (batch01-06.ts, deduplikasi per Arabic lemma)
- [x] `wordBuilder.ts` ,  compact type + auto-generate nahwu/sharf notes dari fitur morfologi
- [x] `morphologyIndex.ts` ,  search (diacritics-insensitive), `getWordsByFrequency()`, deduplikasi
- [x] `utils/arabic.ts` ,  `stripDiacritics`, `tokenizeArabic`, `isArabicText` (circular dependency fix)
- [x] Mode Kata ,  word browsing (sorted by frequency rank)
- [x] WordResultPanel ,  diacritic toggle (show/hide harakat), tafsir loading spinner
- [x] WordResultPanel ,  tafsir error state, audio loading state, ARIA accessibility attributes
- [x] Bookmark service (`bookmarks.ts`) + `BookmarkView.tsx` ,  export/import JSON dengan validasi
- [x] Voice recognition service (`voiceRecognition.ts`) ,  terintegrasi di Mode Kata & Mode Kalimat
- [x] Mode Kalimat ,  `sentenceAnalysis.ts` + `ModeKalimat.tsx` ,  token breakdown + sentence observations
- [x] GitHub Pages deployment (workflow passing)
- [x] About view (`AboutView.tsx`) ,  metodologi, sumber data, version info
- [x] Search debounce (300ms) di Mode Kata untuk performance
- [x] Code splitting ,  React.lazy() untuk Mode Kalimat, BookmarkView, AboutView
- [x] All field completeness audit ,  semua field design.md §5.1 ter-render (verb, noun, particle, proper_noun)

---

## ✅ Prioritas Tinggi ,  Sudah Selesai

### 1. Voice recognition ,  VERIFIED
- [x] Voice recognition terintegrasi di Mode Kata & Mode Kalimat via SearchBar
- [x] Graceful fallback: tampilkan pesan jika browser tidak mendukung + fallback ke text input
- [x] Voice language toggle (Arab/Indonesia) di SearchBar

### 2. Bookmark export/import JSON ,  VERIFIED
- [x] Tombol Export JSON (download) & Import JSON (upload file) di BookmarkView
- [x] Validasi format JSON saat import ,  error message untuk file corrupt/invalid
- [x] Empty state dengan CTA "Cari kata untuk dibookmark"

### 3. Field completeness ,  VERIFIED
- [x] Arabic word, root, lemma, Indonesian meaning, POS, nahwu, sharf, i'rab
- [x] Morphological details (wazan, form, gender, number, definiteness)
- [x] Frequency, occurrences (surah:ayah), example ayat, audio, tafsir

---

## 🟡 Prioritas Menengah ,  Belum Selesai

### 4. QADT Dependency Graph untuk Mode Kalimat
- [ ] Tambah data dependency graph (QADT ,  Quranic Arabic Dependency Treebank) untuk ayat-ayat contoh
- [ ] Di Mode Kalimat, tampilkan **parsing sintaksis word-by-word** dengan relasi dependency (subjek→predikat, mubtada→khabar, dll.)
- [ ] Tampilkan sentence-level observations (struktur kalimat, jenis kalimat: nominal/verbal)
- [ ] **Sumber data:** https://corpus.quran.com/dependency.jsp ,  Quranic Arabic Corpus Dependency Treebank
- [ ] **File terkait:** `src/services/sentenceAnalysis.ts`, `src/views/ModeKalimat.tsx`, mungkin file baru `src/data/qadt.ts`

### 5. Perbaiki kualitas data 300 kata
- [ ] Audit batch01-06.ts ,  pastikan semua entry memiliki field morfologi yang sesuai (verb harus punya `vf`, noun harus punya `g`/`num`/`def`, particle tidak perlu wazan)
- [ ] Isi field kosong: beberapa entry mungkin missing `wazan`, `form`, `g`, `num`, `def`, `irab`
- [ ] Tambah example ayat (`ex`) untuk entry yang belum punya contoh
- [ ] Tambah `occ` (daftar surah:ayah) untuk entry yang belum lengkap
- [ ] Verifikasi akurasi terjemahan Indonesian ,  pastikan tidak ada yang salah/nonsens
- [ ] **File terkait:** `src/data/words/batch01.ts` s.d. `batch06.ts`

### 6. UI/UX Polish (sisa)
- [ ] **Responsive design** ,  test di mobile viewport (375px), tablet (768px), desktop (1280px)
- [ ] **Dark mode** (opsional) ,  design.md bilang "simple academic interface", dark mode bisa membantu pembacaan malam hari
- [x] **Empty states** ,  tampilkan pesan saat tidak ada hasil pencarian, bookmark kosong ✓
- [x] **Loading states** untuk audio playback (spinner saat audio buffering) ✓
- [x] **Error states** ,  pesan user-friendly saat API gagal (tafsir) ✓
- [x] **Accessibility** ,  ARIA labels, role attributes, aria-live ✓
- [x] **Arabic font** ,  Amiri + Noto Naskh Arabic ter-load dari Google Fonts ✓

### 7. Ekspansi dataset (opsional, post-v1)
- [ ] Tambah batch07-10.ts untuk capai 500+ kata (intermediate-frequency vocabulary)
- [ ] Tambah kata-kata dari root yang belum terwakili (coverage root diversity)
- [ ] Pertimbangkan tambah kolom `synonyms` atau `antonyms` untuk pembelajaran

---

## 🟢 Prioritas Rendah ,  Nice to Have

### 8. Testing
- [ ] Unit tests untuk `wordBuilder.ts` (`generateNahwuNote`, `generateSharfNote`, `buildWordEntry`)
- [ ] Unit tests untuk `morphologyIndex.ts` (`searchWords`, `getWordsByFrequency`, deduplikasi)
- [ ] Unit tests untuk `sentenceAnalysis.ts` (`analyzeSentence`, `detectLanguage`, `normalizeForMatch`)
- [ ] Unit tests untuk `utils/arabic.ts` (`stripDiacritics`, `tokenizeArabic`, `isArabicText`)
- [ ] Setup test runner (Vitest atau Jest) + test script di `package.json`

### 9. Performance (sisa)
- [x] **Code splitting** ,  lazy load Mode Kalimat, BookmarkView, AboutView dengan `React.lazy()` ✓
- [x] **Search debounce** ,  search input di-debounce (300ms) ✓
- [ ] **Bundle analysis** ,  jalankan `npx vite-bundle-visualizer` untuk identifikasi weight
- [ ] Pertimbangkan service worker untuk offline cache (PWA-lite)

### 10. Dokumentasi & About Page
- [x] Lengkapi `AboutView.tsx` ,  jelaskan metodologi, sumber data, cara penggunaan ✓
- [x] Sebutkan sumber: Quranic Arabic Corpus, Tanzil, AlQuran Cloud API ✓
- [x] Tambah changelog/version info (v1.0) ✓

---

## 📋 Checklist Iterasi Berikutnya (Rekomendasi urutan)

1. **Data quality pass** (#5) ,  audit batch files, isi field kosong, tambah example ayat
2. **QADT dependency graph** (#4) ,  fitur paling kompleks, butuh riset data dari corpus.quran.com
3. **Responsive design test** (#6) ,  test di mobile/tablet, fix layout issues
4. **Tests** (#8) ,  setup Vitest, tulis unit tests untuk utility functions
5. **Dataset expansion** (#7) ,  tambah batch07-10 untuk 500+ kata

---

## 🔧 Catatan Teknis

- **Build:** `npx vite build` → 673 KB JS / 180 KB gzip (code splitting aktif, secondary views di lazy chunks)
- **TypeCheck:** `npx tsc --noEmit` → 0 errors
- **Deploy:** GitHub Actions workflow (`deploy.yml`) auto-trigger on push to main
- **Live URL:** https://fathahnoor.github.io/KamusQuran/
- **v3.0 Architecture Plan:**
  - `src/types.ts` ,  tambah `StructuredIrab` interface + update `MorphoFeatures` & `SentenceToken`
  - `src/data/irabHeuristics.ts` ,  **file baru**: rule engine i'rob ala Al-Munir
  - `src/data/wordBuilder.ts` ,  integrasi `generateStructuredIrab()` ke `buildWordEntry()`
  - `src/components/IrobTable.tsx` ,  **file baru**: komponen tabel i'rob question-driven
  - `src/components/WordResultPanel.tsx` ,  integrasi `<IrobTable>`
  - `src/services/sentenceAnalysis.ts` ,  upgrade context-aware i'rob
  - `src/views/ModeKalimat.tsx` ,  tabel i'rob penuh per kalimat
- **Referensi Kitab (Nopush/):** An-Nahwu al-Wadhih Jilid 1 (Nahwu + Sharf), Metode Al-Munir Jilid 1-3
