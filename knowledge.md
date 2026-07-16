# Kamus Quran — Project Knowledge

> **Sebelum mulai coding, baca dan ikuti panduan di file ini (`/home/ubuntu/kamusquran/knowledge.md`).**
> Jika ada preferensi baru, ubah, tambah, atau kurangi isi file ini agar selalu *up-to-date*.

## What This Is

**Kamus Quran** (v3.4) — a web-based Arabic Qur'anic vocabulary learning tool for Indonesian users. 11,850+ words, 1,227/1,651 triliteral roots (74.3% coverage). Features systematic i'rob analysis, sentence-level parsing, voice input, bookmarking, and whole-sentence translation via Google Translate API.

- **Stack:** React 19 + TypeScript 6 + Vite 8 + Tailwind CSS 4
- **Hosting:** GitHub Pages (auto-deploy on push to `main`)
- **No backend, no login** — fully static SPA with localStorage persistence

## Key Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Typecheck (`tsc -b`) + production build |
| `npm run typecheck` | Typecheck only (`tsc --noEmit`) |
| `npm test` | Run Vitest unit tests (30+ tests for i'rab heuristics) |
| `npm run test:watch` | Run tests in watch mode |
| `npm run preview` | Preview production build locally |

## Architecture

### Entry & Routing
```
index.html → src/main.tsx → src/App.tsx
```
`App.tsx` manages a `view` state (`"kata"` | `"kalimat"` | `"bookmark"` | `"about"`) and renders the corresponding view. Secondary views (`ModeKalimat`, `BookmarkView`, `AboutView`) are lazy-loaded with `React.lazy()` + `Suspense`. `ModeKata` is loaded eagerly (primary view).

### Data Flow
```
125 batch files (CompactWord[]) 
  → morphologyIndex.ts (aggregates, deduplicates, builds indices)
  → wordBuilder.ts (CompactWord → WordEntry with auto-generated nahwu/sharf notes + structured i'rab)
  → UI components
```

- **`src/data/words/batch01.ts`–`batch125.ts`**: Each exports an array of `CompactWord` objects. Batch01-06 are high-frequency Quranic words. Batch07-22 are daily Arabic vocabulary. Batch23-119 are from Nahwu/Sharf textbooks. Batch120-125 are root-coverage fillers.
- **`src/data/wordBuilder.ts`**: Expands `CompactWord` → `WordEntry`. Auto-generates `nahwuNote`, `sharfNote`, `structuredIrab`. Contains all label maps (`POS_LABELS`, `VERB_FORM_LABELS`, etc.) shared with UI.
- **`src/data/morphologyIndex.ts`**: Central index. Imports all 125 batches, builds `HIGH_FREQ_WORDS` (deduplicated by Arabic lemma + ID), and provides `searchWords()`, `findByArabic()`, `findById()`, `findByRoot()`, `getWordsByFrequency()`. Pre-sorts into frozen arrays (`WORDS_BY_FREQ`, `WORDS_BY_INDO`, `WORDS_BY_ARABIC`) for zero-runtime-sort rendering.
- **`src/data/irabHeuristics.ts`**: 300+ line heuristic engine. Generates `StructuredIrab` (6-column tabular format: Kata → Jenis → Kedudukan → I'rob → Tanda → 'Amil) from morphological features. Supports manual overrides via `tnd`/`aml` fields.
- **`src/data/surahMeta.ts`**: Surah metadata (name, ayah count, revelation type) for global ayah number computation.

### Key Source Files
| File | Role |
|---|---|
| `src/types.ts` | All domain types: `WordEntry`, `CompactWord`, `StructuredIrab`, `SentenceToken`, `SentenceAnalysis`, `MorphoFeatures`, etc. |
| `src/App.tsx` | Top-level view router + footer |
| `src/views/ModeKata.tsx` | Word search mode — search bar, word browser, result panel |
| `src/views/ModeKalimat.tsx` | Sentence analysis mode — input, tokenization, `SentenceIrobTable`, translation banner |
| `src/views/BookmarkView.tsx` | Bookmark list + JSON export/import |
| `src/views/AboutView.tsx` | Methodology, sources, version info |
| `src/components/Header.tsx` | Navigation tabs (Kata, Kalimat, Bookmark, Tentang) |
| `src/components/SearchBar.tsx` | Search input with voice toggle (ar-SA / id-ID) |
| `src/components/WordResultPanel.tsx` | Full word detail: morphology, IrobTable, examples, audio, tafsir |
| `src/components/IrobTable.tsx` | 6-column i'rob table for single word (Mode Kata) |
| `src/components/SentenceIrobTable.tsx` | 8-column i'rob table for sentence tokens (Mode Kalimat) |
| `src/components/PerTokenIrobList.tsx` | Per-token expandable detail in sentence mode |
| `src/services/sentenceAnalysis.ts` | Sentence tokenization, POS matching, context-aware i'rab (huruf jarr, inna, kaana, idhafah, 'athf), sentence observations |
| `src/services/alQuranApi.ts` | AlQuran Cloud API: audio URLs, tafsir (Jalalayn), translation (Kemenag) |
| `src/services/bookmarks.ts` | localStorage CRUD + JSON export/import with validation |
| `src/services/voiceRecognition.ts` | Web Speech API wrapper with graceful fallback |
| `src/services/translation.ts` | Google Translate API (primary) + MyMemory (fallback) + in-memory cache for whole-sentence translation |
| `src/utils/arabic.ts` | `stripDiacritics`, `tokenizeArabic`, `isArabicText`, `normalizeAlef` |
| `src/index.css` | Tailwind CSS v4 imports + custom theme (slate + emerald) |
| `scripts/audit_words.mjs` | Data quality audit script |

