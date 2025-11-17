const Education = () => {
  return (
    <section
      id="education"
      className="border-b border-slate-200 bg-slate-50 dark:border-slate-800/70 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
          Education
        </h2>

        <div className="mt-10 space-y-6">
          <article className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50">
            <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  M.S. in School of Computing (Research Track)
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  KAIST – Korea Advanced Institute of Science and Technology ·
                  Daejeon, South Korea
                </p>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-500">
                Feb 2017 – Feb 2019
              </span>
            </header>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              <li>
                Thesis: Iterative and Interactive Feedback Model for the
                Personalization of Deep Learning.
              </li>
              <li>Advising Professor: Sungho Jo (Neuro Machine Augmented Intelligence Lab, KAIST).</li>
            </ul>
          </article>

          <article className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50">
            <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  B.S. in School of Computing (Minor in Mathematical Sciences)
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  KAIST – Korea Advanced Institute of Science and Technology ·
                  Daejeon, South Korea
                </p>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-500">
                Sep 2013 – Feb 2017
              </span>
            </header>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;
