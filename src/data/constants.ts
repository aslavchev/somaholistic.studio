/**
 * SOMA Studio - Business Constants
 *
 * Centralized business information and contact details.
 * Previously located in lib/constants.ts
 *
 * Last Updated: November 23, 2024
 */

export const CONTACT = {
  PHONE_DISPLAY: "+359 888 333 424",
  PHONE_TEL: "+359888333424",
  WHATSAPP: "359888333424",
  INSTAGRAM: "somaholisticstudio",
  GOOGLE_MAPS: "https://maps.app.goo.gl/WvbNBxrZhq6E9xfP8",
  ADDRESS: {
    STREET: "ул. \"409 - та\" 13",
    AREA: "Манастирски Ливади Изток",
    CITY: "София"
  }
} as const;

/**
 * Business hours
 */
export const BUSINESS_HOURS = {
  OPEN: "09:00",
  CLOSE: "19:00",
  DAYS: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
} as const;

/**
 * Booking policy
 */
export const BOOKING_POLICY = {
  CONFIRMATION_TIME_HOURS: 2,
  MIN_ADVANCE_BOOKING_HOURS: 4,
  APPOINTMENT_ONLY: true
} as const;
