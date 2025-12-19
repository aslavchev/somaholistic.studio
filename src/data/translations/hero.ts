/**
 * Hero component translations
 */

import { TranslatedString } from "@/types";

export const HERO_TEXT = {
  welcome: {
    bg: "Добре дошли в",
    en: "Welcome to",
    it: "Benvenuti a"
  },

  description: {
    bg: "Изкуството на дълбоката релаксация. Подарете си 90 минути блаженство от шума на ежедневието със SOMA Ритуал - холистична терапия, вдъхновена от източни традиции.",
    en: "The art of deep relaxation. Gift yourself 90 minutes of bliss away from the noise of everyday life with the SOMA Ritual - holistic therapy inspired by Eastern traditions.",
    it: "L'arte del rilassamento profondo. Regalati 90 minuti di beatitudine lontano dal rumore della vita quotidiana con il Rituale SOMA - terapia olistica ispirata alle tradizioni orientali."
  },

  discoveryCall: {
    bg: "Не сте сигурни коя услуга е подходяща за вас?",
    en: "Not sure which service is right for you?",
    it: "Non sei sicuro di quale servizio sia adatto a te?"
  },
} as const;
