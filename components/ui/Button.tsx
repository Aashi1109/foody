'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-primary text-surface shadow-xl shadow-primary/10 hover:opacity-90',
    secondary: 'bg-muted text-primary border border-border hover:bg-muted/80',
    ghost: 'bg-transparent text-primary hover:bg-muted',
    outline: 'bg-transparent border border-border text-primary hover:bg-muted',
  };

  const sizes = {
    sm: 'h-10 px-4 text-xs rounded-xl',
    md: 'h-12 px-6 text-sm rounded-2xl',
    lg: 'h-14 px-8 text-base rounded-2xl',
    xl: 'h-16 px-10 text-lg rounded-3xl',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(
        'flex items-center justify-center gap-2 font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
