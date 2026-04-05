import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";

function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/60 dark:hover:shadow-stone-900/60 transition-all duration-300">
      {/* Emerald left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6">
        {/* Number + links row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="font-[var(--font-mono)] text-2xl font-medium text-stone-200 dark:text-stone-700 leading-none select-none">
            {num}
          </span>
          <div className="flex items-center gap-3 mt-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-stone-400 dark:text-stone-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
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
                className="text-stone-400 dark:text-stone-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-[var(--font-serif)] text-xl text-stone-900 dark:text-stone-100 mb-2 leading-snug">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-[var(--font-mono)] text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
