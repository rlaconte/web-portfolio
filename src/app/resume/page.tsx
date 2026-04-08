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
    <div
      className="min-h-screen pt-14"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-16">
          <Link
            href="/"
            className="link-hover text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            ← Back
          </Link>
          <a
            href="/resume.pdf"
            className="resume-dl-btn inline-flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2 border"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            <Download size={12} strokeWidth={1.5} />
            PDF
          </a>
        </div>

        {/* Header */}
        <div className="mb-20">
          <h1
            className="text-5xl lg:text-6xl mb-3"
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              color: "var(--text-primary)",
            }}
          >
            Rodrigo Laconte
          </h1>
          <p
            className="text-xs tracking-[0.25em] uppercase"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              color: "var(--accent)",
            }}
          >
            Senior Backend Engineer
          </p>
        </div>

        {/* Experience */}
        <section className="mb-20">
          <span
            className="text-xs tracking-[0.25em] uppercase block mb-12"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              color: "var(--text-tertiary)",
            }}
          >
            Experience
          </span>

          <div>
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="border-t py-10 lg:grid lg:grid-cols-12 lg:gap-8"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <div className="lg:col-span-3 mb-4 lg:mb-0 lg:pt-0.5">
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {job.period}
                  </span>
                </div>
                <div className="lg:col-span-9">
                  <h3
                    className="text-xl lg:text-2xl mb-1"
                    style={{
                      fontFamily: "var(--font-instrument-serif), serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {job.role}
                  </h3>
                  <span
                    className="text-xs tracking-widest uppercase block mb-6"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      color: "var(--accent)",
                    }}
                  >
                    {job.company}
                  </span>
                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm flex gap-3 leading-relaxed"
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono), monospace",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span
                          className="flex-shrink-0 select-none"
                          style={{ color: "var(--accent)" }}
                        >
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
          <span
            className="text-xs tracking-[0.25em] uppercase block mb-12"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              color: "var(--text-tertiary)",
            }}
          >
            Education
          </span>

          <div>
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="border-t py-10 lg:grid lg:grid-cols-12 lg:gap-8"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <div className="lg:col-span-3 mb-4 lg:mb-0 lg:pt-0.5">
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {edu.period}
                  </span>
                </div>
                <div className="lg:col-span-9">
                  <h3
                    className="text-xl lg:text-2xl mb-1"
                    style={{
                      fontFamily: "var(--font-instrument-serif), serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      color: "var(--text-secondary)",
                    }}
                  >
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
