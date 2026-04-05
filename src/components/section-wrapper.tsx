import ScrollReveal from "@/components/scroll-reveal";

interface SectionWrapperProps {
  id: string;
  title?: string;
  sectionNumber?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  title,
  sectionNumber,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-28 scroll-mt-20 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {title && (
          <ScrollReveal className="mb-12">
            <div className="flex items-baseline gap-3">
              {sectionNumber && (
                <span className="font-[var(--font-mono)] text-xs text-emerald-600 dark:text-emerald-400 tabular-nums">
                  {sectionNumber}
                </span>
              )}
              <h2 className="font-[var(--font-serif)] text-3xl text-stone-900 dark:text-stone-100">
                {title}
              </h2>
            </div>
          </ScrollReveal>
        )}
        {children}
      </div>
    </section>
  );
}
