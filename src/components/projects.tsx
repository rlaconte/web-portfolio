"use client";

import SectionWrapper from "@/components/section-wrapper";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function Projects() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <SectionWrapper id="projects" title="Projects">
      <div ref={ref} data-reveal className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
