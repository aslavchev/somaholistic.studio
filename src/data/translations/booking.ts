/**
 * Booking Dialog and Steps translations
 */

import { TranslatedString } from "@/types";

export const BOOKING_TEXT = {
  dialog: {
    description: {
      bg: "Попълнете формата за да резервирате вашата процедура",
      en: "Fill out the form to book your appointment",
      it: "Compila il modulo per prenotare"
    },
  },

  step1: {
    selectService: { bg: "Изберете услуга", en: "Select Service", it: "Seleziona Servizio" },
    selectDuration: { bg: "Изберете продължителност", en: "Select Duration", it: "Seleziona Durata" },
    min: { bg: "мин", en: "min", it: "min" },
  },

  step2: {
    selectDate: { bg: "Изберете дата", en: "Select Date", it: "Seleziona Data" },
    selectTime: { bg: "Изберете час", en: "Select Time", it: "Seleziona Ora" },
    availabilityNote: {
      bg: "💡 Моля, изберете желаната дата и час. Мари ще потвърди наличността в рамките на 2 часа.",
      en: "💡 Please select your preferred date and time. Mari will confirm availability within 2 hours.",
      it: "💡 Seleziona data e ora preferite. Mari confermerà la disponibilità entro 2 ore."
    },
  },

  step3: {
    yourName: { bg: "Вашето име", en: "Your Name", it: "Il Tuo Nome" },
    fullName: { bg: "Име и фамилия", en: "Full Name", it: "Nome Completo" },
    phone: { bg: "Телефон", en: "Phone", it: "Telefono" },
  },

  step4: {
    min: { bg: "мин", en: "min", it: "min" },
    date: { bg: "Дата", en: "Date", it: "Data" },
    time: { bg: "Час", en: "Time", it: "Ora" },
    name: { bg: "Име", en: "Name", it: "Nome" },
    phone: { bg: "Телефон", en: "Phone", it: "Telefono" },
    whatsappNote: {
      bg: "Ще бъдете пренасочени към WhatsApp за да потвърдите вашата резервация",
      en: "You will be redirected to WhatsApp to confirm your booking",
      it: "Verrai reindirizzato a WhatsApp per confermare la prenotazione"
    },
  },
} as const;
