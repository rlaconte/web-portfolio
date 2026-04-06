import { Puzzle, Sparkles, Layers } from "lucide-react";

const cards = [
  {
    icon: Puzzle,
    title: "Problem First",
    body: "I decompose complex problems into clean abstractions. Architecture decisions before lines of code.",
    accent: "var(--accent)",
  },
  {
    icon: Sparkles,
    title: "AI-Augmented",
    body: "I use AI tools to prototype faster, catch edge cases earlier, and ship with higher confidence.",
    accent: "var(--accent-warn)",
  },
  {
    icon: Layers,
    title: "Systems Thinking",
    body: "I build for reliability, observability, and scale. The best backend code is the code nobody worries about.",
    accent: "var(--accent-secondary)",
  },
];

export default function HowIWork() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="font-[var(--font-mono)] text-sm text-[var(--text-tertiary)] mb-8 tracking-wide">
          <span className="text-[var(--accent)]">//</span> how_i_work
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {cards.map(({ icon: Icon, title, body, accent }) => (
            <div
              key={title}
              className="border border-[var(--border-subtle)] rounded-xl p-6 bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] transition-colors"
              style={{ borderTopColor: accent, borderTopWidth: "2px" }}
            >
              <Icon size={18} style={{ color: accent }} className="mb-4" />
              <h3 className="font-display text-sm text-[var(--text-primary)] mb-2">
                {title}
              </h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
