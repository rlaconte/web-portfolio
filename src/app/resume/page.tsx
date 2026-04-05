import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { experience, education } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume — Your Name",
  description: "Work experience and education of Your Name, backend engineer.",
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Nav row */}
      <div className="flex items-center justify-between mb-14">
        <Link
          href="/"
          className="font-[var(--font-mono)] inline-flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 tracking-wider uppercase transition-colors"
        >
          <ArrowLeft size={14} />
          Back
        </Link>
        <a
          href="/resume.pdf"
          className="font-[var(--font-mono)] inline-flex items-center gap-2 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 px-4 py-2 rounded-lg text-xs tracking-wider uppercase hover:border-emerald-500 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-400 transition-colors"
        >
          <Download size={13} />
          PDF
        </a>
      </div>

      {/* Name & title */}
      <h1 className="font-[var(--font-serif)] text-4xl text-stone-900 dark:text-stone-100 mb-1">
        Your Name
      </h1>
      <p className="font-[var(--font-mono)] text-xs text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-14">
        Backend Engineer
      </p>

      {/* Experience */}
      <section className="mb-14">
        <h2 className="font-[var(--font-mono)] text-xs text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-8">
          Experience
        </h2>
        <div className="flex flex-col gap-10">
          {experience.map((job) => (
            <div key={`${job.company}-${job.role}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                <div>
                  <span className="font-semibold text-stone-900 dark:text-stone-100">{job.role}</span>
                  <span className="text-stone-400 dark:text-stone-500 mx-2">·</span>
                  <span className="text-stone-500 dark:text-stone-400">{job.company}</span>
                </div>
                <span className="font-[var(--font-mono)] text-xs text-stone-400 dark:text-stone-500 shrink-0">
                  {job.period}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-stone-600 dark:text-stone-400 flex gap-3">
                    <span className="text-emerald-500 mt-0.5 shrink-0">—</span>
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
        <h2 className="font-[var(--font-mono)] text-xs text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-8">
          Education
        </h2>
        <div className="flex flex-col gap-5">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
            >
              <div>
                <span className="font-semibold text-stone-900 dark:text-stone-100">{edu.degree}</span>
                <span className="text-stone-400 dark:text-stone-500 mx-2">·</span>
                <span className="text-stone-500 dark:text-stone-400">{edu.institution}</span>
              </div>
              <span className="font-[var(--font-mono)] text-xs text-stone-400 dark:text-stone-500 shrink-0">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
