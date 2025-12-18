/**
 * Booking utilities
 *
 * Business logic for booking time slots and availability
 */

import { BUSINESS_HOURS } from "@/data";

/**
 * All available time slots during business hours
 */
export const ALL_TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00"
];

/**
 * Get available time slots for a given date
 * Enforces 2-hour minimum advance booking policy
 *
 * @param date - The selected date
 * @param minAdvanceHours - Minimum hours in advance (default: 2)
 * @returns Array of available time slots
 */
export function getAvailableTimeSlots(date: Date | undefined, minAdvanceHours: number = 2): string[] {
  if (!date) return ALL_TIME_SLOTS;

  const now = new Date();
  const selectedDate = new Date(date);

  // If selected date is not today, all slots are available
  const isToday = selectedDate.toDateString() === now.toDateString();
  if (!isToday) return ALL_TIME_SLOTS;

  // For today, filter out slots within minimum advance booking window
  const minAdvanceTime = new Date(now.getTime() + minAdvanceHours * 60 * 60 * 1000);

  return ALL_TIME_SLOTS.filter(slot => {
    const [hours, minutes] = slot.split(':').map(Number);
    const slotDateTime = new Date(selectedDate);
    slotDateTime.setHours(hours, minutes, 0, 0);

    return slotDateTime > minAdvanceTime;
  });
}

/**
 * Build booking confirmation message for WhatsApp
 *
 * @param data - Booking form data
 * @param t - Translation function
 * @returns Formatted WhatsApp message
 */
export function buildBookingMessage(
  data: {
    service: string;
    duration: string;
    date: Date | undefined;
    time: string;
    name: string;
    email: string;
    phone: string;
    countryCode: string;
  },
  t: (bg: string, en: string, it: string) => string
): string {
  const fullPhone = `+${data.countryCode} ${data.phone}`;
  const formattedDate = data.date?.toLocaleDateString();

  return `${t("Здравейте! Искам да запазя час:", "Hello! I would like to book an appointment:", "Ciao! Vorrei prenotare un appuntamento:")}

${t("Услуга:", "Service:", "Servizio:")} ${data.service}
${t("Продължителност:", "Duration:", "Durata:")} ${data.duration}
${t("Дата:", "Date:", "Data:")} ${formattedDate}
${t("Час:", "Time:", "Ora:")} ${data.time}
${t("Име:", "Name:", "Nome:")} ${data.name}
${t("Email:", "Email:", "Email:")} ${data.email}
${t("Телефон:", "Phone:", "Telefono:")} ${fullPhone}`;
}
