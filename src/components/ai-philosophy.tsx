import Reveal from "./reveal";

export default function AIPhilosophy() {
  return (
    <section className="relative z-10">
      <div className="bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <div className="flex gap-6 lg:gap-10">
              {/* Vertical accent bar */}
              <div
                className="bg-accent w-[3px] flex-shrink-0 self-stretch rounded-full"
                aria-hidden="true"
              />

              <div>
                <span className="font-mono text-accent text-xs tracking-[0.25em] uppercase block mb-4">
                  On AI &amp; Engineering
                </span>
                <p className="font-mono text-text-secondary text-sm lg:text-base leading-[1.8] max-w-3xl">
                  I treat AI as a senior pair programmer. Claude, Copilot, and
                  custom tooling are integrated into every stage of my workflow
                  — architecture reviews, code generation, debugging,
                  documentation. This is not a novelty. It is how I think
                  faster, catch issues earlier, and ship better systems.
                  Engineers who ignore these tools will be outpaced by those
                  who don&apos;t.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
