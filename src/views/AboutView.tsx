export function AboutView() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero header with gradient */}
      <div className="overflow-hidden rounded-2xl border border-ink-200/60 bg-gradient-to-br from-white via-white to-accent-50/30 p-5 shadow-sm sm:p-7">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-600 to-accent-500 text-white shadow-sm shadow-accent-500/30">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-ink-900 sm:text-2xl">Tentang &amp; Metodologi</h1>
            <p className="mt-0.5 text-sm text-ink-500">
              Kamus Quran adalah alat belajar bahasa Arab Al-Qur&apos;an dengan fokus pada
              kosakata, nahwu, sharf, dan analisis morfologi.
            </p>
          </div>
        </div>
      </div>

      <Section title="Tujuan" icon="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5">
        <p>
          Membantu pengguna menguasai ~80–90% kosakatab frekuensi tinggi Al-Qur&apos;an
          (600 kata: 500 kata berfrekuensi tinggi dari Quranic Arabic Corpus + 100 kata Arab sehari-hari) serta memahami struktur
          nahwu dan sharf melalui pencarian dan analisis praktis.
        </p>
      </Section>

      <Section title="Sumber Data" icon="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
        <ul className="list-inside list-disc space-y-1.5 text-sm text-ink-700">
          <li>
            <strong>Quranic Arabic Corpus (corpus.quran.com)</strong>, data morfologi:
            akar (root), lemma, kelas kata (POS), wazan, i&apos;rab, fitur morfologi,
            dan dependency treebank (QADT). Lisensi: GNU GPL.
          </li>
          <li>
            <strong>Tanzil (tanzil.net)</strong>: teks Al-Qur&apos;an Uthmani dan
            terjemahan Bahasa Indonesia (Kemenag).
          </li>
          <li>
            <strong>AlQuran Cloud API (alquran.cloud)</strong>: audio tilawah
            (Mishary Alafasy), tafsir Jalalayn (Bahasa Indonesia), dan endpoint search.
            Gratis, tanpa API key, CORS-enabled.
          </li>
          <li>
            <strong>Web Speech API</strong>: pengenalan suara browser-native untuk
            input Arab (ar-SA) dan Indonesia (id-ID).
          </li>
        </ul>
      </Section>

      <Section title="Kedalaman Analisis" icon="M3 3v18h18M7 12l4-4 4 4 6-6">
        <p>
          Aplikasi menampilkan analisis pada <strong>kedalaman level 3</strong>,
          meliputi: akar triliteral, lemma, kelas kata, wazan/pola morfologi, bentuk
          turunan, kategori fi&apos;il (madhi/mudhari&apos;/amr), jumlah, gender,
          kefinitifan, i&apos;rab, fungsi sintaktis, dan relasi antar kata bila
          tersedia.
        </p>
      </Section>

      <Section title="Mode Kalimat: Pendekatan Hybrid" icon="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
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
          korpus, sehingga fungsi sintaktis antar kata mungkin tidak lengkap.
        </p>
      </Section>

      <Section title="Bookmark &amp; Persistensi" icon="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z">
        <p>
          Bookmark disimpan di <code className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-xs">localStorage</code>{" "}
          browser. Tidak ada login. Bookmark dapat diekspor dan diimpor sebagai file
          JSON untuk transfer antar perangkat.
        </p>
      </Section>

      <Section title="Hosting" icon="M5 12a7 7 0 0 1 14 0M5 12a7 7 0 0 0 14 0M12 5v14M2 12h20">
        <p>
          Aplikasi dibangun sebagai static site (Vite + React) dan dapat dideploy ke
          GitHub Pages. Semua data morfologi di-bundle; audio dan tafsir dimuat
          on-demand dari AlQuran Cloud API (gratis, tanpa API key).
        </p>
      </Section>

      <Section title="Keterbatasan v1" icon="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 0 0-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z">
        <ul className="list-inside list-disc space-y-1.5 text-sm text-ink-700">
          <li>
            Database kata berisi 1002 kata: 500 kata berfrekuensi tinggi dari Al-Qur'an
            (mencakup ~80–90% kosakata) ditambah 502 kata Arab sehari-hari untuk
            penggunaan praktis. Data dapat diperluas tanpa perubahan kode.
          </li>
          <li>
            Pengenalan suara hanya berfungsi di Chrome, Edge, dan Safari (online).
            Firefox tidak didukung, fallback ke input teks selalu tersedia.
          </li>
          <li>
            Analisis dependency graph untuk kalimat bebas (non-Quran) tidak tersedia
            tanpa sumber data eksternal tambahan.
          </li>
        </ul>
      </Section>

      <Section title="Versi" icon="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6">
        <p>
          <strong>v1.2</strong>: 1002 kata (500 Quran + 502 sehari-hari), Mode Kata dengan
          browsing &amp; diacritic toggle, Mode Kalimat dengan analisis per kata,
          bookmark dengan export/import JSON, TTS pengucapan, dan integrasi audio/tafsir AlQuran Cloud.
        </p>
      </Section>

      <p className="flex items-center justify-center gap-2 pt-2 text-center text-xs text-ink-400">
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        Dibangun sebagai alat edukasi, bukan pengganti tafsir resmi atau fatwa.
      </p>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-ink-200/60 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:p-5">
      <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-ink-700">
        <svg className="h-4 w-4 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon.split("M").map((d, i) => i === 0 ? null : <path key={i} d={`M${d}`} />)}
        </svg>
        {title}
      </h2>
      <div className="space-y-1.5 text-sm leading-relaxed text-ink-700">{children}</div>
    </div>
  );
}
