'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { BottomNav } from '@/components/ui/BottomNav';
import { 
  MoreVertical, 
  CloudUpload, 
  MapPin, 
  Rocket, 
  ArrowRight,
  ChevronDown,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function CreateEventPage() {
  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col">
      <Header 
        title="Create Event" 
        backHref="/explore" 
        rightElement={
          <button className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        }
      />
      <div className="px-6 pb-4">
        <div className="h-1 w-full bg-muted mt-4 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '66%' }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>

      <div className="flex-1 px-6 py-8 space-y-8 overflow-y-auto hide-scrollbar">
        {/* Image Upload */}
        <div className="group relative">
          <div className="h-48 rounded-3xl border-2 border-dashed border-border bg-muted flex flex-col items-center justify-center gap-3 transition-all group-hover:border-primary/30 group-hover:bg-muted/80">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/20">
              <CloudUpload className="w-6 h-6 text-surface" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold">Upload Event Cover</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Tap or drag image here</p>
            </div>
          </div>
          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
        </div>

        {/* Location Section */}
        <section className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Location</label>
          <Card padding="none" className="h-40 bg-muted border border-border relative overflow-hidden grayscale rounded-3xl">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20" />
                <div className="relative w-10 h-10 bg-primary border-2 border-surface rounded-full flex items-center justify-center shadow-xl">
                  <MapPin className="w-5 h-5 text-surface" />
                </div>
              </div>
              <div className="bg-surface/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm border border-border">
                Tap to pinpoint
              </div>
            </div>
          </Card>
        </section>

        {/* Form Details */}
        <Card padding="lg" className="bg-surface border border-border rounded-[2.5rem] space-y-6 shadow-sm">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Event Details</label>
            <Input 
              placeholder="Event Title (e.g. Midnight Pizza)"
              className="h-14 rounded-2xl"
            />
          </div>

          <div className="relative">
            <select className="w-full h-14 bg-muted border-none rounded-2xl px-4 text-sm font-bold appearance-none focus:ring-2 focus:ring-primary/10 transition-all text-primary">
              <option disabled selected>Select Category</option>
              <option>🍕 Full Meals</option>
              <option>🥨 Snacks</option>
              <option>🥤 Drinks</option>
              <option>🍰 Dessert</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Starts</label>
              <Input 
                type="time" 
                className="h-14 rounded-2xl"
                rightElement={<Clock className="w-4 h-4 text-muted-foreground" />}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Ends</label>
              <Input 
                type="time" 
                className="h-14 rounded-2xl"
                rightElement={<Clock className="w-4 h-4 text-muted-foreground" />}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Notes</label>
            <textarea 
              placeholder="Dietary info, access codes, etc..."
              className="w-full h-32 bg-muted border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary/10 transition-all resize-none text-primary"
            />
          </div>
        </Card>
      </div>

      {/* Footer Action */}
      <div className="p-6 bg-surface/80 backdrop-blur-xl border-t border-border">
        <Link href="/success">
          <Button size="xl" className="w-full justify-between px-6">
            <span className="flex items-center gap-3">
              <Rocket className="w-5 h-5" />
              Launch Event
            </span>
            <div className="w-8 h-8 bg-surface/20 rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Button>
        </Link>
      </div>
      <BottomNav />
    </main>
  );
}
