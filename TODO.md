# TODO — Kamus Quran (Iterasi Berikutnya)

> Status: v1 sebagian besar tercapai. Deploy live di https://fathahnoor.github.io/KamusQuran/
> Commit terakhir: `ffb850b` — feat(ui): add diacritic toggle + tafsir loading state

---

## ✅ Sudah Selesai (v1 progress)

- [x] Dataset 300 kata frekuensi tinggi (batch01-06.ts, deduplikasi per Arabic lemma)
- [x] `wordBuilder.ts` — compact type + auto-generate nahwu/sharf notes dari fitur morfologi
- [x] `morphologyIndex.ts` — search (diacritics-insensitive), `getWordsByFrequency()`, deduplikasi
- [x] `utils/arabic.ts` — `stripDiacritics`, `tokenizeArabic`, `isArabicText` (circular dependency fix)
- [x] Mode Kata — word browsing (sorted by frequency rank)
- [x] WordResultPanel — diacritic toggle (show/hide harakat), tafsir loading spinner
- [x] Bookmark service (`bookmarks.ts`) + `BookmarkView.tsx`
- [x] Voice recognition service (`voiceRecognition.ts`)
- [x] Mode Kalimat — `sentenceAnalysis.ts` + `ModeKalimat.tsx`
- [x] GitHub Pages deployment (workflow passing)
- [x] About view (`AboutView.tsx`)

---

## 🔴 Prioritas Tinggi — Wajib untuk v1 completion

### 1. Verifikasi & lengkapi integrasi voice recognition
- [ ] Pastikan voice recognition terintegrasi di **Mode Kata** untuk input Arabic (Web Speech API)
- [ ] Pastikan voice recognition terintegrasi di **Mode Kalimat** untuk Arabic & Indonesian
- [ ] Graceful fallback jika browser tidak mendukung SpeechRecognition → tampilkan pesan + fallback ke text input
- [ ] Test di browser mobile (Chrome Android) — pastikan tombol mic terlihat dan berfungsi
- [ ] **File terkait:** `src/services/voiceRecognition.ts`, `src/components/SearchBar.tsx`, `src/views/ModeKata.tsx`, `src/views/ModeKalimat.tsx`

### 2. Verifikasi bookmark export/import JSON
- [ ] Pastikan `BookmarkView.tsx` memiliki tombol **Export JSON** (download semua bookmark)
- [ ] Pastikan `BookmarkView.tsx` memiliki tombol **Import JSON** (upload file .json)
- [ ] Validasi format JSON saat import — handle corrupt/invalid file dengan error message
- [ ] **File terkait:** `src/views/BookmarkView.tsx`, `src/services/bookmarks.ts`

### 3. Pastikan semua field wajib tampil di Mode Kata result
Cek `WordResultPanel.tsx` menampilkan semua field berikut per design.md §5.1:
- [ ] Arabic word ✅ (sudah ada)
- [ ] Root ✅
- [ ] Lemma ✅
- [ ] Indonesian meaning ✅
- [ ] Part of speech ✅
- [ ] Nahwu information ✅ (auto-generated)
- [ ] Sharf information ✅ (auto-generated)
- [ ] I'rab / syntactic context ✅
- [ ] Morphological details (wazan, form, gender, number, definiteness) ✅
- [ ] Number of occurrences in the Qur'an ✅ (freq)
- [ ] Full list of surah:ayah references ✅ (occ)
- [ ] Selected example ayat ✅ (ex)
- [ ] Audio pronunciation ✅ (audioUrl)
- [ ] Brief tafsir related to the word ✅ (tafsir loading dari AlQuran Cloud)
- [ ] **Verifikasi:** semua field ini benar-benar ter-render untuk berbagai tipe kata (verb, noun, particle, proper_noun)

---

## 🟡 Prioritas Menengah — Kualitas & Kelengkapan

### 4. QADT Dependency Graph untuk Mode Kalimat
- [ ] Tambah data dependency graph (QADT — Quranic Arabic Dependency Treebank) untuk ayat-ayat contoh
- [ ] Di Mode Kalimat, tampilkan **parsing sintaksis word-by-word** dengan relasi dependency (subjek→predikat, mubtada→khabar, dll.)
- [ ] Tampilkan sentence-level observations (struktur kalimat, jenis kalimat: nominal/verbal)
- [ ] **Sumber data:** https://corpus.quran.com/dependency.jsp — Quranic Arabic Corpus Dependency Treebank
- [ ] **File terkait:** `src/services/sentenceAnalysis.ts`, `src/views/ModeKalimat.tsx`, mungkin file baru `src/data/qadt.ts`

