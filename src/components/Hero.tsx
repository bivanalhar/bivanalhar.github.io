const Hero = () => {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:border-slate-800/70 dark:bg-gradient-to-b dark:from-slate-900/60 dark:to-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 lg:flex-row lg:items-center lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            Full-Stack · Machine Learning · Data-Intensive Systems
          </p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Bivan.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl">
            Full-stack and machine learning engineer with 5+ years of experience
            building and scaling production web applications and data-intensive
            systems across airlines, education, and e-commerce.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            I enjoy turning complex business requirements into robust,
            observable, and testable software &mdash; from React/TypeScript
            frontends to Python/Go backends and large-scale data pipelines.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/40 transition-all hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/50 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
            >
              View selected projects
            </a>
            <a
              href="#experience"
              className="inline-flex items-center rounded-full border-2 border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-900"
            >
              See work experience
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            {[
              "React & TypeScript",
              "Django & Rails",
              "Go & Python",
              "PostgreSQL / MySQL / MongoDB",
              "SparkSQL & data pipelines",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-300 bg-white px-4 py-1.5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-1 items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-sm rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-2xl dark:shadow-emerald-500/20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Snapshot
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>Research Associate (Full-Stack Engineer) @ SIA-NUS Corp Lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>Full-Stack Software Engineer @ Coursemology (NUS AICET)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>ML Engineer @ Shopee Shopping Guide Team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>MS & BS in Computer Science · KAIST</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>Bronze Medalist – IMO 2013</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
