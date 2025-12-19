import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'bg' | 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (bgText: string, enText: string, itText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('bg');

  const t = (bgText: string, enText: string, itText?: string) => {
    if (language === 'bg') return bgText;
    if (language === 'it') return itText || enText;
    return enText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Provide more helpful error message with debugging info
    console.error(
      'useLanguage must be used within a LanguageProvider. ' +
      'Make sure LanguageProvider wraps your component tree in App.tsx'
    );
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
