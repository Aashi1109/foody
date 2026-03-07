'use client';

import React, { useState } from 'react';
import { Header } from '@/components/ui/Header';
import { Button } from '@/components/ui/Button';
import { 
  Calendar, 
  MessageCircle, 
  MessageSquare, 
  BellRing 
} from 'lucide-react';

const initialSettings = [
  { 
    id: 'events', 
    title: 'New Food Events', 
    description: 'Alerts for events near you', 
    icon: <Calendar className="w-5 h-5" />,
    enabled: true 
  },
  { 
    id: 'chat', 
    title: 'Chat Messages', 
    description: 'When someone messages you', 
    icon: <MessageCircle className="w-5 h-5" />,
    enabled: true 
  },
  { 
    id: 'replies', 
    title: 'Thread Replies', 
    description: 'Updates on your comments', 
    icon: <MessageSquare className="w-5 h-5" />,
    enabled: false 
  },
  { 
    id: 'reminders', 
    title: 'Event Reminders', 
    description: 'Before an event starts', 
    icon: <BellRing className="w-5 h-5" />,
    enabled: true 
  },
];

export default function NotificationSettingsPage() {
  const [settings, setSettings] = useState(initialSettings);

  const toggle = (id: string) => {
    setSettings(prev => prev.map(s => 
      s.id === id ? { ...s, enabled: !s.enabled } : s
    ));
  };

  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col">
      <Header title="Notification Settings" backHref="/settings" />

      <div className="flex-1 px-6 py-8 space-y-8 overflow-y-auto hide-scrollbar">
        <section className="space-y-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Alerts</h2>
          <div className="space-y-3">
            {settings.map((item) => (
              <div 
                key={item.id}
                className="flex items-center justify-between p-4 rounded-3xl border border-border bg-surface shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-primary">{item.title}</h3>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">{item.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => toggle(item.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    item.enabled ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <span 
                    className={`inline-block h-4 w-4 transform rounded-full bg-surface transition-transform ${
                      item.enabled ? 'translate-x-6' : 'translate-x-1'
                    }`} 
                  />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="p-6 bg-surface/80 backdrop-blur-xl border-t border-border sticky bottom-0">
        <Button size="xl" className="w-full">
          Save Preferences
        </Button>
      </div>
    </main>
  );
}
