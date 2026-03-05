"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  MoreHorizontal,
  Plus,
  Send,
  Smile,
  Image as ImageIcon,
  Bell,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FloatingMessageBar from "@/components/ui/FloatingMessageBar";

const messages = [
  {
    id: 1,
    user: "John Doe",
    initials: "JD",
    status: "Participating",
    text: "Has anyone arrived at the park yet? I'm bringing extra napkins!",
    time: "10:24 AM",
    isMe: false,
  },
  {
    id: 2,
    user: "Sarah M.",
    image: "https://picsum.photos/seed/sarah/100/100",
    text: "Wow that looks amazing! I'm about 5 mins away.",
    time: "10:32 AM",
    isMe: false,
    hasThread: true,
    threadTitle: "PARKING",
    threadOriginal: "Is there free parking near the entrance?",
    threadParticipants: 4,
  },
];

export default function ChatPage() {
  const [message, setMessage] = useState("");

  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-surface/80 backdrop-blur-xl border-b border-border z-20 sticky top-0">
        <div className="flex items-center gap-4">
          <Link href="/event/1">
            <button className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors">
              <ArrowLeft className="w-5 h-5 text-primary" />
            </button>
          </Link>
          <div>
            <h2 className="text-lg font-bold leading-tight text-primary">
              Community BBQ
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Live Discussion
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center relative">
            <Bell className="w-5 h-5 text-primary" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-surface" />
          </button>
          <button className="w-10 h-10 bg-primary text-surface rounded-full flex items-center justify-center">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 hide-scrollbar">
        <div className="flex justify-center">
          <span className="px-4 py-1.5 bg-muted rounded-full text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Today, 10:23 AM
          </span>
        </div>

        {/* Message 1 */}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs font-bold border border-border shrink-0 text-primary">
            JD
          </div>
          <div className="space-y-1 max-w-[80%]">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-primary">John Doe</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[8px] font-bold rounded-full uppercase tracking-widest">
                Participating
              </span>
            </div>
            <div className="bg-muted p-4 rounded-2xl rounded-tl-none border border-border">
              <p className="text-sm font-medium leading-relaxed text-primary">
                Has anyone arrived at the park yet? I&apos;m bringing extra
                napkins!
              </p>
            </div>
            <span className="text-[10px] font-bold text-muted-foreground">
              10:24 AM
            </span>
          </div>
        </div>

        {/* Image Message */}
        <div className="flex flex-col items-end gap-2">
          <div className="w-full max-w-[85%] rounded-3xl overflow-hidden relative grayscale border border-border shadow-lg">
            <Image
              src="https://picsum.photos/seed/grill/600/400"
              alt="Grill"
              width={400}
              height={300}
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-surface">
              <p className="text-sm font-bold">Setting up the grill now! 🔥</p>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 bg-primary/40 backdrop-blur-md rounded-full flex items-center justify-center text-surface border border-surface/20">
              <Plus className="w-5 h-5 rotate-45" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 bg-muted px-2 py-1 rounded-full border border-border">
              <span>❤️</span>
              <span>👍</span>
              <span>🔥</span>
              <span>🤤</span>
            </div>
            <span className="text-[10px] font-bold text-muted-foreground">
              10:30 AM
            </span>
          </div>
        </div>

        {/* Message 2 with Thread */}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-border shrink-0 grayscale">
            <Image
              src="https://picsum.photos/seed/sarah/100/100"
              alt="Sarah"
              width={40}
              height={40}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-3 w-full max-w-[80%]">
            <div className="space-y-1">
              <span className="text-sm font-bold">Sarah M.</span>
              <div className="bg-muted p-4 rounded-2xl rounded-tl-none border border-border">
                <p className="text-sm font-medium leading-relaxed">
                  Wow that looks amazing! I&apos;m about 5 mins away.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-muted-foreground">
                  10:32 AM
                </span>
                <button className="text-[10px] font-bold text-primary flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  Reply to thread
                </button>
              </div>
            </div>

            {/* Thread Card */}
            <Link href="/thread/1">
              <div className="bg-muted/50 border border-border rounded-2xl p-4 space-y-3 relative group hover:bg-muted transition-colors">
                <div className="flex justify-between items-center">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Thread: Parking
                  </h4>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
                <div className="flex gap-3">
                  <span className="px-2 py-0.5 bg-surface text-[8px] font-bold rounded-full border border-border h-fit">
                    Original
                  </span>
                  <p className="text-xs font-bold text-muted-foreground line-clamp-1">
                    Is there free parking near the entrance?
                  </p>
                </div>
                <div className="flex -space-x-2 grayscale">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-surface overflow-hidden"
                    >
                      <Image
                        src={`https://picsum.photos/seed/u${i}/50/50`}
                        alt="User"
                        width={24}
                        height={24}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                  <div className="w-6 h-6 rounded-full border-2 border-surface bg-muted flex items-center justify-center text-[8px] font-black text-muted-foreground">
                    +2
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <FloatingMessageBar
        placeholder="Add a reply..."
        onSend={(msg, files) => {
          console.log("Sending message:", msg, "with attachments:", files);
          // Handle send logic here
        }}
      />
    </main>
  );
}
