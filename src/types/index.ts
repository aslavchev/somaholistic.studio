/**
 * Shared TypeScript Type Definitions
 *
 * Centralized type definitions used across the application
 */

/**
 * Supported languages
 */
export type Language = 'bg' | 'en';

/**
 * Translated string with both Bulgarian and English versions
 */
export interface TranslatedString {
  bg: string;
  en: string;
}

/**
 * Service category types
 */
export type ServiceCategory = 'signature' | 'massage' | 'therapy' | 'beauty' | 'coaching';

/**
 * Service pricing structure
 */
export interface ServicePricing {
  duration30?: {
    minutes: 30;
    price: number;
    label: TranslatedString;
  };
  duration60?: {
    minutes: 60;
    price: number;
    label: TranslatedString;
  };
  duration90?: {
    minutes: 90;
    price: number;
    label: TranslatedString;
  };
}

/**
 * Complete service definition
 */
export interface Service {
  id: string;
  title: TranslatedString;
  description: TranslatedString;
  category: ServiceCategory;
  pricing: ServicePricing;
  benefits?: TranslatedString[];
  suitableFor?: TranslatedString[];
  featured?: boolean;
  image?: string;
}

/**
 * Wellness package definition
 */
export interface WellnessPackage {
  id: string;
  name: TranslatedString;
  sessions: number;
  price: number;
  validityMonths: number;
  benefits: TranslatedString[];
  featured?: boolean;
  popular?: boolean;
}

/**
 * Package pricing calculation result
 */
export interface PackagePricing {
  price: number;
  normalPrice: number;
  savings: number;
  discount: number;
}

/**
 * Booking form data
 */
export interface BookingFormData {
  service: string;
  duration: string;
  date: Date | undefined;
  time: string;
  name: string;
  email: string;
  phone: string;
  countryCode: string;
}

/**
 * Form validation errors
 */
export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

/**
 * Contact information
 */
export interface ContactInfo {
  PHONE_DISPLAY: string;
  PHONE_TEL: string;
  WHATSAPP: string;
  INSTAGRAM: string;
  GOOGLE_MAPS: string;
  ADDRESS: {
    STREET: string;
    AREA: string;
    CITY: string;
  };
}

/**
 * Business hours
 */
export interface BusinessHours {
  OPEN: string;
  CLOSE: string;
  DAYS: string[];
}
