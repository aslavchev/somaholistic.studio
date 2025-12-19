/**
 * Header component translations
 */

import { TranslatedString } from "@/types";

export const HEADER_TEXT = {
  tagline: { bg: "Соматични практики", en: "Somatic Practices", it: "Pratiche Somatiche" },

  nav: {
    services: { bg: "Услуги", en: "Services", it: "Servizi" },
    packages: { bg: "Пакети", en: "Packages", it: "Pacchetti" },
    gifts: { bg: "Подаръци", en: "Gifts", it: "Regali" },
    about: { bg: "За нас", en: "About", it: "Chi Siamo" },
    testimonials: { bg: "Отзиви", en: "Testimonials", it: "Testimonianze" },
    gallery: { bg: "Галерия", en: "Gallery", it: "Galleria" },
    contact: { bg: "Контакти", en: "Contact", it: "Contatti" },
  },

  mobileMenu: {
    openMenu: { bg: "Отвори меню", en: "Open menu", it: "Apri menu" },
    closeMenu: { bg: "Затвори меню", en: "Close menu", it: "Chiudi menu" },
  },
} as const;
