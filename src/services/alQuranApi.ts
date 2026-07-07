import type { AlQuranAyah, AlQuranSearchResult } from "../types";

const BASE = "https://api.alquran.cloud/v1";
const AUDIO_CDN = "https://cdn.islamic.network/quran/audio/128";

// Curated edition identifiers (verified via /edition endpoints).
export const EDITIONS = {
  /** Indonesian translation: Kemenag / Bahasa Indonesia. */
  idTranslation: "id.indonesian",
  /** Indonesian translation: Quraish Shihab (Tafsir Al-Misbah summary). */
  idMuntakhab: "id.muntakhab",
  /** Arabic Uthmani text. */
  arUthmani: "quran-uthmani",
  /** Audio recitation: Mishary Alafasy (128kbps). */
  arAudioAlafasy: "ar.alafasy",
} as const;

/** Build a CDN audio URL for a given global ayah number and reciter edition. */
export function audioUrl(globalAyahNumber: number, edition = EDITIONS.arAudioAlafasy): string {
  return `${AUDIO_CDN}/${edition}/${globalAyahNumber}.mp3`;
}

async function fetchJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(url, { signal });
  if (!res.ok) {
    throw new Error(`AlQuran Cloud API error: ${res.status} ${res.statusText}`);
  }
  const body = (await res.json()) as { code: number; status: string; data: T };
  if (body.code !== 200) {
    throw new Error(`AlQuran Cloud API returned status ${body.status}`);
  }
  return body.data;
}

/** Fetch a single ayah with a specific edition. */
export async function getAyah(
  globalAyahNumber: number,
  edition: string,
  signal?: AbortSignal
): Promise<AlQuranAyah> {
  return fetchJson<AlQuranAyah>(`${BASE}/ayah/${globalAyahNumber}/${edition}`, signal);
}

/** Fetch Arabic + Indonesian translation for an ayah in parallel. */
export async function getAyahBilingual(
  globalAyahNumber: number,
  signal?: AbortSignal
): Promise<{ arabic: AlQuranAyah; translation: AlQuranAyah | null }> {
  const [arabic, translation] = await Promise.all([
    getAyah(globalAyahNumber, EDITIONS.arUthmani, signal).catch(() => null),
    getAyah(globalAyahNumber, EDITIONS.idTranslation, signal).catch(() => null),
  ]);
  if (!arabic) throw new Error("Gagal memuat ayat Arab.");
  return { arabic, translation };
}

/** Search across an edition for a keyword (Arabic or Indonesian). */
export async function searchAyat(
  keyword: string,
  edition: string,
  surahFilter = "all",
  signal?: AbortSignal
): Promise<AlQuranSearchResult[]> {
  const encoded = encodeURIComponent(keyword);
  const data = await fetchJson<{ matches: AlQuranSearchResult[] } | AlQuranSearchResult[]>(
    `${BASE}/search/${encoded}/${surahFilter}/${edition}`,
    signal
  );
  // The search endpoint can return either {matches:[...]} or a bare array.
  if (Array.isArray(data)) return data;
  return data.matches ?? [];
}

/** Search Indonesian translation for a keyword. */
export async function searchIndonesian(
  keyword: string,
  signal?: AbortSignal
): Promise<AlQuranSearchResult[]> {
  return searchAyat(keyword, EDITIONS.idTranslation, "all", signal);
}
