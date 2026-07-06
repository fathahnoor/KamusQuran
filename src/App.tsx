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
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-ink-300 border-t-accent-600" />
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<AppView>("kata");

  const navigate = useCallback((next: AppView) => {
    setView(next);
    // Scroll to top on view change for a clean academic reading flow.
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-ink-50 text-ink-900">
      <Header current={view} onNavigate={navigate} />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
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
      <footer className="border-t border-ink-200 bg-ink-100/60 py-6 text-center text-sm text-ink-500">
        <p>
          Kamus Quran — alat belajar bahasa Arab Al-Qur&apos;an · Data: Quranic Arabic
          Corpus, Tanzil, AlQuran Cloud
        </p>
      </footer>
    </div>
  );
}
