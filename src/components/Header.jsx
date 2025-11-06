import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Respect system preference initially
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');
    const isDark = stored ? stored === 'dark' : prefersDark;
    setDark(isDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring ring-emerald-500 rounded-md"
            aria-label="HRFC home"
          >
            <div className="h-8 w-8 grid place-content-center rounded bg-emerald-500 text-white font-bold">H</div>
            <div className="text-left">
              <div className="font-semibold tracking-tight text-neutral-900 dark:text-white">HRFC – Building Your Trust</div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">Since 1981</div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none focus-visible:ring ring-emerald-500 rounded px-1 py-1"
              >
                {item.label}
              </button>
            ))}
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
              className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
