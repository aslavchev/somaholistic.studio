/**
 * Utility function translations
 * Validation messages and booking message templates
 */

import { TranslatedString } from "@/types";

export const UTILS_TEXT = {
  booking: {
    greeting: {
      bg: "Здравейте! Искам да запазя час:",
      en: "Hello! I would like to book an appointment:",
      it: "Ciao! Vorrei prenotare un appuntamento:"
    },
    service: { bg: "Услуга:", en: "Service:", it: "Servizio:" },
    duration: { bg: "Продължителност:", en: "Duration:", it: "Durata:" },
    date: { bg: "Дата:", en: "Date:", it: "Data:" },
    time: { bg: "Час:", en: "Time:", it: "Ora:" },
    name: { bg: "Име:", en: "Name:", it: "Nome:" },
    email: { bg: "Email:", en: "Email:", it: "Email:" },
    phone: { bg: "Телефон:", en: "Phone:", it: "Telefono:" },
  },

  validation: {
    emailEnglishOnly: {
      bg: "Имейлът трябва да съдържа само английски букви",
      en: "Email must contain only English characters",
      it: "L'email deve contenere solo caratteri inglesi"
    },
    invalidEmail: {
      bg: "Невалиден имейл",
      en: "Invalid email",
      it: "Email non valida"
    },
    invalidPhone: {
      bg: "Невалиден телефон",
      en: "Invalid phone",
      it: "Telefono non valido"
    },
    minCharacters: {
      bg: "Минимум 2 символа",
      en: "Minimum 2 characters",
      it: "Minimo 2 caratteri"
    },
    nameLatinOnly: {
      bg: "Името трябва да съдържа само букви",
      en: "Name must contain only letters",
      it: "Il nome deve contenere solo lettere"
    },
  },
} as const;
