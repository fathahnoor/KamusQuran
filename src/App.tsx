import { useState, useCallback, Suspense, lazy } from "react";
import type { AppView } from "./types";
import { Header } from "./components/Header";
import { ModeKata } from "./views/ModeKata";

// Lazy-load secondary views to reduce initial bundle.
const ModeKalimat = lazy(() => import("./views/ModeKalimat").then((m) => ({ default: m.ModeKalimat })));
const BookmarkView = lazy(() => import("./views/BookmarkView").then((m) => ({ default: m.BookmarkView })));
const AboutView = lazy(() => import("./views/AboutView").then((m) => ({ default: m.AboutView })));

/** Loading fallback for lazy-loaded views. */
function ViewFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink-200 border-t-accent-500" />
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<AppView>("kalimat");

  const navigate = useCallback((next: AppView) => {
    setView(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink-50 to-ink-100/30 text-ink-900">
      <Header current={view} onNavigate={navigate} />
      <main className="mx-auto max-w-5xl px-4 py-6 pb-24 sm:px-6 sm:py-8 sm:pb-8 lg:px-8">
        {view === "kata" && <ModeKata />}
        {view === "kalimat" && (
          <Suspense fallback={<ViewFallback />}>
            <ModeKalimat />
          </Suspense>
        )}
        {view === "bookmark" && (
          <Suspense fallback={<ViewFallback />}>
            <BookmarkView onNavigateToKata={() => navigate("kata")} />
          </Suspense>
        )}
        {view === "about" && (
          <Suspense fallback={<ViewFallback />}>
            <AboutView />
          </Suspense>
        )}
      </main>
      <footer className="border-t border-ink-200/60 bg-white/50 py-6 pb-20 text-center text-xs text-ink-500 backdrop-blur-sm sm:pb-6 sm:text-sm">
        <p>
          <strong>Kamus Quran v3.4</strong> · 10.000+ kata · I&apos;rob Sistematis
        </p>
        <p className="mt-1">
          Data: Quranic Arabic Corpus, Tanzil, AlQuran Cloud · Referensi:{" "}
          An-Nahwu al-Wadhih, Metode Al-Munir
        </p>
        <p className="mt-2 font-mono text-[10px] text-ink-400 sm:text-xs">
          Build: {__BUILD_TIMESTAMP__}
        </p>
      </footer>
    </div>
  );
}
