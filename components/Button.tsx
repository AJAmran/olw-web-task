'use client';

import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  className = "",
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  type = 'button',
  disabled = false
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 transition-all duration-300 font-bold whitespace-nowrap group cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-visible";
  
  const variants = {
    primary: "bg-[#ED3C6A] text-white hover:bg-opacity-90 shadow-sm rounded-[5px]",
    secondary: "bg-secondary text-white hover:bg-opacity-90 shadow-sm rounded-[5px]",
    outline: "bg-white border-2 border-[#ED3C6A] text-[#ED3C6A] hover:bg-primary hover:text-white transition-all duration-300 rounded-[5px]",
    ghost: "bg-transparent text-secondary hover:bg-secondary/5 rounded-full"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-semibold",
    lg: "px-8 py-4 text-[15px] lg:text-[16px]",
    xl: "px-10 py-5 text-lg"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {Icon && iconPosition === 'left' && (
        <Icon size={18} className="shrink-0 transition-transform group-hover:-translate-x-1" />
      )}
      
      {children}
      
      {Icon && iconPosition === 'right' && (
        <Icon size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
}
