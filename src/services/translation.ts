/**
 * Translation service: full-sentence Arabic ↔ Indonesian translation.
 *
 * Primary: Google Translate unofficial endpoint (high quality).
 * Fallback: MyMemory API (lower quality but reliable).
 * Results are cached in-memory to avoid redundant API calls.
 */

const CACHE = new Map<string, string>();
const MAX_CACHE_SIZE = 200;

/** Google Translate unofficial endpoint. */
async function translateViaGoogle(
  text: string,
  from: "ar" | "id",
  to: "ar" | "id",
): Promise<string> {
  const url =
    `https://translate.googleapis.com/translate_a/single` +
    `?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;

  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Google Translate HTTP ${resp.status}`);
  const data = await resp.json();

  // Response format: [[["translated","original",...]], null, "ar"]
  const segments: string[] = [];
  const main = data[0];
  if (Array.isArray(main)) {
    for (const segment of main) {
      if (Array.isArray(segment) && segment[0]) {
        segments.push(segment[0] as string);
      }
    }
  }
  const result = segments.join("");
  if (!result) throw new Error("Google Translate returned empty result");
  return result;
}

/** MyMemory fallback endpoint. */
async function translateViaMyMemory(
  text: string,
  from: "ar" | "id",
  to: "ar" | "id",
): Promise<string> {
  const langpair = `${from}|${to}`;
  const url =
    `https://api.mymemory.translated.net/get` +
    `?q=${encodeURIComponent(text)}&langpair=${langpair}`;

  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`MyMemory HTTP ${resp.status}`);
  const data = await resp.json();

  if (data.responseStatus !== 200) {
    throw new Error(`MyMemory error: ${data.responseDetails ?? "unknown"}`);
  }
  const result = data.responseData?.translatedText;
  if (!result) throw new Error("MyMemory returned empty result");
  return result;
}

/**
 * Translate text between Arabic and Indonesian.
 * Results are cached in-memory.
 * Falls back from Google → MyMemory → null.
 */
export async function translateText(
  text: string,
  from: "ar" | "id",
  to: "ar" | "id",
): Promise<string | null> {
  const key = `${from}:${to}:${text}`;
  const cached = CACHE.get(key);
  if (cached !== undefined) return cached || null;

  let result: string | null = null;

  // Try Google Translate first
  try {
    result = await translateViaGoogle(text, from, to);
  } catch {
    // Google failed, try MyMemory fallback
    try {
      result = await translateViaMyMemory(text, from, to);
    } catch {
      result = null;
    }
  }

  // Cache result
  if (CACHE.size >= MAX_CACHE_SIZE) {
    // Clear oldest half of cache
    const keys = [...CACHE.keys()];
    for (let i = 0; i < Math.floor(keys.length / 2); i++) {
      CACHE.delete(keys[i]!);
    }
  }
  CACHE.set(key, result ?? "");

  return result;
}

/**
 * Clear translation cache (useful for testing or when language data changes).
 */
export function clearTranslationCache(): void {
  CACHE.clear();
}
