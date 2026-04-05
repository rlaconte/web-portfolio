import SectionWrapper from "@/components/section-wrapper";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
