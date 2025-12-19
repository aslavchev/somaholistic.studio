/**
 * ServiceCard component translations
 */

import { TranslatedString } from "@/types";

export const SERVICECARD_TEXT = {
  categories: {
    signature: { bg: "Авторска", en: "Signature", it: "Signature" },
    massage: { bg: "Масаж", en: "Massage", it: "Massaggio" },
    therapy: { bg: "Терапия", en: "Therapy", it: "Terapia" },
    beauty: { bg: "Красота", en: "Beauty", it: "Bellezza" },
    coaching: { bg: "Коучинг", en: "Coaching", it: "Coaching" },
  },

  benefits: {
    heading: { bg: "Какво ще получите:", en: "What You'll Get:", it: "Cosa Otterrai:" },
  },

  suitableFor: {
    heading: { bg: "Подходящ за:", en: "Suitable For:", it: "Adatto Per:" },
  },

  buttons: {
    call: { bg: "Обади се", en: "Call Now", it: "Chiama Ora" },
    showMore: { bg: "Виж повече", en: "Show More", it: "Mostra Di Più" },
    showLess: { bg: "Виж по-малко", en: "Show Less", it: "Mostra Meno" },
  },
} as const;
