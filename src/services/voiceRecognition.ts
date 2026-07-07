import { useCallback, useEffect, useRef, useState } from "react";

// Minimal type for the Web Speech API (not in standard TS DOM lib).
interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}
interface SpeechRecognitionResult {
  isFinal: boolean;
  length: number;
  [index: number]: SpeechRecognitionAlternative;
}
interface SpeechRecognitionResultList {
  length: number;
  [index: number]: SpeechRecognitionResult;
}
interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}
interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}
interface SpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((ev: SpeechRecognitionEvent) => void) | null;
  onerror: ((ev: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}
type SpeechRecognitionCtor = new () => SpeechRecognition;

function getSpeechRecognitionCtor(): SpeechRecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export interface VoiceRecognitionState {
  /** Whether the browser supports the Web Speech API. */
  supported: boolean;
  /** Whether recognition is currently active (listening). */
  listening: boolean;
  /** Interim transcript while listening. */
  interimTranscript: string;
  /** Error message if recognition failed. */
  error: string | null;
}

export interface UseVoiceRecognitionReturn extends VoiceRecognitionState {
  start: (lang: "ar" | "id") => void;
  stop: () => void;
  reset: () => void;
}

/**
 * Browser-native voice recognition via the Web Speech API.
 * Supports ar-SA and id-ID. Degrades gracefully on Firefox (unsupported).
 * No API key, no backend — audio sent to browser-vendor STT servers online.
 */
export function useVoiceRecognition(onFinalResult: (transcript: string) => void): UseVoiceRecognitionReturn {
  const ctorRef = useRef<SpeechRecognitionCtor | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const onFinalRef = useRef(onFinalResult);
  onFinalRef.current = onFinalResult;

  const [supported] = useState(() => getSpeechRecognitionCtor() !== null);
  const [listening, setListening] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    ctorRef.current = getSpeechRecognitionCtor();
    return () => {
      recognitionRef.current?.abort();
      recognitionRef.current = null;
    };
  }, []);

  const start = useCallback((lang: "ar" | "id") => {
    const Ctor = ctorRef.current;
    if (!Ctor) {
      setError("Browser ini tidak mendukung pengenalan suara. Gunakan Chrome, Edge, atau Safari (bukan Firefox).");
      return;
    }
    // Stop any existing session before starting a new one.
    recognitionRef.current?.abort();
    const recognition = new Ctor();
    recognition.lang = lang === "ar" ? "ar-SA" : "id-ID";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    // Safety timeout: if no result after 10 seconds, stop and show hint.
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    recognition.onstart = () => {
      setListening(true);
      setError(null);
      setInterimTranscript("");
      // Auto-stop after 10s if nothing happens.
      timeoutId = setTimeout(() => {
        recognition.stop();
      }, 10000);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interim = "";
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (!result) continue;
        const transcript = result[0]?.transcript ?? "";
        if (result.isFinal) {
          final += transcript;
        } else {
          interim += transcript;
        }
      }
      setInterimTranscript(interim);
      if (final.trim()) {
        onFinalRef.current(final.trim());
        setInterimTranscript("");
      }
    };

    recognition.onerror = (ev: SpeechRecognitionErrorEvent) => {
      if (timeoutId) clearTimeout(timeoutId);
      const messages: Record<string, string> = {
        "no-speech": "Tidak ada suara terdeteksi. Pastikan mikrofon berfungsi dan bicara setelah klik tombol.",
        "audio-capture": "Tidak dapat mengakses mikrofon. Periksa izin perangkat dan pastikan mikrofon terhubung.",
        "not-allowed": "Izin mikrofon ditolak. Aktifkan izin mikrofon di pengaturan browser (klik ikon kunci di address bar).",
        network: "Kesalahan jaringan saat pengenalan suara. Periksa koneksi internet Anda.",
        service: "Layanan pengenalan suara tidak tersedia. Coba beberapa saat lagi.",
        aborted: "",
      };
      const msg = messages[ev.error] ?? `Kesalahan pengenalan suara: ${ev.error}`;
      if (msg) setError(msg);
      setListening(false);
    };

    recognition.onend = () => {
      if (timeoutId) clearTimeout(timeoutId);
      setListening(false);
      setInterimTranscript("");
    };

    recognitionRef.current = recognition;
    try {
      recognition.start();
    } catch (e) {
      // start() can throw if called too rapidly or if another session is active.
      setError("Tidak dapat memulai pengenalan suara. Tunggu sebentar dan coba lagi.");
      setListening(false);
    }
  }, []);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  // Auto-clear error after 5 seconds so it doesn't persist indefinitely.
  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(null), 5000);
    return () => clearTimeout(timer);
  }, [error]);

  const reset = useCallback(() => {
    setError(null);
    setInterimTranscript("");
  }, []);

  return { supported, listening, interimTranscript, error, start, stop, reset };
}
