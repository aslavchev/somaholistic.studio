/**
 * SOMA Studio - Services Data Layer
 *
 * Single source of truth for all service definitions.
 * This file centralizes service data to prevent inconsistencies
 * between different pages (Services, Pricing, Booking).
 *
 * Last Updated: November 23, 2024
 */

// ============================================================================
// TypeScript Interfaces
// ============================================================================

export interface TranslatedString {
  bg: string;
  en: string;
}

export interface ServicePricing {
  duration60?: {
    minutes: number;
    price: number;
    label: TranslatedString;
  };
  duration90?: {
    minutes: number;
    price: number;
    label: TranslatedString;
  };
}

export type ServiceCategory = 'signature' | 'massage' | 'therapy' | 'beauty' | 'coaching';

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

// ============================================================================
// Service Definitions
// ============================================================================

/**
 * All 8 SOMA Studio services
 * Order matches business priority (featured first, then by category)
 */
export const SERVICES: Service[] = [
  // 1. SOMA Wellness Ritual - Signature Service
  {
    id: 'soma-ritual',
    title: {
      bg: 'Ритуал за благоденствие',
      en: 'SOMA Wellness Ritual'
    },
    description: {
      bg: 'Изкуството на дълбоката релаксация... Подарете си 90 минути бягство от шума на ежедневието със SOMA Ритуал – холистична терапия, вдъхновена от източни традиции и създадена за модерния ум и тяло. Финият баланс от тайландски масаж, ароматерапия, лечебно дишане и деликатно отпускане на мускулатурата ще ви отведе в състояние на дълбока почивка и вътрешна тишина. Ритуалът е прецизно структуриран, за да намали стреса, възстанови енергийния поток и възвърне усещането за лекота и хармония.',
      en: 'The art of deep relaxation... Give yourself a 90-minute escape from the hustle and bustle of everyday life with SOMA Ritual - a holistic therapy inspired by Eastern traditions and created for the modern mind and body. The subtle balance of Thai massage, aromatherapy, healing breathing and delicate muscle relaxation will take you to a state of deep rest and inner silence. The ritual is precisely structured to reduce stress, restore energy flow and regain a sense of lightness and harmony.'
    },
    category: 'signature',
    pricing: {
      duration90: {
        minutes: 90,
        price: 150,
        label: { bg: '90 минути', en: '90 minutes' }
      }
    },
    benefits: [
      {
        bg: 'За онези, които търсят не просто масаж, а истинско преживяване',
        en: 'For those who are looking for more than just a massage, but a true experience.'
      }
    ],
    suitableFor: [],
    featured: true,
    image: 'wellness-accessories'
  },

  // 2. Phytotherapy Consultation - Coaching
  {
    id: 'phytotherapy',
    title: {
      bg: 'Фитотерапевтична консултация',
      en: 'Phytotherapy Consultation'
    },
    description: {
      bg: 'Индивидуална консултация, насочена към постигане на баланс и хармония чрез силата на лечебните растения. По време на срещата ще изследваме твоето състояние в дълбочина и ще изготвим персонализиран фитотерапевтичен план с натурални средства – билкови тинктури, чайове, масла и други природни формули.',
      en: 'Individual consultation aimed at achieving balance and harmony through the power of medicinal plants. During the meeting, we will examine your condition in depth and prepare a personalized phytotherapy plan with natural remedies – herbal tinctures, teas, oils and other natural formulas.'
    },
    category: 'coaching',
    pricing: {
      duration60: {
        minutes: 60,
        price: 80,
        label: { bg: '60 минути', en: '60 minutes' }
      }
    },
    benefits: [
      { bg: 'Укрепване на имунната система', en: 'Strengthening the immune system' },
      { bg: 'Справяне със стрес, тревожност и емоционален дисбаланс', en: 'Coping with stress, anxiety and emotional imbalance' },
      { bg: 'Хормонален баланс', en: 'Hormonal balance' },
      { bg: 'Детоксикация и общо възстановяване на организма', en: 'Detoxification and general recovery of the body' }
    ],
    suitableFor: [
      { bg: 'Конкретни здравословни оплаквания', en: 'Specific health complaints' },
      { bg: 'Превантивна грижа', en: 'Preventive care' }
    ],
    image: 'energy-therapy'
  },

  // 3. Wellness Coaching - Coaching
  {
    id: 'wellness-coaching',
    title: {
      bg: 'Wellness Coaching консултация',
      en: 'Wellness Coaching Consultation'
    },
    description: {
      bg: 'Усещаш ли, че е време за промяна, но не знаеш откъде да започнеш? Тази консултация е твоето пространство за осъзнаване, подредба и нов фокус. Заедно ще изследваме начина ти на живот, емоционалните ти нужди, вътрешните блокажи и ще създадем ясен и устойчив план за баланс и благополучие.',
      en: 'Do you feel it is time for a change, but you don\'t know where to start? This consultation is your space for awareness, arrangement and a new focus. Together we will explore your lifestyle, your emotional needs, your internal blockages and create a clear and sustainable plan for balance and well-being.'
    },
    category: 'coaching',
    pricing: {
      duration60: {
        minutes: 60,
        price: 90,
        label: { bg: '60 минути', en: '60 minutes' }
      }
    },
    benefits: [
      { bg: 'Повече енергия и жизненост', en: 'More energy and vitality' },
      { bg: 'Лична яснота и посока', en: 'Personal clarity and direction' },
      { bg: 'Освобождаване от стрес и напрежение', en: 'Relief from stress and tension' },
      { bg: 'Здравословни навици, които са реалистични и устойчиви', en: 'Healthy habits that are realistic and sustainable' },
      { bg: 'По-дълбока връзка със себе си', en: 'A deeper connection with yourself' }
    ],
    suitableFor: [
      { bg: 'Търсещи промяна', en: 'Seeking change' },
      { bg: 'Баланс и благополучие', en: 'Balance and well-being' }
    ],
    image: 'wellness-accessories'
  },

  // 4. Classic Massage - Massage
  {
    id: 'classic-massage',
    title: {
      bg: 'Класически масаж',
      en: 'Classic Massage'
    },
    description: {
      bg: 'Класическият масаж е златният стандарт в терапията на тялото – изкуство, което съчетава изящество и ефективност. Той въздейства върху цялото тяло чрез прецизни движения, които стимулират кръвообращението, подобряват метаболизма и освобождават натрупаното напрежение. За взискателния клиент този масаж е не просто грижа за физиката, а ритуал за пълноценна регенерация. Всяко докосване е внимателно премерено, за да носи баланс между дълбока релаксация и терапевтична сила. Резултатът е усещане за лекота, обновена енергия и хармония, които надхвърлят обикновеното удоволствие. Позволете си този първокласен момент на себеобгрижване – защото истинският лукс е здравето и спокойствието.',
      en: 'Classic massage is the gold standard in body therapy – an art that combines grace and efficiency. It affects the entire body through precise movements that stimulate blood circulation, improve metabolism and release accumulated tension. For the demanding client, this massage is not just physical care, but a ritual for complete regeneration. Each touch is carefully measured to bring a balance between deep relaxation and therapeutic power. The result is a feeling of lightness, renewed energy and harmony that go beyond ordinary pleasure. Allow yourself this first-class moment of self-care – because true luxury is health and peace of mind.'
    },
    category: 'massage',
    pricing: {
      duration60: {
        minutes: 60,
        price: 90,
        label: { bg: '60 минути', en: '60 minutes' }
      }
    },
    benefits: [
      { bg: 'Подобрява кръвообращението', en: 'Improves blood circulation' },
      { bg: 'Облекчава мускулно напрежение', en: 'Relieves muscle tension' },
      { bg: 'Възстановява енергията', en: 'Restores energy' }
    ],
    suitableFor: [
      { bg: 'Стрес и напрежение', en: 'Stress and tension' },
      { bg: 'Мускулни болки', en: 'Muscle pain' }
    ],
    image: 'classical-massage'
  },

  // 5. Partial Back Massage - Massage
  {
    id: 'back-massage',
    title: {
      bg: 'Частичен масаж на гръб',
      en: 'Partial Back Massage'
    },
    description: {
      bg: 'Гърбът е центърът, в който се натрупват умора, стрес и напрежение. Частичният масаж на гръб е прецизна терапия, създадена специално за хора с динамично ежедневие и високи изисквания. Фокусът е върху освобождаването на мускулни блокажи в рамене, шийна и гръбна област. Масажните техники проникват в дълбочина, стимулират кръвообращението и освобождават напрежението, което често остава незабелязано, но силно влияе върху качеството на живот. За взискателния клиент този масаж не е просто комфорт – той е стратегическа инвестиция в продуктивност, стойка и дълготрайно добро самочувствие. Една сесия е достатъчна, за да усетите яснота, облекчение и сила.',
      en: 'The back is the center where fatigue, stress and tension accumulate. Partial back massage is a precise therapy created especially for people with dynamic everyday life and high demands. The focus is on releasing muscle blockages in the shoulders, neck and back. Massage techniques penetrate deeply, stimulate blood circulation and release tension that often goes unnoticed but strongly affects the quality of life. For the demanding client, this massage is not just comfort – it is a strategic investment in productivity, posture and long-lasting well-being. One session is enough to feel clarity, relief and strength.'
    },
    category: 'massage',
    pricing: {
      duration60: {
        minutes: 30,
        price: 50,
        label: { bg: '30 минути', en: '30 minutes' }
      }
    },
    benefits: [
      { bg: 'Бързо облекчение', en: 'Quick relief' },
      { bg: 'Фокус върху проблемни зони', en: 'Focus on problem areas' },
      { bg: 'Подобрява стойката', en: 'Improves posture' }
    ],
    suitableFor: [
      { bg: 'Седяща работа', en: 'Desk work' },
      { bg: 'Болки в гърба и шията', en: 'Back and neck pain' }
    ],
    image: 'back-massage'
  },

  // 6. Traditional Thai Massage - Massage
  {
    id: 'thai-massage',
    title: {
      bg: 'Традиционен Тай масаж',
      en: 'Traditional Thai Massage'
    },
    description: {
      bg: 'Дълбоко възстановяваща терапия, която комбинира лек натиск, разтягане и ритмично движение за балансиране на енергията в тялото. Този масаж освобождава мускулното напрежение, подобрява гъвкавостта и подпомага цялостното благосъстояние. Извършва се облечен върху мат и е идеален за тези, които търсят енергизираща, цялостна грижа за тялото и ума.',
      en: 'Deeply restorative therapy that combines gentle pressure, stretching and rhythmic movement to balance energy in the body. This massage releases muscle tension, improves flexibility and supports overall well-being. Performed clothed on a mat, it is ideal for those seeking an energizing, holistic care for body and mind.'
    },
    category: 'massage',
    pricing: {
      duration60: {
        minutes: 60,
        price: 100,
        label: { bg: '60 минути', en: '60 minutes' }
      },
      duration90: {
        minutes: 90,
        price: 130,
        label: { bg: '90 минути', en: '90 minutes' }
      }
    },
    benefits: [
      { bg: 'Подобрява гъвкавостта', en: 'Improves flexibility' },
      { bg: 'Балансира енергията', en: 'Balances energy' },
      { bg: 'Освобождава напрежение', en: 'Releases tension' }
    ],
    suitableFor: [
      { bg: 'Скованост', en: 'Stiffness' },
      { bg: 'Енергиен дисбаланс', en: 'Energy imbalance' }
    ],
    image: 'massage-therapy'
  },

  // 7. Energy Therapy - Therapy
  {
    id: 'energy-therapy',
    title: {
      bg: 'Енергийна терапия с техники от тайландски масаж',
      en: 'Energy Therapy with Thai Massage Techniques'
    },
    description: {
      bg: 'Специализирана терапия, която съчетава традиционен тайландски масаж с фокусирано енергийно лечение. Чрез прецизен натиск върху енергийните точки и балансиране на жизнената сила, терапията освобождава физически и емоционални блокажи. Подходяща е за хора, които търсят вътрешен баланс, яснота и обновена жизненост.',
      en: 'Specialized therapy that combines traditional Thai massage with focused energy healing. Through precise pressure on energy points and balancing life force, the therapy releases physical and emotional blockages. It is suitable for people seeking inner balance, clarity and renewed vitality.'
    },
    category: 'therapy',
    pricing: {
      duration60: {
        minutes: 60,
        price: 110,
        label: { bg: '60 минути', en: '60 minutes' }
      },
      duration90: {
        minutes: 90,
        price: 140,
        label: { bg: '90 минути', en: '90 minutes' }
      }
    },
    benefits: [
      { bg: 'Балансира жизнената сила', en: 'Balances life force' },
      { bg: 'Освобождава блокажи', en: 'Releases blockages' },
      { bg: 'Яснота и фокус', en: 'Clarity and focus' }
    ],
    suitableFor: [
      { bg: 'Емоционален дисбаланс', en: 'Emotional imbalance' },
      { bg: 'Търсещи вътрешен мир', en: 'Seeking inner peace' }
    ],
    image: 'energy-therapy'
  },

  // 8. Rejuvenating Facial Therapy - Beauty
  {
    id: 'facial-therapy',
    title: {
      bg: 'Подмладяваща терапия за лице',
      en: 'Rejuvenating Facial Therapy'
    },
    description: {
      bg: 'Нежна подмладяваща терапия за лице, която подобрява кръвообращението, стяга кожата и намалява фините линии. Процедурата отпуска мускулите, освежава тена и придава естествен блясък.',
      en: 'Gentle rejuvenating facial therapy that improves blood circulation, tightens skin and reduces fine lines. The procedure relaxes muscles, refreshes complexion and gives a natural glow.'
    },
    category: 'beauty',
    pricing: {
      duration60: {
        minutes: 30,
        price: 50,
        label: { bg: '30 минути', en: '30 minutes' }
      }
    },
    benefits: [
      { bg: 'Подобрява тена', en: 'Improves complexion' },
      { bg: 'Намалява фини линии', en: 'Reduces fine lines' },
      { bg: 'Естествен блясък', en: 'Natural glow' }
    ],
    suitableFor: [
      { bg: 'Антиейдж грижа', en: 'Anti-aging care' },
      { bg: 'Уморена кожа', en: 'Tired skin' }
    ],
    image: 'facial-massage-new'
  }
];

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return SERVICES.find(service => service.id === id);
}

