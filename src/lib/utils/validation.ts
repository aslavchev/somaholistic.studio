/**
 * Form validation utilities
 *
 * Reusable validation functions for user input
 */

import { UTILS_TEXT } from "@/data/translations";

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validate email address
 * - Checks for valid email format
 * - Ensures only ASCII characters (no Cyrillic)
 */
export function validateEmail(email: string, language: 'bg' | 'en' | 'it'): ValidationResult {
  // Check for non-English (non-ASCII) characters
  const hasNonEnglish = /[^\x20-\x7F]/.test(email);
  if (hasNonEnglish) {
    return {
      valid: false,
      error: UTILS_TEXT.validation.emailEnglishOnly[language]
    };
  }

  // Standard email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      valid: false,
      error: UTILS_TEXT.validation.invalidEmail[language]
    };
  }

  return { valid: true };
}

/**
 * Validate phone number
 * - Accepts 9+ digits for Bulgarian numbers
 * - Accepts 10+ digits for international numbers
 */
export function validatePhone(phone: string, language: 'bg' | 'en' | 'it'): ValidationResult {
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length < 9) {
    return {
      valid: false,
      error: UTILS_TEXT.validation.invalidPhone[language]
    };
  }

  return { valid: true };
}

/**
 * Validate name
 * - Minimum 2 characters
 */
export function validateName(name: string, language: 'bg' | 'en' | 'it'): ValidationResult {
  if (name.trim().length < 2) {
    return {
      valid: false,
      error: UTILS_TEXT.validation.minCharacters[language]
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
