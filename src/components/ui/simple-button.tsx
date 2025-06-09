
import React from 'react';

interface SimpleButtonProps {
  variant?: 'primary' | 'secondary' | 'language';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function SimpleButton({ 
  variant = 'primary', 
  children, 
  className = '', 
  onClick, 
  type = 'button' 
}: SimpleButtonProps) {
  const getButtonClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500/10 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20';
      case 'secondary':
        return 'bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:shadow-lg hover:shadow-white/10';
      case 'language':
        return 'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 text-sm';
      default:
        return 'bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500/10';
    }
  };

  const getPadding = () => {
    return variant === 'language' ? 'px-4 py-2' : 'px-8 py-4';
  };

  return (
    <button
      className={`${getButtonClasses()} ${getPadding()} rounded-2xl font-bold transition-all duration-300 
                 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-green-500/30 ${className}`}
      type={type}
      onClick={onClick}
    >
      <span className="flex items-center gap-3 font-bold tracking-tight">
        {children}
      </span>
    </button>
  );
}
