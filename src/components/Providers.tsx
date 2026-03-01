'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/sonner';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Toaster />
      {children}
    </LanguageProvider>
  );
}
