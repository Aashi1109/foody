'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Card = ({ 
  children, 
  className, 
  variant = 'default', 
  padding = 'md',
  ...props 
}: CardProps) => {
  const variants = {
    default: 'bg-surface border border-border shadow-sm',
    elevated: 'bg-surface border border-border shadow-2xl',
    glass: 'bg-surface/80 backdrop-blur-xl border border-border shadow-2xl',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const rounded = {
    default: 'rounded-[2.5rem]',
    sm: 'rounded-2xl',
    md: 'rounded-3xl',
  };

  return (
    <motion.div
      className={cn(
        'overflow-hidden',
        variants[variant],
        paddings[padding],
        rounded.default,
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
