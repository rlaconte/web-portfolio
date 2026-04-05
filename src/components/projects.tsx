import SectionWrapper from "@/components/section-wrapper";
import ProjectCard from "@/components/project-card";
import ScrollReveal from "@/components/scroll-reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects" sectionNumber="01">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ScrollReveal key={project.name} delay={i * 80}>
            <ProjectCard project={project} index={i} />
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
