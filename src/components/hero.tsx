import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import TerminalWindow from "@/components/terminal-window";

const statusItems = [
  { dot: "bg-[var(--accent)]",           label: "OPEN",   text: "Available for opportunities" },
  { dot: "bg-[var(--accent-secondary)]", label: "STACK",  text: "TypeScript · Go · Python" },
  { dot: "bg-[var(--accent-warn)]",      label: "METHOD", text: "AI-augmented development" },
];

export default function Hero() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-center">

          {/* Left column */}
          <div>
            <p
              className="animate-fade-slide-up font-[var(--font-mono)] text-sm text-[var(--text-tertiary)] mb-5 tracking-wide"
              style={{ animationDelay: "200ms" }}
            >
              <span className="text-[var(--accent)]">//</span> backend_engineer
            </p>

            <h1
              className="animate-fade-slide-up font-display text-4xl sm:text-5xl md:text-[3.25rem] leading-tight tracking-tight text-[var(--text-primary)] mb-5"
              style={{ animationDelay: "350ms" }}
            >
              I build the systems{" "}
              <span className="text-[var(--accent)]">behind</span>{" "}
              the product.
            </h1>

            <p
              className="animate-fade-slide-up text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg"
              style={{ animationDelay: "480ms" }}
            >
              Backend engineer who uses AI as a force multiplier. I design APIs,
              data pipelines, and infrastructure — shipping faster by automating
              what machines do better.
            </p>

            {/* Status badges */}
            <div className="flex flex-col gap-2.5 mb-10">
              {statusItems.map((item, i) => (
                <div
                  key={item.label}
                  className="animate-fade-slide-up flex items-center gap-3"
                  style={{ animationDelay: `${520 + i * 80}ms` }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.dot}`} />
                  <span className="font-[var(--font-mono)] text-xs text-[var(--text-tertiary)] tracking-widest w-16">
                    {item.label}
                  </span>
                  <span className="text-base text-[var(--text-secondary)]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="animate-fade-slide-up flex flex-wrap gap-3"
              style={{ animationDelay: "720ms" }}
            >
              <Link
                href="/#projects"
                className="btn-glow inline-flex items-center gap-2 bg-[var(--accent)] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity font-[var(--font-body)]"
              >
                View Projects
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 border border-[var(--border-subtle)] text-[var(--text-secondary)] px-5 py-2.5 rounded-lg text-sm font-medium hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)] transition-colors font-[var(--font-body)]"
              >
                <Download size={15} />
                Resume
              </Link>
            </div>
          </div>

          {/* Right column — terminal */}
          <div
            className="animate-fade-slide-up hidden md:block"
            style={{ animationDelay: "450ms" }}
          >
            <TerminalWindow />
          </div>

        </div>
      </div>
    </section>
  );
}
