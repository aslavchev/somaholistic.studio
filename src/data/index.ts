/**
 * SOMA Studio - Data Layer Exports
 *
 * Centralized exports for all data layer modules.
 * Use this file for clean imports throughout the application.
 *
 * Example:
 *   import { SERVICES, PACKAGES, CONTACT } from '@/data';
 *
 * Last Updated: November 23, 2024
 */

// Services
export {
  SERVICES,
  SERVICE_STATS,
  CATEGORY_LABELS,
  getServiceById,
  getServicesByCategory,
  getFeaturedServices,
  getCategories,
  getServiceCountByCategory
} from './services';

export type {
  Service,
  ServiceCategory,
  ServicePricing,
  TranslatedString
} from './services';

// Packages
export {
  PACKAGES,
  PACKAGE_4_SESSIONS,
  PACKAGE_6_SESSIONS,
  PACKAGE_STATS,
  AVERAGE_PRICE_PER_60MIN,
  calculatePackagePricing,
  get4SessionPricing,
  get6SessionPricing,
  getAllPackagePricing,
  calculateSavings,
  calculateDiscount,
  getPackageById,
  getFeaturedPackages,
  getPopularPackages
} from './packages';

export type {
  WellnessPackage,
  PackagePricing
} from './packages';

// Constants
export {
  CONTACT,
  BUSINESS_HOURS,
  BOOKING_POLICY
} from './constants';

// Testimonials
export {
  TESTIMONIALS,
  TESTIMONIAL_STATS,
  getFeaturedTestimonials,
  getTestimonialsByRating,
  getTestimonialsBySource
} from './testimonials';

export type {
  Testimonial
} from './testimonials';
