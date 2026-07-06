import type { AppView } from "../types";

interface HeaderProps {
  current: AppView;
  onNavigate: (view: AppView) => void;
}

const NAV_ITEMS: { id: AppView; label: string }[] = [
  { id: "kata", label: "Mode Kata" },
  { id: "kalimat", label: "Mode Kalimat" },
  { id: "bookmark", label: "Bookmark" },
  { id: "about", label: "Tentang" },
];

export function Header({ current, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-ink-50/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate("kata")}
          className="flex items-baseline gap-2 text-left"
          aria-label="Beranda Kamus Quran"
        >
          <span className="font-arabic-display text-2xl font-bold text-accent-600">
            القاموس
          </span>
          <span className="text-lg font-semibold text-ink-800">Kamus Quran</span>
        </button>

        <nav className="flex items-center gap-1">
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
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
