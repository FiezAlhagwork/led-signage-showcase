import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;

  // ألوان اختيارية
  titleColor?: string;
  descriptionColor?: string;
  badgeColor?: string;
  badgeBorderColor?: string;
  badgeBgColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  centered,

  titleColor = "text-white",
  descriptionColor = "text-white/70",
  badgeColor = "text-[#FF6B00]",
  badgeBorderColor = "border-[#FF6B00]/40",
  badgeBgColor = "bg-[#FF6B00]/10",
}) => {
  return (
    <div className={centered ? "text-center mb-16" : "text-right mb-16"}>
      {badge && (
        <span
          className={`inline-block px-5 py-2 rounded-full border ${badgeBorderColor} ${badgeColor} text-xs font-semibold tracking-wider mb-4 ${badgeBgColor} shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#FF6B00] hover:bg-[#FF6B00]/20 hover:shadow-lg hover:shadow-[#FF6B00]/20 cursor-pointer`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`text-2xl md:text-3xl font-extrabold tracking-tight mb-4 ${titleColor}`}
      >
        {title}
      </h2>

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