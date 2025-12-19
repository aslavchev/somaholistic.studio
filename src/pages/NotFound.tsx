import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { PAGES_TEXT } from "@/data/translations";

const NotFoundContent = () => {
  const location = useLocation();
  const { t, language } = useLanguage();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          {PAGES_TEXT.notFound.title[language]}
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          {PAGES_TEXT.notFound.returnHome[language]}
        </a>
      </div>
    </div>
  );
};

const NotFound = () => {
  return (
    <LanguageProvider>
      <NotFoundContent />
    </LanguageProvider>
  );
};

export default NotFound;
