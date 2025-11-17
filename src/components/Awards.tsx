const Awards = () => {
  return (
    <section
      id="awards"
      className="border-b border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
          Awards
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          A few milestones that shaped my foundations in problem solving,
          mathematics, and computer science.
        </p>

        <div className="mt-10 space-y-6">
          {/* IMO */}
          <article className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50">
            <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  Bronze Medal – International Mathematical Olympiad (IMO)
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  IMO 2013 · International
                </p>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-500">
                2013
              </span>
            </header>
            <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              Awarded a bronze medal at the 54th International Mathematical
              Olympiad, demonstrating strong problem-solving ability in
              high-level competition mathematics.
            </p>
          </article>

          {/* KCAMP / Scholarship */}
          <article className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50">
            <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  KCAMP Scholarship Awardee
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  KAIST · Daejeon, South Korea
                </p>
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-500">
                2016
              </span>
            </header>
            <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              Selected as a KCAMP scholarship awardee in recognition of academic
              performance and potential in computer science.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Awards;
