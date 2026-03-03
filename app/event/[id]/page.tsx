'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  BadgeCheck, 
  Timer, 
  Utensils, 
  Navigation, 
  MessageCircle,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function EventDetailsPage() {
  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface relative pb-32">
      {/* Hero Header */}
      <div className="relative h-[420px] w-full shrink-0">
        <div className="absolute inset-0">
          <Image 
            src="https://picsum.photos/seed/burger/800/800" 
            alt="Burger Bash" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-surface" />
        </div>

        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 pt-12">
          <Link href="/explore">
            <button className="w-10 h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-primary/40 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-primary/40 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-primary/40 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">Free Event</span>
            <div className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground">
              <BadgeCheck className="w-3.5 h-3.5 text-primary" />
              Verified Host
            </div>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
            Downtown<br />Burger Bash
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            <div className="bg-muted/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-border shadow-sm">
              <Timer className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold">1h 30m Left</span>
            </div>
            <div className="bg-muted/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-border shadow-sm">
              <Utensils className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold">Fast Food</span>
            </div>
            <div className="bg-muted/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-border shadow-sm">
              <Navigation className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold">0.5 mi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative -mt-6 rounded-t-[2.5rem] bg-surface px-8 pt-10 space-y-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-border p-0.5 grayscale">
              <Image 
                src="https://picsum.photos/seed/host/100/100" 
                alt="Marcus Chen" 
                width={48} 
                height={48} 
                className="rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Hosted by</p>
              <p className="text-base font-bold">Marcus Chen</p>
            </div>
          </div>
          <button className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>

        <section>
          <h3 className="text-lg font-bold mb-3">About the Event</h3>
          <p className="text-muted-foreground leading-relaxed font-medium">
            Come join us for a free burger tasting event! We&apos;re testing out some new spicy jalapeno smash burgers and truffle fries. First come, first served until supplies run out. Vegan options available upon request! 🍔🍟
          </p>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Location</h3>
            <button className="text-xs font-bold text-primary underline underline-offset-4">Open in Maps</button>
          </div>
          <Card padding="none" className="relative h-44 rounded-3xl overflow-hidden grayscale border border-border">
            <Image 
              src="https://picsum.photos/seed/map-detail/800/400" 
              alt="Map" 
              fill 
              className="object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20" />
                  <div className="relative w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-2xl border-2 border-surface">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-3 bg-surface px-4 py-1.5 rounded-xl text-[10px] font-bold shadow-lg border border-border uppercase tracking-widest">
                  Central Park West
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Who&apos;s Going</h3>
            <span className="text-xs font-bold text-muted-foreground">24 Attending</span>
          </div>
          <div className="flex -space-x-3 grayscale">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-surface overflow-hidden">
                <Image 
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="User" 
                  width={40} 
                  height={40} 
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-surface bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground">
              +20
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-surface/80 backdrop-blur-xl border-t border-border z-50">
        <div className="flex gap-4">
          <Button variant="outline" size="lg" className="flex-1">
            <Timer className="w-5 h-5" />
            Save
          </Button>
          <Button size="lg" className="flex-[2]">
            <Utensils className="w-5 h-5" />
            Participate Now
          </Button>
        </div>
      </div>
    </main>
  );
}
