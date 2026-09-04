import { Link } from "react-router-dom";
import type { CardProps } from "@/types";

const Card = ({ children, className = "", onClick, to }: CardProps) => {
  /* تأثير المرور بينعرض بس إذا الضغط بيعمل شي فعلاً */
  const isInteractive = Boolean(to || onClick);

  const classes = `group relative border border-white/10 shadow-xl overflow-hidden flex flex-col ${
    isInteractive
      ? "transition-all duration-500 hover:-translate-y-2 hover:border-primary cursor-pointer"
      : ""
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={classes}>
      {children}
    </div>
  );
};

export default Card;
