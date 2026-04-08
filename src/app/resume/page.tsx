import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { experience, education } from "@/data/resume";

export const metadata: Metadata = {
  title: "Résumé — Rodrigo Laconte",
  description:
    "Work experience and education of Rodrigo Laconte, backend engineer.",
};

export default function ResumePage() {
  return (
    <div className="bg-bg-primary min-h-screen pt-14">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-16">
          <Link
            href="/"
            className="link-hover font-mono text-xs tracking-widest uppercase"
          >
            ← Back
          </Link>
          <a
            href="/resume.pdf"
            className="resume-dl-btn font-mono inline-flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2 border"
          >
            <Download size={12} strokeWidth={1.5} />
            PDF
          </a>
        </div>

        {/* Header */}
        <div className="mb-20">
          <h1 className="font-display text-text-primary text-5xl lg:text-6xl mb-3">
            Rodrigo Laconte
          </h1>
          <p className="font-mono text-accent text-xs tracking-[0.25em] uppercase">
            Senior Backend Engineer
          </p>
        </div>

        {/* Experience */}
        <section className="mb-20">
          <span className="font-mono text-text-tertiary text-xs tracking-[0.25em] uppercase block mb-12">
            Experience
          </span>

          <div>
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="border-t border-border-subtle py-10 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-3 mb-4 lg:mb-0 lg:pt-0.5">
                  <span className="font-mono text-text-tertiary text-xs">
                    {job.period}
                  </span>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-display text-text-primary text-xl lg:text-2xl mb-1">
                    {job.role}
                  </h3>
                  <span className="font-mono text-accent text-xs tracking-widest uppercase block mb-6">
                    {job.company}
                  </span>
                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="font-mono text-text-secondary text-sm flex gap-3 leading-relaxed">
                        <span className="text-accent flex-shrink-0 select-none">
                          —
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <span className="font-mono text-text-tertiary text-xs tracking-[0.25em] uppercase block mb-12">
            Education
          </span>

          <div>
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="border-t border-border-subtle py-10 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-3 mb-4 lg:mb-0 lg:pt-0.5">
                  <span className="font-mono text-text-tertiary text-xs">
                    {edu.period}
                  </span>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-display text-text-primary text-xl lg:text-2xl mb-1">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-text-secondary text-xs tracking-widest uppercase">
                    {edu.institution}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
