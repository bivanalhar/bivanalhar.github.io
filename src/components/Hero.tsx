const Hero = () => {
  return (
    <section className="border-b border-slate-800/70 bg-gradient-to-b from-slate-900/60 to-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-14 pt-10 lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Full-Stack · Machine Learning · Data-Intensive Systems
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Hi, I&apos;m Bivan.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            Full-stack and machine learning engineer with 5+ years of experience
            building and scaling production web applications and data-intensive
            systems across airlines, education, and e-commerce.
          </p>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            I enjoy turning complex business requirements into robust,
            observable, and testable software &mdash; from React/TypeScript
            frontends to Python/Go backends and large-scale data pipelines.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300"
            >
              View selected projects
            </a>
            <a
              href="#experience"
              className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 hover:border-slate-500 hover:bg-slate-900"
            >
              See work experience
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-300">
            {[
              "React & TypeScript",
              "Django & Rails",
              "Go & Python",
              "PostgreSQL / MySQL / MongoDB",
              "SparkSQL & data pipelines",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-1 items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-xs rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-emerald-500/20">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">
              Snapshot
            </p>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li>Research Associate (Full-Stack Engineer) @ SIA-NUS Corp Lab</li>
              <li>Full-Stack Software Engineer @ Coursemology (NUS AICET)</li>
              <li>ML Engineer @ Shopee Shopping Guide Team</li>
              <li>MS & BS in Computer Science · KAIST</li>
              <li>Bronze Medalist – IMO 2013</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
