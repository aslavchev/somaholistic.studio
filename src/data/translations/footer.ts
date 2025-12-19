/**
 * Footer component translations
 */

import { TranslatedString } from "@/types";

export const FOOTER_TEXT = {
  tagline: { bg: "Соматични практики", en: "Somatic Practices", it: "Pratiche Somatiche" },
  description: {
    bg: "Изкуството на дълбоката релаксация и холистичното възстановяване в сърцето на София.",
    en: "The art of deep relaxation and holistic restoration in the heart of Sofia.",
    it: "L'arte del rilassamento profondo e del restauro olistico nel cuore di Sofia."
  },

  contact: {
    heading: { bg: "Контакти", en: "Contact", it: "Contatti" },
  },

  hours: {
    heading: { bg: "Работно време", en: "Working Hours", it: "Orari di Lavoro" },
    description: {
      bg: "Студиото работи само с предварително записани часове",
      en: "The studio operates by appointment only",
      it: "Lo studio opera solo su appuntamento"
    },
  },

  quickLinks: {
    heading: { bg: "Бързи връзки", en: "Quick Links", it: "Link Rapidi" },
    home: { bg: "Начало", en: "Home", it: "Home" },
    services: { bg: "Услуги", en: "Services", it: "Servizi" },
    packages: { bg: "Пакети", en: "Packages", it: "Pacchetti" },
    gifts: { bg: "Подаръци", en: "Gifts", it: "Regali" },
    about: { bg: "За нас", en: "About", it: "Chi Siamo" },
  },

  cta: {
    heading: { bg: "Не сте сигурни?", en: "Not Sure?", it: "Non Sei Sicuro?" },
    description: {
      bg: "Свържете се с нас за безплатна консултация",
      en: "Contact us for a free consultation",
      it: "Contattaci per una consulenza gratuita"
    },
  },

  copyright: {
    bg: "© 2025 SOMA STUDIO. Всички права запазени.",
    en: "© 2025 SOMA STUDIO. All rights reserved.",
    it: "© 2025 SOMA STUDIO. Tutti i diritti riservati."
  },
} as const;
