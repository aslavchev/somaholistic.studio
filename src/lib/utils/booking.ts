/**
 * Booking utilities
 *
 * Business logic for booking time slots and availability
 */

import { BUSINESS_HOURS } from "@/data";
import { UTILS_TEXT } from "@/data/translations";

/**
 * All available time slots during business hours
 * Starting at 10:00 to ensure quality service preparation
 */
export const ALL_TIME_SLOTS = [
  "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00"
];

/**
 * Get available time slots for a given date
 * Enforces 3-hour minimum advance booking policy
 *
 * @param date - The selected date
 * @param minAdvanceHours - Minimum hours in advance (default: 3)
 * @returns Array of available time slots
 */
export function getAvailableTimeSlots(date: Date | undefined, minAdvanceHours: number = 3): string[] {
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
 * Get optimal initial booking date
 * Returns today if slots are available, otherwise tomorrow
 *
 * @param minAdvanceHours - Minimum hours in advance (default: 3)
 * @returns Optimal date for booking
 */
export function getOptimalBookingDate(minAdvanceHours: number = 3): Date {
  const today = new Date();
  const availableSlotsToday = getAvailableTimeSlots(today, minAdvanceHours);

  // If no slots available today, return tomorrow
  if (availableSlotsToday.length === 0) {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  }

  return today;
}

/**
 * Build booking confirmation message for WhatsApp
 *
 * @param data - Booking form data
 * @param language - Current language ('bg' | 'en' | 'it')
 * @returns Formatted WhatsApp message
 */
export function buildBookingMessage(
  data: {
    service: string;
    duration: string;
    date: Date | undefined;
    time: string;
    name: string;
    phone: string;
    countryCode: string;
  },
  language: 'bg' | 'en' | 'it'
): string {
  // Strip leading 0 if present (Bulgarian users type 0888, but international format is +359 888)
  const cleanPhone = data.phone.replace(/^0/, '');
  const fullPhone = `${data.countryCode} ${cleanPhone}`;
  const formattedDate = data.date?.toLocaleDateString();

  return `${UTILS_TEXT.booking.greeting[language]}

${UTILS_TEXT.booking.service[language]} ${data.service}
${UTILS_TEXT.booking.duration[language]} ${data.duration}
${UTILS_TEXT.booking.date[language]} ${formattedDate}
${UTILS_TEXT.booking.time[language]} ${data.time}
${UTILS_TEXT.booking.name[language]} ${data.name}
${UTILS_TEXT.booking.phone[language]} ${fullPhone}`;
}
