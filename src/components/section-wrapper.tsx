interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`scroll-mt-20 relative z-10 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">{children}</div>
    </section>
  );
}
