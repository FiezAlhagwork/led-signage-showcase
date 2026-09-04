import type { SectionHeaderProps } from "@/types";

const SectionHeader = ({
  badge,
  title,
  description,
  centered,
  as: Heading = "h2",

  titleColor = "text-white",
  descriptionColor = "text-white/70",
  badgeColor = "text-primary",
  badgeBorderColor = "border-primary/40",
  badgeBgColor = "bg-primary/10",
}: SectionHeaderProps) => {
  return (
    <div className={centered ? "text-center mb-16" : "text-right mb-16"}>
      {badge && (
        <span
          className={`inline-block px-5 py-2 rounded-full border ${badgeBorderColor} ${badgeColor} text-xs font-semibold tracking-wider mb-4 ${badgeBgColor} shadow-sm`}
        >
          {badge}
        </span>
      )}

      <Heading
        className={`text-2xl md:text-3xl font-extrabold tracking-tight mb-4 ${titleColor}`}
      >
        {title}
      </Heading>

      {description && (
        <p
          className={`text-base md:text-lg max-w-3xl leading-relaxed ${descriptionColor} ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;