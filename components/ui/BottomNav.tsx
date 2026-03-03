'use client';

import React from 'react';
import { Compass, Search, Plus, Bell, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/explore', icon: Compass, label: 'Explore' },
    { href: '/search', icon: Search, label: 'Search' },
    { href: '/create', icon: Plus, label: 'Create', isAction: true },
    { href: '/updates', icon: Bell, label: 'Updates' },
    { href: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 w-full max-w-md bg-surface/90 backdrop-blur-xl border-t border-border px-8 pt-4 pb-8 z-40 rounded-t-[2.5rem] shadow-2xl">
      <div className="flex justify-between items-end">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.isAction) {
            return (
              <div key={item.href} className="relative -top-8">
                <Link href={item.href}>
                  <button className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-surface active:scale-95 transition-all">
                    <Icon className="w-8 h-8" />
                  </button>
                </Link>
              </div>
            );
          }

          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={cn(
                "flex flex-col items-center gap-1.5 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className="w-7 h-7" />
              <span className="text-[10px] font-bold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
