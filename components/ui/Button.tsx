import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  showArrow = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#ef4444] to-[#ff6b6b] text-white shadow-lg hover:shadow-xl focus:ring-red-500",
    secondary: "bg-white text-navy-900 border border-navy-900 hover:bg-gray-50 focus:ring-navy-900",
    outline: "border-2 border-white text-white hover:bg-white/10 focus:ring-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};