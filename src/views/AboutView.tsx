export function AboutView() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-ink-200 bg-white p-4 shadow-sm sm:p-6">
        <h1 className="text-xl font-bold text-ink-900 sm:text-2xl">Tentang &amp; Metodologi</h1>
        <p className="mt-1 text-sm text-ink-500">
          Kamus Quran adalah alat belajar bahasa Arab Al-Qur&apos;an dengan fokus pada
          kosakatab, nahwu, sharf, dan analisis morfologi.
        </p>
      </div>

      <Section title="Tujuan">
        <p>
          Membantu pengguna menguasai ~80–90% kosakatab frekuensi tinggi Al-Qur&apos;an
          (500 kata berdasarkan data Quranic Arabic Corpus) serta memahami struktur
          nahwu dan sharf melalui pencarian dan analisis praktis.
        </p>
      </Section>

      <Section title="Sumber Data">
        <ul className="list-inside list-disc space-y-1 text-sm text-ink-700">
          <li>
            <strong>Quranic Arabic Corpus (corpus.quran.com)</strong> — data morfologi:
            akar (root), lemma, kelas kata (POS), wazan, i&apos;rab, fitur morfologi,
            dan dependency treebank (QADT). Lisensi: GNU GPL.
          </li>
          <li>
            <strong>Tanzil (tanzil.net)</strong> — teks Al-Qur&apos;an Uthmani dan
            terjemahan Bahasa Indonesia (Kemenag).
          </li>
          <li>
            <strong>AlQuran Cloud API (alquran.cloud)</strong> — audio tilawah
            (Mishary Alafasy), tafsir Jalalayn (Bahasa Indonesia), dan endpoint search.
            Gratis, tanpa API key, CORS-enabled.
          </li>
          <li>
            <strong>Web Speech API</strong> — pengenalan suara browser-native untuk
            input Arab (ar-SA) dan Indonesia (id-ID).
          </li>
        </ul>
      </Section>

      <Section title="Kedalaman Analisis">
        <p>
          Aplikasi menampilkan analisis pada <strong>kedalaman level 3</strong>,
          meliputi: akar triliteral, lemma, kelas kata, wazan/pola morfologi, bentuk
          turunan, kategori fi&apos;il (madhi/mudhari&apos;/amr), jumlah, gender,
          kefinitifan, i&apos;rab, fungsi sintaktis, dan relasi antar kata bila
          tersedia.
        </p>
      </Section>

      <Section title="Mode Kalimat — Pendekatan Hybrid">
        <p>
          Untuk kalimat dari Al-Qur&apos;an, aplikasi menggunakan data dependency
          graph dari QADT (annotasi scholar). Untuk input kalimat bebas, aplikasi
          melakukan tokenisasi dan pencocokan morfologi per kata terhadap data
          Quranic Arabic Corpus yang di-bundle, ditambah tebakan POS berbasis
          heuristik untuk kata yang tidak ditemukan.
        </p>
        <p className="mt-2">
          Pendekatan ini memastikan akurasi tinggi untuk ayat Quran, tetapi
          memiliki keterbatasan untuk kalimat arbitrary yang tidak terdapat dalam
          korpus — fungsi sintaktis antar kata mungkin tidak lengkap.
        </p>
      </Section>

      <Section title="Bookmark &amp; Persistensi">
        <p>
          Bookmark disimpan di <code className="rounded bg-ink-100 px-1">localStorage</code>{" "}
          browser. Tidak ada login. Bookmark dapat diekspor dan diimpor sebagai file
          JSON untuk transfer antar perangkat.
        </p>
      </Section>

      <Section title="Hosting">
        <p>
          Aplikasi dibangun sebagai static site (Vite + React) dan dapat dideploy ke
          GitHub Pages. Semua data morfologi di-bundle; audio dan tafsir dimuat
          on-demand dari AlQuran Cloud API (gratis, tanpa API key).
        </p>
      </Section>

      <Section title="Keterbatasan v1">
        <ul className="list-inside list-disc space-y-1 text-sm text-ink-700">
          <li>
            Database kata berisi 500 kata berfrekuensi tinggi yang mencakup
            ~80–90% kosakata Al-Qur'an. Data dapat diperluas tanpa perubahan kode.
          </li>
          <li>
            Pengenalan suara hanya berfungsi di Chrome, Edge, dan Safari (online).
            Firefox tidak didukung — fallback ke input teks selalu tersedia.
          </li>
          <li>
            Analisis dependency graph untuk kalimat bebas (non-Quran) tidak tersedia
            tanpa sumber data eksternal tambahan.
          </li>
        </ul>
      </Section>

      <Section title="Versi">
        <p>
          <strong>v1.1</strong> — 500 kata berfrekuensi tinggi, Mode Kata dengan
          browsing &amp; diacritic toggle, Mode Kalimat dengan analisis per kata,
          bookmark dengan export/import JSON, TTS pengucapan, dan integrasi audio/tafsir AlQuran Cloud.
        </p>
      </Section>

      <p className="text-center text-xs text-ink-400">
        Dibangun sebagai alat edukasi — bukan pengganti tafsir resmi atau fatwa.
      </p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-ink-200 bg-white p-3 shadow-sm sm:p-4">
      <h2 className="mb-2 text-sm font-bold text-ink-700">{title}</h2>
      <div className="space-y-1 text-sm leading-relaxed text-ink-700">{children}</div>
    </div>
  );
}
