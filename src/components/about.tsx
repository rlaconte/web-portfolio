import SectionWrapper from "./section-wrapper";
import Reveal from "./reveal";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="border-t border-border-subtle py-20 lg:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Marginalia label */}
          <Reveal className="lg:col-span-3 mb-10 lg:mb-0">
            <span className="font-mono text-text-tertiary text-xs tracking-[0.25em] uppercase block">
              About
            </span>
          </Reveal>

          {/* Content */}
          <Reveal className="lg:col-span-9" delay={80}>
            <div className="font-mono text-text-secondary space-y-5 text-sm leading-[1.8] max-w-2xl">
              <p>
                Senior backend engineer with 5+ years building critical
                infrastructure in fintech and data/AI systems. I work across
                the stack but live in the backend — distributed systems,
                event-driven architectures, data pipelines, and APIs that need
                to stay up when it counts.
              </p>
              <p>
                Currently finishing my CS degree at UBA in Buenos Aires while
                shipping production systems full-time. I use AI tooling as a
                serious engineering multiplier — not a shortcut, but a way to
                think faster, catch edge cases earlier, and ship better code.
                This site was built that way.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
