import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import type { WordEntry, ExampleAyat } from "../types";
import { formatSurahAyah } from "../data/surahMeta";
import { audioUrl, getAyahBilingual } from "../services/alQuranApi";
import { isBookmarked, toggleBookmark } from "../services/bookmarks";
import { stripDiacritics } from "../utils/arabic";
import { IrobTable } from "./IrobTable";

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

  const arText = (text: string) => (showDiacritics ? text : stripDiacritics(text));

  const renderHighlightedAyat = (arabicText: string, wordForm: string | undefined): ReactNode => {
    const target = wordForm ?? entry.arabic;
    if (!target) return arText(arabicText);
    const textNoDiac = stripDiacritics(arabicText);
    const targetNoDiac = stripDiacritics(target);
    const idx = textNoDiac.indexOf(targetNoDiac);
    if (idx === -1) return arText(arabicText);
    let before = "";
    let match = "";
    let after = "";
    let origIdx = 0;
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
        <mark className="bg-accent-100 text-accent-800 rounded px-1 font-semibold">
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
    if (ttsSupported) window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [entry.id, entry.examples, ttsSupported]);

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
          // Network failure: fall back to bundled data.
        }
      }
      if (!cancelled) {
        setTafsirLoading(false);
        if (apiAttempts > 0 && !anySuccess) setTafsirError(true);
      }
    }
    enrich();
    return () => {
      cancelled = true;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (ttsSupported) window.speechSynthesis.cancel();
    };
  }, [entry.id, entry.examples]);

  const handleBookmark = () => {
    const newState = toggleBookmark(entry);
    setBookmarked(newState);
  };

  const pronounceWord = (arabicText: string) => {
    if (!ttsSupported) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(arabicText);
    utterance.lang = "ar-SA";
    utterance.rate = 0.8;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const stopPronunciation = () => {
    if (!ttsSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const playAudio = (globalAyahNumber: number) => {
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
    <div className="space-y-5 animate-fade-in">
      {/* Diacritic toggle */}
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button
          onClick={() => setShowDiacritics((v) => !v)}
          className="flex items-center gap-1.5 rounded-full border border-ink-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-ink-500 transition-all hover:bg-ink-50 hover:shadow-sm"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {showDiacritics ? "Sembunyikan Harakat" : "Tampilkan Harakat"}
        </button>
      </div>

      {/* Header card: Arabic word + bookmark */}
      <div className="overflow-hidden rounded-2xl border border-ink-200/60 bg-gradient-to-br from-white via-white to-accent-50/20 p-5 shadow-sm sm:p-7">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 min-w-0 sm:gap-4">
              <div className="font-arabic-display text-4xl font-bold leading-tight bg-gradient-to-br from-accent-700 to-accent-500 bg-clip-text text-transparent sm:text-5xl" dir="rtl">
                {arText(entry.arabic)}
              </div>
              <button
                onClick={() => (isSpeaking ? stopPronunciation() : pronounceWord(entry.arabic))}
                className={`flex shrink-0 items-center justify-center rounded-full p-2.5 transition-all sm:p-3 ${
                  isSpeaking
                    ? "bg-gradient-to-br from-accent-600 to-accent-500 text-white shadow-md scale-105 animate-pulse-glow"
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
            <div className="mt-3 text-base font-semibold text-ink-800 sm:text-lg">{entry.meaningId}</div>
            {entry.meaningIdAlt && entry.meaningIdAlt.length > 0 && (
              <div className="text-sm text-ink-500">{entry.meaningIdAlt.join(" · ")}</div>
            )}
            {entry.rank && (
              <div className="mt-2 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-bold text-accent-700">
                  #{entry.rank}
                </span>
                <span className="text-xs text-ink-400">
                  {entry.frequency}× dalam Al-Qur&apos;an
                </span>
              </div>
            )}
          </div>
          <button
            onClick={handleBookmark}
            className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium transition-all sm:px-4 sm:text-sm ${
              bookmarked
                ? "bg-gradient-to-r from-accent-600 to-accent-500 text-white shadow-sm shadow-accent-500/30 hover:shadow-md"
                : "border border-ink-200 bg-white text-ink-600 hover:bg-ink-50"
            }`}
            aria-label={bookmarked ? "Hapus bookmark" : "Tambah bookmark"}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill={bookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            {bookmarked ? "Tersimpan" : "Simpan"}
          </button>
        </div>
      </div>

      {/* Linguistic fields grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
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
        <div className="rounded-2xl border-l-4 border-accent-500 bg-gradient-to-r from-accent-50/60 to-white/80 p-4 sm:p-5">
          <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold text-accent-700">
            <span className="font-arabic text-base">نحو</span>
            <span className="text-ink-300">·</span>
            <span>Catatan Nahwu</span>
          </h4>
          <p className="text-sm leading-relaxed text-ink-700">{entry.nahwuNote}</p>
        </div>
      )}

      {/* Sharf note */}
      {entry.sharfNote && (
        <div className="rounded-2xl border-l-4 border-ink-500 bg-gradient-to-r from-ink-100/60 to-white/80 p-4 sm:p-5">
          <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold text-ink-700">
            <span className="font-arabic text-base">صرف</span>
            <span className="text-ink-300">·</span>
            <span>Catatan Sharf</span>
          </h4>
          <p className="text-sm leading-relaxed text-ink-700">{entry.sharfNote}</p>
        </div>
      )}

      {/* I'rab note */}
      {m.irabNote && (
        <div className="rounded-2xl border-l-4 border-ink-400 bg-gradient-to-r from-ink-50 to-white/80 p-4 sm:p-5">
          <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold text-ink-600">
            <span className="font-arabic text-base">إعراب</span>
            <span className="text-ink-300">·</span>
            <span>Keterangan I&apos;rab</span>
          </h4>
          <p className="text-sm leading-relaxed text-ink-700">{m.irabNote}</p>
        </div>
      )}

      {/* v3.0: Structured I'rab table (Al-Munir methodology) */}
      {m.structuredIrab && (
        <div className="rounded-2xl border border-emerald-200/60 bg-white/90 p-4 shadow-sm sm:p-5">
          <IrobTable irab={m.structuredIrab} />
        </div>
      )}

      {/* Tafsir loading */}
      {tafsirLoading && (
        <div className="flex items-center gap-3 rounded-2xl border border-ink-200/60 bg-white/80 p-4 shadow-sm sm:p-5" role="status" aria-live="polite">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-ink-200 border-t-accent-500" />
          <span className="text-sm text-ink-500">Memuat tafsir Jalalayn...</span>
        </div>
      )}
      {tafsirError && !tafsirText && (
        <div className="rounded-2xl border border-ink-200/60 bg-ink-50/60 p-4 sm:p-5" role="alert">
          <p className="text-sm text-ink-500">
            Tafsir tidak dapat dimuat (kemungkinan masalah jaringan). Data morfologi masih tersedia dari basis data lokal.
          </p>
        </div>
      )}
      {tafsirText && (
        <div className="rounded-2xl border border-ink-200/60 bg-white/90 p-4 shadow-sm sm:p-5">
          <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold text-ink-700">
            <span className="font-arabic text-base">تفسير</span>
            <span className="text-ink-300">·</span>
            <span>Tafsir (Jalalayn)</span>
          </h4>
          <p className="text-sm leading-relaxed text-ink-700">{tafsirText}</p>
        </div>
      )}

      {/* Occurrences */}
      <div className="rounded-2xl border border-ink-200/60 bg-white/90 p-4 shadow-sm sm:p-5">
        <h4 className="mb-3 text-sm font-bold text-ink-700">
          Kemunculan dalam Al-Qur&apos;an ({entry.occurrences.length} ditampilkan)
        </h4>
        <div className="flex flex-wrap gap-2">
          {entry.occurrences.map((occ, i) => (
            <span
              key={`${occ.surah}:${occ.ayah}:${i}`}
              className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600 transition-colors hover:bg-accent-100 hover:text-accent-700"
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
            <div key={ex.globalAyahNumber} className="rounded-2xl border border-ink-200/60 bg-white/90 p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-accent-700">
                  {formatSurahAyah(ex.surah, ex.ayah)}
                </span>
                  {ex.audioUrl && (
                    <button
                      onClick={() => playAudio(ex.globalAyahNumber)}
                      disabled={audioLoading === ex.globalAyahNumber}
                      className="flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1.5 text-xs font-semibold text-accent-700 transition-all hover:bg-accent-100 disabled:opacity-50"
                      aria-label={`Putar audio ${formatSurahAyah(ex.surah, ex.ayah)}`}
                    >
                      {audioLoading === ex.globalAyahNumber ? (
                        <>
                          <span className="h-3 w-3 animate-spin rounded-full border border-accent-300 border-t-accent-700" />
                          Memuat...
                        </>
                      ) : activeAudio === ex.globalAyahNumber ? (
                        <>
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                          </svg>
                          Berhenti
                        </>
                      ) : (
                        <>
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          Putar Audio
                        </>
                      )}
                    </button>
                  )}
              </div>
              <p className="font-arabic text-xl leading-loose text-ink-900 sm:text-2xl" dir="rtl">
                {renderHighlightedAyat(ex.arabicText, ex.wordForm)}
              </p>
              {ex.wordForm && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-accent-600">
                  <span>Kata muncul sebagai:</span>
                  <span className="font-arabic rounded bg-accent-50 px-1.5 py-0.5 text-sm">{arText(ex.wordForm)}</span>
                </p>
              )}
              <p className="mt-3 rounded-xl bg-ink-50/60 px-3 py-2 text-sm leading-relaxed text-ink-600">{ex.translation}</p>
            </div>
          ))}
        </div>
      )}

      {/* Raw morphological features */}
      {m.rawFeatures && (
        <details className="rounded-2xl border border-ink-200/60 bg-white/90 p-4 text-xs sm:p-5">
          <summary className="cursor-pointer font-semibold text-ink-500 transition-colors hover:text-ink-700">
            Data morfologi mentah (QAC)
          </summary>
          <pre className="mt-3 overflow-x-auto rounded-xl bg-ink-900 p-3 text-ink-200">{m.rawFeatures}</pre>
        </details>
      )}
    </div>
  );
}

// --- Sub-components ------------------------------------------

function FieldCard({ label, value, arabic }: { label: string; value: string; arabic?: boolean }) {
  return (
    <div className="group rounded-xl border border-ink-200/60 bg-white/90 p-3 shadow-sm transition-all hover:border-accent-300 hover:shadow-md sm:p-3.5">
      <div className="text-[10px] font-bold uppercase tracking-wide text-ink-400 transition-colors group-hover:text-accent-500 sm:text-xs">{label}</div>
      <div
        className={`mt-1.5 text-sm font-medium text-ink-800 ${arabic ? "font-arabic text-base sm:text-lg" : ""}`}
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
