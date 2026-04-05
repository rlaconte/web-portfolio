import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-24 md:py-36 dot-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">

          {/* ── Left: Main content ─────────────────────── */}
          <div className="flex-1 min-w-0">
            {/* Code-comment label */}
            <p className="animate-fade-up font-[var(--font-mono)] text-sm text-emerald-600 dark:text-emerald-400 mb-6">
              <span className="opacity-50">// </span>backend engineer
            </p>

            {/* Hero heading */}
            <h1 className="animate-fade-up delay-1 font-[var(--font-serif)] font-bold text-5xl sm:text-6xl md:text-7xl text-stone-900 dark:text-stone-100 leading-[1.05] mb-2">
              Hi, I&apos;m
            </h1>
            <h1 className="animate-fade-up delay-2 font-[var(--font-serif)] text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-8">
              <span className="text-emerald-600 dark:text-emerald-400">Your Name</span>
              <span className="animate-blink text-stone-400 dark:text-stone-500 ml-1">|</span>
            </h1>

            {/* Subheading */}
            <p className="animate-fade-up delay-3 text-lg text-stone-500 dark:text-stone-400 max-w-lg mb-10 leading-relaxed">
              Backend engineer who solves hard problems with clean systems.
              I use AI as a force multiplier — shipping faster and staying
              curious about what comes next.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-4 flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 bg-emerald-600 dark:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
              >
                View Projects
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-stone-500 dark:hover:border-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <Download size={14} />
                Resume
              </Link>
            </div>
          </div>

          {/* ── Right: Terminal status block ───────────── */}
          <div className="animate-fade-up delay-5 hidden lg:block w-72 shrink-0 mt-2">
            <div className="terminal-block rounded-xl overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 font-[var(--font-mono)] text-xs text-stone-500">status.sh</span>
              </div>
              {/* Terminal content */}
              <div className="p-5 space-y-3 font-[var(--font-mono)] text-sm">
                <div>
                  <span className="text-stone-500">$ </span>
                  <span className="text-emerald-400">whoami</span>
                </div>
                <div className="text-stone-300 pl-2">backend_engineer</div>

                <div className="pt-1">
                  <span className="text-stone-500">$ </span>
                  <span className="text-emerald-400">cat status.json</span>
                </div>
                <div className="text-stone-400 pl-2 space-y-1 text-xs leading-relaxed">
                  <div><span className="text-stone-500">{"{"}</span></div>
                  <div className="pl-3">
                    <span className="text-sky-400">&quot;available&quot;</span>
                    <span className="text-stone-500">: </span>
                    <span className="text-emerald-400">true</span>
                    <span className="text-stone-500">,</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-sky-400">&quot;focus&quot;</span>
                    <span className="text-stone-500">: </span>
                    <span className="text-amber-300">&quot;backend + AI&quot;</span>
                    <span className="text-stone-500">,</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-sky-400">&quot;stack&quot;</span>
                    <span className="text-stone-500">: </span>
                    <span className="text-amber-300">&quot;Go, TS, Python&quot;</span>
                    <span className="text-stone-500">,</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-sky-400">&quot;ai_tools&quot;</span>
                    <span className="text-stone-500">: </span>
                    <span className="text-emerald-400">true</span>
                  </div>
                  <div><span className="text-stone-500">{"}"}</span></div>
                </div>

                <div className="pt-1 flex items-center gap-1">
                  <span className="text-stone-500">$ </span>
                  <span className="animate-blink text-emerald-400">▌</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
