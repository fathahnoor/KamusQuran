import type { AppView } from "../types";

interface HeaderProps {
  current: AppView;
  onNavigate: (view: AppView) => void;
}

const NAV_ITEMS: { id: AppView; label: string; icon: string }[] = [
  { id: "kata", label: "Kata", icon: "M3 5h18M3 12h18M3 19h12" },
  { id: "kalimat", label: "Kalimat", icon: "M4 6h16M4 12h10M4 18h16" },
  { id: "bookmark", label: "Bookmark", icon: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" },
  { id: "about", label: "Tentang", icon: "M12 16v-4M12 8h.01" },
];

export function Header({ current, onNavigate }: HeaderProps) {
  return (
    <>
      {/* Top bar: glassmorphism header with subtle gradient */}
      <header className="sticky top-0 z-50 border-b border-ink-200/60 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
          <button
            onClick={() => onNavigate("kata")}
            className="flex items-baseline gap-2 text-left transition-transform hover:scale-[1.02] sm:gap-2.5"
            aria-label="Beranda Kamus Quran"
          >
            <span className="font-arabic-display text-2xl font-bold bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent sm:text-3xl">
              القاموس
            </span>
            <span className="text-base font-semibold text-ink-800 sm:text-lg">
              Kamus Quran
            </span>
          </button>

          {/* Desktop nav: pill-style with active glow */}
          <nav className="hidden items-center gap-1 sm:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  current === item.id
                    ? "bg-gradient-to-r from-accent-600 to-accent-500 text-white shadow-sm shadow-accent-500/30"
                    : "text-ink-600 hover:bg-ink-100 hover:text-ink-900"
                }`}
                aria-current={current === item.id ? "page" : undefined}
              >
                {item.label === "Kata" ? "Mode Kata" : item.label === "Kalimat" ? "Mode Kalimat" : item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile bottom navigation: glassmorphism with active indicator */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-ink-200/60 bg-white/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg sm:hidden"
        aria-label="Navigasi utama"
      >
        <div className="mx-auto flex max-w-5xl items-stretch justify-around">
          {NAV_ITEMS.map((item) => {
            const active = current === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-1 flex-col items-center gap-1 py-2.5 transition-all duration-200 ${
                  active ? "text-accent-600" : "text-ink-400"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <div className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all ${
                  active ? "bg-accent-50" : ""
                }`}>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={active ? "2.5" : "2"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {item.icon.split("M").map((d, i) =>
                      i === 0 ? null : <path key={i} d={`M${d}`} />
                    )}
                  </svg>
                </div>
                <span className={`text-[10px] font-medium leading-none ${active ? "font-semibold" : ""}`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
