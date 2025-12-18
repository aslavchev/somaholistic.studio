/**
 * SOMA Studio - Services Data Layer
 *
 * Single source of truth for all service definitions.
 * This file centralizes service data to prevent inconsistencies
 * between different pages (Services, Pricing, Booking).
 *
 * Last Updated: November 26, 2024
 */

import type { Service, ServiceCategory, TranslatedString } from '@/types';

// Re-export types for backward compatibility
export type { Service, ServiceCategory, TranslatedString, ServicePricing } from '@/types';

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
      en: 'SOMA Wellness Ritual',
      it: 'Rituale di Benessere SOMA'
    },
    description: {
      bg: 'Изкуството на дълбоката релаксация... Подарете си 90 минути бягство от шума на ежедневието със SOMA Ритуал – холистична терапия, вдъхновена от източни традиции и създадена за модерния ум и тяло. Финият баланс от тайландски масаж, ароматерапия, лечебно дишане и деликатно отпускане на мускулатурата ще ви отведе в състояние на дълбока почивка и вътрешна тишина. Ритуалът е прецизно структуриран, за да намали стреса, възстанови енергийния поток и възвърне усещането за лекота и хармония.',
      en: 'The art of deep relaxation... Give yourself a 90-minute escape from the hustle and bustle of everyday life with SOMA Ritual - a holistic therapy inspired by Eastern traditions and created for the modern mind and body. The subtle balance of Thai massage, aromatherapy, healing breathing and delicate muscle relaxation will take you to a state of deep rest and inner silence. The ritual is precisely structured to reduce stress, restore energy flow and regain a sense of lightness and harmony.',
      it: 'L\'arte del rilassamento profondo... Regalati 90 minuti di fuga dal trambusto quotidiano con il Rituale SOMA – una terapia olistica ispirata alle tradizioni orientali e creata per la mente e il corpo moderni. Il delicato equilibrio di massaggio thailandese, aromaterapia, respirazione terapeutica e rilassamento muscolare ti porterà in uno stato di profondo riposo e silenzio interiore. Il rituale è strutturato con precisione per ridurre lo stress, ripristinare il flusso energetico e ritrovare una sensazione di leggerezza e armonia.'
    },
    category: 'signature',
    pricing: {
      duration90: {
        minutes: 90,
        price: 77,
        label: { bg: '90 минути', en: '90 minutes', it: '90 minuti' }
      }
    },
    benefits: [
      {
        bg: 'За онези, които търсят не просто масаж, а истинско преживяване',
        en: 'For those who are looking for more than just a massage, but a true experience.',
        it: 'Per chi cerca non solo un massaggio, ma una vera esperienza.'
      }
    ],
    suitableFor: [],
    featured: true,
    image: 'wellness-accessories'
  },

  // 2. Classic Massage - Massage
  {
    id: 'classic-massage',
    title: {
      bg: 'Класически масаж',
      en: 'Classic Massage',
      it: 'Massaggio Classico'
    },
    description: {
      bg: 'Класическият масаж е златният стандарт в терапията на тялото – изкуство, което съчетава изящество и ефективност. Той въздейства върху цялото тяло чрез прецизни движения, които стимулират кръвообращението, подобряват метаболизма и освобождават натрупаното напрежение. За взискателния клиент този масаж е не просто грижа за физиката, а ритуал за пълноценна регенерация. Всяко докосване е внимателно премерено, за да носи баланс между дълбока релаксация и терапевтична сила. Резултатът е усещане за лекота, обновена енергия и хармония, които надхвърлят обикновеното удоволствие. Позволете си този първокласен момент на себеобгрижване – защото истинският лукс е здравето и спокойствието.',
      en: 'Classic massage is the gold standard in body therapy – an art that combines grace and efficiency. It affects the entire body through precise movements that stimulate blood circulation, improve metabolism and release accumulated tension. For the demanding client, this massage is not just physical care, but a ritual for complete regeneration. Each touch is carefully measured to bring a balance between deep relaxation and therapeutic power. The result is a feeling of lightness, renewed energy and harmony that go beyond ordinary pleasure. Allow yourself this first-class moment of self-care – because true luxury is health and peace of mind.',
      it: 'Il massaggio classico è lo standard d\'oro nella terapia del corpo – un\'arte che combina grazia ed efficacia. Agisce su tutto il corpo attraverso movimenti precisi che stimolano la circolazione sanguigna, migliorano il metabolismo e rilasciano la tensione accumulata. Per il cliente esigente, questo massaggio non è solo cura fisica, ma un rituale di rigenerazione completa. Ogni tocco è attentamente calibrato per portare equilibrio tra rilassamento profondo e forza terapeutica. Il risultato è una sensazione di leggerezza, energia rinnovata e armonia che va oltre il piacere ordinario. Concediti questo momento di cura di te stesso di prima classe – perché il vero lusso è la salute e la tranquillità.'
    },
    category: 'massage',
    pricing: {
      duration60: {
        minutes: 60,
        price: 46,
        label: { bg: '60 минути', en: '60 minutes', it: '60 minuti' }
      }
    },
    benefits: [
      { bg: 'Подобрява кръвообращението', en: 'Improves blood circulation', it: 'Migliora la circolazione sanguigna' },
      { bg: 'Облекчава мускулно напрежение', en: 'Relieves muscle tension', it: 'Allevia la tensione muscolare' },
      { bg: 'Възстановява енергията', en: 'Restores energy', it: 'Ripristina l\'energia' }
    ],
    suitableFor: [
      { bg: 'Стрес и напрежение', en: 'Stress and tension', it: 'Stress e tensione' },
      { bg: 'Мускулни болки', en: 'Muscle pain', it: 'Dolori muscolari' }
    ],
    image: 'classical-massage'
  },

  // 3. Partial Back Massage - Massage
  {
    id: 'back-massage',
    title: {
      bg: 'Частичен масаж на гръб',
      en: 'Partial Back Massage',
      it: 'Massaggio Parziale alla Schiena'
    },
    description: {
      bg: 'Гърбът е центърът, в който се натрупват умора, стрес и напрежение. Частичният масаж на гръб е прецизна терапия, създадена специално за хора с динамично ежедневие и високи изисквания. Фокусът е върху освобождаването на мускулни блокажи в рамене, шийна и гръбна област. Масажните техники проникват в дълбочина, стимулират кръвообращението и освобождават напрежението, което често остава незабелязано, но силно влияе върху качеството на живот. За взискателния клиент този масаж не е просто комфорт – той е стратегическа инвестиция в продуктивност, стойка и дълготрайно добро самочувствие. Една сесия е достатъчна, за да усетите яснота, облекчение и сила.',
      en: 'The back is the center where fatigue, stress and tension accumulate. Partial back massage is a precise therapy created especially for people with dynamic everyday life and high demands. The focus is on releasing muscle blockages in the shoulders, neck and back. Massage techniques penetrate deeply, stimulate blood circulation and release tension that often goes unnoticed but strongly affects the quality of life. For the demanding client, this massage is not just comfort – it is a strategic investment in productivity, posture and long-lasting well-being. One session is enough to feel clarity, relief and strength.',
      it: 'La schiena è il centro dove si accumulano fatica, stress e tensione. Il massaggio parziale alla schiena è una terapia precisa creata appositamente per persone con una vita quotidiana dinamica e alte esigenze. L\'attenzione è rivolta al rilascio dei blocchi muscolari nelle spalle, nel collo e nella schiena. Le tecniche di massaggio penetrano in profondità, stimolano la circolazione sanguigna e rilasciano la tensione che spesso passa inosservata ma influisce fortemente sulla qualità della vita. Per il cliente esigente, questo massaggio non è solo comfort – è un investimento strategico in produttività, postura e benessere duraturo. Una sessione è sufficiente per sentire chiarezza, sollievo e forza.'
    },
    category: 'massage',
    pricing: {
      duration60: {
        minutes: 30,
        price: 26,
        label: { bg: '30 минути', en: '30 minutes', it: '30 minuti' }
      }
    },
    benefits: [
      { bg: 'Бързо облекчение', en: 'Quick relief', it: 'Sollievo rapido' },
      { bg: 'Фокус върху проблемни зони', en: 'Focus on problem areas', it: 'Focus sulle zone problematiche' },
      { bg: 'Подобрява стойката', en: 'Improves posture', it: 'Migliora la postura' }
    ],
    suitableFor: [
      { bg: 'Седяща работа', en: 'Desk work', it: 'Lavoro sedentario' },
      { bg: 'Болки в гърба и шията', en: 'Back and neck pain', it: 'Dolori alla schiena e al collo' }
    ],
    image: 'back-massage'
  },

  // 4. Traditional Thai Massage - Massage
  {
    id: 'thai-massage',
    title: {
      bg: 'Традиционен Тай масаж',
      en: 'Traditional Thai Massage',
      it: 'Massaggio Thailandese Tradizionale'
    },
    description: {
      bg: 'Дълбоко възстановяваща терапия, която комбинира лек натиск, разтягане и ритмично движение за балансиране на енергията в тялото. Този масаж освобождава мускулното напрежение, подобрява гъвкавостта и подпомага цялостното благосъстояние. Извършва се облечен върху мат и е идеален за тези, които търсят енергизираща, цялостна грижа за тялото и ума.',
      en: 'Deeply restorative therapy that combines gentle pressure, stretching and rhythmic movement to balance energy in the body. This massage releases muscle tension, improves flexibility and supports overall well-being. Performed clothed on a mat, it is ideal for those seeking an energizing, holistic care for body and mind.',
      it: 'Terapia profondamente rigenerante che combina pressione delicata, stretching e movimento ritmico per bilanciare l\'energia nel corpo. Questo massaggio rilascia la tensione muscolare, migliora la flessibilità e supporta il benessere generale. Eseguito vestiti su un tappetino, è ideale per chi cerca una cura energizzante e olistica per corpo e mente.'
    },
    category: 'massage',
    pricing: {
      duration60: {
        minutes: 60,
        price: 52,
        label: { bg: '60 минути', en: '60 minutes', it: '60 minuti' }
      },
      duration90: {
        minutes: 90,
        price: 66,
        label: { bg: '90 минути', en: '90 minutes', it: '90 minuti' }
      }
    },
    benefits: [
      { bg: 'Подобрява гъвкавостта', en: 'Improves flexibility', it: 'Migliora la flessibilità' },
      { bg: 'Балансира енергията', en: 'Balances energy', it: 'Bilancia l\'energia' },
      { bg: 'Освобождава напрежение', en: 'Releases tension', it: 'Rilascia la tensione' }
    ],
    suitableFor: [
      { bg: 'Скованост', en: 'Stiffness', it: 'Rigidità' },
      { bg: 'Енергиен дисбаланс', en: 'Energy imbalance', it: 'Squilibrio energetico' }
    ],
    image: 'massage-therapy'
  },

  // 5. Energy Therapy - Therapy
  {
    id: 'energy-therapy',
    title: {
      bg: 'Енергийна терапия с техники от тайландски масаж',
      en: 'Energy Therapy with Thai Massage Techniques',
      it: 'Terapia Energetica con Tecniche di Massaggio Thailandese'
    },
    description: {
      bg: 'Специализирана терапия, която съчетава традиционен тайландски масаж с фокусирано енергийно лечение. Чрез прецизен натиск върху енергийните точки и балансиране на жизнената сила, терапията освобождава физически и емоционални блокажи. Подходяща е за хора, които търсят вътрешен баланс, яснота и обновена жизненост.',
      en: 'Specialized therapy that combines traditional Thai massage with focused energy healing. Through precise pressure on energy points and balancing life force, the therapy releases physical and emotional blockages. It is suitable for people seeking inner balance, clarity and renewed vitality.',
      it: 'Terapia specializzata che combina il massaggio thailandese tradizionale con la guarigione energetica mirata. Attraverso una pressione precisa sui punti energetici e il bilanciamento della forza vitale, la terapia rilascia blocchi fisici ed emotivi. È adatta per le persone che cercano equilibrio interiore, chiarezza e vitalità rinnovata.'
    },
    category: 'therapy',
    pricing: {
      duration60: {
        minutes: 60,
        price: 56,
        label: { bg: '60 минути', en: '60 minutes', it: '60 minuti' }
      },
      duration90: {
        minutes: 90,
        price: 72,
        label: { bg: '90 минути', en: '90 minutes', it: '90 minuti' }
      }
    },
    benefits: [
      { bg: 'Балансира жизнената сила', en: 'Balances life force', it: 'Bilancia la forza vitale' },
      { bg: 'Освобождава блокажи', en: 'Releases blockages', it: 'Rilascia blocchi' },
      { bg: 'Яснота и фокус', en: 'Clarity and focus', it: 'Chiarezza e focus' }
    ],
    suitableFor: [
      { bg: 'Емоционален дисбаланс', en: 'Emotional imbalance', it: 'Squilibrio emotivo' },
      { bg: 'Търсещи вътрешен мир', en: 'Seeking inner peace', it: 'Alla ricerca della pace interiore' }
    ],
    image: 'energy-therapy'
  },

  // 6. Rejuvenating Facial Therapy - Beauty
  {
    id: 'facial-therapy',
    title: {
      bg: 'Подмладяваща терапия за лице',
      en: 'Rejuvenating Facial Therapy',
      it: 'Terapia Facciale Ringiovanente'
    },
    description: {
      bg: 'Нежна подмладяваща терапия за лице, която подобрява кръвообращението, стяга кожата и намалява фините линии. Процедурата отпуска мускулите, освежава тена и придава естествен блясък.',
      en: 'Gentle rejuvenating facial therapy that improves blood circulation, tightens skin and reduces fine lines. The procedure relaxes muscles, refreshes complexion and gives a natural glow.',
      it: 'Terapia facciale ringiovanente delicata che migliora la circolazione sanguigna, rassoda la pelle e riduce le linee sottili. La procedura rilassa i muscoli, rinfresca il colorito e dona una luminosità naturale.'
    },
    category: 'beauty',
    pricing: {
      duration60: {
        minutes: 30,
        price: 26,
        label: { bg: '30 минути', en: '30 minutes', it: '30 minuti' }
      }
    },
    benefits: [
      { bg: 'Подобрява тена', en: 'Improves complexion', it: 'Migliora il colorito' },
      { bg: 'Намалява фини линии', en: 'Reduces fine lines', it: 'Riduce le linee sottili' },
      { bg: 'Естествен блясък', en: 'Natural glow', it: 'Luminosità naturale' }
    ],
    suitableFor: [
      { bg: 'Антиейдж грижа', en: 'Anti-aging care', it: 'Cura anti-età' },
      { bg: 'Уморена кожа', en: 'Tired skin', it: 'Pelle stanca' }
    ],
    image: 'facial-massage-new'
  },

  // 7. Wellness Coaching - Coaching
  {
    id: 'wellness-coaching',
    title: {
      bg: 'Wellness Coaching консултация',
      en: 'Wellness Coaching Consultation',
      it: 'Consulenza di Wellness Coaching'
    },
    description: {
      bg: 'Усещаш ли, че е време за промяна, но не знаеш откъде да започнеш? Тази консултация е твоето пространство за осъзнаване, подредба и нов фокус. Заедно ще изследваме начина ти на живот, емоционалните ти нужди, вътрешните блокажи и ще създадем ясен и устойчив план за баланс и благополучие.',
      en: 'Do you feel it is time for a change, but you don\'t know where to start? This consultation is your space for awareness, arrangement and a new focus. Together we will explore your lifestyle, your emotional needs, your internal blockages and create a clear and sustainable plan for balance and well-being.',
      it: 'Senti che è tempo di cambiare, ma non sai da dove iniziare? Questa consulenza è il tuo spazio per consapevolezza, organizzazione e un nuovo focus. Insieme esploreremo il tuo stile di vita, i tuoi bisogni emotivi, i tuoi blocchi interni e creeremo un piano chiaro e sostenibile per equilibrio e benessere.'
    },
    category: 'coaching',
    pricing: {
      duration60: {
        minutes: 60,
        price: 46,
        label: { bg: '60 минути', en: '60 minutes', it: '60 minuti' }
      }
    },
    benefits: [
      { bg: 'Повече енергия и жизненост', en: 'More energy and vitality', it: 'Più energia e vitalità' },
      { bg: 'Лична яснота и посока', en: 'Personal clarity and direction', it: 'Chiarezza personale e direzione' },
      { bg: 'Освобождаване от стрес и напрежение', en: 'Relief from stress and tension', it: 'Sollievo da stress e tensione' },
      { bg: 'Здравословни навици, които са реалистични и устойчиви', en: 'Healthy habits that are realistic and sustainable', it: 'Abitudini sane realistiche e sostenibili' },
      { bg: 'По-дълбока връзка със себе си', en: 'A deeper connection with yourself', it: 'Una connessione più profonda con te stesso' }
    ],
    suitableFor: [
      { bg: 'Търсещи промяна', en: 'Seeking change', it: 'Alla ricerca di cambiamento' },
      { bg: 'Баланс и благополучие', en: 'Balance and well-being', it: 'Equilibrio e benessere' }
    ],
    image: 'wellness-accessories'
  },

  // 8. Phytotherapy Consultation - Coaching
  {
    id: 'phytotherapy',
    title: {
      bg: 'Фитотерапевтична консултация',
      en: 'Phytotherapy Consultation',
      it: 'Consulenza di Fitoterapia'
    },
    description: {
      bg: 'Индивидуална консултация, насочена към постигане на баланс и хармония чрез силата на лечебните растения. По време на срещата ще изследваме твоето състояние в дълбочина и ще изготвим персонализиран фитотерапевтичен план с натурални средства – билкови тинктури, чайове, масла и други природни формули.',
      en: 'Individual consultation aimed at achieving balance and harmony through the power of medicinal plants. During the meeting, we will examine your condition in depth and prepare a personalized phytotherapy plan with natural remedies – herbal tinctures, teas, oils and other natural formulas.',
      it: 'Consulenza individuale mirata a raggiungere equilibrio e armonia attraverso il potere delle piante medicinali. Durante l\'incontro, esamineremo la tua condizione in profondità e prepareremo un piano di fitoterapia personalizzato con rimedi naturali – tinture erboristiche, tè, oli e altre formule naturali.'
    },
    category: 'coaching',
    pricing: {
      duration60: {
        minutes: 60,
        price: 41,
        label: { bg: '60 минути', en: '60 minutes', it: '60 minuti' }
      }
    },
    benefits: [
      { bg: 'Укрепване на имунната система', en: 'Strengthening the immune system', it: 'Rafforzamento del sistema immunitario' },
      { bg: 'Справяне със стрес, тревожност и емоционален дисбаланс', en: 'Coping with stress, anxiety and emotional imbalance', it: 'Gestione di stress, ansia e squilibrio emotivo' },
      { bg: 'Хормонален баланс', en: 'Hormonal balance', it: 'Equilibrio ormonale' },
      { bg: 'Детоксикация и общо възстановяване на организма', en: 'Detoxification and general recovery of the body', it: 'Disintossicazione e recupero generale del corpo' }
    ],
    suitableFor: [
      { bg: 'Конкретни здравословни оплаквания', en: 'Specific health complaints', it: 'Disturbi di salute specifici' },
      { bg: 'Превантивна грижа', en: 'Preventive care', it: 'Cura preventiva' }
    ],
    image: 'energy-therapy'
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
  signature: { bg: 'Авторска', en: 'Signature', it: 'Esclusivo' },
  massage: { bg: 'Масаж', en: 'Massage', it: 'Massaggio' },
  therapy: { bg: 'Терапия', en: 'Therapy', it: 'Terapia' },
  beauty: { bg: 'Красота', en: 'Beauty', it: 'Bellezza' },
  coaching: { bg: 'Коучинг', en: 'Coaching', it: 'Coaching' }
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
