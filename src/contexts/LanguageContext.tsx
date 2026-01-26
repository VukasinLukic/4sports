
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'sr';

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

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  // Initialize language from localStorage or Geolocation
  useEffect(() => {
    const initializeLanguage = async () => {
      // 1. Check Local Storage
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage) {
        setLanguage(savedLanguage);
        return;
      }

      // 2. Check Geolocation (IP)
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        // Countries detecting as Serbian
        const serbianCountries = ['RS', 'HR', 'BA', 'ME']; // Serbia, Croatia, Bosnia, Montenegro

        if (serbianCountries.includes(data.country_code)) {
          setLanguage('sr');
          localStorage.setItem('language', 'sr');
        } else {
          setLanguage('en');
          localStorage.setItem('language', 'en');
        }
      } catch (error) {
        console.warn('Geolocation check failed, defaulting to English:', error);
        setLanguage('en');
        localStorage.setItem('language', 'en');
      }
    };

    initializeLanguage();
  }, []);

  const loadTranslations = async (lang: Language) => {
    try {
      // Ne pokazuj loading stanje za promenu jezika
      if (Object.keys(translations).length > 0) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }

      const response = await fetch(`/${lang}.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error('Failed to load translations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'en' ? 'sr' : 'en';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};
