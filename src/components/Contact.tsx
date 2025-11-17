const Contact = () => {
  return (
    <section
      id="contact"
      className="border-b border-slate-800/70 bg-slate-950/95"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-lg font-semibold text-slate-50">
          Let&apos;s work together
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400">
          I&apos;m open to opportunities involving full-stack development,
          data-heavy systems, or applied machine learning &mdash; especially
          where I can own features end-to-end and collaborate with
          cross-functional teams.
        </p>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="mailto:bivan.alzacky@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300"
          >
            Email me
          </a>

          <div className="flex flex-col gap-1 text-xs text-slate-300">
            <a
              href="https://github.com/bivanalhar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-100"
            >
              GitHub: bivanalhar
            </a>
            <a
              href="https://www.linkedin.com/in/bivanalhar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-100"
            >
              LinkedIn: /in/bivanalhar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
