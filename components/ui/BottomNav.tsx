'use client';

import React, { useState } from 'react';
import { Compass, Heart, Plus, Bell, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BottomNavProps {
  variant?: 'light' | 'dark';
}

export const BottomNav = ({ variant = 'light' }: BottomNavProps) => {
  const pathname = usePathname();
  const isDark = variant === 'dark';
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { href: '/explore', icon: Compass, label: 'Explore' },
    { href: '/search', icon: Heart, label: 'Saved' },
    { href: '/create', icon: Plus, label: 'Create', isAction: true },
    { href: '/updates', icon: Bell, label: 'Updates' },
    { href: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <motion.div 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-8 left-0 right-0 w-full max-w-md mx-auto px-6 z-50 pointer-events-none"
    >
      <nav className={cn(
        "backdrop-blur-xl border rounded-full shadow-2xl p-2 flex items-center justify-between pointer-events-auto transition-colors duration-300",
        isDark ? "bg-black/90 border-white/10" : "bg-surface/90 border-border"
      )}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.isAction) {
            return (
              <Link key={item.href} href={item.href}>
                <button className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all",
                  isDark ? "bg-white text-black" : "bg-primary text-surface"
                )}>
                  <Plus className="w-6 h-6" />
                </button>
              </Link>
            );
          }

          if (isActive) {
            return (
              <motion.div
                key={item.href}
                layoutId="activeTab"
                className={cn(
                  "shadow-sm border rounded-full px-4 py-2 flex items-center gap-2",
                  isDark ? "bg-white/10 border-white/10" : "bg-surface border-border"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  isDark ? "bg-white" : "bg-primary"
                )}>
                  <Icon className={cn("w-4 h-4", isDark ? "text-black" : "text-surface")} />
                </div>
                <span className={cn("text-xs font-bold", isDark ? "text-white" : "text-primary")}>{item.label}</span>
              </motion.div>
            );
          }

          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={cn(
                "w-10 h-10 flex items-center justify-center transition-colors",
                isDark ? "text-white/40 hover:text-white" : "text-muted-foreground hover:text-primary"
              )}
            >
              <Icon className="w-6 h-6" />
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
};
