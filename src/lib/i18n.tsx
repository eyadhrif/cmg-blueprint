'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import fr from '../../messages/fr.json';
import en from '../../messages/en.json';

export type Language = 'fr' | 'en';

const translations: Record<Language, typeof fr> = {
  fr,
  en: en as typeof fr,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string, fallback?: string) => string;
  tArray: (path: string) => string[];
  dict: typeof fr;
  isEn: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: (path: string, fallback?: string) => fallback || path,
  tArray: () => [],
  dict: fr,
  isEn: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const match = document.cookie.match(/cmg_lang=(fr|en)/);
      const cookieLang = match ? (match[1] as Language) : null;
      const storedLang = localStorage.getItem('cmg_lang') as Language | null;
      const activeLang = storedLang === 'fr' || storedLang === 'en' ? storedLang : cookieLang;

      if (activeLang && (activeLang === 'fr' || activeLang === 'en')) {
        setLanguageState(activeLang);
        document.documentElement.lang = activeLang;
      }
    } catch {
      // ignore in environments without localStorage
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('cmg_lang', lang);
      document.cookie = `cmg_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (path: string, fallback?: string): string => {
      const keys = path.split('.');
      let current: unknown = translations[language];

      for (const key of keys) {
        if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
          current = (current as Record<string, unknown>)[key];
        } else {
          return fallback !== undefined ? fallback : path;
        }
      }

      if (typeof current === 'string') {
        return current;
      }
      return fallback !== undefined ? fallback : path;
    },
    [language]
  );

  const tArray = useCallback(
    (path: string): string[] => {
      const keys = path.split('.');
      let current: unknown = translations[language];

      for (const key of keys) {
        if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
          current = (current as Record<string, unknown>)[key];
        } else {
          return [];
        }
      }

      if (Array.isArray(current)) {
        return current.filter((item): item is string => typeof item === 'string');
      }
      return [];
    },
    [language]
  );

  const contextValue = useMemo<LanguageContextType>(
    () => ({
      language,
      setLanguage,
      t,
      tArray,
      dict: translations[language],
      isEn: language === 'en',
    }),
    [language, setLanguage, t, tArray]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  return useContext(LanguageContext);
}
