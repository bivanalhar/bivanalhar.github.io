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
      className="border-b border-slate-800/70 bg-slate-950/95"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-lg font-semibold text-slate-50">
          Selected Projects
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-400">
          A few highlights that show how I approach system design, code quality,
          and collaboration.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg shadow-slate-950/80"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  {project.name}
                </h3>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-300">
                  {project.role}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{project.period}</p>
              <p className="mt-3 text-sm text-slate-200">
                {project.description}
              </p>
              <p className="mt-3 text-xs text-slate-400">
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
