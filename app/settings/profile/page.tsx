"use client";

import React from "react";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Edit2 } from "lucide-react";
import Image from "next/image";

export default function ProfileDetailsPage() {
  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col">
      <Header title="Profile Details" backHref="/settings" />

      <div className="flex-1 px-6 py-8 flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center">
          <div className="relative w-24 h-24 mb-4">
            <div className="w-full h-full rounded-full border-2 border-border overflow-hidden grayscale">
              <Image
                src="https://picsum.photos/seed/alex/200/200"
                alt="Alex Johnson"
                width={96}
                height={96}
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-surface border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors">
              <Edit2 className="w-4 h-4 text-primary" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            Tap to change photo
          </p>
        </div>

        <form className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
              Display Name
            </label>
            <Input
              defaultValue="Alex Johnson"
              placeholder="Enter your full name"
              className="h-14 rounded-2xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
              Bio
            </label>
            <textarea
              defaultValue="Food enthusiast and street food explorer. Always on the hunt for the perfect pastry."
              placeholder="Tell us a bit about yourself..."
              className="w-full h-32 bg-surface border border-border rounded-2xl p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all resize-none text-primary"
            />
            <p className="text-[10px] text-muted-foreground font-bold text-right mt-1">
              102 / 160
            </p>
          </div>
        </form>
      </div>

      <div className="p-6 bg-surface/80 backdrop-blur-xl border-t border-border sticky bottom-0">
        <Button size="xl" className="w-full">
          Update Profile
        </Button>
      </div>
    </main>
  );
}
