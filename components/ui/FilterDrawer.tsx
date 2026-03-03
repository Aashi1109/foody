'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Leaf, 
  Wheat, 
  UtensilsCrossed, 
  Clock, 
  Calendar,
  ChevronRight
} from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterDrawer({ isOpen, onClose }: FilterDrawerProps) {
  const [distance, setDistance] = useState(5);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Bakery']);
  const [dietary, setDietary] = useState<string[]>(['Halal']);
  const [timing, setTiming] = useState<'ongoing' | 'upcoming'>('ongoing');

  const categories = ['Street Food', 'Bakery', 'Vegan', 'Desserts', 'Beverages'];
  const dietaryOptions = [
    { id: 'vegetarian', name: 'Vegetarian Only', icon: <Leaf className="w-4 h-4" /> },
    { id: 'gluten-free', name: 'Gluten-Free', icon: <Wheat className="w-4 h-4" /> },
    { id: 'halal', name: 'Halal', icon: <UtensilsCrossed className="w-4 h-4" /> },
  ];

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleDietary = (id: string) => {
    setDietary(prev => 
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-surface rounded-t-[2.5rem] shadow-2xl z-[70] h-[85vh] flex flex-col overflow-hidden"
          >
            {/* Handle */}
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-12 h-1.5 bg-muted rounded-full" />
            </div>

            {/* Header */}
            <div className="px-8 py-4 flex justify-between items-center border-b border-border">
              <h2 className="text-xl font-bold">Filter Events</h2>
              <button 
                onClick={onClose}
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-10 pb-32 hide-scrollbar">
              {/* Distance Section */}
              <section className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Distance</h3>
                  <span className="px-3 py-1 bg-muted rounded-lg text-sm font-bold">{distance} km</span>
                </div>
                <div className="relative pt-2">
                  <input 
                    type="range" 
                    min="1" 
                    max="20" 
                    step="0.5"
                    value={distance}
                    onChange={(e) => setDistance(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between mt-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    <span>1 km</span>
                    <span>20 km</span>
                  </div>
                </div>
              </section>

              {/* Categories Section */}
              <section className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                        selectedCategories.includes(cat)
                          ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                          : 'bg-surface text-primary border-border hover:bg-muted'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </section>

              {/* Dietary Needs Section */}
              <section className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Dietary Needs</h3>
                <div className="space-y-3">
                  {dietaryOptions.map((option) => (
                    <label 
                      key={option.id}
                      className="flex items-center justify-between p-4 rounded-2xl border border-border hover:bg-muted transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          dietary.includes(option.id) ? 'bg-primary text-white' : 'bg-muted text-muted-foreground group-hover:text-primary'
                        }`}>
                          {option.icon}
                        </div>
                        <span className="font-bold text-sm">{option.name}</span>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        dietary.includes(option.id) 
                          ? 'bg-primary border-primary' 
                          : 'border-border bg-surface'
                      }`}>
                        {dietary.includes(option.id) && <X className="w-3 h-3 text-white rotate-45" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="sr-only"
                        checked={dietary.includes(option.id)}
                        onChange={() => toggleDietary(option.id)}
                      />
                    </label>
                  ))}
                </div>
              </section>

              {/* Timing Section */}
              <section className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Timing</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTiming('ongoing')}
                    className={`flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border transition-all ${
                      timing === 'ongoing'
                        ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20'
                        : 'bg-surface text-muted-foreground border-border hover:bg-muted'
                    }`}
                  >
                    <Clock className="w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-widest">Ongoing Now</span>
                  </button>
                  <button
                    onClick={() => setTiming('upcoming')}
                    className={`flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border transition-all ${
                      timing === 'upcoming'
                        ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20'
                        : 'bg-surface text-muted-foreground border-border hover:bg-muted'
                    }`}
                  >
                    <Calendar className="w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-widest">Upcoming</span>
                  </button>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-surface/80 backdrop-blur-xl border-t border-border flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1"
                onClick={() => {
                  setDistance(5);
                  setSelectedCategories(['Bakery']);
                  setDietary(['Halal']);
                  setTiming('ongoing');
                }}
              >
                Reset
              </Button>
              <Button 
                size="lg" 
                className="flex-[2]"
                onClick={onClose}
              >
                Apply Filters
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
