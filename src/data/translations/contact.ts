/**
 * Contact component translations
 */

import { TranslatedString } from "@/types";

export const CONTACT_TEXT = {
  description: {
    bg: "Свържете се с нас, за да резервирате вашата терапия и да започнете пътуването към благополучието",
    en: "Contact us to book your therapy and begin your journey to wellness",
    it: "Contattaci per prenotare la tua terapia e iniziare il tuo viaggio verso il benessere"
  },

  directions: {
    bg: "Вижте на картата",
    en: "Get Directions",
    it: "Ottieni Indicazioni"
  },

  hours: {
    description: {
      bg: "Студиото работи само с предварително записани часове",
      en: "The studio operates by appointment only",
      it: "Lo studio opera solo su appuntamento"
    },
  },

  mapTitle: {
    bg: "Карта на SOMA STUDIO",
    en: "SOMA STUDIO Map",
    it: "Mappa di SOMA STUDIO"
  },
} as const;
