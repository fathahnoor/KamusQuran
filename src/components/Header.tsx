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
      {/* Top bar: compact on mobile, full on desktop */}
      <header className="sticky top-0 z-50 border-b border-ink-200 bg-ink-50/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-3 py-2.5 sm:px-6 sm:py-3 lg:px-8">
          <button
            onClick={() => onNavigate("kata")}
            className="flex items-baseline gap-1.5 text-left sm:gap-2"
            aria-label="Beranda Kamus Quran"
          >
            <span className="font-arabic-display text-xl font-bold text-accent-600 sm:text-2xl">
              القاموس
            </span>
            <span className="text-base font-semibold text-ink-800 sm:text-lg">
              Kamus Quran
            </span>
          </button>

          {/* Desktop nav: hidden on mobile */}
          <nav className="hidden items-center gap-1 sm:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  current === item.id
                    ? "bg-accent-600 text-ink-50"
                    : "text-ink-600 hover:bg-ink-200 hover:text-ink-900"
                }`}
                aria-current={current === item.id ? "page" : undefined}
              >
                {item.label === "Kata" ? "Mode Kata" : item.label === "Kalimat" ? "Mode Kalimat" : item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile bottom navigation bar: fixed at bottom */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-ink-200 bg-ink-50/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm sm:hidden"
        aria-label="Navigasi utama"
      >
        <div className="mx-auto flex max-w-5xl items-stretch justify-around">
          {NAV_ITEMS.map((item) => {
            const active = current === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-1 flex-col items-center gap-0.5 py-2 transition-colors ${
                  active ? "text-accent-600" : "text-ink-500"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.icon.split("M").map((d, i) =>
                    i === 0 ? null : <path key={i} d={`M${d}`} />
                  )}
                </svg>
                <span className="text-[10px] font-medium leading-none">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
