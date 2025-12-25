/**
 * Gifts component translations
 * Gift certificates and voucher content
 */

import { TranslatedString } from "@/types";

export const GIFTS_TEXT = {
  hero: {
    title: { bg: "Подарете", en: "Gift", it: "Regala" },
    titleHighlight: { bg: "преживяване", en: "an Experience", it: "un'Esperienza" },
    description: {
      bg: "Подарете на любим човек възможността да избере своето пътешествие към благополучието",
      en: "Gift a loved one the freedom to choose their wellness journey",
      it: "Regala a una persona cara la libertà di scegliere il proprio percorso di benessere"
    },
  },

  serviceVoucher: {
    heading: {
      bg: "Ваучер за една от нашите услуги",
      en: "Voucher for One of Our Services",
      it: "Buono per Uno dei Nostri Servizi"
    },
    description: {
      bg: "Изберете услуга и подарете незабравимо изживяване",
      en: "Choose a service and gift an unforgettable experience",
      it: "Scegli un servizio e regala un'esperienza indimenticabile"
    },
    selectPlaceholder: { bg: "Изберете услуга", en: "Select Service", it: "Seleziona Servizio" },
    sendButton: { bg: "Изпрати подарък", en: "Send Gift", it: "Invia Regalo" },
  },

  customAmount: {
    heading: { bg: "Персонализирана сума", en: "Custom Amount", it: "Importo Personalizzato" },
    description: {
      bg: "Изберете своя собствена сума (минимум €26)",
      en: "Choose your own amount (minimum €26)",
      it: "Scegli il tuo importo (minimo €26)"
    },
    sendButton: { bg: "Изпрати", en: "Send", it: "Invia" },
  },

  whatsappMessages: {
    serviceVoucher: {
      bg: "Здравейте! Искам да закупя подаръчна карта за услугата: {service}.",
      en: "Hello! I would like to purchase a gift certificate for the service: {service}.",
      it: "Ciao! Vorrei acquistare un buono regalo per il servizio: {service}."
    },
    customAmount: {
      bg: "Здравейте! Искам да закупя подаръчна карта на стойност €{amount}.",
      en: "Hello! I would like to purchase a gift certificate worth €{amount}.",
      it: "Ciao! Vorrei acquistare un buono regalo del valore di €{amount}."
    },
  },

  features: {
    flexibility: {
      title: { bg: "Гъвкава валидност", en: "Flexible Validity", it: "Validità Flessibile" },
      description: {
        bg: "Картата е валидна до изчерпване на средствата",
        en: "Valid until balance is used",
        it: "Valido fino all'esaurimento del saldo"
      },
    },
    allServices: {
      title: { bg: "Всички процедури", en: "All Services", it: "Tutti i Servizi" },
      description: {
        bg: "Може да се използва за всяка процедура в студиото",
        en: "Can be used for any studio service",
        it: "Può essere utilizzato per qualsiasi servizio dello studio"
      },
    },
    easyPurchase: {
      title: { bg: "Лесно закупуване", en: "Easy Purchase", it: "Acquisto Facile" },
      description: {
        bg: "Свържете се с нас и ще организираме всичко",
        en: "Contact us and we'll arrange everything",
        it: "Contattaci e organizzeremo tutto"
      },
    },
  },
} as const;
