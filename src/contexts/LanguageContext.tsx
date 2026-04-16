'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getTranslation, isLocale, localizePath, stripLocaleFromPath, type Dictionary, type Locale } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type Language = Locale;

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  initialLanguage: Language;
  initialTranslations: Dictionary;
}> = ({ children, initialLanguage, initialTranslations }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentPathLocale = pathname?.split('/')[1];
  const derivedLanguage = currentPathLocale && isLocale(currentPathLocale) ? currentPathLocale : initialLanguage;

  const [language, setLanguage] = useState<Language>(derivedLanguage);
  const [translations, setTranslations] = useState<Dictionary>(initialTranslations);
  const [isLoading] = useState(false);

  useEffect(() => {
    setLanguage(derivedLanguage);
  }, [derivedLanguage]);

  useEffect(() => {
    setTranslations(initialTranslations);
  }, [initialTranslations]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    const nextLanguage: Language = language === 'en' ? 'sr' : 'en';
    const currentPath = pathname || '/';
    const normalizedPath = stripLocaleFromPath(currentPath);

    localStorage.setItem('language', nextLanguage);
    setLanguage(nextLanguage);
    router.push(localizePath(nextLanguage, normalizedPath));
  };

  const t = (key: string): string => getTranslation(translations, key);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};
