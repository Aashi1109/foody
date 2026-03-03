'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Header } from '@/components/ui/Header';
import { 
  CheckCircle2, 
  EyeOff, 
  Eye, 
  Check, 
  X, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const requirements = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'One uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'One number', met: /[0-9]/.test(password) },
    { label: 'One special character', met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-muted rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-muted rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <Header title="" backHref="/" className="bg-transparent border-none absolute top-0 left-0 right-0" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex flex-col gap-8 z-10 mt-12"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary">Welcome back</h1>
          <p className="text-muted-foreground font-medium">Enter your password to continue</p>
        </div>

        {/* User Badge */}
        <div className="mx-auto flex items-center gap-3 bg-surface px-4 py-2 pr-5 rounded-full shadow-sm border border-border w-fit max-w-full">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-surface text-[10px] font-black shadow-inner">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold truncate text-primary">john.doe@example.com</span>
          </div>
          <CheckCircle2 className="w-4 h-4 text-accent ml-1" />
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Input 
              id="password" 
              placeholder="Password" 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-lg h-16"
              rightElement={
                <button 
                  className="text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-muted transition-colors" 
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              }
            />

            {/* Password Strength Checks */}
            <div className="space-y-2 mt-4 px-2">
              {requirements.map((req, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 transition-colors duration-300 ${req.met ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  {req.met ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <X className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{req.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <Link href="/preferences" className="block">
              <Button size="lg" className="w-full text-lg">
                Log In
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <button className="w-full text-muted-foreground font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors py-2" type="button">
              Forgot Password?
            </button>
          </div>
        </form>
      </motion.div>

      <footer className="absolute bottom-10 left-0 right-0 text-center px-10">
        <p className="text-[10px] text-muted-foreground leading-relaxed font-medium">
          Protected by reCAPTCHA and subject to the <span className="text-primary font-bold underline">Privacy Policy</span> and <span className="text-primary font-bold underline">Terms of Service</span>.
        </p>
      </footer>
    </main>
  );
}
