import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";

function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border-l-2 border-[var(--border-subtle)] hover:border-[var(--accent)] pl-5 pr-4 py-5 rounded-r-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-all duration-200 hover:shadow-[0_0_20px_var(--glow)]">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-[var(--font-heading)] font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
          {project.name}
        </h3>
        <div className="flex items-center gap-3 shrink-0 pt-0.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <GitHubIcon size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-3">
        {project.description}
      </p>

      {project.highlight && (
        <p className="text-sm text-[var(--text-tertiary)] font-[var(--font-mono)] mb-3 border-l-2 border-[var(--accent)] pl-3 leading-relaxed">
          {project.highlight}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-[var(--font-mono)] text-xs bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-tertiary)] px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
