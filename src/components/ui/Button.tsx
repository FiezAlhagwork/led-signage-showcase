import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  // التعديل هنا: قمنا بتغيير rounded-full إلى rounded-2xl ليعطي حواف ناعمة مريحة جداً للعين وغير دائرية بالكامل
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap select-none';

  // الأشكال المختلفة للزر (Variants)
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20',
    secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm',
    outline: 'bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm'
  };

  // الأحجام المختلفة (Sizes)
  const sizes = {
    sm: 'text-xs px-3 py-1.5 rounded-xl', // حواف أنعم ومناسبة للزر الصغير
    md: 'text-sm px-6 py-3',
    lg: 'text-lg px-8 py-4'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;