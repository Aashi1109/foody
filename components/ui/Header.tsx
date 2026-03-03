'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HeaderProps {
  title: string;
  showBack?: boolean;
  backHref?: string;
  rightElement?: React.ReactNode;
  className?: string;
}

export const Header = ({ 
  title, 
  showBack = true, 
  backHref, 
  rightElement, 
  className 
}: HeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-border px-6 py-4 flex items-center justify-between",
      className
    )}>
      <div className="flex items-center gap-4">
        {showBack && (
          <button 
            onClick={handleBack}
            className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-primary" />
          </button>
        )}
      </div>
      
      <h1 className="text-lg font-bold absolute left-1/2 -translate-x-1/2 text-primary">
        {title}
      </h1>

      <div className="flex items-center gap-4">
        {rightElement || <div className="w-10" />}
      </div>
    </header>
  );
};
