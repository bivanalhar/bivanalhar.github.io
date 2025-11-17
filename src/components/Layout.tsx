import type { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.15em] uppercase text-slate-700 dark:text-slate-300"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-indigo-400 shadow-[0_0_20px_rgba(16,185,129,0.9)] dark:shadow-[0_0_20px_rgba(16,185,129,0.9)]">
              <span className="text-base font-bold text-white">B</span>
            </div>
            <span>Bivan Alzacky Harmanto</span>
          </a>

          <div className="flex items-center gap-4">
            <nav className="hidden gap-6 text-base text-slate-600 dark:text-slate-300/80 md:flex">
              <a
                href="#experience"
                className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
              >
                Skills
              </a>
              <a
                href="#education"
                className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
              >
                Education
              </a>
              <a
                href="#awards"
                className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
              >
                Awards
              </a>
              <a
                href="#contact"
                className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
              >
                Contact
              </a>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5 text-slate-600 dark:text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-slate-600 dark:text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 dark:text-slate-400 lg:px-8 md:flex-row">
          <span>© {new Date().getFullYear()} Bivan Alzacky Harmanto</span>
          <div className="flex gap-6">
            <a
              href="mailto:bivan.alzacky@gmail.com"
              className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/bivanalhar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bivanalhar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
