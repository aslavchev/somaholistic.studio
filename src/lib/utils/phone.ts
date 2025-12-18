/**
 * Phone number utilities
 *
 * Handles phone number formatting and WhatsApp URL generation
 */

/**
 * Format phone number as XXX XXX XXX
 */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '');

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`;
}

/**
 * Build a WhatsApp URL with pre-filled message
 */
export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Format full phone number with country code
 */
export function formatFullPhone(countryCode: string, phone: string): string {
  return `+${countryCode} ${phone}`;
}

export const COUNTRY_CODES = [
  { code: "+359", flag: "🇧🇬", country: "Bulgaria" },
  { code: "+39", flag: "🇮🇹", country: "Italy" },
  { code: "+1", flag: "🇺🇸", country: "USA" },
  { code: "+44", flag: "🇬🇧", country: "UK" },
  { code: "+49", flag: "🇩🇪", country: "Germany" },
  { code: "+33", flag: "🇫🇷", country: "France" },
  { code: "+34", flag: "🇪🇸", country: "Spain" }
];
