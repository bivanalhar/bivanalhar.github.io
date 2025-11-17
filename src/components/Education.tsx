const Education = () => {
  return (
    <section
      id="education"
      className="border-b border-slate-800/70 bg-slate-950"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-lg font-semibold text-slate-50">Education</h2>

        <div className="mt-6 space-y-4">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  M.S. in School of Computing (Research Track)
                </h3>
                <p className="text-xs text-slate-400">
                  KAIST – Korea Advanced Institute of Science and Technology ·
                  Daejeon, South Korea
                </p>
              </div>
              <span className="text-xs text-slate-500">
                Feb 2017 – Feb 2019
              </span>
            </header>
            <ul className="mt-2 space-y-1 text-sm text-slate-200">
              <li>
                Thesis: Iterative and Interactive Feedback Model for the
                Personalization of Deep Learning.
              </li>
              <li>Advising Professor: Sungho Jo (Neuro-MAIL, KAIST).</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  B.S. in School of Computing (Minor in Mathematical Sciences)
                </h3>
                <p className="text-xs text-slate-400">
                  KAIST – Korea Advanced Institute of Science and Technology ·
                  Daejeon, South Korea
                </p>
              </div>
              <span className="text-xs text-slate-500">
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
