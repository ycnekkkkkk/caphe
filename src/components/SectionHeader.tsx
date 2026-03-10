interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <p className="text-[#8b5a2b] font-medium tracking-[0.2em] uppercase text-xs mb-3">
        {label}
      </p>
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2c2419] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[#5d4e37]/80 max-w-2xl mx-auto text-sm sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
