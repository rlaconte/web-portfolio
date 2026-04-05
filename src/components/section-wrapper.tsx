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
    <section
      id={id}
      className={`py-20 md:py-28 scroll-mt-20 ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {title && (
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-10">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
