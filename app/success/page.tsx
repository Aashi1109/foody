'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { 
  Check, 
  Map, 
  MapPin, 
  Clock, 
  Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col p-6">
      <div className="flex-1 flex flex-col items-center justify-center space-y-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/20">
            <Check className="w-12 h-12 text-surface stroke-[3px]" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary">Event Live!</h1>
            <p className="text-muted-foreground font-medium px-8">Your contribution is now visible on the map.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full"
        >
          <Card padding="lg" className="bg-muted rounded-[2.5rem] border border-border shadow-sm">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden grayscale shrink-0 border border-border">
                <Image 
                  src="https://picsum.photos/seed/burrito/200/200" 
                  alt="Burritos" 
                  width={80} 
                  height={80} 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-primary text-surface text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Meals</span>
                  <span className="text-[10px] text-muted-foreground font-bold">Just now</span>
                </div>
                <h3 className="font-bold text-lg leading-tight text-primary">Free Breakfast Burritos</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-xs font-bold mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Downtown Community Center
                </div>
              </div>
            </div>
            
            <div className="mt-5 pt-5 border-t border-border flex justify-between items-center px-1">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-bold text-primary/60">08:00 AM - 10:30 AM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-muted border-2 border-surface flex items-center justify-center text-[8px] font-black text-muted-foreground">
                  +1
                </div>
                <Users className="w-3.5 h-3.5 text-muted-foreground/40" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <div className="w-full space-y-3 pb-6">
        <Link href="/explore">
          <Button size="xl" className="w-full">
            <Map className="w-5 h-5" />
            View on Map
          </Button>
        </Link>
        <Link href="/explore">
          <Button variant="outline" size="xl" className="w-full">
            Done
          </Button>
        </Link>
      </div>
    </main>
  );
}
