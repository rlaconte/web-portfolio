import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { experience, education } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume — Your Name",
  description: "Work experience and education of Your Name, software engineer.",
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-center justify-between mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
        >
          <Download size={14} />
          Download PDF
        </a>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
        Your Name
      </h1>
      <p className="text-gray-500 mb-12">Software Engineer</p>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
          Experience
        </h2>
        <div className="flex flex-col gap-8">
          {experience.map((job) => (
            <div key={`${job.company}-${job.role}`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <span className="font-semibold text-gray-900">{job.role}</span>
                  <span className="text-gray-500"> · {job.company}</span>
                </div>
                <span className="text-sm text-gray-400 shrink-0">{job.period}</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-gray-300 mt-0.5">—</span>
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
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
          Education
        </h2>
        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
            >
              <div>
                <span className="font-semibold text-gray-900">{edu.degree}</span>
                <span className="text-gray-500"> · {edu.institution}</span>
              </div>
              <span className="text-sm text-gray-400 shrink-0">{edu.period}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
