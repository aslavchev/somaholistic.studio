/**
 * Packages component translations
 * Wellness bundle packages on homepage
 */

import { TranslatedString } from "@/types";

export const PACKAGES_TEXT = {
  badge: {
    bestValue: { bg: "Най-добра стойност", en: "Best Value", it: "Miglior Valore" },
  },

  hero: {
    title: { bg: "Пакети за", en: "Wellness", it: "Pacchetti di" },
    titleHighlight: { bg: "благоденствие", en: "Bundles", it: "Benessere" },
    description: {
      bg: "Инвестирайте в дългосрочното си здраве и спестете до 10% с нашите пакети",
      en: "Invest in your long-term wellness and save up to 10% with our bundles",
      it: "Investi nel tuo benessere a lungo termine e risparmia fino al 10% con i nostri pacchetti"
    },
  },

  serenityVoyage: {
    badge: { bg: "Най-популярен", en: "Most Popular", it: "Più Popolare" },
    title: { bg: "Пътешествие към Спокойствието", en: "Serenity Voyage", it: "Viaggio Serenità" },
    description: { bg: "4 процедури класически масаж", en: "4 classical massage sessions", it: "4 sessioni di massaggio classico" },
    benefit1: { bg: "4 процедури класически масаж", en: "4 classical massage sessions", it: "4 sessioni di massaggio classico" },
    benefit2: { bg: "Валиден 2 месеца", en: "Valid for 2 months", it: "Valido per 2 mesi" },
    benefit3: { bg: "Приоритетно записване", en: "Priority booking", it: "Prenotazione prioritaria" },
  },

  radianceRenaissance: {
    title: { bg: "Ренесанс на Блясъка", en: "Radiance Renaissance", it: "Rinascita Radiosa" },
    description: { bg: "4 процедури подмладяващ масаж за лице", en: "4 rejuvenating facial massage sessions", it: "4 sessioni di massaggio facciale ringiovanente" },
    benefit1: { bg: "4 процедури подмладяващ масаж за лице", en: "4 rejuvenating facial massage sessions", it: "4 sessioni di massaggio facciale ringiovanente" },
    benefit2: { bg: "Валиден 2 месеца", en: "Valid for 2 months", it: "Valido per 2 mesi" },
    benefit3: { bg: "Приоритетно записване", en: "Priority booking", it: "Prenotazione prioritaria" },
  },

  common: {
    save: { bg: "Спестете", en: "Save", it: "Risparmia" },
    discount: { bg: "отстъпка", en: "discount", it: "sconto" },
  },

  giftCta: {
    text: {
      bg: "Търсите подарък за специален човек?",
      en: "Looking for a gift for someone special?",
      it: "Cerchi un regalo per qualcuno di speciale?"
    },
    button: { bg: "Разгледайте подаръчните карти", en: "Explore Gift Certificates", it: "Esplora i Buoni Regalo" },
  },
} as const;
