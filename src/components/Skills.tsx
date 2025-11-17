const Skills = () => {
  return (
    <section
      id="skills"
      className="border-b border-slate-800/70 bg-slate-950/90"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-lg font-semibold text-slate-50">Skills</h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400">
          I focus on building reliable, observable systems across the full stack,
          with a strong foundation in data and machine learning workflows.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <h3 className="text-sm font-semibold text-slate-100">Languages</h3>
            <p className="mt-1 text-sm text-slate-300">
              Go, Python, TypeScript, JavaScript, SQL, Scala
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <h3 className="text-sm font-semibold text-slate-100">
              Backend &amp; APIs
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Go (GORM), Django, Ruby on Rails, REST APIs, background jobs
              (Sidekiq, Celery)
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <h3 className="text-sm font-semibold text-slate-100">Frontend</h3>
            <p className="mt-1 text-sm text-slate-300">
              React, TypeScript, Redux, React Query, TailwindCSS, Jest,
              React Testing Library
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <h3 className="text-sm font-semibold text-slate-100">
              Data &amp; Storage
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              PostgreSQL, MySQL/MariaDB, MongoDB, SparkSQL
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <h3 className="text-sm font-semibold text-slate-100">
              Cloud &amp; Infra
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              AWS (EC2, S3, CloudFront), Docker, CI/CD (CircleCI)
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <h3 className="text-sm font-semibold text-slate-100">Practices</h3>
            <p className="mt-1 text-sm text-slate-300">
              Test-driven development, code review, security-minded design,
              performance optimisation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
