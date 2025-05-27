import { useState, useEffect } from 'react';
import { translations, type Translation } from '@/lib/i18n';

type Language = 'en' | 'ar';

// Global language state management
let globalLanguage: Language = (() => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  }
  return 'en';
})();

const listeners = new Set<() => void>();

function setGlobalLanguage(newLanguage: Language) {
  globalLanguage = newLanguage;
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    
    if (newLanguage === 'ar') {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }
  listeners.forEach(listener => listener());
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(globalLanguage);

  useEffect(() => {
    const listener = () => setLanguage(globalLanguage);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  const t = translations[language];
  const isRTL = language === 'ar';

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setGlobalLanguage(newLang);
  };

  return {
    language,
    t,
    isRTL,
    toggleLanguage,
  };
}
