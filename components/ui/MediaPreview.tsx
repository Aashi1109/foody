'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Share2, 
  Play, 
  Pause, 
  Volume2, 
  Settings, 
  Maximize, 
  ChevronLeft, 
  ChevronRight, 
  Info, 
  ZoomIn, 
  ZoomOut,
  FileText,
  ThumbsUp,
  Heart,
  Smile,
  Plus
} from 'lucide-react';
import Image from 'next/image';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  name: string;
  sharedBy: string;
  time: string;
  size: string;
  resolution: string;
  format: string;
}

const mockMedia: MediaItem[] = [
  {
    id: '1',
    type: 'video',
    url: 'https://picsum.photos/seed/video1/1920/1080',
    thumbnail: 'https://picsum.photos/seed/video1/200/200',
    name: 'brand_reels_final.mp4',
    sharedBy: 'Alex Rivera',
    time: '2:45 PM',
    size: '14.2 MB',
    resolution: '1920x1080',
    format: 'HEVC Video',
  },
  {
    id: '2',
    type: 'image',
    url: 'https://picsum.photos/seed/img1/1920/1080',
    thumbnail: 'https://picsum.photos/seed/img1/200/200',
    name: 'Project_Gallery_01.jpg',
    sharedBy: 'Alex Rivera',
    time: '2:50 PM',
    size: '2.4 MB',
    resolution: '1920x1080',
    format: 'JPEG Image',
  },
  {
    id: '3',
    type: 'image',
    url: 'https://picsum.photos/seed/img2/1920/1080',
    thumbnail: 'https://picsum.photos/seed/img2/200/200',
    name: 'Concept_Sketch_02.jpg',
    sharedBy: 'Alex Rivera',
    time: '3:00 PM',
    size: '1.8 MB',
    resolution: '1920x1080',
    format: 'JPEG Image',
  },
];

export const MediaPreview = ({ onClose }: { onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentMedia = mockMedia[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mockMedia.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mockMedia.length) % mockMedia.length);
    setIsPlaying(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-surface h-screen overflow-hidden"
    >
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between p-4 md:p-6 z-30 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary">
            <FileText className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-primary font-bold text-sm md:text-base leading-tight">{currentMedia.name}</span>
            <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Shared by {currentMedia.sharedBy} • {currentMedia.time}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary hover:bg-muted/80 transition-colors">
            <Download className="w-5 h-5" />
          </button>
          <button 
            onClick={onClose}
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-surface hover:opacity-90 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-2 md:p-6 relative group">
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 z-10 h-10 w-10 items-center justify-center rounded-full bg-muted/20 hover:bg-muted/40 text-primary transition-all opacity-0 group-hover:opacity-100 flex"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="relative w-full max-w-5xl aspect-video rounded-[2.5rem] overflow-hidden bg-black shadow-2xl border border-border group/card">
          {/* Info Icon Top Right - Less Prominent */}
          <div className="absolute top-6 right-6 z-20">
            <div className="flex items-center justify-center text-white/40 cursor-help hover:text-white transition-all peer">
              <Info className="w-4 h-4" />
            </div>
            <div className="absolute top-0 right-10 whitespace-nowrap bg-black/60 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/5 text-[10px] font-bold text-white uppercase tracking-widest opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none">
              {currentMedia.resolution} • {currentMedia.format}
            </div>
          </div>

          {/* Media Content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentMedia.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image 
                src={currentMedia.url} 
                alt={currentMedia.name} 
                fill 
                className={`object-contain ${currentMedia.type === 'image' ? 'grayscale' : ''}`}
                referrerPolicy="no-referrer"
              />
              
              {currentMedia.type === 'video' && !isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white transition-transform hover:scale-110 active:scale-95"
                  >
                    <Play className="w-10 h-10 fill-current" />
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Video Controls Overlay */}
          {currentMedia.type === 'video' && (
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity">
              {/* Progress Bar */}
              <div className="group/slider relative flex h-1.5 w-full cursor-pointer items-center rounded-full bg-white/20 mb-6">
                <div className="h-full w-1/3 rounded-full bg-white relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white shadow-lg opacity-0 group-hover/slider:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>
                  <div className="flex items-center gap-4">
                    <button className="text-white hover:text-white/80 transition-colors">
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">0:42 / 2:15</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="text-white hover:text-white/80 transition-colors">
                    <ZoomIn className="w-5 h-5" />
                  </button>
                  <button className="text-white hover:text-white/80 transition-colors">
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <button className="text-white hover:text-white/80 transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                  <button className="text-white hover:text-white/80 transition-colors">
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Image Controls Overlay */}
          {currentMedia.type === 'image' && (
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity">
              <div className="flex items-center justify-end gap-4">
                <button className="text-white hover:text-white/80 transition-colors">
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button className="text-white hover:text-white/80 transition-colors">
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button className="text-white hover:text-white/80 transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        <button 
          onClick={handleNext}
          className="absolute right-4 z-10 h-10 w-10 items-center justify-center rounded-full bg-muted/20 hover:bg-muted/40 text-primary transition-all opacity-0 group-hover:opacity-100 flex"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Area */}
      <div className="p-6 md:p-8 flex flex-col items-center gap-6 bg-surface/80 backdrop-blur-md border-t border-border sticky bottom-0">
        {/* Reactions Bar */}
        <div className="flex items-center gap-1 bg-muted p-1 rounded-full border border-border">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-muted/80 text-primary transition-colors">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-xs font-bold">12</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-muted/80 text-primary transition-colors">
            <Heart className="w-4 h-4" />
            <span className="text-xs font-bold">5</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-muted/80 text-primary transition-colors">
            <Smile className="w-4 h-4" />
            <span className="text-xs font-bold">3</span>
          </button>
          <div className="w-px h-6 bg-border mx-1" />
          <button className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-muted/80 text-primary transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-muted/80 text-muted-foreground transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="w-full overflow-x-auto hide-scrollbar py-4">
          <div className="flex items-center justify-center gap-4">
            {mockMedia.map((media, index) => (
              <button 
                key={media.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative shrink-0 w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all ${
                  index === currentIndex ? 'border-primary scale-110 shadow-xl' : 'border-border opacity-50 hover:opacity-100'
                }`}
              >
                <Image 
                  src={media.thumbnail} 
                  alt={media.name} 
                  fill 
                  className="object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
