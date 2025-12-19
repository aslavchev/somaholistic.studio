/**
 * Testimonials component translations
 */

import { TranslatedString } from "@/types";

export const TESTIMONIALS_TEXT = {
  heading: {
    title: { bg: "Какво казват", en: "What Our", it: "Cosa Dicono" },
    titleHighlight: { bg: "нашите клиенти", en: "Clients Say", it: "I Nostri Clienti" },
  },

  description: {
    bg: "Споделени преживявания от хора, които са открили пътя към баланс и благополучие",
    en: "Shared experiences from people who have discovered the path to balance and wellness",
    it: "Esperienze condivise da persone che hanno scoperto il percorso verso l'equilibrio e il benessere"
  },

  trustBadges: {
    googleRating: { bg: "5.0 в Google Maps", en: "5.0 on Google Maps", it: "5.0 su Google Maps" },
    certified: { bg: "Сертифициран специалист", en: "Certified Specialist", it: "Specialista Certificato" },
  },
} as const;
