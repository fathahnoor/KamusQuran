# TODO — Kamus Quran (Iterasi Berikutnya)

> Status: v1 sebagian besar tercapai. Deploy live di https://fathahnoor.github.io/KamusQuran/
> Commit terakhir: iterasi UI polish + performance + dokumentasi

---

## ✅ Sudah Selesai (v1 progress)

- [x] Dataset 300 kata frekuensi tinggi (batch01-06.ts, deduplikasi per Arabic lemma)
- [x] `wordBuilder.ts` — compact type + auto-generate nahwu/sharf notes dari fitur morfologi
- [x] `morphologyIndex.ts` — search (diacritics-insensitive), `getWordsByFrequency()`, deduplikasi
- [x] `utils/arabic.ts` — `stripDiacritics`, `tokenizeArabic`, `isArabicText` (circular dependency fix)
- [x] Mode Kata — word browsing (sorted by frequency rank)
- [x] WordResultPanel — diacritic toggle (show/hide harakat), tafsir loading spinner
- [x] WordResultPanel — tafsir error state, audio loading state, ARIA accessibility attributes
- [x] Bookmark service (`bookmarks.ts`) + `BookmarkView.tsx` — export/import JSON dengan validasi
- [x] Voice recognition service (`voiceRecognition.ts`) — terintegrasi di Mode Kata & Mode Kalimat
- [x] Mode Kalimat — `sentenceAnalysis.ts` + `ModeKalimat.tsx` — token breakdown + sentence observations
- [x] GitHub Pages deployment (workflow passing)
- [x] About view (`AboutView.tsx`) — metodologi, sumber data, version info
- [x] Search debounce (300ms) di Mode Kata untuk performance
- [x] Code splitting — React.lazy() untuk Mode Kalimat, BookmarkView, AboutView
- [x] All field completeness audit — semua field design.md §5.1 ter-render (verb, noun, particle, proper_noun)

---

## ✅ Prioritas Tinggi — Sudah Selesai

### 1. Voice recognition — VERIFIED
- [x] Voice recognition terintegrasi di Mode Kata & Mode Kalimat via SearchBar
- [x] Graceful fallback: tampilkan pesan jika browser tidak mendukung + fallback ke text input
- [x] Voice language toggle (Arab/Indonesia) di SearchBar

### 2. Bookmark export/import JSON — VERIFIED
- [x] Tombol Export JSON (download) & Import JSON (upload file) di BookmarkView
- [x] Validasi format JSON saat import — error message untuk file corrupt/invalid
- [x] Empty state dengan CTA "Cari kata untuk dibookmark"

### 3. Field completeness — VERIFIED
- [x] Arabic word, root, lemma, Indonesian meaning, POS, nahwu, sharf, i'rab
- [x] Morphological details (wazan, form, gender, number, definiteness)
- [x] Frequency, occurrences (surah:ayah), example ayat, audio, tafsir

---

## 🟡 Prioritas Menengah — Belum Selesai

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

### 6. UI/UX Polish (sisa)
- [ ] **Responsive design** — test di mobile viewport (375px), tablet (768px), desktop (1280px)
- [ ] **Dark mode** (opsional) — design.md bilang "simple academic interface", dark mode bisa membantu pembacaan malam hari
- [x] **Empty states** — tampilkan pesan saat tidak ada hasil pencarian, bookmark kosong ✓
- [x] **Loading states** untuk audio playback (spinner saat audio buffering) ✓
- [x] **Error states** — pesan user-friendly saat API gagal (tafsir) ✓
- [x] **Accessibility** — ARIA labels, role attributes, aria-live ✓
- [x] **Arabic font** — Amiri + Noto Naskh Arabic ter-load dari Google Fonts ✓

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

### 9. Performance (sisa)
- [x] **Code splitting** — lazy load Mode Kalimat, BookmarkView, AboutView dengan `React.lazy()` ✓
- [x] **Search debounce** — search input di-debounce (300ms) ✓
- [ ] **Bundle analysis** — jalankan `npx vite-bundle-visualizer` untuk identifikasi weight
- [ ] Pertimbangkan service worker untuk offline cache (PWA-lite)

### 10. Dokumentasi & About Page
- [x] Lengkapi `AboutView.tsx` — jelaskan metodologi, sumber data, cara penggunaan ✓
- [x] Sebutkan sumber: Quranic Arabic Corpus, Tanzil, AlQuran Cloud API ✓
- [x] Tambah changelog/version info (v1.0) ✓

---

## 📋 Checklist Iterasi Berikutnya (Rekomendasi urutan)

1. **Data quality pass** (#5) — audit batch files, isi field kosong, tambah example ayat
2. **QADT dependency graph** (#4) — fitur paling kompleks, butuh riset data dari corpus.quran.com
3. **Responsive design test** (#6) — test di mobile/tablet, fix layout issues
4. **Tests** (#8) — setup Vitest, tulis unit tests untuk utility functions
5. **Dataset expansion** (#7) — tambah batch07-10 untuk 500+ kata

---

## 🔧 Catatan Teknis

- **Build:** `npx vite build` → 380KB JS / 110KB gzip (code splitting aktif, secondary views di lazy chunks)
- **TypeCheck:** `npx tsc --noEmit` → 0 errors
- **Deploy:** GitHub Actions workflow (`deploy.yml`) auto-trigger on push to main
- **PAT:** Gunakan GitHub Personal Access Token dengan scope `repo` + `workflow`. **Ganti jika expired.**
- **Live URL:** https://fathahnoor.github.io/KamusQuran/