### Component Tree (simplified)
```
App
├── Header (navigation)
├── ModeKata
│   ├── SearchBar (voice toggle)
│   └── WordResultPanel
│       ├── IrobTable (6-column)
│       ├── Example ayat list
│       ├── Audio player
│       └── Tafsir section
├── ModeKalimat (lazy)
│   ├── SearchBar
│   ├── QuranTranslationBanner
│   ├── SentenceMeaningBanner (API translation)
│   └── SentenceIrobTable (8-column)
│       └── PerTokenIrobList (expandable rows)
├── BookmarkView (lazy)
└── AboutView (lazy)
```

## Conventions & Gotchas

### TypeScript
- **Strict mode** enabled: `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`, `noUncheckedIndexedAccess: true`
- Path alias: `@/` → `src/`
- Target ES2021, module ESNext, bundler resolution
- Tabs for indentation (not spaces)

### Data Conventions
- **`CompactWord` fields** are the source of truth. `buildWordEntry()` expands them into full `WordEntry` objects.
- **Arabic headwords** use Uthmani script (not simple/IndoPak). Diacritics matter for deduplication.
- **Global ayah numbers** are computed at build time via `toGlobalAyahNumber()`, not hardcoded — old hardcoded values in batch data are ignored.
- **Deduplication**: By full Arabic lemma (with diacritics) to preserve homographs (e.g., قُلْ vs قَلَّ). ID-based dedup as safety net.
- **Manual overrides**: `tnd` (tanda i'rab) and `aml` ('amil) fields in `CompactWord` override the heuristic engine. Priority: CompactWord override > heuristic inference > default fallback.
- **`structuredIrab`** is auto-generated by `generateStructuredIrab()` and attached to both `MorphoFeatures` (Mode Kata) and `SentenceToken` (Mode Kalimat).

### Search
- **Diacritic-insensitive**: `stripDiacritics()` strips all harakat before matching.
- **Alef normalization**: `normalizeAlef()` handles أ/إ/آ variants in search.
- **Indonesian word-level matching**: Query words matched against individual meaning words (split by whitespace, `,`, `;`, `·`, `(`, `)`, `/`). `startsWith` matching requires ≥4 chars and ≥3 char difference to avoid false positives.
- All search indices pre-built at module load, zero runtime sorting in UI.

### I'rob Engine (`irabHeuristics.ts`)
- Determines **Jenis** from `pos + num + vf`, **Kedudukan** from `role`, **I'rab Status** from `irab` case, **Tanda** from jenis + irab status, **'Amil** from role.
- Fi'il madhi, fi'il amr, particles, and pronouns are always Mabni.
- Context-aware layer in `sentenceAnalysis.ts` overrides these per-token based on surrounding words.
- 30+ unit tests in `src/data/irabHeuristics.test.ts` — run `npm test`.

### Styling
- Tailwind CSS v4 with custom theme (slate + emerald, glassmorphism cards, gradient backgrounds).
- Arabic font stack: Amiri + Noto Naskh Arabic (loaded via Google Fonts in `index.html`).
- Design: "simple academic interface" — text-first, structured, minimal distraction.

### Build & Deploy
- **`__BUILD_TIMESTAMP__`**: Injected at build time (GMT+7/WIB), displayed in footer. Defined via `vite.config.ts` `define`.
- **Base path**: `/KamusQuran/` (GitHub Pages repo name). Override with `BASE_PATH=/` for custom domains.
- **CI**: GitHub Actions (`.github/workflows/deploy.yml`) — auto-deploy to GitHub Pages on push to `main`.
- Build output: ~180 KB gzipped JS (with code splitting).

### Testing
- Vitest with `src/**/*.test.ts` pattern.
- Currently only `irabHeuristics.test.ts` has tests (30+ cases).
- No test setup for components or other services yet.

### Adding New Words
1. Create a new `batch###.ts` in `src/data/words/` exporting `CompactWord[]`.
2. Import it in `src/data/morphologyIndex.ts` and add to `ALL_COMPACT` array.
3. Run `npm run build` to verify no type errors and data integrity.
4. Optionally run `node scripts/audit_words.mjs` to validate data quality.
