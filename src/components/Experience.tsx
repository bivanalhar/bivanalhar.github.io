type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  stack: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "SIA-NUS Digital Aviation Corp Lab",
    location: "Singapore",
    role: "Research Associate (Full-Stack Engineer) – Booking Simulator",
    period: "May 2025 – Present",
    stack: "React TypeScript, Redux, Django, Python, UI/UX Design",
    bullets: [
      "Lead end-to-end development of a booking simulator web application used by data and business analysts to configure weekly pricing scenarios and generate sales & revenue forecasts.",
      "Design backend services (Django, SQL) and React frontends for complex configuration workflows with strong data integrity, auditability, and performant queries over large flight and pricing datasets.",
      "Collaborate with stakeholders to translate ambiguous business requirements into scoped technical designs, owning features from design to rollout and production support.",
    ],
  },
  {
    company: "AICET – NUS (Coursemology)",
    location: "Singapore",
    role: "Full-Stack Software Engineer – Coursemology",
    period: "Jan 2023 – Apr 2025",
    stack:
      "React TypeScript, Redux, Ruby on Rails, Sidekiq, PostgreSQL, AWS, UI/UX Design",
    bullets: [
      "Built and maintained production full-stack features focusing on robustness, performance, and a clean UX for instructors and students.",
      "Designed APIs and background jobs (Sidekiq) that automated complex assessment and grading workflows, reducing manual errors and improving reliability.",
      "Worked closely with product and teaching teams to define requirements, refine edge cases, and integrate safely with existing access control and data models.",
      "Maintained automated tests (RSpec, Jest, React Testing Library) to prevent regressions and support refactoring.",
    ],
  },
  {
    company: "Shopee – Shopping Guide Team",
    location: "Singapore",
    role: "Software Engineer (Machine Learning)",
    period: "Sep 2019 – Sep 2022",
    stack: "Python, Go, Scala, TensorFlow, Deep Learning, SparkSQL",
    bullets: [
      "Developed and maintained large-scale, fault-tolerant pipelines processing multi-market user behaviour data with strong monitoring of data quality and system performance.",
      "Collaborated with platform and infra teams to deploy models and services into production, integrating with monitoring and alerting to detect anomalies early.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="border-b border-slate-200 bg-white dark:border-slate-800/70 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
          Experience
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          I&apos;ve worked across airlines, education technology, and e-commerce,
          owning features end-to-end and collaborating with cross-functional
          teams.
        </p>

        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <article
              key={item.company}
              className="group relative rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50"
            >
              <div className="absolute left-4 top-4 h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.15)] dark:bg-emerald-400 dark:shadow-[0_0_0_6px_rgba(16,185,129,0.25)]" />
              <header className="flex flex-col gap-2 pl-6 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 sm:text-xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-500">
                  {item.period}
                </span>
              </header>

              <p className="mt-4 pl-6 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">
                {item.stack}
              </p>
              <ul className="mt-4 space-y-2 pl-10 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                {item.bullets.map((b) => (
                  <li key={b} className="list-disc">
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
