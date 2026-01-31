import { useState, useEffect } from 'react';
import arTranslations from './ar.json';
import enTranslations from './en.json';

const translations = {
  ar: arTranslations,
  en: enTranslations
};

export const useTranslation = () => {
  const [language, setLanguage] = useState('ar'); // العربية افتراضياً

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  };

  useEffect(() => {
    // تعيين اللغة الافتراضية عند التحميل
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  }, []);

  return { t, language, changeLanguage };
};
