import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import type { WordEntry, ExampleAyat } from "../types";
import { formatSurahAyah } from "../data/surahMeta";
import { audioUrl, getAyahBilingual } from "../services/alQuranApi";
import { isBookmarked, toggleBookmark } from "../services/bookmarks";
import { stripDiacritics } from "../utils/arabic";

interface WordResultPanelProps {
  entry: WordEntry;
}

export function WordResultPanel({ entry }: WordResultPanelProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [activeAudio, setActiveAudio] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tafsirText, setTafsirText] = useState<string | null>(null);
  const [tafsirLoading, setTafsirLoading] = useState(false);
  const [tafsirError, setTafsirError] = useState(false);
  const [audioLoading, setAudioLoading] = useState<number | null>(null);
  const [showDiacritics, setShowDiacritics] = useState(true);
  const [examplesEnriched, setExamplesEnriched] = useState<ExampleAyat[]>(entry.examples);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const ttsSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  // Helper to optionally strip diacritics from Arabic text.
  const arText = (text: string) => (showDiacritics ? text : stripDiacritics(text));

  // Render Arabic ayat text with the target word highlighted.
  // Matches the wordForm (or headword) within the full ayat text,
  // comparing without diacritics for robust matching.
  const renderHighlightedAyat = (arabicText: string, wordForm: string | undefined): ReactNode => {
    const target = wordForm ?? entry.arabic;
    if (!target) return arText(arabicText);
    // Compare without diacritics for matching, but render original text.
    const textNoDiac = stripDiacritics(arabicText);
    const targetNoDiac = stripDiacritics(target);
    // Search for the target in the ayat text (without diacritics).
    const idx = textNoDiac.indexOf(targetNoDiac);
    if (idx === -1) return arText(arabicText);
    // Split original text at the matching positions (accounting for diacritics length diff).
    // Since stripping diacritics removes characters, we need to map indices.
    // Simpler approach: walk through original text and find the matching span.
    let before = "";
    let match = "";
    let after = "";
    let origIdx = 0;
    // Build a mapping from no-diac indices to original indices.
    const origText = arabicText;
    let noDiacPos = 0;
    const matchEnd = idx + targetNoDiac.length;
    while (origIdx < origText.length && noDiacPos < textNoDiac.length) {
      const origChar = origText[origIdx] ?? "";
      if (textNoDiac[noDiacPos] === stripDiacritics(origChar)) {
        if (noDiacPos < idx) {
          before += origChar;
        } else if (noDiacPos < matchEnd) {
          match += origChar;
        } else {
          after += origChar;
        }
        noDiacPos++;
      } else {
        // This is a diacritic character — attach to current segment.
        if (noDiacPos <= idx) {
          before += origChar;
        } else if (noDiacPos <= matchEnd) {
          match += origChar;
        } else {
          after += origChar;
        }
      }
      origIdx++;
    }
    // Append remaining original text (trailing diacritics).
    // If we haven't passed the match end yet, they belong to match.
    while (origIdx < origText.length) {
      if (noDiacPos <= matchEnd) {
        match += origText[origIdx] ?? "";
      } else {
        after += origText[origIdx] ?? "";
      }
      origIdx++;
    }

    if (!match) return arText(arabicText);
    return (
      <>
        {arText(before)}
        <mark className="bg-accent-100 text-accent-800 rounded px-0.5 font-semibold">
          {arText(match)}
        </mark>
        {arText(after)}
      </>
    );
  };

  useEffect(() => {
    setBookmarked(isBookmarked(entry.id));
    setExamplesEnriched(entry.examples);
    setTafsirText(null);
    setTafsirLoading(false);
    setTafsirError(false);
    // Stop any ongoing TTS when switching words.
    if (ttsSupported) window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [entry.id, entry.examples, ttsSupported]);

  // Lazily fetch Indonesian translation + tafsir + audio URL for example ayat.
  useEffect(() => {
    let cancelled = false;
    setTafsirLoading(true);
    setTafsirError(false);
    async function enrich() {
      let anySuccess = false;
      let apiAttempts = 0;
      for (const ex of entry.examples) {
        if (ex.audioUrl || ex.translation) continue;
        apiAttempts++;
        try {
          const { translation, tafsir } = await getAyahBilingual(ex.globalAyahNumber);
          if (cancelled) return;
          anySuccess = true;
          setExamplesEnriched((prev) =>
            prev.map((e) =>
              e.globalAyahNumber === ex.globalAyahNumber
                ? {
                    ...e,
                    translation: e.translation || translation?.text || e.translation,
                    audioUrl: e.audioUrl || audioUrl(ex.globalAyahNumber),
                  }
                : e
            )
          );
          if (tafsir && !cancelled) {
            setTafsirText(tafsir.text);
          }
        } catch {
          // Network failure — fall back to bundled data.
        }
      }
      if (!cancelled) {
        setTafsirLoading(false);
        // Only show error if API was actually called and all attempts failed.
        if (apiAttempts > 0 && !anySuccess) setTafsirError(true);
      }
    }
    enrich();
    return () => {
      cancelled = true;
      // Cleanup any playing audio on unmount.
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      // Stop any ongoing TTS on unmount.
      if (ttsSupported) window.speechSynthesis.cancel();
    };
  }, [entry.id, entry.examples]);

  const handleBookmark = () => {
    const newState = toggleBookmark(entry);
    setBookmarked(newState);
  };

  // Pronounce the Arabic headword using browser TTS (SpeechSynthesis API).
  const pronounceWord = (arabicText: string) => {
    if (!ttsSupported) return;
    // Cancel any ongoing speech.
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(arabicText);
    utterance.lang = "ar-SA";
    utterance.rate = 0.8; // Slightly slower for clarity.
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  // Stop pronunciation.
  const stopPronunciation = () => {
    if (!ttsSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const playAudio = (globalAyahNumber: number) => {
    // Stop any currently playing audio before starting a new one.
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    setActiveAudio(globalAyahNumber);
    setAudioLoading(globalAyahNumber);
    const url = audioUrl(globalAyahNumber);
    const audio = new Audio(url);
    audioRef.current = audio;
    audio.onended = () => {
      setActiveAudio(null);
      setAudioLoading(null);
      audioRef.current = null;
    };
    audio.onerror = () => {
      setActiveAudio(null);
      setAudioLoading(null);
      audioRef.current = null;
    };
    audio.oncanplay = () => {
      setAudioLoading(null);
    };
    void audio.play().catch(() => {
      setActiveAudio(null);
      setAudioLoading(null);
      audioRef.current = null;
    });
  };

  const m = entry.morpho;

  return (
    <div className="space-y-6">
      {/* Diacritic toggle */}
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button
          onClick={() => setShowDiacritics((v) => !v)}
          className="rounded-md border border-ink-300 px-2.5 py-1 text-xs font-medium text-ink-500 transition-colors hover:bg-ink-100"
        >
          {showDiacritics ? "Sembunyikan Harakat" : "Tampilkan Harakat"}
        </button>
      </div>

      {/* Header row: Arabic word + bookmark */}
      <div className="flex items-start justify-between gap-3 rounded-lg border border-ink-200 bg-white p-4 shadow-sm sm:gap-4 sm:p-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 min-w-0 sm:gap-3">
            <div className="font-arabic-display text-4xl font-bold leading-tight text-accent-700 sm:text-5xl" dir="rtl">
              {arText(entry.arabic)}
            </div>
            <button
              onClick={() => (isSpeaking ? stopPronunciation() : pronounceWord(entry.arabic))}
              className={`flex shrink-0 items-center justify-center rounded-full p-2 transition-all sm:p-2.5 ${
                isSpeaking
                  ? "bg-accent-600 text-ink-50 shadow-md scale-105"
                  : "bg-accent-50 text-accent-700 border border-accent-200 hover:bg-accent-100"
              }`}
              aria-label={isSpeaking ? "Hentikan pengucapan kata" : "Bunyikan kata Arab"}
              title={isSpeaking ? "Hentikan pengucapan" : "Bunyikan kata Arab"}
            >
              {isSpeaking ? (
                <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="6" width="12" height="12" rx="2" />
                </svg>
              ) : (
                <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
          <div className="mt-2 text-base font-semibold text-ink-800 sm:text-lg">{entry.meaningId}</div>
          {entry.meaningIdAlt && entry.meaningIdAlt.length > 0 && (
            <div className="text-sm text-ink-500">{entry.meaningIdAlt.join(" · ")}</div>
          )}
          {entry.rank && (
            <div className="mt-1 text-xs text-ink-400">
              Peringkat #{entry.rank} · {entry.frequency}× dalam Al-Qur&apos;an
            </div>
          )}
        </div>
        <button
          onClick={handleBookmark}
          className={`flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${
            bookmarked
              ? "bg-accent-600 text-ink-50 hover:bg-accent-700"
              : "border border-ink-300 text-ink-600 hover:bg-ink-100"
          }`}
          aria-label={bookmarked ? "Hapus bookmark" : "Tambah bookmark"}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill={bookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          {bookmarked ? "Tersimpan" : "Simpan"}
        </button>
      </div>

      {/* Linguistic fields grid */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4">
        <FieldCard label="Akar (Root)" value={arText(entry.root)} arabic />
        <FieldCard label="Lemma" value={arText(entry.lemma)} arabic />
        <FieldCard label="Kelas Kata (POS)" value={posLabel(m.posMajor)} />
        {m.wazan && <FieldCard label="Wazan / Pola" value={m.wazan} />}
        {m.derivedForm && m.derivedForm !== "unknown" && (
          <FieldCard label="Bentuk Turunan" value={derivedFormLabel(m.derivedForm)} />
        )}
        {m.verbForm && m.verbForm !== "unknown" && (
          <FieldCard label="Kategori Fi'il" value={verbFormLabel(m.verbForm)} />
        )}
        {m.gender && m.gender !== "unknown" && (
          <FieldCard label="Gender" value={genderLabel(m.gender)} />
        )}
        {m.number && m.number !== "unknown" && (
          <FieldCard label="Jumlah" value={numberLabel(m.number)} />
        )}
        {m.definiteness && m.definiteness !== "unknown" && (
          <FieldCard label="Kefinitifan" value={definitenessLabel(m.definiteness)} />
        )}
        {m.irab && m.irab !== "unknown" && (
          <FieldCard label="I'rab" value={irabLabel(m.irab)} />
        )}
        {m.syntacticRoleLabel && (
          <FieldCard label="Fungsi Sintaktis" value={m.syntacticRoleLabel} />
        )}
      </div>

      {/* Nahwu note */}
      {entry.nahwuNote && (
        <div className="rounded-lg border-l-4 border-accent-500 bg-accent-50/40 p-3 sm:p-4">
          <h4 className="mb-1 text-sm font-bold text-accent-700">نحو — Catatan Nahwu</h4>
          <p className="text-sm leading-relaxed text-ink-700">{entry.nahwuNote}</p>
        </div>
      )}

      {/* Sharf note */}
      {entry.sharfNote && (
        <div className="rounded-lg border-l-4 border-ink-500 bg-ink-100/60 p-3 sm:p-4">
          <h4 className="mb-1 text-sm font-bold text-ink-700">صرف — Catatan Sharf</h4>
          <p className="text-sm leading-relaxed text-ink-700">{entry.sharfNote}</p>
        </div>
      )}

      {/* I'rab note */}
      {m.irabNote && (
        <div className="rounded-lg border-l-4 border-ink-400 bg-ink-50 p-3 sm:p-4">
          <h4 className="mb-1 text-sm font-bold text-ink-600">إعراب — Keterangan I&apos;rab</h4>
          <p className="text-sm leading-relaxed text-ink-700">{m.irabNote}</p>
        </div>
      )}

      {/* Tafsir */}
      {tafsirLoading && (
        <div className="flex items-center gap-2 rounded-lg border border-ink-200 bg-white p-3 shadow-sm sm:p-4" role="status" aria-live="polite">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-ink-300 border-t-accent-600" />
          <span className="text-sm text-ink-500">Memuat tafsir Jalalayn...</span>
        </div>
      )}
      {tafsirError && !tafsirText && (
        <div className="rounded-lg border border-ink-200 bg-ink-50 p-3 sm:p-4" role="alert">
          <p className="text-sm text-ink-500">
            Tafsir tidak dapat dimuat (kemungkinan masalah jaringan). Data morfologi masih tersedia dari basis data lokal.
          </p>
        </div>
      )}
      {tafsirText && (
        <div className="rounded-lg border border-ink-200 bg-white p-3 shadow-sm sm:p-4">
          <h4 className="mb-1 text-sm font-bold text-ink-700">تفسير — Tafsir (Jalalayn)</h4>
          <p className="text-sm leading-relaxed text-ink-700">{tafsirText}</p>
        </div>
      )}
      {/* Occurrences */}
      <div className="rounded-lg border border-ink-200 bg-white p-3 shadow-sm sm:p-4">
        <h4 className="mb-3 text-sm font-bold text-ink-700">
          Kemunculan dalam Al-Qur&apos;an ({entry.occurrences.length} ditampilkan)
        </h4>
        <div className="flex flex-wrap gap-2">
          {entry.occurrences.map((occ, i) => (
            <span
              key={`${occ.surah}:${occ.ayah}:${i}`}
              className="rounded-md bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-600"
            >
              {formatSurahAyah(occ.surah, occ.ayah)}
            </span>
          ))}
        </div>
      </div>

      {/* Example ayat */}
      {examplesEnriched.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-ink-700">Contoh Ayat</h4>
          {examplesEnriched.map((ex) => (
            <div key={ex.globalAyahNumber} className="rounded-lg border border-ink-200 bg-white p-3 shadow-sm sm:p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-ink-500">
                  {formatSurahAyah(ex.surah, ex.ayah)}
                </span>
                  {ex.audioUrl && (
                    <button
                      onClick={() => playAudio(ex.globalAyahNumber)}
                      disabled={audioLoading === ex.globalAyahNumber}
                      className="flex items-center gap-1 rounded-md bg-accent-50 px-2 py-1 text-xs font-medium text-accent-700 hover:bg-accent-100 disabled:opacity-50"
                      aria-label={`Putar audio ${formatSurahAyah(ex.surah, ex.ayah)}`}
                    >
                      {audioLoading === ex.globalAyahNumber ? (
                        <span className="flex items-center gap-1">
                          <span className="h-3 w-3 animate-spin rounded-full border border-accent-400 border-t-accent-700" />
                          Memuat...
                        </span>
                      ) : activeAudio === ex.globalAyahNumber ? (
                        "⏸ Berhenti"
                      ) : (
                        "▶ Putar Audio"
                      )}
                    </button>
                  )}
              </div>
              <p className="font-arabic text-xl leading-loose text-ink-900 sm:text-2xl" dir="rtl">
                {renderHighlightedAyat(ex.arabicText, ex.wordForm)}
              </p>
              {ex.wordForm && (
                <p className="mt-1 text-xs text-accent-600">
                  Kata muncul sebagai: <span className="font-arabic text-sm">{arText(ex.wordForm)}</span>
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{ex.translation}</p>
            </div>
          ))}
        </div>
      )}

      {/* Raw morphological features for traceability */}
      {m.rawFeatures && (
        <details className="rounded-lg border border-ink-200 bg-white p-3 text-xs sm:p-4">
          <summary className="cursor-pointer font-semibold text-ink-500">
            Data morfologi mentah (QAC)
          </summary>
          <pre className="mt-2 overflow-x-auto text-ink-600">{m.rawFeatures}</pre>
        </details>
      )}
    </div>
  );
}

// --- Sub-components ------------------------------------------

function FieldCard({ label, value, arabic }: { label: string; value: string; arabic?: boolean }) {
  return (
    <div className="rounded-lg border border-ink-200 bg-white p-2.5 shadow-sm sm:p-3">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-ink-400 sm:text-xs">{label}</div>
      <div
        className={`mt-1 text-sm font-medium text-ink-800 ${arabic ? "font-arabic text-base sm:text-lg" : ""}`}
        dir={arabic ? "rtl" : "ltr"}
      >
        {value}
      </div>
    </div>
  );
}

// --- Label helpers -------------------------------------------

function posLabel(p: string): string {
  const labels: Record<string, string> = {
    noun: "Isim (kata benda)",
    verb: "Fi'il (kata kerja)",
    particle: "Huruf (partikel)",
    pronoun: "Dhamir (kata ganti)",
    adjective: "Sifat (kata sifat)",
    adverb: "Zarf (kata keterangan)",
    number: "Bilangan",
    proper_noun: "Nama diri (proper noun)",
    interjection: "Seruan",
    resumption: "Penghubung/resumption",
    unknown: "Tidak diketahui",
  };
  return labels[p] ?? p;
}

function verbFormLabel(v: string): string {
  const labels: Record<string, string> = {
    fiil_madhi: "Fi'il Madhi (lampau)",
    fiil_mudhari: "Fi'il Mudhari' (sekarang/akan datang)",
    fiil_amr: "Fi'il Amr (perintah)",
    fiil_mudhari_majzum: "Mudhari' Majzum",
    fiil_mudhari_mansub: "Mudhari' Mansub",
    fiil_mudhari_marfu: "Mudhari' Marfu'",
    masdar: "Masdar (infinitif)",
    unknown: "Tidak diketahui",
  };
  return labels[v] ?? v;
}

function derivedFormLabel(f: string): string {
  const labels: Record<string, string> = {
    I: "Bentuk I (tsulatsi mujarrad)",
    II: "Bentuk II (taf'il)",
    III: "Bentuk III (mufa'alaa)",
    IV: "Bentuk IV (if'al)",
    V: "Bentuk V (tafa'ul)",
    VI: "Bentuk VI (tafaa'ul)",
    VII: "Bentuk VII (infi'al)",
    VIII: "Bentuk VIII (ifti'al)",
    IX: "Bentuk IX (if'ilal)",
    X: "Bentuk X (istif'al)",
    unknown: "Tidak diketahui",
  };
  return labels[f] ?? f;
}

function genderLabel(g: string): string {
  const labels: Record<string, string> = {
    masculine: "Mudzakkar (maskulin)",
    feminine: "Muannats (feminin)",
    common: "Bisa keduanya",
    unknown: "Tidak diketahui",
  };
  return labels[g] ?? g;
}

function numberLabel(n: string): string {
  const labels: Record<string, string> = {
    singular: "Mufrad (tunggal)",
    dual: "Mutsanna (dua)",
    plural: "Jamak (lebih dari dua)",
    broken_plural: "Jamak taksir (plural tak beraturan)",
    collective: "Jamak (kolektif)",
    unknown: "Tidak diketahui",
  };
  return labels[n] ?? n;
}

function definitenessLabel(d: string): string {
  const labels: Record<string, string> = {
    definite: "Ma'rifah (definit)",
    indefinite: "Nakirah (indefinit)",
    construct: "Mudhaf (konstruksi sandang)",
    proper: "Nama diri (proper)",
    unknown: "Tidak diketahui",
  };
  return labels[d] ?? d;
}

function irabLabel(i: string): string {
  const labels: Record<string, string> = {
    raf: "Rafa' (subjek)",
    nasb: "Nashab (objek)",
    jarr: "Jarr (genitif)",
    jazm: "Jazm (apokopat)",
    mushaddad: "Musyaddad (doubled)",
    none: "Tidak ber-i'rab (mabni)",
    unknown: "Tidak diketahui",
  };
  return labels[i] ?? i;
}
