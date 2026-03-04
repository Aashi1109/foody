"use client";

import React from "react";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Search, MapPin, LocateFixed, Plus, Minus } from "lucide-react";
import Image from "next/image";

export default function DefaultLocationPage() {
  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col">
      <Header title="Default Location" backHref="/settings" />

      <div className="flex-1 px-6 py-8 flex flex-col gap-6">
        <div className="relative">
          <Input
            defaultValue="San Francisco, CA"
            placeholder="Search address or area"
            icon={<Search className="w-5 h-5" />}
            className="h-14 rounded-2xl"
          />
        </div>

        <button className="flex items-center justify-center gap-2 py-4 rounded-2xl border border-primary text-primary hover:bg-muted transition-colors font-bold text-sm">
          <LocateFixed className="w-5 h-5" />
          Use Current Location
        </button>

        <div className="flex-1 rounded-[2.5rem] border border-border bg-muted relative overflow-hidden min-h-[300px] grayscale">
          <Image
            src="https://picsum.photos/seed/map-detail/800/800"
            alt="Map View Placeholder"
            fill
            className="object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20" />
              <div className="relative w-12 h-12 bg-primary border-2 border-surface rounded-full flex items-center justify-center shadow-xl">
                <MapPin className="w-6 h-6 text-surface" />
              </div>
            </div>
            <div className="w-2 h-2 bg-primary rounded-full mt-1" />
          </div>

          <div className="absolute bottom-6 right-6 flex flex-col gap-3">
            <button className="w-10 h-10 rounded-full bg-surface border border-border shadow-sm text-primary hover:bg-muted transition-colors flex items-center justify-center">
              <Plus className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-surface border border-border shadow-sm text-primary hover:bg-muted transition-colors flex items-center justify-center">
              <Minus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 bg-surface/80 backdrop-blur-xl border-t border-border sticky bottom-0">
        <Button size="xl" className="w-full">
          Confirm Location
        </Button>
      </div>
    </main>
  );
}
