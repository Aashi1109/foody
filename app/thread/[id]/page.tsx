'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  MoreHorizontal, 
  Plus, 
  Send, 
  Smile, 
  Image as ImageIcon,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const replies = [
  {
    id: 1,
    user: "Sarah J.",
    image: "https://picsum.photos/seed/sarah/100/100",
    text: "Yes! The spicy jackfruit ones are amazing. Highly recommend getting there early as the line is getting long.",
    time: "2m ago",
    likes: 5
  },
  {
    id: 2,
    user: "Mike R.",
    image: "https://picsum.photos/seed/mike/100/100",
    text: "Are they gluten-free by any chance? My friend has an allergy and we are heading there now.",
    time: "5m ago",
    likes: 1
  },
  {
    id: 3,
    user: "David K.",
    image: "https://picsum.photos/seed/david/100/100",
    text: "Just arrived! The line moves pretty fast actually. Don't be discouraged by the crowd.",
    time: "12m ago",
    likes: 8,
    photo: "https://picsum.photos/seed/line/400/300"
  }
];

export default function ThreadPage() {
  const [reply, setReply] = useState('');

  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-surface/80 backdrop-blur-xl border-b border-border z-20 sticky top-0">
        <Link href="/chat/1">
          <button className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5 text-primary" />
          </button>
        </Link>
        <h2 className="text-lg font-bold leading-tight absolute left-1/2 -translate-x-1/2 text-primary">Thread</h2>
        <button className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors">
          <MoreHorizontal className="w-6 h-6 text-primary" />
        </button>
      </header>

      {/* Thread Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 hide-scrollbar">
        {/* Main Message */}
        <div className="pb-8 border-b border-dashed border-border">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-border shrink-0 grayscale">
              <Image 
                src="https://picsum.photos/seed/alex/100/100" 
                alt="Alex Chen" 
                width={48} 
                height={48} 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-3 w-full">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-primary">Alex Chen</span>
                <span className="text-[10px] font-bold text-muted-foreground">2h ago</span>
              </div>
              <div className="bg-muted p-5 rounded-2xl rounded-tl-none border border-border">
                <p className="text-base font-medium leading-relaxed text-primary">Has anyone tried the vegan tacos at the downtown event yet? I heard they run out fast! 🌮</p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-xs font-bold text-primary">24 Replies</span>
                <div className="flex -space-x-2 grayscale opacity-70">
                  <div className="w-6 h-6 rounded-full border border-surface bg-muted flex items-center justify-center text-[10px]">👍</div>
                  <div className="w-6 h-6 rounded-full border border-surface bg-muted flex items-center justify-center text-[10px]">❤️</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Replies List */}
        <div className="space-y-8">
          <h3 className="text-lg font-bold">Replies</h3>
          <div className="space-y-10">
            {replies.map((rep) => (
              <div key={rep.id} className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-border shrink-0 grayscale opacity-90">
                  <Image 
                    src={rep.image} 
                    alt={rep.user} 
                    width={40} 
                    height={40} 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-primary">{rep.user}</span>
                    <div className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-[10px] font-bold text-muted-foreground">{rep.time}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed">{rep.text}</p>
                  
                  {rep.photo && (
                    <div className="mt-4 rounded-2xl overflow-hidden w-full h-40 relative grayscale border border-border shadow-md">
                      <Image 
                        src={rep.photo} 
                        alt="Reply photo" 
                        fill 
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-6 mt-4">
                    <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors group/btn">
                      <ThumbsUp className={`w-4 h-4 ${rep.likes > 5 ? 'fill-primary text-primary' : ''}`} />
                      <span className="text-xs font-bold">{rep.likes}</span>
                    </button>
                    <button className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <footer className="p-6 bg-surface border-t border-border pb-10">
        <div className="flex items-center gap-3">
          <button className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors shrink-0">
            <Plus className="w-6 h-6" />
          </button>
          <div className="flex-1 bg-muted rounded-full pl-6 pr-2 py-2 flex items-center gap-3 border border-border focus-within:border-primary transition-all">
            <input 
              type="text" 
              placeholder="Add a reply..." 
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-sm font-bold w-full p-0"
            />
            <div className="flex items-center gap-2">
              <button className="text-muted-foreground hover:text-primary transition-colors p-1">
                <ImageIcon className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors p-1">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            <button className="w-10 h-10 bg-primary text-surface rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all shrink-0">
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
