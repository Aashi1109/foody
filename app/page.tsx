"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  MapPin,
  Heart,
  Users,
  ChevronRight,
  Mail,
  Apple,
  LocateFixed,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

// --- Splash Screen ---
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-surface"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="font-serif text-7xl font-bold italic tracking-tight text-primary">
          Foody<span className="text-primary not-italic">.</span>
        </h1>
        <p className="mt-4 font-sans text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Find your next meal
        </p>
      </motion.div>
      <div className="absolute bottom-12">
        <div className="w-6 h-6 border-2 border-muted border-t-primary rounded-full animate-spin" />
      </div>
    </motion.div>
  );
};

// --- Onboarding ---
const onboardingSlides = [
  {
    title: "Find Free Food",
    description:
      "Discover hidden gems and ongoing events sharing free meals in your local neighborhood.",
    icon: <MapPin className="w-20 h-20" strokeWidth={1.5} />,
  },
  {
    title: "Share with Others",
    description:
      "Help your community by sharing live food events you encounter in real-time.",
    icon: <Heart className="w-20 h-20" strokeWidth={1.5} />,
  },
  {
    title: "Join the Community",
    description:
      "Connect with neighbors and build a stronger, more sustainable network together.",
    icon: <Users className="w-20 h-20" strokeWidth={1.5} />,
  },
];

const Onboarding = ({ onComplete }: { onComplete: () => void }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col h-full bg-surface">
      <div className="flex justify-end p-6">
        <button
          onClick={onComplete}
          className="text-sm font-semibold text-muted-foreground"
        >
          Skip
        </button>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center"
          >
            <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center mb-10 text-primary">
              {onboardingSlides[current].icon}
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary">
              {onboardingSlides[current].title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {onboardingSlides[current].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-10 space-y-8">
        <div className="flex justify-center gap-2">
          {onboardingSlides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-1.5 bg-muted"}`}
            />
          ))}
        </div>

        <Button
          size="lg"
          className="w-full"
          onClick={() => (current < 2 ? setCurrent(current + 1) : onComplete())}
        >
          {current === 2 ? "Get Started" : "Continue"}
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

// --- Auth Screen ---
const AuthScreen = ({ onBack }: { onBack: () => void }) => {
  const [nearMe, setNearMe] = useState(true);
  const [email, setEmail] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full bg-surface px-6 pt-6"
    >
      <div className="mb-8">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-primary" />
        </button>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-primary">
          Taste the
          <br />
          Neighborhood
        </h1>
        <p className="text-muted-foreground font-medium">
          Join the exclusive community finding the best free food events near
          you.
        </p>
      </div>

      <div className="bg-muted rounded-[2.5rem] p-6 mb-6">
        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="chef@foodie.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Link
            href={`/login?email=${encodeURIComponent(email)}`}
            className="block"
          >
            <Button size="lg" className="w-full">
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="relative flex items-center my-8">
          <div className="flex-grow border-t border-border"></div>
          <span className="px-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Or connect with
          </span>
          <div className="flex-grow border-t border-border"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" size="lg" className="bg-surface">
            <Image
              src="https://picsum.photos/seed/google/24/24"
              alt="Google"
              width={20}
              height={20}
              referrerPolicy="no-referrer"
              className="rounded-full"
            />
          </Button>
          <Button variant="outline" size="lg" className="bg-surface">
            <Apple className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="bg-muted rounded-[2rem] p-1">
        <Card
          padding="sm"
          className="rounded-[1.75rem] flex items-center justify-between border-border"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
              <LocateFixed className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Near Me Mode</h3>
              <p className="text-[10px] text-muted-foreground">
                Show events within 5km radius
              </p>
            </div>
          </div>
          <button
            onClick={() => setNearMe(!nearMe)}
            className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${nearMe ? "bg-primary" : "bg-muted"}`}
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-surface rounded-full transition-all duration-300 ${nearMe ? "left-7" : "left-1"}`}
            />
          </button>
        </Card>
      </div>

      <div className="mt-auto pb-10 text-center">
        <p className="text-[10px] text-muted-foreground font-medium">
          By joining, you agree to our{" "}
          <span className="text-primary font-bold underline">Terms</span> &{" "}
          <span className="text-primary font-bold underline">
            Privacy Policy
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [step, setStep] = useState<"splash" | "onboarding" | "auth">("splash");

  return (
    <main className="h-screen w-full max-w-md mx-auto bg-surface overflow-hidden relative">
      <AnimatePresence mode="wait">
        {step === "splash" && (
          <SplashScreen key="splash" onComplete={() => setStep("onboarding")} />
        )}
        {step === "onboarding" && (
          <Onboarding key="onboarding" onComplete={() => setStep("auth")} />
        )}
        {step === "auth" && (
          <AuthScreen key="auth" onBack={() => setStep("onboarding")} />
        )}
      </AnimatePresence>
    </main>
  );
}
