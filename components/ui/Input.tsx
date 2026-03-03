'use client';

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, rightElement, containerClassName, className, ...props }, ref) => {
    return (
      <div className={cn('space-y-2 w-full', containerClassName)}>
        {label && (
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full h-14 bg-surface border border-border rounded-2xl px-5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary placeholder:text-muted-foreground/50 text-primary',
              icon && 'pl-12',
              rightElement && 'pr-12',
              error && 'border-red-500 focus:ring-red-500/5 focus:border-red-500',
              className
            )}
            {...props}
          />
          {rightElement && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {rightElement}
            </div>
          )}
        </div>
        {error && (
          <p className="text-[10px] font-bold text-red-500 ml-1 uppercase tracking-widest">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
