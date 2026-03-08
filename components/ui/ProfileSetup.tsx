'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Camera, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const ProfileSetup = () => {
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex items-center p-6 justify-between z-10">
        <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted transition-colors">
          <ArrowLeft className="w-5 h-5 text-primary" />
        </button>
        <h2 className="text-xl font-bold tracking-tight flex-1 text-center pr-10 text-primary">Set Up Profile</h2>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-32 overflow-y-auto hide-scrollbar z-10">
        {/* Avatar Section */}
        <div className="flex flex-col items-center py-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative group cursor-pointer"
          >
            <div className="p-1 rounded-full bg-muted/30 ring-4 ring-muted/10">
              <div className="h-40 w-40 rounded-full bg-[#FDE6D8] flex items-center justify-center relative overflow-hidden shadow-inner transition-transform group-hover:scale-[1.02]">
                {/* Placeholder inner circle */}
                <div className="h-16 w-16 rounded-full bg-white/40" />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-black text-white p-2.5 rounded-full shadow-xl border-2 border-white">
              <Camera className="w-4 h-4" />
            </div>
          </motion.div>
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-extrabold tracking-tight text-primary">Upload Photo</h3>
            <p className="text-muted-foreground text-sm font-medium mt-1.5">Personalize your profile</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="space-y-8 mt-4">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Full Name</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-16 rounded-2xl border-2 border-muted bg-white px-6 text-lg font-semibold focus:border-primary focus:ring-0 transition-all outline-none placeholder:text-muted-foreground/30"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 px-1">Gender</label>
            <div className="flex gap-3">
              <button 
                onClick={() => setGender('male')}
                className={`flex-1 h-14 flex items-center justify-center gap-2 rounded-full border-2 transition-all font-bold text-sm ${
                  gender === 'male' 
                    ? 'bg-black border-black text-white shadow-lg shadow-black/10' 
                    : 'bg-white border-muted text-muted-foreground hover:border-muted-foreground/30'
                }`}
              >
                <span className="text-lg">♂</span>
                Male
              </button>
              <button 
                onClick={() => setGender('female')}
                className={`flex-1 h-14 flex items-center justify-center gap-2 rounded-full border-2 transition-all font-bold text-sm ${
                  gender === 'female' 
                    ? 'bg-black border-black text-white shadow-lg shadow-black/10' 
                    : 'bg-white border-muted text-muted-foreground hover:border-muted-foreground/30'
                }`}
              >
                <span className="text-lg">♀</span>
                Female
              </button>
              <button 
                onClick={() => setGender('other')}
                className={`flex-1 h-14 flex items-center justify-center gap-2 rounded-full border-2 transition-all font-bold text-sm ${
                  gender === 'other' 
                    ? 'bg-black border-black text-white shadow-lg shadow-black/10' 
                    : 'bg-white border-muted text-muted-foreground hover:border-muted-foreground/30'
                }`}
              >
                <span className="text-lg">⋯</span>
                Other
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="p-6 bg-white/80 backdrop-blur-md border-t border-border sticky bottom-0 z-20">
        <Button size="xl" className="w-full rounded-2xl">
          Continue
          <ArrowRight className="w-5 h-5 ml-1" />
        </Button>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-muted/20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-muted/20 rounded-full blur-3xl z-0" />
    </div>
  );
};
