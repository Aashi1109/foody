"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import {
  Plus as PlusIcon,
  Send as SendIcon,
  Smile as SmileIcon,
  Image as ImageIconAlt,
  X as XIcon,
} from "lucide-react";
import Image from "next/image";

interface Attachment {
  id: string;
  name: string;
  url: string;
}

interface FloatingMessageBarProps {
  placeholder?: string;
  onSend: (message: string, attachments: Attachment[]) => void;
}

export default function FloatingMessageBar({
  placeholder = "Add a reply...",
  onSend,
}: FloatingMessageBarProps) {
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    if (
      direction === "down" &&
      latest > 50 &&
      isVisible &&
      attachments.length === 0 &&
      !message
    ) {
      setIsVisible(false);
    } else if (direction === "up" && !isVisible) {
      setIsVisible(true);
    }
    lastScrollY.current = latest;
  });

  const handleSend = () => {
    if (message.trim() || attachments.length > 0) {
      onSend(message, attachments);
      setMessage("");
      setAttachments([]);
      setIsVisible(true);
    }
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  };

  const addMockAttachment = () => {
    const newAttachment: Attachment = {
      id: Math.random().toString(36).substr(2, 9),
      name: "file_name.jpg",
      url: "https://picsum.photos/seed/attachment/100/100",
    };
    setAttachments((prev) => [...prev, newAttachment]);
    setIsVisible(true);
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-6 pb-10 z-50 pointer-events-none"
    >
      <div className="flex flex-col gap-3 items-start pointer-events-auto">
        {/* Attachment Chips */}
        <AnimatePresence>
          {attachments.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex flex-wrap gap-2"
            >
              {attachments.map((file) => (
                <motion.div
                  key={file.id}
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-surface border border-border rounded-full pl-1 pr-3 py-1.5 flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.08)] backdrop-blur-md"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-border shrink-0 shadow-inner">
                    <Image
                      src={file.url}
                      alt={file.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-primary truncate max-w-[120px]">
                    {file.name}
                  </span>
                  <button
                    onClick={() => removeAttachment(file.id)}
                    className="p-1 hover:bg-muted rounded-full transition-colors"
                  >
                    <XIcon className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Message Bar Pill */}
        <div className="w-full bg-surface border border-border rounded-full p-2 pl-2 pr-2 flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl">
          <button
            onClick={addMockAttachment}
            className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors shrink-0"
          >
            <PlusIcon className="w-5 h-5 text-primary" />
          </button>

          <div className="flex-1 flex items-center px-2">
            <input
              type="text"
              placeholder={placeholder}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (!isVisible) setIsVisible(true);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              onFocus={() => setIsVisible(true)}
              className="bg-transparent border-none focus:ring-0 text-sm font-bold w-full p-0 placeholder:text-muted-foreground/60"
            />
          </div>

          <div className="flex items-center gap-1 px-1">
            <button className="text-muted-foreground hover:text-primary transition-colors p-1.5 focus:outline-none">
              <ImageIconAlt className="w-5 h-5" />
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors p-1.5 focus:outline-none">
              <SmileIcon className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={handleSend}
            disabled={!message.trim() && attachments.length === 0}
            className="w-10 h-10 bg-primary text-surface rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all shrink-0 disabled:opacity-50 disabled:active:scale-100"
          >
            <SendIcon className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
