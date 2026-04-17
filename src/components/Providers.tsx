'use client';

import type { Dictionary, Locale } from '@/lib/i18n';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/sonner';

export function Providers({
  children,
  initialLanguage,
  initialTranslations,
}: {
  children: React.ReactNode;
  initialLanguage: Locale;
  initialTranslations: Dictionary;
}) {
  return (
    <LanguageProvider initialLanguage={initialLanguage} initialTranslations={initialTranslations}>
      <Toaster />
      {children}
    </LanguageProvider>
  );
}
