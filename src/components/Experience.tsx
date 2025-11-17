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
      className="border-b border-slate-800/70 bg-slate-950"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-lg font-semibold text-slate-50">Experience</h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400">
          I&apos;ve worked across airlines, education technology, and e-commerce,
          owning features end-to-end and collaborating with cross-functional
          teams.
        </p>

        <div className="mt-6 space-y-4">
          {experience.map((item) => (
            <article
              key={item.company}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg shadow-slate-950/80"
            >
              <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
              <header className="flex flex-col gap-1 pl-5 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {item.role}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="text-xs text-slate-500">{item.period}</span>
              </header>

              <p className="mt-3 pl-5 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                {item.stack}
              </p>
              <ul className="mt-2 space-y-1.5 pl-8 text-sm text-slate-200">
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
