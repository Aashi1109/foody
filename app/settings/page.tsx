'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { 
  Mail, 
  Lock, 
  Utensils, 
  Bell, 
  MapPin, 
  Shield, 
  HelpCircle, 
  Info, 
  LogOut, 
  ChevronRight,
  Edit2,
  User
} from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
  const [shareLocation, setShareLocation] = useState(true);

  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col">
      <Header 
        title="Settings" 
        backHref="/profile" 
      />

      <div className="flex-1 px-6 py-8 space-y-8 overflow-y-auto hide-scrollbar">
        {/* Profile Summary */}
        <div className="flex items-center gap-4 py-2">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center border border-border overflow-hidden">
              <User className="w-8 h-8 text-muted-foreground/40" />
            </div>
            <Link href="/settings/profile">
              <button className="absolute bottom-0 right-0 w-6 h-6 bg-primary text-surface rounded-full flex items-center justify-center border-2 border-surface shadow-sm hover:scale-110 transition-transform">
                <Edit2 className="w-3 h-3" />
              </button>
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">Alex Johnson</h2>
            <p className="text-sm text-muted-foreground font-medium">Foodie Explorer</p>
          </div>
        </div>

        {/* Account Information */}
        <section className="space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Account Information</h3>
          <Card padding="none" className="bg-surface border border-border rounded-2xl overflow-hidden shadow-sm">
            <Link href="/settings/email">
              <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors border-b border-border group text-primary">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-surface transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold">Email</span>
                    <span className="block text-[10px] text-muted-foreground font-medium">alex.johnson@example.com</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </button>
            </Link>
            <Link href="/settings/password">
              <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors group text-primary">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-surface transition-colors">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold">Change Password</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </button>
            </Link>
          </Card>
        </section>

        {/* Preferences */}
        <section className="space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Preferences</h3>
          <Card padding="none" className="bg-surface border border-border rounded-2xl overflow-hidden shadow-sm">
            <Link href="/settings/cuisines">
              <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors border-b border-border group text-primary">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-surface transition-colors">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold">Cuisine Interests</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground">Vegan, Asian</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </div>
              </button>
            </Link>
            <Link href="/settings/location">
              <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors border-b border-border group text-primary">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-surface transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold">Default Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground">San Francisco</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </div>
              </button>
            </Link>
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors group text-primary">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-surface transition-colors">
                  <Bell className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold">Notifications</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
            </button>
          </Card>
        </section>

        {/* Privacy */}
        <section className="space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Privacy</h3>
          <Card padding="none" className="bg-surface border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="w-full flex items-center justify-between p-4 border-b border-border text-primary">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold">Share Location</span>
                  <span className="block text-[10px] text-muted-foreground font-medium">Visible on active events</span>
                </div>
              </div>
              <button 
                onClick={() => setShareLocation(!shareLocation)}
                className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${shareLocation ? 'bg-primary' : 'bg-muted'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-surface rounded-full transition-all duration-300 shadow-sm ${shareLocation ? 'left-6' : 'left-1'}`} />
              </button>
            </div>
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors group text-primary">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-surface transition-colors">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold">Data & Privacy</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
            </button>
          </Card>
        </section>

        {/* Support */}
        <section className="space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Support</h3>
          <Card padding="none" className="bg-surface border border-border rounded-2xl overflow-hidden shadow-sm">
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors border-b border-border group text-primary">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-surface transition-colors">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold">Help & Support</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors group text-primary">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-surface transition-colors">
                  <Info className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold">About App</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-muted-foreground">v2.4.0</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </div>
            </button>
          </Card>
        </section>

        {/* Sign Out */}
        <div className="pt-4 pb-12">
          <Button variant="secondary" size="xl" className="w-full border border-border shadow-sm">
            <LogOut className="w-5 h-5" />
            Sign Out
          </Button>
          <p className="text-center text-[10px] font-bold text-muted-foreground/40 mt-6 tracking-widest uppercase">FoodEvents Inc. © 2024</p>
        </div>
      </div>
    </main>
  );
}
