'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Megaphone, 
  Award, 
  MessageSquare, 
  Store
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/ui/Header';
import { BottomNav } from '@/components/ui/BottomNav';

const notifications = [
  {
    id: 1,
    section: 'Today',
    title: 'Community Pizza Night',
    time: '2m ago',
    user: 'Sarah Jenkins',
    action: 'replied to your thread:',
    content: '"Is there a vegan option available for tonight?"',
    quote: '"Yes! We\'ll have a dedicated station for vegan pizzas starting at 7 PM."',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    badge: <MessageCircle className="w-3 h-3 text-white" />,
    unread: true
  },
  {
    id: 2,
    section: 'Today',
    title: "Joe's Bistro",
    time: '1h ago',
    action: 'New free food event started nearby:',
    content: 'Surplus Bagels & Coffee.',
    isEvent: true,
    avatar: null, // Storefront icon
    badge: <Megaphone className="w-3 h-3 text-white" />,
    unread: true
  },
  {
    id: 4,
    section: 'Earlier',
    title: 'Achievement Unlocked',
    time: '3d ago',
    action: "You've earned the",
    content: '"Food Saver"',
    highlight: 'badge for attending 5 events this month!',
    isAchievement: true,
    unread: false
  },
  {
    id: 5,
    section: 'Earlier',
    title: 'Direct Message',
    time: '4d ago',
    user: 'Emily R.',
    action: 'sent you a message about the',
    content: 'Community Pizza Night.',
    avatar: 'https://picsum.photos/seed/emily/100/100',
    badge: <MessageSquare className="w-3 h-3 text-white" />,
    unread: false,
    dimmed: true
  }
];

export default function ActivityPage() {
  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col relative overflow-hidden">
      <Header 
        title="Notifications" 
        backHref="/explore" 
        rightElement={
          <button className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
            Mark all as read
          </button>
        } 
      />

      {/* Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="px-6 py-8 space-y-10">
          
          {/* Today Section */}
          <section className="space-y-4">
            <h2 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-4">Today</h2>
            <div className="space-y-2">
              {notifications.filter(n => n.section === 'Today').map((notif, idx) => (
                <div key={notif.id}>
                  <div className="group flex gap-4 p-4 rounded-2xl hover:bg-muted transition-all border border-transparent hover:border-border">
                    <div className="shrink-0 relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border border-border flex items-center justify-center grayscale">
                        {notif.avatar ? (
                          <Image 
                            src={notif.avatar} 
                            alt="Avatar" 
                            width={48} 
                            height={48} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <Store className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-primary rounded-full w-6 h-6 flex items-center justify-center border-2 border-surface shadow-sm">
                        {notif.badge}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-bold text-primary truncate">{notif.title}</p>
                        <span className="text-[10px] font-bold text-muted-foreground whitespace-nowrap ml-2">{notif.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-snug">
                        {notif.user && <span className="font-bold text-primary">{notif.user} </span>}
                        {notif.action} <span className={notif.isEvent ? "text-primary font-bold" : "text-muted-foreground"}>{notif.content}</span>
                      </p>
                      {notif.quote && (
                        <div className="mt-3 pl-3 border-l-2 border-border">
                          <p className="text-xs text-muted-foreground font-medium italic line-clamp-2">
                            {notif.quote}
                          </p>
                        </div>
                      )}
                    </div>
                    {notif.unread && (
                      <div className="shrink-0 self-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                    )}
                  </div>
                  {idx === 0 && <div className="h-px bg-border mx-4 my-1" />}
                </div>
              ))}
            </div>
          </section>

          {/* Earlier Section */}
          <section className="space-y-4">
            <h2 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-4">Earlier</h2>
            <div className="space-y-2">
              {notifications.filter(n => n.section === 'Earlier').map((notif, idx) => (
                <div key={notif.id} className={notif.dimmed ? "opacity-60" : ""}>
                  <div className="group flex gap-4 p-4 rounded-2xl hover:bg-muted transition-all border border-transparent hover:border-border">
                    <div className="shrink-0 relative">
                      <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border border-border ${notif.isAchievement ? "bg-primary" : "bg-muted grayscale"}`}>
                        {notif.isAchievement ? (
                          <Award className="w-6 h-6 text-surface" />
                        ) : notif.avatar ? (
                          <Image 
                            src={notif.avatar} 
                            alt="Avatar" 
                            width={48} 
                            height={48} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <Store className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                      {notif.badge && (
                        <div className="absolute -bottom-1 -right-1 bg-primary rounded-full w-6 h-6 flex items-center justify-center border-2 border-surface shadow-sm">
                          {notif.badge}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-bold text-primary truncate">{notif.title}</p>
                        <span className="text-[10px] font-bold text-muted-foreground whitespace-nowrap ml-2">{notif.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-snug">
                        {notif.user && <span className="font-bold text-primary">{notif.user} </span>}
                        {notif.action} <span className="font-bold text-primary">{notif.content}</span> {notif.highlight}
                      </p>
                    </div>
                  </div>
                  {idx === 0 && <div className="h-px bg-border mx-4 my-1" />}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
      <BottomNav />
    </main>
  );
}
