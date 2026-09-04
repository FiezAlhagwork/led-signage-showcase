import { Link } from "react-router-dom";
import type { ButtonProps } from "@/types";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  to,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap select-none";
  const variants = {
    primary:
      "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20",
    secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm",
    outline:
      "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 rounded-xl",
    md: "text-sm px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