### 5. Perbaiki kualitas data 300 kata
- [ ] Audit batch01-06.ts — pastikan semua entry memiliki field morfologi yang sesuai (verb harus punya `vf`, noun harus punya `g`/`num`/`def`, particle tidak perlu wazan)
- [ ] Isi field kosong: beberapa entry mungkin missing `wazan`, `form`, `g`, `num`, `def`, `irab`
- [ ] Tambah example ayat (`ex`) untuk entry yang belum punya contoh
- [ ] Tambah `occ` (daftar surah:ayah) untuk entry yang belum lengkap
- [ ] Verifikasi akurasi terjemahan Indonesian — pastikan tidak ada yang salah/nonsens
- [ ] **File terkait:** `src/data/words/batch01.ts` s.d. `batch06.ts`

### 6. UI/UX Polish
- [ ] **Responsive design** — test di mobile viewport (375px), tablet (768px), desktop (1280px)
- [ ] **Empty states** — tampilkan ilustrasi/pesan saat tidak ada hasil pencarian, bookmark kosong, dll.
- [ ] **Loading states** untuk audio playback (spinner saat audio buffering)
- [ ] **Error states** — pesan user-friendly saat API gagal (tafsir, audio)
- [ ] **Accessibility** — keyboard navigation, ARIA labels, focus management
- [ ] **Arabic font** — pastikan font Arabic ter-load dengan baik (pertimbangkan 'Amiri', 'Scheherazade', atau 'Noto Naskh Arabic')
- [ ] **Dark mode** (opsional) — design.md bilang "simple academic interface", dark mode bisa membantu pembacaan malam hari

### 7. Ekspansi dataset (opsional, post-v1)
- [ ] Tambah batch07-10.ts untuk capai 500+ kata (intermediate-frequency vocabulary)
- [ ] Tambah kata-kata dari root yang belum terwakili (coverage root diversity)
- [ ] Pertimbangkan tambah kolom `synonyms` atau `antonyms` untuk pembelajaran

---

## 🟢 Prioritas Rendah — Nice to Have

### 8. Testing
- [ ] Unit tests untuk `wordBuilder.ts` (`generateNahwuNote`, `generateSharfNote`, `buildWordEntry`)
- [ ] Unit tests untuk `morphologyIndex.ts` (`searchWords`, `getWordsByFrequency`, deduplikasi)
- [ ] Unit tests untuk `sentenceAnalysis.ts` (`analyzeSentence`, `detectLanguage`, `normalizeForMatch`)
- [ ] Unit tests untuk `utils/arabic.ts` (`stripDiacritics`, `tokenizeArabic`, `isArabicText`)
- [ ] Setup test runner (Vitest atau Jest) + test script di `package.json`

### 9. Performance
- [ ] **Code splitting** — lazy load Mode Kalimat & BookmarkView dengan `React.lazy()`
- [ ] **Search debounce** — pastikan search input di-debounce (300ms) untuk hindari lag
- [ ] **Bundle analysis** — jalankan `npx vite-bundle-visualizer` untuk identifikasi weight
- [ ] Pertimbangkan service worker untuk offline cache (PWA-lite)

### 10. Dokumentasi & About Page
- [ ] Lengkapi `AboutView.tsx` — jelaskan metodologi, sumber data, cara penggunaan
- [ ] Sebutkan sumber: Quranic Arabic Corpus, Tanzil, AlQuran Cloud API, 80% Quran Vocabulary
- [ ] Tambah changelog/version info

---

## 📋 Checklist Iterasi Berikutnya (Rekomendasi urutan)

1. **Voice recognition integration check** (#1) — buka live site, test tombol mic di Mode Kata & Mode Kalimat
2. **Bookmark export/import check** (#2) — test download & upload JSON di live site
3. **Field completeness audit** (#3) — search beberapa kata, pastikan semua field ter-render
4. **Data quality pass** (#5) — audit batch files, isi field kosong
5. **QADT dependency graph** (#4) — fitur paling kompleks, butuh riset data dulu
6. **UI/UX polish** (#6) — responsive, empty states, error states
7. **Tests** (#8) — setup Vitest, tulis unit tests untuk utility functions

---

## 🔧 Catatan Teknis

- **Build:** `npx vite build` → 390KB JS / 112KB gzip (acceptable untuk GitHub Pages)
- **TypeCheck:** `npx tsc --noEmit` → 0 errors
- **Deploy:** GitHub Actions workflow (`deploy.yml`) auto-trigger on push to main
- **PAT:** Gunakan GitHub Personal Access Token dengan scope `repo` + `workflow` — simpan di env var, jangan hardcode di repo. **Ganti jika expired.**
- **Live URL:** https://fathahnoor.github.io/KamusQuran/
