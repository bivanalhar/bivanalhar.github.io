import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a
            href="#top"
            className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-slate-300"
          >
            <span className="h-7 w-7 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-indigo-400 shadow-[0_0_20px_rgba(16,185,129,0.9)]" />
            <span>Bivan Alzacky Harmanto</span>
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300/80 md:flex">
            <a href="#experience" className="hover:text-slate-50">
              Experience
            </a>
            <a href="#projects" className="hover:text-slate-50">
              Projects
            </a>
            <a href="#skills" className="hover:text-slate-50">
              Skills
            </a>
            <a href="#education" className="hover:text-slate-50">
              Education
            </a>
            <a href="#awards" className="hover:text-slate-50">
              Awards
            </a>
            <a href="#contact" className="hover:text-slate-50">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-400 md:flex-row">
          <span>© {new Date().getFullYear()} Bivan Alzacky Harmanto</span>
          <div className="flex gap-4">
            <a
              href="mailto:bivan.alzacky@gmail.com"
              className="hover:text-slate-200"
            >
              Email
            </a>
            <a
              href="https://github.com/bivanalhar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bivanalhar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-200"
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
