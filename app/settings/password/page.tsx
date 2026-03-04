"use client";

import React, { useState } from "react";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Lock, Eye, EyeOff, Check, X } from "lucide-react";

export default function ChangePasswordPage() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");

  const requirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "Contains a number", met: /[0-9]/.test(password) },
    {
      label: "Contains a special character",
      met: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col">
      <Header title="Change Password" backHref="/settings" />

      <div className="flex-1 px-6 py-8 flex flex-col items-center">
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-2">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-primary">Update Security</h2>
          <p className="text-sm text-muted-foreground font-medium px-8">
            Please enter your current password to create a new one.
          </p>
        </div>

        <form className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
              Current Password
            </label>
            <Input
              placeholder="••••••••"
              type={showCurrent ? "text" : "password"}
              className="h-14 rounded-2xl"
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {showCurrent ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              }
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
              New Password
            </label>
            <Input
              placeholder="Create a new password"
              type={showNew ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 rounded-2xl"
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {showNew ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              }
            />

            <div className="mt-4 space-y-3 px-1">
              <div className="flex gap-1 h-1.5 w-full">
                <div
                  className={`flex-1 rounded-full ${password.length > 0 ? "bg-primary" : "bg-muted"}`}
                />
                <div
                  className={`flex-1 rounded-full ${password.length > 4 ? "bg-primary" : "bg-muted"}`}
                />
                <div
                  className={`flex-1 rounded-full ${password.length > 8 ? "bg-primary" : "bg-muted"}`}
                />
                <div
                  className={`flex-1 rounded-full ${password.length > 10 ? "bg-primary" : "bg-muted"}`}
                />
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Fair password
              </p>
              <ul className="space-y-2">
                {requirements.map((req, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 text-xs font-bold ${req.met ? "text-primary" : "text-muted-foreground/40"}`}
                  >
                    {req.met ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <X className="w-3.5 h-3.5" />
                    )}
                    {req.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
              Confirm New Password
            </label>
            <Input
              placeholder="Re-enter new password"
              type={showConfirm ? "text" : "password"}
              className="h-14 rounded-2xl"
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {showConfirm ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              }
            />
          </div>
        </form>
      </div>

      <div className="p-6 bg-surface/80 backdrop-blur-xl border-t border-border sticky bottom-0">
        <Button size="xl" className="w-full">
          Update Password
        </Button>
      </div>
    </main>
  );
}
