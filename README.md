# القاموس Kamus Quran

> Kamus bahasa Arab Al-Qur'an berbasis web dengan analisis morfologi mendalam, i'rob sistematis, pencarian suara, dan analisis kalimat. Gratis, tanpa login, bisa diakses langsung dari browser.
>
> I'rob Sistematis dengan heuristic engine + context-aware sentence analysis. 10.000+ kosakata.

**[Buka Aplikasi](https://fathahnoor.github.io/KamusQuran/)** &nbsp;|&nbsp; **[Laporkan Bug](https://github.com/fathahnoor/KamusQuran/issues)**

---

## Tentang

Kamus Quran adalah aplikasi web untuk mempelajari bahasa Arab Al-Qur'an secara mendalam. Tidak sekadar menampilkan terjemahan, aplikasi ini memberikan **analisis linguistik level 3** dan **i'rob sistematis**: mulai dari akar triliteral, lemma, kelas kata (nahwu), pola morfologi (sharf), hingga tabel i'rob 6 kolom dan kesimpulan induktif.

Basis data mencakup **10.000+ kata** (dikurasi dari Quranic Arabic Corpus, kamus Arab sehari-hari, dan kitab Nahwu/Sharf), sehingga dengan menguasai koleksi ini pengguna dapat memahami sebagian besar kosakata yang muncul dalam Al-Qur'an dan teks Arab klasik.

### I'rob Sistematis

Setiap kata memiliki **tabel i'rob 6 kolom** (Kata → Jenis → Kedudukan → I'rob → Tanda → 'Amil) yang di-generate otomatis oleh **heuristic engine** (300+ baris aturan nahwu-sharf). Di Mode Kalimat, **SentenceIrobTable** menampilkan i'rob seluruh kalimat dalam satu tabel utuh dengan context-aware detection (huruf jarr, inna/akhwatuha, kaana/akhwatuha, idhafah, 'athf). Akurasi dijaga oleh **30+ unit tests** (Vitest).

---

## Fitur Utama

### Mode Kata
- Cari kata Arab atau terjemahan Indonesia secara instan
- **Tabel I&apos;rob 6 Kolom** (Kata, Jenis, Kedudukan, I'rob, Tanda, 'Amil)
- **Kesimpulan Induktif** untuk setiap kata
- Pencarian tidak sensitif harakat (diacritics-insensitive)
- Tampilkan atau sembunyikan harakat sesuai preferensi
- Jelajahi seluruh kosakata berdasarkan peringkat frekuensi
- Lihat detail lengkap setiap kata:
  - Akar triliteral dan lemma
  - Kelas kata: fi'il, isim, huruf, atau alam
  - Wazan dan pola morfologi
  - Fitur gramatikal: gender, jumlah, kefinitifan
  - Kategori fi'il: madhi, mudhari', amr
  - I'rab dan fungsi sintaktis
  - Catatan nahwu dan sharf yang di-generate otomatis
  - Frekuensi kemunculan di seluruh Al-Qur'an
  - Daftar lokasi kemunculan (surah:ayah)
  - Contoh ayat lengkap beserta terjemahan
  - Audio tilawah dari Mishary Alafasy

### Mode Kalimat
- Masukkan kalimat Arab atau ayat Al-Qur'an bebas
- **Terjemahan Kemenag RI**: deteksi otomatis cuplikan ayat Quran, tampilkan terjemahan resmi
- **Arti Kalimat bilingual**: terjemahan Indonesia↔Arab untuk input kedua bahasa
- Tokenisasi otomatis: kalimat dipecah kata per kata
- **SentenceIrobTable**: tabel i'rob utuh per kalimat (8 kolom: #, Kata, Arti, Jenis, Kedudukan, I'rob, Tanda, 'Amil)
- **Context-Aware I&apos;rob Engine**: deteksi otomatis huruf jarr, inna/akhwatuha, kaana/akhwatuha, idhafah, &apos;athf
- **Expandable IrobTable** per token dengan detail morfologi
- Ringkasan i'rob kalimat + observasi struktural (jumlah fi'liyyah/ismiyyah)
- Analisis struktur kalimat secara keseluruhan
- Pendekatan hybrid: data QADT (Quranic Arabic Dependency Treebank) untuk ayat Al-Qur'an, ditambah pencocokan morfologi heuristik untuk kalimat bebas

### Input Suara
- Kenali kata Arab dengan mikrofon langsung dari browser
- Dukung dua bahasa suara: Arab (ar-SA) dan Indonesia (id-ID)
- Toggle bahasa suara tersedia di search bar
- Fallback graceful jika browser tidak mendukung Web Speech API

### Bookmark
- Simpan kata favorit tanpa perlu akun atau login
- Data tersimpan di localStorage browser
- Ekspor koleksi bookmark sebagai file JSON
- Impor bookmark dari file JSON dengan validasi format
- Empty state dengan CTA untuk mulai menambahkan bookmark

---

## Cakupan Kosakata

| Kategori | Jumlah |
|---|---|
| Kosakata frekuensi tinggi Al-Qur'an | 500+ kata |
| Kosakata Arab sehari-hari | 750+ kata |
| Kosakata dari kitab Nahwu/Sharf | 9.000+ kata |
| **Total** | **10.000+ kata** |

Data morfologi bersumber dari **Quranic Arabic Corpus** (corpus.quran.com, lisensi GNU GPL), teks Al-Qur'an dari **Tanzil** (tanzil.net), audio tilawah dan terjemahan dari **AlQuran Cloud API** (alquran.cloud). Kosakata Nahwu/Sharf dikurasi dari kitab rujukan.

---

## Teknologi

- **Frontend:** React + TypeScript
- **Build tool:** Vite (code splitting aktif, lazy loading)
- **Testing:** Vitest (30+ unit tests untuk heuristic engine i'rob)
- **Deploy:** GitHub Pages via GitHub Actions (auto-deploy on push)
- **Font Arab:** Amiri + Noto Naskh Arabic
- **API eksternal:** AlQuran Cloud (audio + tafsir), Web Speech API (suara)
- **Storage:** localStorage (bookmark, tanpa backend)

---

## Menjalankan Secara Lokal

```bash
# Clone repo
git clone https://github.com/fathahnoor/KamusQuran.git
cd KamusQuran

# Install dependensi
npm install

# Jalankan dev server
npm run dev

# Build produksi
npm run build

# Jalankan unit tests
npm test
```

---

## Sumber Data

- [Quranic Arabic Corpus](https://corpus.quran.com/) - data morfologi, akar, lemma, i'rab, QADT
- [Tanzil](https://tanzil.net/) - teks Al-Qur'an Uthmani dan terjemahan Kemenag
- [AlQuran Cloud API](https://alquran.cloud/) - audio tilawah Mishary Alafasy
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - pengenalan suara browser-native

### Referensi Kitab
- **An-Nahwu al-Wadhih** (Jilid 1 Nahwu & Sharf)
- **Metode Al-Munir** (Jilid 1-3 Nahwu & Sharf)


---

## Lisensi

Sumber kode dirilis di bawah lisensi **MIT**. Data morfologi mengikuti lisensi GNU GPL dari Quranic Arabic Corpus.
