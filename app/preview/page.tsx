'use client';

import React, { useState } from 'react';
import { MediaPreview } from '@/components/ui/MediaPreview';
import { Button } from '@/components/ui/Button';
import { Maximize2 } from 'lucide-react';

export default function PreviewPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className="min-h-screen w-full max-w-md mx-auto bg-surface flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
          <Maximize2 className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-primary">Media Preview</h1>
        <p className="text-muted-foreground font-medium">Click the button below to view the media gallery.</p>
        <Button size="lg" onClick={() => setIsOpen(true)}>
          Open Preview
        </Button>
      </div>

      {isOpen && (
        <MediaPreview onClose={() => setIsOpen(false)} />
      )}
    </main>
  );
}
