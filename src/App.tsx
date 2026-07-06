import { useState, useCallback } from "react";
import type { AppView } from "./types";
import { Header } from "./components/Header";
import { ModeKata } from "./views/ModeKata";
import { ModeKalimat } from "./views/ModeKalimat";
import { BookmarkView } from "./views/BookmarkView";
import { AboutView } from "./views/AboutView";

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
        {view === "kalimat" && <ModeKalimat />}
        {view === "bookmark" && <BookmarkView onNavigateToKata={() => navigate("kata")} />}
        {view === "about" && <AboutView />}
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
