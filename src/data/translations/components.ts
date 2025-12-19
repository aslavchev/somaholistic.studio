/**
 * Common component translations
 */

import { TranslatedString } from "@/types";

export const COMPONENTS_TEXT = {
  discoveryCall: {
    label: { bg: "Безплатна консултация", en: "Free Clarity Call", it: "Consulenza Gratuita" },
    ariaLabel: { bg: "Безплатна консултация", en: "Free clarity call", it: "Consulenza gratuita" },
    message: {
      bg: "Здравейте! Не съм сигурен/а коя услуга е подходяща за мен. Може ли да ми помогнете да избера?",
      en: "Hello! I'm not sure which service is right for me. Can you help me choose?",
      it: "Ciao! Non sono sicuro quale servizio sia giusto per me. Puoi aiutarmi a scegliere?"
    },
  },

  whatsappButton: {
    ariaLabel: { bg: "Пишете ни в WhatsApp", en: "Contact us on WhatsApp", it: "Contattaci su WhatsApp" },
    message: {
      bg: "Здравейте! Искам да запазя час в SOMA STUDIO.",
      en: "Hello! I would like to book an appointment at SOMA STUDIO.",
      it: "Ciao! Vorrei prenotare un appuntamento a SOMA STUDIO."
    },
  },

  googleReviewBadge: {
    ratingAria: (rating: number, count: number, lang: 'bg' | 'en' | 'it') => {
      const templates = {
        bg: `${rating} рейтинг с ${count} отзива в Google`,
        en: `${rating} rating with ${count} Google reviews`,
        it: `${rating} valutazione con ${count} recensioni Google`
      };
      return templates[lang];
    },
    reviewsCount: (count: number, lang: 'bg' | 'en' | 'it') => {
      const templates = {
        bg: `${count} отзива`,
        en: `${count} reviews`,
        it: `${count} recensioni`
      };
      return templates[lang];
    },
  },

  about: {
    therapistImageAlt: {
      bg: "Мариана Игова – терапевт в SOMA STUDIO",
      en: "Mariana Igova – therapist at SOMA STUDIO",
      it: "Mariana Igova – terapista presso SOMA STUDIO"
    },
  },
} as const;
