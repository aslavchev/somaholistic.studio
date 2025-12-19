/**
 * Page-level translations
 * Navigation, error pages, and page-specific content
 */

import { TranslatedString } from "@/types";

export const PAGES_TEXT = {
  index: {
    skipToContent: { bg: "Към съдържанието", en: "Skip to content", it: "Vai al contenuto" },
  },

  notFound: {
    title: { bg: "Упс! Страницата не е намерена", en: "Oops! Page not found", it: "Ops! Pagina non trovata" },
    returnHome: { bg: "Върнете се към началото", en: "Return to Home", it: "Torna alla Home" },
  },
} as const;
