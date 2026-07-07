# القاموس Kamus Quran

> Kamus bahasa Arab Al-Qur'an berbasis web dengan analisis morfologi mendalam, pencarian suara, dan analisis kalimat. Gratis, tanpa login, bisa diakses langsung dari browser.

**[Buka Aplikasi](https://fathahnoor.github.io/KamusQuran/)** &nbsp;|&nbsp; **[Laporkan Bug](https://github.com/fathahnoor/KamusQuran/issues)**

---

## Tentang

Kamus Quran adalah aplikasi web untuk mempelajari bahasa Arab Al-Qur'an secara mendalam. Tidak sekadar menampilkan terjemahan, aplikasi ini memberikan **analisis linguistik level 3**: mulai dari akar triliteral, lemma, kelas kata (nahwu), pola morfologi (sharf), hingga i'rab dan contoh kemunculan langsung dari ayat Al-Qur'an.

Basis data mencakup lebih dari **1.000 kata** yang terdiri dari kosakata frekuensi tinggi Al-Qur'an dan kosakata Arab sehari-hari, sehingga dengan menguasai koleksi ini pengguna dapat memahami sekitar **80-90% kosakata** yang muncul dalam Al-Qur'an.

---

## Fitur Utama

### Mode Kata
- Cari kata Arab atau terjemahan Indonesia secara instan
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
  - Tafsir Jalalain berbahasa Indonesia

### Mode Kalimat
- Masukkan kalimat Arab atau ayat Al-Qur'an bebas
- Tokenisasi otomatis: kalimat dipecah kata per kata
- Setiap token ditampilkan dengan arti dan konteks morfologinya
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
| Kosakata Arab sehari-hari | 100+ kata |
| **Total** | **1.000+ kata** |

Data morfologi bersumber dari **Quranic Arabic Corpus** (corpus.quran.com, lisensi GNU GPL), teks Al-Qur'an dari **Tanzil** (tanzil.net), audio tilawah dan tafsir dari **AlQuran Cloud API** (alquran.cloud).

---

## Teknologi

- **Frontend:** React + TypeScript
- **Build tool:** Vite (code splitting aktif, lazy loading)
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
```

---

## Sumber Data

- [Quranic Arabic Corpus](https://corpus.quran.com/) - data morfologi, akar, lemma, i'rab, QADT
- [Tanzil](https://tanzil.net/) - teks Al-Qur'an Uthmani dan terjemahan Kemenag
- [AlQuran Cloud API](https://alquran.cloud/) - audio tilawah Mishary Alafasy dan tafsir Jalalain
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - pengenalan suara browser-native

---

## Lisensi

Sumber kode dirilis di bawah lisensi **MIT**. Data morfologi mengikuti lisensi GNU GPL dari Quranic Arabic Corpus.
