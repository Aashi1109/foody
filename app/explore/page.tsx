'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { BottomNav } from '@/components/ui/BottomNav';
import { FilterDrawer } from '@/components/ui/FilterDrawer';
import { 
  Search, 
  SlidersHorizontal, 
  Navigation, 
  Plus, 
  Minus, 
  LocateFixed,
  X,
  Share2,
  Timer,
  Pizza
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const filters = [
  { id: 'ongoing', name: 'Ongoing Now', icon: <Timer className="w-4 h-4" /> },
  { id: 'vegan', name: 'Vegan' },
  { id: 'street', name: 'Street Food' },
];

export default function ExplorePage() {
  const [showDetails, setShowDetails] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface overflow-hidden relative">
      {/* Map Background */}
      <div className="absolute inset-0 grayscale contrast-[1.1] brightness-[1.1]">
        <Image 
          src="https://picsum.photos/seed/nyc-map/1000/1000" 
          alt="Map" 
          fill 
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Markers */}
        <div className="absolute top-1/3 left-1/4">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
            <div className="relative w-12 h-12 bg-primary border-[3px] border-surface rounded-full flex items-center justify-center shadow-xl">
              <Pizza className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/3 right-1/4">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
            <div className="relative w-10 h-10 bg-primary border-[3px] border-surface rounded-full flex items-center justify-center shadow-xl">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Header Search */}
      <div className="absolute top-0 left-0 w-full pt-12 px-5 space-y-4 z-20">
        <div className="bg-surface rounded-2xl p-2 flex items-center gap-3 shadow-xl border border-border">
          <div className="flex-1 flex items-center gap-3 px-3">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Find food events..." 
              className="bg-transparent border-none focus:ring-0 text-sm font-bold w-full h-10"
            />
          </div>
          <div className="w-px h-8 bg-border" />
          <Button 
            size="sm" 
            className="w-10 h-10 rounded-xl"
            onClick={() => setIsFilterOpen(true)}
          >
            <SlidersHorizontal className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {filters.map((f, i) => (
            <button 
              key={f.id}
              className={`flex h-10 shrink-0 items-center gap-2 px-5 rounded-full border text-xs font-bold transition-all ${
                i === 0 ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border-border text-primary hover:bg-muted'
              }`}
            >
              {f.icon}
              {f.name}
            </button>
          ))}
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        <button className="w-12 h-12 bg-surface border border-border rounded-2xl flex items-center justify-center shadow-lg hover:bg-muted transition-colors">
          <Plus className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 bg-surface border border-border rounded-2xl flex items-center justify-center shadow-lg hover:bg-muted transition-colors">
          <Minus className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg mt-2 active:scale-95 transition-all">
          <LocateFixed className="w-5 h-5" />
        </button>
      </div>

      {/* Event Card (Bottom Sheet) */}
      <AnimatePresence>
        {showDetails && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="absolute bottom-28 left-5 right-5 z-30"
          >
            <Card padding="lg" className="shadow-2xl space-y-5">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden grayscale relative border border-border">
                    <Image 
                      src="https://picsum.photos/seed/pizza/200/200" 
                      alt="Pizza" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold leading-tight">Community Pizza Night</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-xs font-bold text-muted-foreground">Open · Free Entry</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 text-sm font-bold">
                      <Timer className="w-4 h-4" />
                      45 mins remaining
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowDetails(false)}
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-2">
                <span className="px-3 py-1.5 bg-muted rounded-lg text-[10px] font-bold uppercase tracking-wider">Vegetarian Option</span>
                <span className="px-3 py-1.5 bg-muted rounded-lg text-[10px] font-bold uppercase tracking-wider">Outdoor Event</span>
              </div>

              <div className="flex gap-3">
                <Link href="/event/1" className="flex-1">
                  <Button size="lg" className="w-full">
                    <Navigation className="w-5 h-5" />
                    Get Directions
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-14 h-14 p-0">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Filter Drawer */}
      <FilterDrawer 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
      />
    </main>
  );
}