/**
 * Get all services in a specific category
 */
export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter(service => service.category === category);
}

/**
 * Get featured services (for hero/highlight sections)
 */
export function getFeaturedServices(): Service[] {
  return SERVICES.filter(service => service.featured === true);
}

/**
 * Get all unique categories
 */
export function getCategories(): ServiceCategory[] {
  const categories = SERVICES.map(service => service.category);
  return Array.from(new Set(categories));
}

/**
 * Get service count by category
 */
export function getServiceCountByCategory(): Record<ServiceCategory, number> {
  const counts: Record<ServiceCategory, number> = {
    signature: 0,
    massage: 0,
    therapy: 0,
    beauty: 0,
    coaching: 0
  };

  SERVICES.forEach(service => {
    counts[service.category]++;
  });

  return counts;
}

/**
 * Category labels (for UI display)
 */
export const CATEGORY_LABELS: Record<ServiceCategory, TranslatedString> = {
  signature: { bg: 'Авторска', en: 'Signature' },
  massage: { bg: 'Масаж', en: 'Massage' },
  therapy: { bg: 'Терапия', en: 'Therapy' },
  beauty: { bg: 'Красота', en: 'Beauty' },
  coaching: { bg: 'Коучинг', en: 'Coaching' }
};

// ============================================================================
// Statistics (for debugging/validation)
// ============================================================================

export const SERVICE_STATS = {
  total: SERVICES.length,
  byCategory: getServiceCountByCategory(),
  featured: getFeaturedServices().length,
  priceRange: {
    min: Math.min(...SERVICES.flatMap(s => [
      s.pricing.duration60?.price ?? Infinity,
      s.pricing.duration90?.price ?? Infinity
    ])),
    max: Math.max(...SERVICES.flatMap(s => [
      s.pricing.duration60?.price ?? 0,
      s.pricing.duration90?.price ?? 0
    ]))
  }
};
