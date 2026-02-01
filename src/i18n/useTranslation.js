import { useState, useEffect } from 'react';
import arTranslations from './ar.json';
import enTranslations from './en.json';

const translations = {
  ar: arTranslations,
  en: enTranslations
};

export const useTranslation = () => {
  const [language, setLanguage] = useState('ar');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  const applyLanguage = (lang) => {
    setLanguage(lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    try {
      localStorage.setItem('qanati_lang', lang);
    } catch {
      // ignore storage errors
    }
  };

  const changeLanguage = (lang) => {
    applyLanguage(lang);
  };

  useEffect(() => {
    let initial = 'ar';
    try {
      const stored = localStorage.getItem('qanati_lang');
      if (stored && translations[stored]) initial = stored;
    } catch {
      // ignore storage errors
    }
    applyLanguage(initial);
  }, []);

  // Update document title and metadata
  useEffect(() => {
    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
  }, [language]);

  return { t, language, changeLanguage };
};
