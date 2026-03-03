'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { BottomNav } from '@/components/ui/BottomNav';
import { 
  ArrowLeft, 
  Search, 
  SlidersHorizontal, 
  Heart, 
  Navigation, 
  Timer, 
  CheckCircle2,
  Leaf
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: "Tuesday Taco Pop-up",
    description: "Spicy bean & corn tacos with salsa",
    distance: "0.3 mi",
    time: "45m left",
    tag: "FREE",
    image: "https://picsum.photos/seed/tacos/300/300",
    status: "urgent"
  },
  {
    id: 2,
    title: "Elote & Chips Stand",
    description: "Fresh corn cups and homemade chips",
    distance: "0.8 mi",
    time: "Just Started",
    image: "https://picsum.photos/seed/corn/300/300",
    status: "new"
  },
  {
    id: 3,
    title: "Community Garden Lunch",
    description: "Leftover catering, plant-based tacos",
    distance: "1.2 mi",
    time: "2h remaining",
    tag: "VEGAN",
    image: "https://picsum.photos/seed/garden/300/300",
    status: "normal"
  },
  {
    id: 4,
    title: "Downtown Food Drive",
    description: "Surplus grocery distribution",
    distance: "0.1 mi",
    time: "Ended 10m ago",
    tag: "CLOSED",
    image: "https://picsum.photos/seed/box/300/300",
    status: "closed"
  }
];

export default function SearchPage() {
  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface pb-32">
      <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-border px-4 py-4 space-y-4">
        <div className="flex items-center gap-3">
          <Link href="/explore">
            <button className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="flex-1">
            <Input 
              defaultValue="Tacos"
              placeholder="Search..."
              icon={<Search className="w-5 h-5" />}
              className="h-12 rounded-full"
            />
          </div>
          <button className="p-2 -mr-2 rounded-full hover:bg-muted transition-colors relative">
            <SlidersHorizontal className="w-6 h-6" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-primary text-white text-xs font-bold shadow-lg shadow-primary/20">All Results</button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-surface border border-border text-primary/60 text-xs font-bold hover:bg-muted">Nearest</button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-surface border border-border text-primary/60 text-xs font-bold hover:bg-muted">Closing Soon</button>
          <button className="whitespace-nowrap px-5 py-2 rounded-full bg-surface border border-border text-primary/60 text-xs font-bold hover:bg-muted">Vegan</button>
        </div>
      </header>

      <div className="p-4 space-y-6">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold text-muted-foreground">12 events found</h2>
          <Link href="/explore" className="text-xs font-bold text-primary underline underline-offset-4">Map View</Link>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <Link key={event.id} href={`/event/${event.id}`}>
              <Card 
                padding="none" 
                className={`flex p-3 gap-4 bg-surface rounded-3xl border border-border shadow-sm hover:shadow-md transition-all ${event.status === 'closed' ? 'opacity-60 grayscale' : ''}`}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-muted">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {event.tag && (
                    <div className={`absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full text-[8px] font-black tracking-widest text-white ${
                      event.tag === 'VEGAN' ? 'bg-accent' : 'bg-primary/60 backdrop-blur-sm'
                    }`}>
                      {event.tag}
                    </div>
                  )}
                  {event.status === 'closed' && (
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                      <span className="text-white text-[10px] font-black border border-white/50 px-2 py-1 rounded uppercase tracking-widest">Closed</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-base leading-tight">{event.title}</h3>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{event.description}</p>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1 text-xs font-bold">
                      <Navigation className="w-4 h-4" />
                      {event.distance}
                    </div>
                    <div className="w-1 h-1 bg-border rounded-full" />
                    <div className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md ${
                      event.status === 'urgent' ? 'bg-amber-50 text-amber-600' : 
                      event.status === 'new' ? 'bg-emerald-50 text-emerald-600' : 
                      'text-muted-foreground'
                    }`}>
                      {event.status === 'urgent' && <Timer className="w-3.5 h-3.5" />}
                      {event.status === 'new' && <CheckCircle2 className="w-3.5 h-3.5" />}
                      {event.time}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </main>
  );
}
