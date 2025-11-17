const Skills = () => {
  return (
    <section
      id="skills"
      className="border-b border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950/90"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
          Skills
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          I focus on building reliable, observable systems across the full stack,
          with a strong foundation in data and machine learning workflows.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Languages
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Go, Python, TypeScript, JavaScript, SQL, Scala
            </p>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Backend &amp; APIs
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Go (GORM), Django, Ruby on Rails, REST APIs, background jobs
              (Sidekiq, Celery)
            </p>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Frontend
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              React, TypeScript, Redux, React Query, TailwindCSS, Jest,
              React Testing Library
            </p>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Data &amp; Storage
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              PostgreSQL, MySQL/MariaDB, MongoDB, SparkSQL
            </p>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Practices
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Test-driven development, code review, security-minded design,
              performance optimisation
            </p>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Cloud &amp; Infra
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              AWS (EC2, S3, CloudFront), Docker, CI/CD (CircleCI)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
