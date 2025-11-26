/**
 * SOMA Studio - Wellness Packages Data Layer
 *
 * Wellness bundle definitions and pricing calculations.
 * These packages offer discounted rates for multiple sessions.
 *
 * Last Updated: November 26, 2024
 */

import type { WellnessPackage, PackagePricing } from '@/types';

// Re-export types for backward compatibility
export type { WellnessPackage, PackagePricing } from '@/types';

// ============================================================================
// Package Definitions
// ============================================================================

/**
 * Average price per 60-minute session
 * Used as baseline for package pricing calculations
 *
 * Based on: Classic Massage (90 BGN) + Wellness Coaching (90 BGN) = 90 BGN average
 */
export const AVERAGE_PRICE_PER_60MIN = 90;

/**
 * 4-Session Journey Bundle
 */
export const PACKAGE_4_SESSIONS: WellnessPackage = {
  id: 'journey-4',
  name: {
    bg: 'Пакет пътуване',
    en: 'Journey Bundle'
  },
  sessions: 4,
  price: 320,  // Discounted price
  validityMonths: 6,
  benefits: [
    { bg: 'Изберете всяка комбинация от услуги', en: 'Choose any combination of services' },
    { bg: 'Валиден 6 месеца', en: 'Valid for 6 months' },
    { bg: 'Приоритетно записване', en: 'Priority booking' }
  ],
  featured: false
};

/**
 * 6-Session Transformation Bundle (Most Popular)
 */
export const PACKAGE_6_SESSIONS: WellnessPackage = {
  id: 'transformation-6',
  name: {
    bg: 'Пакет трансформация',
    en: 'Transformation Bundle'
  },
  sessions: 6,
  price: 480,  // Discounted price
  validityMonths: 9,
  benefits: [
    { bg: 'Изберете всяка комбинация от услуги', en: 'Choose any combination of services' },
    { bg: 'Валиден 9 месеца', en: 'Valid for 9 months' },
    { bg: 'Приоритетно записване', en: 'Priority booking' },
    { bg: 'Една безплатна сесия за приятел', en: 'One free friend session' }
  ],
  featured: true,
  popular: true
};

/**
 * All available packages
 */
export const PACKAGES: WellnessPackage[] = [
  PACKAGE_4_SESSIONS,
  PACKAGE_6_SESSIONS
];

// ============================================================================
// Pricing Calculations
// ============================================================================

/**
 * Calculate pricing details for a package
 */
export function calculatePackagePricing(sessions: number, price: number): PackagePricing {
  const normalPrice = AVERAGE_PRICE_PER_60MIN * sessions;
  const savings = normalPrice - price;
  const discount = Math.round((savings / normalPrice) * 100);

  return {
    price,
    normalPrice,
    savings,
    discount
  };
}

/**
 * Get pricing for 4-session package
 */
export function get4SessionPricing(): PackagePricing {
  return calculatePackagePricing(
    PACKAGE_4_SESSIONS.sessions,
    PACKAGE_4_SESSIONS.price
  );
}

/**
 * Get pricing for 6-session package
 */
export function get6SessionPricing(): PackagePricing {
  return calculatePackagePricing(
    PACKAGE_6_SESSIONS.sessions,
    PACKAGE_6_SESSIONS.price
  );
}

/**
 * Get all package pricing (for display on pricing page)
 */
export function getAllPackagePricing(): Record<string, PackagePricing> {
  return {
    'journey-4': get4SessionPricing(),
    'transformation-6': get6SessionPricing()
  };
}

/**
 * Calculate savings amount
 */
export function calculateSavings(normalPrice: number, packagePrice: number): number {
  return normalPrice - packagePrice;
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(normalPrice: number, packagePrice: number): number {
  const savings = calculateSavings(normalPrice, packagePrice);
  return Math.round((savings / normalPrice) * 100);
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get package by ID
 */
export function getPackageById(id: string): WellnessPackage | undefined {
  return PACKAGES.find(pkg => pkg.id === id);
}

/**
 * Get featured packages
 */
export function getFeaturedPackages(): WellnessPackage[] {
  return PACKAGES.filter(pkg => pkg.featured === true);
}

/**
 * Get popular packages (for "Most Popular" badge)
 */
export function getPopularPackages(): WellnessPackage[] {
  return PACKAGES.filter(pkg => pkg.popular === true);
}

// ============================================================================
// Statistics (for validation)
// ============================================================================

export const PACKAGE_STATS = {
  total: PACKAGES.length,
  pricing: getAllPackagePricing(),
  averageDiscount: Math.round(
    Object.values(getAllPackagePricing()).reduce((sum, p) => sum + p.discount, 0) / PACKAGES.length
  )
};

// ============================================================================
// Package Validation
// ============================================================================

/**
 * Validate that package prices are less than normal prices
 * (should always be true, but good to check during development)
 */
export function validatePackagePricing(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  PACKAGES.forEach(pkg => {
    const pricing = calculatePackagePricing(pkg.sessions, pkg.price);

    if (pricing.savings <= 0) {
      errors.push(`${pkg.id}: No savings! Price (${pkg.price}) >= Normal (${pricing.normalPrice})`);
    }

    if (pricing.discount <= 0) {
      errors.push(`${pkg.id}: No discount! Calculated ${pricing.discount}%`);
    }

    if (pricing.discount > 30) {
      errors.push(`${pkg.id}: Discount too high! ${pricing.discount}% (max recommended: 30%)`);
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
}

// Run validation in development
if (import.meta.env.DEV) {
  const validation = validatePackagePricing();
  if (!validation.valid) {
    console.warn('⚠️ Package pricing validation failed:', validation.errors);
  } else {
    console.log('✅ Package pricing validated:', PACKAGE_STATS);
  }
}
