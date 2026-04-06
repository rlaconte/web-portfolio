interface SectionWrapperProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  title,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-28 scroll-mt-20 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {title && (
          <p className="font-[var(--font-mono)] text-sm text-[var(--text-tertiary)] mb-8 tracking-wide">
            <span className="text-[var(--accent)]">//</span>{" "}
            {title.toLowerCase().replace(/\s+/g, "_")}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
