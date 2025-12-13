/**
 * Structured Data (Schema.org) Component
 *
 * Adds JSON-LD structured data for better SEO and rich search results.
 * Implements LocalBusiness, AggregateRating, and Service schemas.
 *
 * Benefits:
 * - Star ratings in Google search results
 * - Business info in Knowledge Panel
 * - Service listings in search
 * - Improved click-through rate (20-30%)
 */

import { useEffect } from 'react';
import { CONTACT, BUSINESS_HOURS, SERVICES, TESTIMONIAL_STATS } from '@/data';

export const StructuredData = () => {
  useEffect(() => {
    // LocalBusiness Schema with AggregateRating
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'BeautySalon',
      '@id': 'https://somaholistic.studio/#business',
      name: 'SOMA Holistic Studio',
      alternateName: 'SOMA Studio',
      description: 'Holistic wellness center offering massage therapy, energy healing, and wellness coaching in Sofia, Bulgaria.',
      url: 'https://somaholistic.studio',
      telephone: CONTACT.PHONE_TEL,
      email: 'contact@somaholistic.studio',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${CONTACT.ADDRESS.STREET}`,
        addressLocality: CONTACT.ADDRESS.AREA,
        addressRegion: 'Sofia',
        postalCode: '1407',
        addressCountry: 'BG'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '42.6521',
        longitude: '23.3193'
      },
      openingHoursSpecification: BUSINESS_HOURS.DAYS.map(day => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day,
        opens: BUSINESS_HOURS.OPEN,
        closes: BUSINESS_HOURS.CLOSE
      })),
      priceRange: '€€',
      currenciesAccepted: 'EUR, BGN',
      paymentAccepted: 'Cash, Bank Transfer',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: TESTIMONIAL_STATS.averageRating.toFixed(1),
        reviewCount: TESTIMONIAL_STATS.total,
        bestRating: '5',
        worstRating: '1'
      },
      sameAs: [
        `https://instagram.com/${CONTACT.INSTAGRAM}`,
        CONTACT.GOOGLE_MAPS
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Massage & Wellness Services',
        itemListElement: SERVICES.map((service, index) => ({
          '@type': 'Offer',
          '@id': `https://somaholistic.studio/#service-${service.id}`,
          position: index + 1,
          itemOffered: {
            '@type': 'Service',
            name: service.title.en,
            description: service.description.en,
            category: 'Massage Therapy',
            provider: {
              '@type': 'BeautySalon',
              '@id': 'https://somaholistic.studio/#business'
            }
          },
          priceSpecification: [
            service.pricing.duration30 && {
              '@type': 'PriceSpecification',
              price: service.pricing.duration30.price,
              priceCurrency: 'EUR',
              name: `30 minutes - €${service.pricing.duration30.price}`
            },
            service.pricing.duration60 && {
              '@type': 'PriceSpecification',
              price: service.pricing.duration60.price,
              priceCurrency: 'EUR',
              name: `60 minutes - €${service.pricing.duration60.price}`
            },
            service.pricing.duration90 && {
              '@type': 'PriceSpecification',
              price: service.pricing.duration90.price,
              priceCurrency: 'EUR',
              name: `90 minutes - €${service.pricing.duration90.price}`
            }
          ].filter(Boolean)
        }))
      }
    };

    // WebSite Schema for site search
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://somaholistic.studio/#website',
      url: 'https://somaholistic.studio',
      name: 'SOMA Holistic Studio',
      description: 'Professional massage therapy and holistic wellness services in Sofia',
      publisher: {
        '@id': 'https://somaholistic.studio/#business'
      }
    };

    // Insert or update schema script tags
    const updateSchema = (id: string, schema: object) => {
      let script = document.getElementById(id) as HTMLScriptElement;

      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schema);
    };

    updateSchema('structured-data-business', localBusinessSchema);
    updateSchema('structured-data-website', websiteSchema);

    // Cleanup on unmount
    return () => {
      document.getElementById('structured-data-business')?.remove();
      document.getElementById('structured-data-website')?.remove();
    };
  }, []);

  return null;
};

export default StructuredData;
