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
    stack: "React TypeScript, Redux, Django, Python, UI/UX Design, Tensorflow, Keras",
    bullets: [
      "Lead end-to-end development of a booking simulator web application used by data and business analysts to configure weekly pricing scenarios and generate sales & revenue forecasts.",
      "Design backend services (Django, SQL) and React frontends for complex configuration workflows with strong data integrity, auditability, and performant queries over large flight and pricing datasets.",
      "Developed and deployed a Transformer model for predicting customer itinerary selection, leveraging purchase context (origin/destination countries, purchase location), customer purchasing behavior profiles, and itinerary option features to enhance booking prediction accuracy.",
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

        <div className="relative mt-10">
          {/* Timeline line */}
          <div className="absolute left-24 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-400 dark:from-emerald-500 dark:via-emerald-400 dark:to-emerald-500" />

          <div className="space-y-12">
            {experience.map((item) => {
              // Split on " – " (en dash with spaces)
              const separator = " – ";
              const parts = item.period.split(separator);
              const startDate = parts[0];
              const endDate = parts[1] || "Present";
              const isPresent = endDate === "Present";

              return (
                <article
                  key={item.company}
                  className="group relative flex gap-8"
                >
                  {/* Timeline dates */}
                  <div className="flex w-20 flex-shrink-0 flex-col items-end gap-1 pt-1">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {startDate}
                    </span>
                    {!isPresent && (
                      <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                        {endDate}
                      </span>
                    )}
                    {isPresent && (
                      <span className="text-xs font-semibold text-emerald-500 dark:text-emerald-400">
                        Present
                      </span>
                    )}
                  </div>

                  {/* Content - integrated with timeline */}
                  <div className="flex-1 pl-2 pb-8 transition-colors">
                    <header className="mb-4">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 sm:text-xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {item.company} · {item.location}
                      </p>
                    </header>

                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">
                      {item.stack}
                    </p>
                    <ul className="space-y-2.5 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                      {item.bullets.map((b) => (
                        <li key={b} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-500 dark:before:bg-emerald-400">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
