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
              Kamus Quran v3.0, alat belajar bahasa Arab Al-Qur&apos;an dengan fokus pada
              kosakata, nahwu, sharf, i&apos;rob sistematis, dan analisis morfologi.
            </p>
          </div>
        </div>
      </div>

      <Section title="Tujuan" icon="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5">
        <p>
          Membantu pengguna menguasai ~80–90% kosakata berfrekuensi tinggi Al-Qur&apos;an
          (500 kata inti dari Quranic Arabic Corpus) dan memperluas penguasaan bahasa Arab
          dengan 734 kata sehari-hari, total 1.234 kata. Setiap kata dilengkapi{" "}
          <strong>tabel i&apos;rob Al-Munir</strong> (6 kolom: Jenis, Kedudukan,{" "}
          I&apos;rob, Tanda, &apos;Amil) dan <strong>kesimpulan induktif{" "}
          Nahwu al-Wadhih</strong>.
        </p>
        <p className="mt-2">
          Di Mode Kalimat, tersedia{" "}
          <strong>tabel i&apos;rob seluruh kalimat</strong>{" "}
          dengan context-aware engine yang mendeteksi huruf jarr, inna/akhwatuha,{" "}
          kaana/akhwatuha, idhafah, dan &apos;athf secara otomatis.
        </p>
      </Section>

      <Section title="I&apos;rob Sistematis v3.0 (Metode Al-Munir + Nahwu al-Wadhih)" icon="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z">
        <p>
          Mulai v3.0, setiap kata dilengkapi <strong>tabel i&apos;rob 6 kolom</strong>{" "}
          mengikuti metodologi <em>Metode Al-Munir</em>:{" "}
          <span className="font-semibold text-accent-700">
            Kata → Jenis → Kedudukan → I&apos;rob → Tanda → &apos;Amil
          </span>
          . Ditambah <strong>kesimpulan induktif</strong> ala <em>An-Nahwu al-Wadhih</em>{" "}
          yang menjelaskan penalaran gramatikal setiap kata.
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm text-ink-700">
          <li>
            <strong>Heuristic engine</strong>: 300+ baris aturan nahwu-sharf yang
            meng-generate i&apos;rob secara otomatis dari field POS, gender, number,
            i&apos;rab case, dan syntactic role.
          </li>
          <li>
            <strong>Context-aware di Mode Kalimat</strong>: deteksi otomatis huruf jarr,
            inna/akhwatuha, kaana/akhwatuha, idhafah, dan &apos;athf untuk
            analisis i&apos;rob per kata dalam konteks kalimat.
          </li>
          <li>
            <strong>SentenceIrobTable</strong>: satu tabel ringkasan mem-breakdown seluruh{" "}
            kalimat kata per kata (color-coded by irabStatus, legend bar). Klik baris{" "}
            mana saja untuk melihat detail morfologi + IrobTable lengkap.
          </li>
          <li>
            <strong>PerTokenIrobList</strong>: kartu IrobTable lengkap per kata (6 kolom){" "}
            yang selalu terlihat, sama seperti di Mode Kata. Tidak perlu klik untuk{" "}
            melihat i&apos;rob setiap kata dalam kalimat.
          </li>
          <li>
            <strong>Color-coded rows</strong>: hijau (Marfu'), biru (Manshub), kuning{" "}
            (Majrur), merah (Majzum), abu-abu (Mabni) dengan legend bar untuk{" "}
            identifikasi cepat status i&apos;rob.
          </li>
          <li>
            <strong>Manual override</strong>: field <code>tnd</code> dan{" "}
            <code>aml</code> di data batch untuk koreksi manual pada kasus khusus.
          </li>
          <li>
            <strong>Unit tests</strong>: 30+ test cases (Vitest) memvalidasi kebenaran{" "}
            aturan nahwu-sharf pada heuristic engine.
          </li>
        </ul>
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
            (Mishary Alafasy) dan endpoint search. Gratis, tanpa API key, CORS-enabled.
          </li>
          <li>
            <strong>Web Speech API</strong>: pengenalan suara browser-native untuk
            input Arab (ar-SA) dan Indonesia (id-ID).
          </li>
          <li>
            <strong>Kitab Nahwu-Sharf (Nopush/)</strong>:{" "}
            <em>An-Nahwu al-Wadhih</em> (Jilid 1 Nahwu &amp; Sharf),{" "}
            <em>Metode Al-Munir</em> (Jilid 1-3 Nahwu &amp; Sharf),{" "}

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
          Mulai v3.0, Mode Kalimat memiliki tiga level tampilan i&apos;rob:{" "}
          <strong>SentenceIrobTable</strong> (tabel ringkasan color-coded),{" "}
          <strong>PerTokenIrobList</strong> (kartu IrobTable lengkap per kata),{" "}
          dan <strong>Detail Morfologi</strong> (lemma, akar, nahwu/sharf collapsible).{" "}
          Context-aware engine mendeteksi struktur nahwu seperti huruf jarr, inna, kaana,{" "}
          idhafah, dan &apos;athf.
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
          GitHub Pages. Semua data morfologi di-bundle; audio dimuat on-demand dari
          AlQuran Cloud API (gratis, tanpa API key).
        </p>
      </Section>

      <Section title="Keterbatasan" icon="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 0 0-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z">
        <ul className="list-inside list-disc space-y-1.5 text-sm text-ink-700">
          <li>
            Database kata berisi 1.234 kata: 500 kata berfrekuensi tinggi dari Al-Qur'an
            (mencakup ~80–90% kosakata) ditambah 734 kata Arab sehari-hari untuk
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
          <strong>v3.1</strong>: ekspansi ke 1.234 kata (500 Quran + 734 sehari-hari) dengan batch20-22.<br />
          <strong>v3.0</strong>: <strong>I&apos;rob Sistematis</strong>, tabel i&apos;rob 6 kolom{" "}
          ala Metode Al-Munir di Mode Kata + SentenceIrobTable (tabel ringkasan per kalimat){" "}
          + PerTokenIrobList (kartu lengkap per kata) di Mode Kalimat, color-coded rows{" "}
          by irabStatus, context-aware sentence i&apos;rob engine (deteksi{" "}
          jarr/inna/kaana/idhafah/&apos;athf), heuristic engine 300+ baris, kesimpulan{" "}
          induktif Nahwu al-Wadhih, 30+ unit tests (Vitest).
        </p>
        <p className="mt-2">
          <strong>v2.0</strong>: 1.002 kata (500 Quran + 502 sehari-hari), Mode Kata dengan
          browsing &amp; diacritic toggle, Mode Kalimat dengan analisis per kata,
          bookmark dengan export/import JSON, TTS pengucapan, integrasi audio AlQuran Cloud,
          dan redesain UI/UX dengan tema modern.
        </p>
      </Section>

      <p className="flex items-center justify-center gap-2 pt-2 text-center text-xs text-ink-400">
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        Dibangun sebagai alat edukasi nahwu-sharf, bukan pengganti tafsir resmi atau fatwa.
        I&apos;rob di-generate otomatis oleh heuristic engine, perlu verifikasi manual
        untuk ketepatan 100%.
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
