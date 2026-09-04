import type { CardProps } from "@/types";

const Card = ({ children, className = "", onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`group relative border border-white/10 shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
