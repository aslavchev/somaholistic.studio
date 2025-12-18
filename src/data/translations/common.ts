/**
 * Common translations used across multiple components
 * Centralized for consistency and easy maintenance
 */

import { TranslatedString } from "@/types";

export const COMMON_TEXT = {
  // Buttons & Actions
  buttons: {
    back: { bg: "Назад", en: "Back", it: "Indietro" },
    next: { bg: "Напред", en: "Next", it: "Avanti" },
    confirm: { bg: "Потвърди", en: "Confirm", it: "Conferma" },
    book: { bg: "Запази", en: "Book", it: "Prenota" },
    bookAppointment: { bg: "Запази час", en: "Book Appointment", it: "Prenota Appuntamento" },
    bookOnline: { bg: "Запази онлайн", en: "Book Online", it: "Prenota Online" },
    bookOnlineFull: { bg: "Запази час онлайн", en: "Book Online", it: "Prenota Online" },
    callNow: { bg: "Обади се", en: "Call Now", it: "Chiama Ora" },
    readMore: { bg: "Прочети повече", en: "Read more", it: "Leggi di più" },
    showLess: { bg: "Покажи по-малко", en: "Show less", it: "Mostra meno" },
  },

  // Form Labels
  form: {
    name: { bg: "Име", en: "Name", it: "Nome" },
    phone: { bg: "Телефон", en: "Phone", it: "Telefono" },
    email: { bg: "Email", en: "Email", it: "Email" },
    address: { bg: "Адрес", en: "Address", it: "Indirizzo" },
    date: { bg: "Дата", en: "Date", it: "Data" },
    time: { bg: "Час", en: "Time", it: "Ora" },
    workingHours: { bg: "Работно време", en: "Working Hours", it: "Orari di Lavoro" },
    service: { bg: "Услуга", en: "Service", it: "Servizio" },
    duration: { bg: "Продължителност", en: "Duration", it: "Durata" },
  },

  // Section Headings
  sections: {
    services: { bg: "Услуги", en: "Services", it: "Servizi" },
    ourServices: { bg: "Нашите", en: "Our", it: "Nostri" },
    ourServicesTitle: { bg: "Нашите услуги", en: "Our Services", it: "I Nostri Servizi" },

    about: { bg: "За нас", en: "About", it: "Chi Siamo" },
    aboutMe: { bg: "За мен", en: "About Me", it: "Chi Sono" },

    contact: { bg: "Контакт", en: "Contact", it: "Contatto" },
    contactInfo: { bg: "Информация за контакт", en: "Contact Information", it: "Informazioni di Contatto" },

    testimonials: { bg: "Отзиви", en: "Testimonials", it: "Testimonianze" },
    whatClientsSay: { bg: "Какво казват", en: "What Our", it: "Cosa Dicono" },
    ourClients: { bg: "нашите клиенти", en: "Clients Say", it: "I Nostri Clienti" },

    pricing: { bg: "Цени", en: "Pricing", it: "Prezzi" },
    pricingList: { bg: "Ценова", en: "Pricing", it: "Listino" },
    pricingListFull: { bg: "Ценова листа", en: "Pricing List", it: "Listino Prezzi" },

    packages: { bg: "Пакети", en: "Packages", it: "Pacchetti" },
    wellnessPackages: { bg: "Пакети за", en: "Wellness", it: "Pacchetti di" },
    wellnessWord: { bg: "благоденствие", en: "Bundles", it: "Benessere" },

    gifts: { bg: "Подаръци", en: "Gifts", it: "Regali" },
    giftExperience: { bg: "Подарете", en: "Gift", it: "Regala" },
    giftExperienceWord: { bg: "преживяване", en: "an Experience", it: "un'Esperienza" },

    gallery: { bg: "Галерия", en: "Gallery", it: "Galleria" },
    ourSpace: { bg: "Нашето", en: "Our", it: "Nostro" },
    ourSpaceWord: { bg: "пространство", en: "Space", it: "Spazio" },
  },

  // Common Phrases
  phrases: {
    yourAppointment: { bg: "своя час", en: "Your Appointment", it: "il Tuo Appuntamento" },
    individualSessions: { bg: "Индивидуални", en: "Individual", it: "Sessioni" },
    individualSessionsWord: { bg: "сесии", en: "Sessions", it: "Individuali" },
    pricesAndOptions: { bg: "Цени и опции:", en: "Prices & Options:", it: "Prezzi e Opzioni:" },
  },
} as const;
