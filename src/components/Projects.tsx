type Project = {
  name: string;
  role: string;
  period: string;
  description: string;
  tech: string;
};

const projects: Project[] = [
  {
    name: "Project Cornerstone – CVWO",
    role: "Full-Stack Software Engineer",
    period: "May 2023 – Aug 2023",
    description:
      "Contributed to a modular, componentised platform that supports multiple VWOs and accelerates custom solutions for new clients; led a full-stack web platform for a Singapore-based learning center from requirements to production.",
    tech: "React TypeScript, Redux, Go, GORM, PostgreSQL, AWS, UI/UX Design",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-b border-slate-200 bg-slate-50 dark:border-slate-800/70 dark:bg-slate-950/95"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
          Selected Projects
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          A few highlights that show how I approach system design, code quality,
          and collaboration.
        </p>

        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700/50"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  {project.name}
                </h3>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  {project.role}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-500">
                {project.period}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                {project.description}
              </p>
              <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                {project.tech}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
