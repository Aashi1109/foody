'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { 
  ArrowRight, 
  Utensils, 
  Leaf, 
  Coffee, 
  Soup, 
  Apple,
  MapPin,
  Edit2,
  Check
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { id: 'street', name: 'Street Food', icon: <Utensils className="w-4 h-4" /> },
  { id: 'vegan', name: 'Vegan', icon: <Leaf className="w-4 h-4" /> },
  { id: 'bakery', name: 'Bakery', icon: <Apple className="w-4 h-4" /> },
  { id: 'produce', name: 'Fresh Produce', icon: <Apple className="w-4 h-4" /> },
  { id: 'coffee', name: 'Coffee & Tea', icon: <Coffee className="w-4 h-4" /> },
  { id: 'homemade', name: 'Homemade', icon: <Soup className="w-4 h-4" /> },
];

export default function PreferencesPage() {
  const [selected, setSelected] = useState<string[]>(['street', 'bakery']);

  const toggle = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col">
      <Header title="Preferences" backHref="/" rightElement={<button className="text-sm font-bold text-muted-foreground">Skip</button>} />

      <div className="flex-1 px-6 pt-2 space-y-10 overflow-y-auto hide-scrollbar">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-primary">Let&apos;s set up your preferences</h1>
          <p className="text-muted-foreground leading-relaxed font-medium">
            Customize your feed to see the free food events you actually care about.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-lg font-bold text-primary">What do you like?</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => toggle(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all active:scale-95 text-sm font-bold ${
                  selected.includes(cat.id) 
                    ? 'bg-primary border-primary text-surface shadow-lg shadow-primary/20' 
                    : 'bg-surface border-border text-primary hover:bg-muted'
                }`}
              >
                {cat.icon}
                {cat.name}
                {selected.includes(cat.id) && <Check className="w-3 h-3 ml-1" />}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h2 className="text-lg font-bold text-primary">Set Your Base Location</h2>
            <button className="text-xs font-bold text-primary underline underline-offset-4 decoration-primary/20 hover:decoration-primary transition-all">
              Use Current Location
            </button>
          </div>
          
          <Card padding="none" className="rounded-3xl border border-border bg-muted shadow-sm">
            <div className="h-44 relative grayscale opacity-80">
              <Image 
                src="https://picsum.photos/seed/map/800/400" 
                alt="Map" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                  <div className="relative w-14 h-14 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 bg-surface flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Current Selection</p>
                <p className="text-lg font-bold text-primary">San Francisco, CA</p>
              </div>
              <button className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
                <Edit2 className="w-4 h-4 text-primary" />
              </button>
            </div>
          </Card>
          <p className="text-[10px] text-muted-foreground font-medium px-1">
            We use this to show you events nearby. You can always change this in your profile settings later.
          </p>
        </section>
      </div>

      <div className="p-6 bg-surface/80 backdrop-blur-xl border-t border-border">
        <Link href="/explore">
          <Button size="lg" className="w-full">
            Complete Setup
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
