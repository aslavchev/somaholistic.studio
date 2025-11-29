/**
 * Form validation utilities
 *
 * Reusable validation functions for user input
 */

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validate email address
 * - Checks for valid email format
 * - Ensures only ASCII characters (no Cyrillic)
 */
export function validateEmail(email: string, t: (bg: string, en: string) => string): ValidationResult {
  // Check for non-English (non-ASCII) characters
  const hasNonEnglish = /[^\x20-\x7F]/.test(email);
  if (hasNonEnglish) {
    return {
      valid: false,
      error: t("Имейлът трябва да съдържа само английски букви", "Email must contain only English characters")
    };
  }

  // Standard email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      valid: false,
      error: t("Невалиден имейл", "Invalid email")
    };
  }

  return { valid: true };
}

/**
 * Validate phone number
 * - Accepts 9+ digits for Bulgarian numbers
 * - Accepts 10+ digits for international numbers
 */
export function validatePhone(phone: string, t: (bg: string, en: string) => string): ValidationResult {
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length < 9) {
    return {
      valid: false,
      error: t("Невалиден телефон", "Invalid phone")
    };
  }

  return { valid: true };
}

/**
 * Validate name
 * - Minimum 2 characters
 */
export function validateName(name: string, t: (bg: string, en: string) => string): ValidationResult {
  if (name.trim().length < 2) {
    return {
      valid: false,
      error: t("Минимум 2 символа", "Minimum 2 characters")
    };
  }

  return { valid: true };
}

/**
 * Sanitize user input
 * - Removes HTML brackets
 * - Trims whitespace
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim();
}
