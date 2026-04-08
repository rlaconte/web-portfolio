import SectionWrapper from "./section-wrapper";
import Reveal from "./reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="border-t border-border-subtle py-20 lg:py-28">
        <Reveal>
          <span className="font-mono text-text-tertiary text-xs tracking-[0.25em] uppercase block mb-16">
            Projects
          </span>
        </Reveal>

        <div>
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="project-row border-t border-border-subtle -mx-6 lg:-mx-12 px-6 lg:px-12 py-8 lg:py-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
                  {/* Name + Description */}
                  <div className="lg:col-span-8 mb-5 lg:mb-0">
                    <h3 className="font-display text-text-primary project-title text-2xl lg:text-3xl mb-3">
                      {project.name}
                    </h3>
                    <p className="font-mono text-text-secondary text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <span className="font-mono text-text-tertiary text-xs">
                      {project.techStack.join(" / ")}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="font-mono lg:col-span-4 flex lg:flex-col lg:items-end gap-5 lg:gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-hover group/link text-xs inline-flex items-center gap-1"
                      >
                        github
                        <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-px group-hover/link:-translate-y-px">
                          ↗
                        </span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-hover group/link text-xs inline-flex items-center gap-1"
                      >
                        live
                        <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-px group-hover/link:-translate-y-px">
                          ↗
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
