"use client";

import React from "react";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail } from "lucide-react";

export default function EditEmailPage() {
  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col">
      <Header title="Edit Email" backHref="/settings" />

      <div className="flex-1 px-6 py-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-8 flex flex-col items-center">
          <div className="text-center space-y-2 w-full">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-muted mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Email Address</h2>
            <p className="text-sm text-muted-foreground font-medium">
              Current: alex.johnson@example.com
            </p>
          </div>

          <div className="w-full space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 sr-only">
                New Email Address
              </label>
              <Input
                placeholder="Enter new email address"
                type="email"
                className="h-16 rounded-2xl text-center text-lg font-bold"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-surface/80 backdrop-blur-xl border-t border-border sticky bottom-0">
        <Button size="xl" className="w-full">
          Save Changes
        </Button>
      </div>
    </main>
  );
}
