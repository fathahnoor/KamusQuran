# القاموس Kamus Quran

> Kamus bahasa Arab Al-Qur'an berbasis web dengan analisis morfologi mendalam, i'rob sistematis ala Al-Munir, pencarian suara, dan analisis kalimat. Gratis, tanpa login, bisa diakses langsung dari browser.
>
> **v3.0** — I'rob Sistematis dengan heuristic engine + context-aware sentence analysis.

**[Buka Aplikasi](https://fathahnoor.github.io/KamusQuran/)** &nbsp;|&nbsp; **[Laporkan Bug](https://github.com/fathahnoor/KamusQuran/issues)**

---

## Tentang

Kamus Quran adalah aplikasi web untuk mempelajari bahasa Arab Al-Qur'an secara mendalam. Tidak sekadar menampilkan terjemahan, aplikasi ini memberikan **analisis linguistik level 3** dan **i'rob sistematis**: mulai dari akar triliteral, lemma, kelas kata (nahwu), pola morfologi (sharf), hingga tabel i'rob 6 kolom ala **Metode Al-Munir** dan kesimpulan induktif ala **An-Nahwu al-Wadhih**.

Basis data mencakup **1.002 kata** (500 kosakata frekuensi tinggi Al-Qur'an + 502 kosakata Arab sehari-hari), sehingga dengan menguasai koleksi ini pengguna dapat memahami sekitar **80-90% kosakata** yang muncul dalam Al-Qur'an.

### I'rob Sistematis v3.0

Setiap kata memiliki **tabel i'rob 6 kolom** (Kata → Jenis → Kedudukan → I'rob → Tanda → 'Amil) yang di-generate otomatis oleh **heuristic engine** (300+ baris aturan nahwu-sharf). Di Mode Kalimat, **SentenceIrobTable** menampilkan i'rob seluruh kalimat dalam satu tabel utuh dengan context-aware detection (huruf jarr, inna/akhwatuha, kaana/akhwatuha, idhafah, 'athf). Akurasi dijaga oleh **30+ unit tests** (Vitest).

---

## Fitur Utama

### Mode Kata
- Cari kata Arab atau terjemahan Indonesia secara instan
- **🆕 v3.0: Tabel I&apos;rob 6 Kolom** ala Metode Al-Munir (Kata → Jenis → Kedudukan → I&apos;rob → Tanda → &apos;Amil)
- **🆕 v3.0: Kesimpulan Induktif** ala An-Nahwu al-Wadhih untuk setiap kata
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
- **🆕 v3.0: SentenceIrobTable** — tabel i'rob Al-Munir utuh per kalimat (8 kolom: #, Kata, Arti, Jenis, Kedudukan, I'rob, Tanda, 'Amil)
- **🆕 v3.0: Context-Aware I&apos;rob Engine** — deteksi otomatis huruf jarr, inna/akhwatuha, kaana/akhwatuha, idhafah, &apos;athf
- **🆕 v3.0: Expandable IrobTable** per token dengan detail morfologi
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
| Kosakata frekuensi tinggi Al-Qur'an | 500 kata |
| Kosakata Arab sehari-hari | 502 kata |
| **Total** | **1.002 kata** |

Data morfologi bersumber dari **Quranic Arabic Corpus** (corpus.quran.com, lisensi GNU GPL), teks Al-Qur'an dari **Tanzil** (tanzil.net), audio tilawah dan tafsir dari **AlQuran Cloud API** (alquran.cloud). Metodologi i'rob mengacu pada kitab **An-Nahwu al-Wadhih** dan **Metode Al-Munir**.

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
- [AlQuran Cloud API](https://alquran.cloud/) - audio tilawah Mishary Alafasy dan tafsir Jalalain
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - pengenalan suara browser-native

### Referensi Kitab
- **An-Nahwu al-Wadhih** (Jilid 1 Nahwu & Sharf) — metodologi deduksi induktif
- **Metode Al-Munir** (Jilid 1-3 Nahwu & Sharf) — format tabel i'rob question-driven


---

## Lisensi

Sumber kode dirilis di bawah lisensi **MIT**. Data morfologi mengikuti lisensi GNU GPL dari Quranic Arabic Corpus.
