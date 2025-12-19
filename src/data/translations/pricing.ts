/**
 * Pricing page translations
 * Package bundles and pricing-related content
 */

import { TranslatedString } from "@/types";

export const PRICING_TEXT = {
  hero: {
    title: { bg: "Ценова", en: "Pricing", it: "Listino" },
    titleHighlight: { bg: "Листа", en: "List", it: "Prezzi" },
    description: {
      bg: "Прозрачни цени за всички наши терапии и консултации. Спестете с нашите пакети за благоденствие.",
      en: "Transparent pricing for all our therapies and consultations. Save with our wellness bundles.",
      it: "Prezzi trasparenti per tutte le nostre terapie e consulenze. Risparmia con i nostri pacchetti benessere."
    },
    currency: {
      bg: "Всички цени са в евро (€)",
      en: "All prices are in Euros (€)",
      it: "Tutti i prezzi sono in Euro (€)"
    },
  },

  packages: {
    title: { bg: "Пакети за", en: "Wellness", it: "Pacchetti di" },
    titleHighlight: { bg: "благоденствие", en: "Bundles", it: "Benessere" },
    description: {
      bg: "Инвестирайте в дългосрочното си здраве и спестете до 15% с нашите пакети",
      en: "Invest in your long-term wellness and save up to 15% with our bundles",
      it: "Investi nel tuo benessere a lungo termine e risparmia fino al 15% con i nostri pacchetti"
    },

    badges: {
      bestValue: { bg: "Най-добра стойност", en: "Best Value", it: "Miglior Valore" },
      mostPopular: { bg: "Най-популярен", en: "Most Popular", it: "Più Popolare" },
      topChoice: { bg: "Топ избор", en: "Signature", it: "Esclusivo" },
    },

    journey: {
      name: { bg: "Пакет пътуване", en: "Journey Bundle", it: "Pacchetto Viaggio" },
      subtitle: { bg: "4 сесии по избор", en: "4 sessions of your choice", it: "4 sessioni a tua scelta" },
    },

    transformation: {
      name: { bg: "Пакет трансформация", en: "Transformation Bundle", it: "Pacchetto Trasformazione" },
      subtitle: { bg: "6 сесии по избор", en: "6 sessions of your choice", it: "6 sessioni a tua scelta" },
    },

    benefits: {
      save: { bg: "Спестете", en: "Save", it: "Risparmia" },
      discount: { bg: "отстъпка", en: "discount", it: "sconto" },
      anyCombo: {
        bg: "Изберете всяка комбинация от услуги",
        en: "Choose any combination of services",
        it: "Scegli qualsiasi combinazione di servizi"
      },
      valid6months: { bg: "Валиден 6 месеца", en: "Valid for 6 months", it: "Valido per 6 mesi" },
      valid9months: { bg: "Валиден 9 месеца", en: "Valid for 9 months", it: "Valido per 9 mesi" },
      priorityBooking: { bg: "Приоритетно записване", en: "Priority booking", it: "Prenotazione prioritaria" },
      friendSession: {
        bg: "Една безплатна сесия за приятел",
        en: "One free friend session",
        it: "Una sessione gratuita per un amico"
      },
    },
  },

  individual: {
    title: { bg: "Индивидуални", en: "Individual", it: "Sessioni" },
    titleHighlight: { bg: "сесии", en: "Sessions", it: "Individuali" },
    description: {
      bg: "Опитайте една сесия преди да се ангажирате с пакет",
      en: "Try a single session before committing to a package",
      it: "Prova una singola sessione prima di impegnarti con un pacchetto"
    },
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
