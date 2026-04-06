import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { experience, education } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume — Rodrigo Laconte",
  description: "Work experience and education of Rodrigo Laconte, backend engineer.",
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-center justify-between mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors font-[var(--font-body)]"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 border border-[var(--border-subtle)] text-[var(--text-secondary)] px-4 py-2 rounded-lg text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors font-[var(--font-body)]"
        >
          <Download size={14} />
          Download PDF
        </a>
      </div>

      <h1 className="font-display text-3xl tracking-tight text-[var(--text-primary)] mb-1">
        Rodrigo Laconte
      </h1>
      <p className="text-[var(--text-secondary)] mb-12 font-[var(--font-body)]">Backend Engineer</p>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="font-[var(--font-mono)] text-xs tracking-widest text-[var(--text-tertiary)] mb-6">
          <span className="text-[var(--accent)]">//</span> experience
        </h2>
        <div className="flex flex-col gap-8">
          {experience.map((job) => (
            <div key={`${job.company}-${job.role}`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <span className="font-semibold text-[var(--text-primary)] font-[var(--font-body)]">{job.role}</span>
                  <span className="text-[var(--text-secondary)] font-[var(--font-body)]"> · {job.company}</span>
                </div>
                <span className="font-[var(--font-mono)] text-xs text-[var(--text-tertiary)] shrink-0">{job.period}</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-[var(--text-secondary)] flex gap-2 font-[var(--font-body)]">
                    <span className="text-[var(--accent)] mt-0.5 shrink-0">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="font-[var(--font-mono)] text-xs tracking-widest text-[var(--text-tertiary)] mb-6">
          <span className="text-[var(--accent)]">//</span> education
        </h2>
        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
            >
              <div>
                <span className="font-semibold text-[var(--text-primary)] font-[var(--font-body)]">{edu.degree}</span>
                <span className="text-[var(--text-secondary)] font-[var(--font-body)]"> · {edu.institution}</span>
              </div>
              <span className="font-[var(--font-mono)] text-xs text-[var(--text-tertiary)] shrink-0">{edu.period}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
