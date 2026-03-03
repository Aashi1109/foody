'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { BottomNav } from '@/components/ui/BottomNav';
import { 
  Settings, 
  Edit2, 
  Trophy, 
  Heart, 
  BadgeCheck, 
  Calendar, 
  Utensils
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const activities = [
  {
    id: 1,
    title: "Community Soup Night",
    description: "Successfully shared 50 portions of vegetable soup with the downtown shelter.",
    time: "2h ago",
    icon: <Utensils className="w-5 h-5" />,
    participants: 12
  },
  {
    id: 2,
    title: "Bakery Leftovers Run",
    description: "Rescued 30 loaves of bread and distributed to local families.",
    time: "1d ago",
    icon: <Utensils className="w-5 h-5" />,
    participants: 5
  }
];

const impactData = [
  { day: 'Mon', value: 40 },
  { day: 'Tue', value: 65 },
  { day: 'Wed', value: 50 },
  { day: 'Thu', value: 85 },
  { day: 'Fri', value: 70 },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col pb-32">
      <Header 
        title="Profile" 
        backHref="/explore" 
        rightElement={
          <Link href="/settings">
            <button className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </Link>
        }
      />

      <div className="flex-1 px-6 pt-10 space-y-10 overflow-y-auto hide-scrollbar">
        {/* Profile Header */}
        <Card padding="lg" className="rounded-[2.5rem] shadow-xl border border-border flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-28 h-28 rounded-full border-4 border-surface shadow-xl overflow-hidden grayscale">
              <Image 
                src="https://picsum.photos/seed/alex/200/200" 
                alt="Alex Foodie" 
                width={112} 
                height={112} 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <button className="absolute bottom-1 right-1 w-8 h-8 bg-primary text-surface rounded-full flex items-center justify-center border-2 border-surface shadow-lg">
              <Edit2 className="w-3.5 h-3.5" />
            </button>
          </div>
          <h2 className="text-2xl font-black mb-1 text-primary">Alex Foodie</h2>
          <p className="text-sm font-bold text-muted-foreground mb-8">@alexrescues • Joined 2023</p>
          
          <div className="w-full flex justify-center gap-10 pt-8 border-t border-border">
            <div className="flex flex-col items-center">
              <span className="text-xl font-black text-primary">142</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mt-1">Events</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-black text-primary">28k</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mt-1">Impact</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-black text-primary">4.9</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mt-1">Rating</span>
            </div>
          </div>
        </Card>

        {/* Badges */}
        <section className="space-y-4">
          <h3 className="text-base font-bold px-1 text-primary">Badges & Achievements</h3>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted border border-border text-sm font-bold text-primary">
              <Trophy className="w-4 h-4 text-primary/60" />
              Top Contributor
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted border border-border text-sm font-bold text-primary">
              <Heart className="w-4 h-4 text-primary/60" />
              Food Rescuer
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted border border-border text-sm font-bold text-primary">
              <BadgeCheck className="w-4 h-4 text-primary/60" />
              Verified
            </div>
          </div>
        </section>

        {/* Manage Button */}
        <Button size="xl" className="w-full">
          <Calendar className="w-5 h-5" />
          Manage My Events
        </Button>

        {/* Recent Activity */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-base font-bold text-primary">Recent Activity</h3>
            <button className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-1 px-1">
            {activities.map((act) => (
              <Card key={act.id} padding="lg" className="min-w-[260px] rounded-3xl shadow-xl border border-border space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-primary">
                    {act.icon}
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground">{act.time}</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1 text-primary">{act.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{act.description}</p>
                </div>
                <div className="flex -space-x-2 grayscale">
                  {[1, 2].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-surface overflow-hidden">
                      <Image src={`https://picsum.photos/seed/u${act.id}${i}/50/50`} alt="User" width={24} height={24} referrerPolicy="no-referrer" />
                    </div>
                  ))}
                  <div className="w-6 h-6 rounded-full border-2 border-surface bg-muted flex items-center justify-center text-[8px] font-black text-muted-foreground">
                    +{act.participants}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Overview */}
        <Card padding="lg" className="rounded-[2.5rem] shadow-xl border border-border space-y-8">
          <h3 className="text-base font-bold text-primary">Impact Overview</h3>
          <div className="flex items-end justify-between h-40 px-2">
            {impactData.map((d, i) => (
              <div key={d.day} className="flex flex-col items-center gap-3 flex-1">
                <div className="w-8 h-24 flex items-end">
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${d.value}%`, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className={`w-full rounded-t-lg transition-colors ${d.day === 'Fri' ? 'bg-primary' : 'bg-primary/10 hover:bg-primary/20'}`}
                  />
                </div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{d.day}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </main>
  );
}
