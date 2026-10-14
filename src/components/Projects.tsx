import { projects, type Project } from "@/data/projects";
import Section from "./Section";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border p-6 transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-muted">
            {tag}
          </li>
        ))}
      </ul>
      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-6 flex gap-4 text-sm font-medium">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Live site →
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Code →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
