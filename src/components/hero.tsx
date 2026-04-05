import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-medium text-indigo-600 mb-4 tracking-wide uppercase">
          Available for work
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Hi, I&apos;m{" "}
          <span className="text-indigo-600">Your Name</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
          Software engineer specializing in building fast, reliable web
          applications and APIs. I care about clean code, good abstractions, and
          shipping things that work.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            View Projects
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            <Download size={16} />
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
