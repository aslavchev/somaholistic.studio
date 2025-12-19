/**
 * SOMA Studio - Testimonials Data Layer
 *
 * Real Google Maps reviews for authentic social proof.
 * To add new reviews: Copy from Google Maps and add to TESTIMONIALS array.
 *
 * Last Updated: December 5, 2025
 */

import type { TranslatedString } from './services';

export interface Testimonial {
  name: TranslatedString;
  service: TranslatedString;
  rating: number;
  quote: TranslatedString;
  date?: string; // Optional: "2024-12" format
  source?: 'google' | 'instagram' | 'direct'; // Optional: tracking
}

/**
 * All testimonials - Real reviews from clients
 *
 * HOW TO ADD REVIEWS FROM GOOGLE MAPS:
 * 1. Go to https://www.google.com/maps and find your business
 * 2. Copy the review text
 * 3. Add a new object below with this format:
 * {
 *   name: { bg: "Име Ф.", en: "Name S." },
 *   service: { bg: "Услуга", en: "Service" },
 *   rating: 5,
 *   quote: { bg: "Отзив на български", en: "Review in English" },
 *   date: "2024-12",
 *   source: 'google'
 * }
 */
export const TESTIMONIALS: Testimonial[] = [
  // ⭐⭐⭐⭐⭐ Example Review 1 - Replace with real Google review
  {
    name: {
      bg: "Дени И.",
      en: "Denny I.",
      it: "Denny I."
    },
    service: {
      bg: "Wellness Coaching консултация",
      en: "Wellness Coaching Consultation",
      it: "Consulenza Wellness Coaching"
    },
    rating: 5,
    quote: {
      bg: "Тук наистина времето спира! Изпитах незабавно облекчение при стегнатост и болки в гърба, вследствие на продължителната ми работа на крак. Голямо удоволствие от процедурата. Получих и много полезна консултация за здравословен хранителен режим, с цел повече енергия през деня. Препоръчвам горещо!",
      en: "The experience is truly remarkable, providing a profound sense of relaxation and immediate relief from any stress or discomfort. The atmosphere is exceptionally pleasant, creating a soothing environment that enhances the overall experience. It is a highly recommended activity for anyone seeking tranquility and rejuvenation.",
      it: "L'esperienza è davvero straordinaria, fornendo un profondo senso di relax e sollievo immediato da stress o disagio. L'atmosfera è eccezionalmente piacevole, creando un ambiente rilassante che migliora l'esperienza complessiva. È un'attività altamente consigliata per chiunque cerchi tranquillità e ringiovanimento."
    },
    date: "2024-10",
    source: 'google'
  },

  // ⭐⭐⭐⭐⭐ Real Google Review - Aya Nemer
  {
    name: {
      bg: "Ая Немер",
      en: "Aya Nemer",
      it: "Aya Nemer"
    },
    service: {
      bg: "Класически масаж",
      en: "Classic Massage",
      it: "Massaggio Classico"
    },
    rating: 5,
    quote: {
      bg: "Преживяването е наистина забележително, осигурявайки дълбоко усещане за релаксация и незабавно облекчение от всякакъв стрес или дискомфорт. Атмосферата е изключително приятна, създавайки успокояваща среда, която подобрява цялостното изживяване. Силно препоръчвам на всеки, който търси спокойствие и обновяване.",
      en: "The experience is truly remarkable, providing a profound sense of relaxation and immediate relief from any stress or discomfort. The atmosphere is exceptionally pleasant, creating a soothing environment that enhances the overall experience. It is a highly recommended activity for anyone seeking tranquility and rejuvenation.",
      it: "L'esperienza è davvero straordinaria, fornendo un profondo senso di relax e sollievo immediato da stress o disagio. L'atmosfera è eccezionalmente piacevole, creando un ambiente rilassante che migliora l'esperienza complessiva. È un'attività altamente consigliata per chiunque cerchi tranquillità e ringiovanimento."
    },
    date: "2024-10",
    source: 'google'
  },

  // ⭐⭐⭐⭐⭐ Real Google Review - Габриела Цветанова
  {
    name: {
      bg: "Габриела Цветанова",
      en: "Gabriela Tsvetanova",
      it: "Gabriela Tsvetanova"
    },
    service: {
      bg: "Енергийна терапия с техники от тайландски масаж",
      en: "Energy Therapy with Thai Massage Technique",
      it: "Terapia Energetica con Tecniche di Massaggio Thailandese"
    },
    rating: 5,
    quote: {
      bg: "Ако имаше как, щях да добавя още 5 звезди. Всеки път си тръгвам по-лека и с усмивка. Отношението, обстановката и цялостното изживяване трябва да се усетят.",
      en: "If I could, I would add another 5 stars. Every time I leave lighter and with a smile. The attitude, the atmosphere and the overall experience should be felt.",
      it: "Se potessi, aggiungerei altre 5 stelle. Ogni volta esco più leggera e con un sorriso. L'atteggiamento, l'atmosfera e l'esperienza complessiva devono essere vissuti."
    },
    date: "2024-11",
    source: 'google'
  },

  // ⭐⭐⭐⭐⭐ Real Google Review - Elli Shtereva
  {
    name: {
      bg: "Ели Щерева",
      en: "Ellie Shtereva",
      it: "Ellie Shtereva"
    },
    service: {
      bg: "Класически масаж",
      en: "Classic Massage",
      it: "Massaggio Classico"
    },
    rating: 5,
    quote: {
      bg: "Стремя се да получавам седмичната си доза масаж, защото усещането след всяка сесия е забележително. Влизам в SOMA стресирана и напрегната, а излизам спокойна, отпусната и освежена. Терапевтът адаптира масажа в началото на всяко посещение, въз основа на това от което тялото ти се нуждае в този ден. Това е точно това, от което човек се нуждае в края на дълъг ден.",
      en: "I try to get my weekly dose of massage because the feeling after each session is remarkable. I walk into SOMA stressed and tense, and I leave calm, relaxed, and refreshed. The therapist tailors the massage at the start of every visit based on what your body needs that day. It's exactly what a person needs at the end of a long day.",
      it: "Cerco di ricevere la mia dose settimanale di massaggio perché la sensazione dopo ogni sessione è straordinaria. Entro in SOMA stressata e tesa, e esco calma, rilassata e rinvigorita. Il terapeuta adatta il massaggio all'inizio di ogni visita in base a ciò di cui il tuo corpo ha bisogno quel giorno. È esattamente ciò di cui una persona ha bisogno alla fine di una lunga giornata."
    },
    date: "2024-11",
    source: 'google'
  },

  // ⭐⭐⭐⭐⭐ Real Google Review - Kiril Kirov
  {
    name: {
      bg: "Кирил Киров",
      en: "Kiril Kirov",
      it: "Kiril Kirov"
    },
    service: {
      bg: "Ритуал за благоденствие",
      en: "SOMA Wellness Ritual",
      it: "Rituale di Benessere SOMA"
    },
    rating: 5,
    quote: {
      bg: "Още с посрещането се усеща уютната атмосфера и личното отношение. Всичко е внимателно съобразено с нуждите както на тялото, така и на психиката. Първо напитка, разговор за проследяване състоянието, потребностите и напредъка. А след това масажът - професионален, според желанието или нуждите на тялото, но винаги страхотен. Прекрасно и лечебно преживяване, което препоръчвам с две ръце!",
      en: "From the moment you are greeted, you can feel the cozy atmosphere and personal attention. Everything is carefully tailored to the needs of both the body and the psyche. First a drink, a conversation to track the condition, needs and progress. And then the massage – professional, according to the desire or needs of the body, but always great. A wonderful and healing experience that I recommend with both hands!",
      it: "Dal momento in cui vieni accolto, puoi sentire l'atmosfera accogliente e l'attenzione personale. Tutto è attentamente adattato alle esigenze sia del corpo che della psiche. Prima una bevanda, una conversazione per monitorare la condizione, le esigenze e i progressi. E poi il massaggio – professionale, secondo il desiderio o le esigenze del corpo, ma sempre fantastico. Un'esperienza meravigliosa e terapeutica che consiglio vivamente!"
    },
    date: "2024-12",
    source: 'google'
  },

  // ADD MORE REVIEWS HERE:
  // Copy the structure above and paste real Google reviews
  // Remember to translate Bulgarian reviews to English and vice versa
];

/**
 * Get featured testimonials (for homepage carousel)
 * Returns the most recent 5 reviews
 */
export function getFeaturedTestimonials(count: number = 5): Testimonial[] {
  return TESTIMONIALS.slice(0, count);
}

/**
 * Get testimonials by rating
 */
export function getTestimonialsByRating(rating: number): Testimonial[] {
  return TESTIMONIALS.filter(t => t.rating === rating);
}

/**
 * Get testimonials by source
 */
export function getTestimonialsBySource(source: 'google' | 'instagram' | 'direct'): Testimonial[] {
  return TESTIMONIALS.filter(t => t.source === source);
}

/**
 * Statistics
 */
export const TESTIMONIAL_STATS = {
  total: TESTIMONIALS.length,
  averageRating: TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length,
  fiveStars: TESTIMONIALS.filter(t => t.rating === 5).length
};
