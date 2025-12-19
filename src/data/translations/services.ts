/**
 * Services component translations
 */

import { TranslatedString } from "@/types";

export const SERVICES_TEXT = {
  description: {
    bg: "Открийте пътя към вътрешно равновесие и хармония чрез нашите специализирани терапии",
    en: "Discover the path to inner balance and harmony through our specialized therapies",
    it: "Scopri il percorso verso l'equilibrio interiore e l'armonia attraverso le nostre terapie specializzate"
  },

  filter: {
    all: { bg: "Всички", en: "All", it: "Tutti" },
  },

  cta: {
    heading: {
      bg: "Не сте сигурни коя услуга е подходяща за вас?",
      en: "Not sure which service is right for you?",
      it: "Non sei sicuro quale servizio sia giusto per te?"
    },
    description: {
      bg: "Свържете се с Мари за безплатна консултация и тя ще ви помогне да изберете идеалната терапия за вашите нужди.",
      en: "Contact Mari for a free consultation and she will help you choose the ideal therapy for your needs.",
      it: "Contatta Mari per una consulenza gratuita e ti aiuterà a scegliere la terapia ideale per le tue esigenze."
    },
  },
} as const;
