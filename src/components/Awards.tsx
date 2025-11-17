const Awards = () => {
  return (
    <section
      id="awards"
      className="border-b border-slate-800/70 bg-slate-950"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-lg font-semibold text-slate-50">Awards</h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400">
          A few milestones that shaped my foundations in problem solving,
          mathematics, and computer science.
        </p>

        <div className="mt-6 space-y-4">
          {/* IMO */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Bronze Medal – International Mathematical Olympiad (IMO)
                </h3>
                <p className="text-xs text-slate-400">
                  IMO 2013 · International
                </p>
              </div>
              <span className="text-xs text-slate-500">2013</span>
            </header>
            <p className="mt-2 text-sm text-slate-200">
              Awarded a bronze medal at the 54th International Mathematical
              Olympiad, demonstrating strong problem-solving ability in
              high-level competition mathematics.
            </p>
          </article>

          {/* KCAMP / Scholarship */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  KCAMP Scholarship Awardee
                </h3>
                <p className="text-xs text-slate-400">
                  KAIST · Daejeon, South Korea
                </p>
              </div>
              <span className="text-xs text-slate-500">2016</span>
            </header>
            <p className="mt-2 text-sm text-slate-200">
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
