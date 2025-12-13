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
  t: (bg: string, en: string) => string
): string {
  // Detect language: if customer's name contains Cyrillic → Bulgarian, else English
  const isBg = data.name.match(/[\u0400-\u04FF]/) !== null;

  // Format date: 15.12.2025 for BG, December 15, 2025 for EN
  const dateFormattedBg = data.date
    ? data.date.toLocaleDateString('bg-BG', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.')
    : '';
  const dateFormattedEn = data.date
    ? data.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : '';

  // Full phone for display
  const fullPhone = data.phone ? `+${data.countryCode || '359'} ${data.phone}` : '';

  // === Customer-visible part: short booking request ===
  const customerMessage = `${t("Здравейте! Искам да запазя час:", "Hello! I'd like to book an appointment:")}

Услуга: ${data.service}
Продължителност: ${data.duration} ${t("минути", "minutes")}
Дата: ${isBg ? dateFormattedBg : dateFormattedEn}
Час: ${data.time}
Име: ${data.name}
Email: ${data.email}
Телефон: ${fullPhone}`;

  // === Visible marker for Mary ===
  const maryMarker = `\n\n━━━━━━━━━━━━━━━━━━━━━━\n📋 КОПИРАЙ ЗА ПОТВЪРЖДЕНИЕ (скрито за клиента):\n━━━━━━━━━━━━━━━━━━━━━━\n`;

  // === Confirmation template (in customer's language) ===
  const confirmationTemplate = isBg
    ? `✅ Потвърдено! Вашата резервация е одобрена.

📅 Дата: ${dateFormattedBg}
⏰ Час: ${data.time}
💆 Услуга: ${data.service}
⏱️ Продължителност: ${data.duration} мин

📍 Адрес: ул. "409 - та" 13, Манастирски Ливади Изток, София
🔔 Моля, пристигнете 5 минути по-рано

Очаквам ви! 💚
SOMA Studio`
    : `✅ Confirmed! Your reservation is approved.

📅 Date: ${dateFormattedEn}
⏰ Time: ${data.time}
💆 Service: ${data.service}
⏱️ Duration: ${data.duration} min

📍 Address: ul. "409 - ta" 13, Manastirski Livadi Iztok, Sofia
🔔 Please arrive 5 minutes early

Looking forward to you! 💚
SOMA Studio`;

  // === Hide the template: insert zero-width space after every character ===
  const zwsp = '\u200B';
  const hiddenTemplate = confirmationTemplate
    .split('')
    .join(zwsp);  // Adds ZWSP after each character (including newlines)

  // Final message
  return customerMessage + maryMarker + hiddenTemplate;
}
