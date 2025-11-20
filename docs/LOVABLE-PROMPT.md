# SOMA STUDIO - Lovable.dev Implementation Prompt

**Document Purpose:** AI-optimized prompts for implementing SOMA STUDIO improvements in Lovable.dev
**Based on:** UX Review + Front-End Specification (v2.0)
**Priority:** High-impact improvements for conversion optimization
**Date:** January 16, 2025

---

## 🎯 Project Context

SOMA STUDIO is a Bulgarian holistic wellness and massage therapy website. Current version is functional but needs UX improvements to increase bookings and build trust with first-time visitors.

**Current Tech Stack:**
- React 18 + TypeScript
- Vite build tool
- Tailwind CSS + shadcn/ui
- React Router
- React Query (configured)

**Key Business Goal:** Increase online bookings by 40% through improved UX and online booking system

---

## 📋 Implementation Phases

Use these prompts **sequentially** in Lovable.dev for best results.

---

## PHASE 1: Foundation & Typography Improvements

### Prompt 1.1: Custom Typography Setup

```
Add custom Google Fonts to improve brand consistency:

1. Import "Playfair Display" (weights: 400, 700) for headings
2. Import "Inter" (weights: 300, 400, 500, 600) for body text
3. Update Tailwind config to use these fonts:
   - font-sans: Inter (default)
   - font-serif: Playfair Display (headings)

4. Apply to components:
   - H1, H2, H3: Playfair Display, bold
   - Body, buttons, UI: Inter
   - SOMA STUDIO logo: Playfair Display

5. Ensure Bulgarian Cyrillic characters are included in font subsets

Make the typography elegant and wellness-appropriate.
```

---

### Prompt 1.2: Enhanced Color System

```
Enhance the color palette with an accent color for better conversion:

1. Add new color to Tailwind config and CSS variables:
   --accent-warm: hsl(18, 48%, 55%) /* Copper/terracotta */

2. Update button variants:
   - Primary: Keep sage green (existing)
   - Accent: New copper color for urgency/featured items
   - Use accent for:
     * "Limited availability" badges
     * Featured service (SOMA Ritual) border
     * Hover state on primary CTA

3. Maintain existing wellness color palette
4. Ensure WCAG AA contrast compliance

Create warm, inviting accent that complements sage green.
```

---

## PHASE 2: Trust Building Sections

### Prompt 2.1: About / Therapist Section

```
Add a new "About" section between Hero and Services:

**Structure:**
- Section heading: "Запознайте се с вашия терапевт"
- Two-column layout (stack on mobile):
  * Left: Professional therapist photo (placeholder: woman, warm, approachable, spa setting)
  * Right: Bio content

**Content to include:**
- Therapist name: [Your Name]
- Credentials:
  * "Сертифициран терапевт по тайландски масаж"
  * "Над 10 години опит в холистични практики"
  * "Обучение в Тайланд и България"

- Brief philosophy (2-3 paragraphs):
  * Belief in mind-body connection
  * Holistic approach to wellness
  * Commitment to authentic, traditional techniques

- Trust badges row:
  * 🏆 "500+ доволни клиента"
  * ⭐ "Средна оценка: 4.9/5"
  * ✅ "Лицензиран терапевт"

**Styling:**
- Background: wellness-cream color
- Image: Subtle zoom animation on scroll
- Credentials: Staggered fade-in animation
- Mobile: Image above text, full width

Make it professional yet warm and trustworthy.
```

---

### Prompt 2.2: Testimonials Carousel

```
Create a testimonials section with carousel:

**Section Setup:**
- Heading: "Какво споделят нашите клиенти"
- Background: Subtle gradient (wellness-cream to white)

**Carousel Features:**
- Show 3 testimonials on desktop, 1 on mobile
- Auto-rotate every 5 seconds (pause on hover)
- Navigation: Prev/Next arrows + dot indicators
- Swipe gesture support on mobile

**Testimonial Card Structure:**
- 5-star rating (visual stars in gold/accent color)
- Quote text (150 characters max)
- Client name: "Име + Първа буква" (е.g., "Елена М.")
- Service received: "След SOMA Ритуал"
- Date: "Преди 2 седмици"

**Sample Testimonials (placeholders):**

1. "Най-релаксиращото преживяване в живота ми. След 90-те минути се чувствах като нов човек. Невероятна комбинация от техники."
   - Елена М., След SOMA Ритуал, Преди 1 месец

2. "Професионализъм на най-високо ниво. Студиото е уютно, а масажът помогна за хроничната ми болка в гърба."
   - Петър К., След Класически масаж, Преди 3 седмици

3. "Открих SOMA в Instagram и не съжалявам. Тайландският масаж е невероятен - дълбок, ефективен, автентичен."
   - Мария Д., След Традиционен Тай масаж, Преди 2 месеца

Use Embla Carousel or similar library. Smooth transitions, accessible keyboard navigation.
```

---

### Prompt 2.3: FAQ Accordion

```
Add FAQ section with accordion component:

**Section Heading:** "Често задавани въпроси"

**Questions & Answers:**

1. Q: "Какво да нося на масаж?"
   A: "Предоставяме халат и чехли. Можете да дойдете с удобни дрехи. За масажа ще използваме хавлиени кърпи за комфорта ви."

2. Q: "Как да се подготвя за сесията?"
   A: "Избягвайте тежка храна 1-2 часа преди масажа. Пристигнете 5 минути по-рано. Ще имате време да се преоблечете и релаксирате преди началото."

3. Q: "Има ли паркинг наблизо?"
   A: "Да, има безплатен паркинг пред сградата и платена синя зона на улицата. Можете също да използвате градския транспорт - спирка е на 2 минути."

4. Q: "Какви са методите за плащане?"
   A: "Приемаме кеш и карти (Visa, Mastercard). Плащането се извършва след сесията."

5. Q: "Каква е политиката за отмяна?"
   A: "Можете да отмените или промените час до 24 часа предварително без такса. За отмени в последния момент таксуваме 50%."

6. Q: "Подходящ ли е масажът за първи път?"
   A: "Абсолютно! Ще обсъдим вашите нужди и очаквания предварително. Класическият масаж или частичният гръб са отлични за начинаещи."

7. Q: "Предлагате ли подаръчни карти?"
   A: "Да, можете да закупите подаръчна карта за всяка от услугите ни. Обадете се на 0888 333 424 за детайли."

8. Q: "Колко време преди сесията трябва да пристигна?"
   A: "Моля, пристигнете 5 минути по-рано, за да имате време да се настаните и подготвите комфортно."

**Accordion Behavior:**
- Only one answer open at a time
- Smooth slide animation (250ms)
- Click question to toggle
- Chevron icon rotates on open
- Mobile-friendly touch targets

Use shadcn/ui Accordion component with custom styling.
```

---

## PHASE 3: Enhanced Service Presentation

### Prompt 3.1: Improved Service Cards

```
Enhance ServiceCard component with better information hierarchy:

**Updates to Existing Cards:**

1. **Add benefits list** to each service (3 bullet points with check icons):

   SOMA Ритуал:
   ✓ Пълно възстановяване на тяло и ум
   ✓ Комбинация от 5 терапевтични техники
   ✓ Дълбока релаксация и енергизиране

   Традиционен Тай Масаж:
   ✓ Освобождава мускулно напрежение
   ✓ Подобрява гъвкавостта и енергията
   ✓ Автентична източна техника

   Класически масаж:
   ✓ Облекчава болка в мускулите
   ✓ Подобрява кръвообращението
   ✓ Подходящ за всеки

   Частичен масаж на гръб:
   ✓ Бързо облекчение на напрежението
   ✓ Фокус върху проблемни зони
   ✓ Перфектен за заети хора

   Ароматерапевтичен масаж:
   ✓ Успокоява ума с етерични масла
   ✓ Нежни, релаксиращи движения
   ✓ Възстановява емоционален баланс

   Енергийна терапия:
   ✓ Балансира жизнената енергия
   ✓ Прецизен натиск върху енергийни точки
   ✓ Съчетава масаж и енергийно лечение

   Подмладяващ масаж на лице:
   ✓ Подобрява кръвообращението и тен
   ✓ Стяга кожата и намалява фини линии
   ✓ Естествен блясък и свежест

2. **Visual enhancements:**
   - Image zoom on hover (scale: 1.05)
   - Stronger shadow on hover
   - "Featured" badge for SOMA Ritual (copper accent color)

3. **Better pricing display:**
   - Larger, bolder price numbers
   - Duration with clock icon
   - "От 50лв" for services with multiple options

4. **CTA button improvements:**
   - Icon + text: "📅 Запази час"
   - Accent color for featured service
   - Hover: Slight lift effect

Make cards more informative and action-oriented.
```

---

### Prompt 3.2: Service Comparison Feature

```
Add a service comparison tool (optional enhancement):

**Features:**
- Checkbox on each service card: "Добави за сравнение"
- Maximum 3 services can be compared
- When 2-3 selected, show sticky button: "Сравни услугите (X)"
- Click opens modal with side-by-side table

**Comparison Table:**
Columns: Service name, Duration options, Price, Benefits, Best for

Rows: Selected services

**Modal:**
- Close button
- "Book now" CTA for each service
- Highlight differences (bold text)

Use shadcn/ui Dialog component. Mobile: Stack vertically instead of table.
```

---

## PHASE 4: Online Booking System (Critical!)

### Prompt 4.1: Booking Modal - Part 1 (Structure)

```
Create a multi-step booking modal:

**Modal Structure:**
- Slides in from right (desktop) or bottom sheet (mobile)
- Overlay with backdrop blur
- Close button (X) with confirmation if form has data
- Progress indicator: "Стъпка 1 от 3", "Стъпка 2 от 3", "Стъпка 3 от 3"
- Summary sidebar (sticky on desktop, collapsible on mobile):
  * Selected service
  * Date & time
  * Duration
  * Price
  * Total

**Step Navigation:**
- Back button (Step 2, 3)
- Next button (Step 1, 2)
- Submit button (Step 3): "Потвърди резервацията"

**Autosave:**
- Save form data to localStorage on every change
- Restore on modal reopen

Use shadcn/ui Dialog + custom stepper component. React Hook Form for validation.
```

---

### Prompt 4.2: Booking Modal - Part 2 (Steps)

```
Implement the 3-step booking flow:

**STEP 1: Select Service**
- Radio button group with service cards
- Each option shows:
  * Service name
  * Small image
  * Duration options (if multiple)
  * Price
- Pre-select if user clicked "Book" on specific service card
- "Next" button enabled when service selected

**STEP 2: Choose Date & Time**
- Calendar component (shadcn/ui Calendar)
- Disable past dates
- Disable fully booked dates (show "Няма свободни часове")
- After date selected, show available time slots:
  * Morning: 9:00, 10:00, 11:00
  * Afternoon: 13:00, 14:00, 15:00, 16:00
  * Evening: 17:00, 18:00, 19:00
- Time slots as button grid
- Disable unavailable slots (greyed out + tooltip "Зает")
- "Next" button enabled when both date + time selected

**STEP 3: Contact Information**
- Form fields:
  * Име и фамилия (text, required)
  * Телефон (tel, required, format: 0888 XXX XXX)
  * Имейл (email, required, validation)
  * Бележки (textarea, optional, placeholder: "Алергии, здравословни проблеми...")

- Real-time validation:
  * Име: Min 2 characters
  * Телефон: Bulgarian format (starts with 0, 10 digits)
  * Имейл: Valid email pattern

- Checkbox (required):
  "Съгласен съм с политиката за лични данни"

- Submit button:
  * "Потвърди резервацията" (primary button)
  * Loading spinner on submit
  * Disabled if form invalid

Use React Hook Form + Zod for validation.
```

---

### Prompt 4.3: Booking Modal - Part 3 (Success/Error States)

```
Add booking submission handling:

**On Submit (Success):**
1. Show loading spinner: "Изпращане на резервацията..."
2. Replace modal content with success state:
   - Green checkmark icon (animated)
   - Heading: "Резервацията е приета!"
   - Message: "Ще получите потвърждение на {email} и SMS на {phone} до 2 часа."
   - Booking details card:
     * Booking ID: #XXXXX
     * Service: {service_name}
     * Date: {formatted_date}
     * Time: {time}
     * Price: {price}
   - "Добави в календар" button (iCal export)
   - "Върни се към начало" button

3. Clear localStorage
4. Trigger confetti animation (brief celebration)

**On Submit (Error):**
1. Show error state:
   - Red X icon
   - Heading: "Нещо се обърка"
   - Message: "Резервацията не можа да бъде изпратена. Моля, опитайте отново или се обадете директно."
   - Error details (if any)
   - "Опитай отново" button
   - Alternative contact:
     * "Обади се: 0888 333 424" (tel: link)
     * "Изпрати WhatsApp" (WhatsApp link with pre-filled message)

**Alternative Contact (WhatsApp):**
- Pre-fill message: "Здравейте! Искам да запазя час за {service_name} на {date} в {time}."

Use toast notifications (sonner) for quick feedback.
```

---

### Prompt 4.4: Booking Button Triggers

```
Update all "Запази час" buttons to open the booking modal:

1. Hero CTA: "Запазете час онлайн"
   - Opens modal with no pre-selection

2. Service card CTAs: "Запази час"
   - Opens modal with this service pre-selected (Step 1)

3. Contact section CTA
   - Opens modal

4. Mobile sticky CTA (bottom of screen, appears after scroll)
   - Fixed position
   - Primary button style
   - Icon + text: "📅 Запази час"
   - Opens modal

**Button States:**
- Idle: Primary color
- Hover: Lift + shadow
- Active: Scale down
- Loading (if async): Spinner

Add onClick handlers to open modal with correct context.
```

---

## PHASE 5: Additional Enhancements

### Prompt 5.1: WhatsApp Floating Button

```
Add a WhatsApp floating action button (FAB):

**Features:**
- Fixed position: bottom-right corner
- Appears after user scrolls 300px down
- Green WhatsApp color: #25D366
- WhatsApp icon (white)
- Subtle pulse animation
- Tooltip on hover: "Пишете ни в WhatsApp"

**Behavior:**
- Click opens WhatsApp chat (web or app):
  * URL: https://wa.me/359888333424
  * Pre-filled message: "Здравейте! Имам въпрос относно..."
- Opens in new tab

**Styling:**
- Size: 56x56px
- Border-radius: 50% (circle)
- Box-shadow: Strong shadow for visibility
- z-index: 50 (above most content)
- Mobile: Slightly larger (64x64px), bottom-left to avoid CTA button

**Animation:**
- Slide in from bottom on scroll
- Pulse animation (subtle, infinite)
- Hover: Slight scale up

Use Framer Motion for animations.
```

---

### Prompt 5.2: Studio Gallery Section

```
Add a photo gallery section:

**Section Setup:**
- Heading: "Нашето студио"
- Subheading: "Уютно пространство за вашата релаксация"

**Gallery Layout:**
- Masonry grid (3 columns desktop, 2 tablet, 1 mobile)
- 6-8 high-quality photos (placeholders for now):
  * Treatment room (massage bed, soft lighting, plants)
  * Reception area (welcoming, clean, plants)
  * Detail shots (candles, oils, stones, towels)
  * Ambient shots (natural light, calming colors)

**Features:**
- Click image to open lightbox (full-screen view)
- Lightbox navigation: Prev/Next arrows, close button, keyboard support
- Images lazy load
- Hover effect: Slight zoom + overlay with caption

**Photo Placeholders:**
Use Unsplash or placeholder images with spa/wellness theme. Actual studio photos to be added later.

Use react-photo-view or similar lightbox library.
```

---

### Prompt 5.3: Improved 404 Page

```
Replace generic 404 page with branded version:

**Design:**
- Center-aligned, full viewport height
- Background: wellness-cream color
- Emoji icon: 🧘‍♀️ (large, 80px)
- Heading: "Изглежда сте се отклонили от пътя"
- Message: "Но не се притеснявайте - винаги можете да се върнете към началото на вашето пътуване към благополучието."
- CTA button: "Върнете се към начало" (links to /)

**Quick Links:**
- "Разгледайте услугите"
- "Запазете час"
- "Свържете се с нас"

**Styling:**
- Maintain header/footer for context
- Gentle fade-in animation
- Warm, friendly tone (not technical error message)

Update src/pages/NotFound.tsx with branded design.
```

---

### Prompt 5.4: Smooth Scroll Navigation

```
Add smooth scroll navigation to header:

**Header Navigation Links:**
- Услуги → #services (smooth scroll)
- За нас → #about (smooth scroll)
- Галерия → #gallery (smooth scroll)
- Контакти → #contact (smooth scroll)

**Features:**
- Smooth scroll behavior (not instant jump)
- Active section highlighting in nav (as user scrolls)
- Mobile: Hamburger menu with same links
- Offset for sticky header (don't hide section heading)

**Implementation:**
- Use scroll-behavior: smooth in CSS
- Or React Scroll library for more control
- Intersection Observer to detect active section

**Mobile Menu:**
- Hamburger icon (≤768px)
- Slide-in drawer from right
- Close on link click
- Backdrop overlay

Update Header component with navigation.
```

---

### Prompt 5.5: Urgency & Scarcity Elements

```
Add urgency indicators to increase conversions:

**1. Limited Availability Badge (Hero):**
- Inline with hero heading or above CTA
- Badge style (accent/copper color)
- Text: "🔥 Само 3 свободни часа тази седмица"
- Dismissible (close button, save to localStorage)

**2. Social Proof Counter:**
- Small banner below hero:
  "👥 12 души разглеждат тази страница сега"
- Updates every 30-60 seconds (simulated)

**3. Recently Booked Notification:**
- Toast notification (bottom-left) appears every 2-3 minutes:
  "📅 Някой току-що запази Тай масаж"
- Auto-dismiss after 5 seconds
- Randomize services and timing

**4. Featured Service Highlight:**
- SOMA Ritual card border in accent color
- Badge: "🌟 Най-популярен"

**Ethical Considerations:**
- Use real data if possible (actual availability)
- Avoid fake urgency (builds trust long-term)
- Make dismissible (respect user preference)

Use sonner for toast notifications.
```

---

## PHASE 6: Performance & Polish

### Prompt 6.1: Image Optimization

```
Optimize all images for web performance:

1. **Convert to WebP format:**
   - Hero image: spa-hero.jpg → spa-hero.webp (target: <150KB)
   - Service images: All 8 images → .webp (target: <100KB each)

2. **Implement responsive images:**
   ```tsx
   <img
     src="spa-hero-800.webp"
     srcSet="
       spa-hero-400.webp 400w,
       spa-hero-800.webp 800w,
       spa-hero-1200.webp 1200w
     "
     sizes="(max-width: 768px) 100vw, 1200px"
     alt="SOMA STUDIO - Холистична терапия"
   />
   ```

3. **Lazy loading:**
   - Hero image: `loading="eager"` + `fetchpriority="high"`
   - Below-fold images: `loading="lazy"`
   - Add blur placeholder (LQIP - use blurhash or similar)

4. **Fallback for non-WebP browsers:**
   ```tsx
   <picture>
     <source srcSet="image.webp" type="image/webp" />
     <source srcSet="image.jpg" type="image/jpeg" />
     <img src="image.jpg" alt="..." />
   </picture>
   ```

Ensure all images compressed, lazy loaded, and responsive.
```

---

### Prompt 6.2: Accessibility Audit & Fixes

```
Perform accessibility audit and fix issues:

**1. Keyboard Navigation:**
- Test all interactive elements reachable via Tab
- Ensure logical tab order (top to bottom, left to right)
- Add "Skip to main content" link at top (hidden until focused)
- Modal traps focus (Tab cycles within modal)
- Escape key closes modals

**2. Screen Reader Support:**
- Add `<h1>` only once (hero heading)
- Proper heading hierarchy (no skipped levels)
- Form labels associated with inputs (`htmlFor` + `id`)
- ARIA labels for icon buttons:
  ```tsx
  <button aria-label="Обади се на SOMA STUDIO">
    <Phone aria-hidden="true" />
  </button>
  ```
- Live regions for dynamic content:
  ```tsx
  <div aria-live="polite" aria-atomic="true">
    {successMessage}
  </div>
  ```

**3. Color Contrast:**
- Test all text/background combinations (WebAIM Contrast Checker)
- Ensure 4.5:1 for normal text, 3:1 for large text
- Fix any failing combinations

**4. Focus Indicators:**
- Visible outline on all interactive elements
- Use `:focus-visible` for keyboard-only indicators
- Never remove outlines completely

Run axe DevTools and fix all critical + serious issues.
```

---

### Prompt 6.3: Animation Performance

```
Optimize animations for smooth 60fps:

**1. GPU-Accelerated Animations:**
Only animate `transform` and `opacity`:
```css
/* Good */
.card:hover {
  transform: translateY(-4px);
  transition: transform 300ms ease-out;
}

/* Bad (avoid) */
.card:hover {
  top: -4px; /* Causes layout reflow */
}
```

**2. Will-Change Optimization:**
Use sparingly for elements that will definitely animate:
```css
.hero-image {
  will-change: transform;
}
```

**3. Reduced Motion Support:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**4. Intersection Observer for Scroll Animations:**
Only animate elements when visible:
```tsx
const ref = useInView({ once: true });
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={ref ? { opacity: 1, y: 0 } : {}}
/>
```

Test on low-end devices. Use Chrome DevTools Performance tab.
```

---

### Prompt 6.4: SEO & Meta Tags

```
Improve SEO and meta tags:

**1. Update HTML Head (index.html):**
```html
<title>SOMA STUDIO - Холистична Терапия и Тайландски Масаж София | Запази Час Онлайн</title>

<meta name="description" content="Открийте пътя към вътрешно равновесие в SOMA STUDIO. Професионален тайландски масаж, холистични терапии, ароматерапия. Запазете час онлайн за SOMA Ритуал - 90 минути блаженство. София, кв. Манастирски Ливади.">

<meta name="keywords" content="soma studio софия, тайландски масаж софия, холистична терапия, soma ritual, масаж софия, ароматерапия, wellness софия, спа софия, класически масаж, енергийна терапия">

<!-- Open Graph -->
<meta property="og:title" content="SOMA STUDIO - Холистична Терапия и Масаж София">
<meta property="og:description" content="SOMA Ритуал за благоденствие - 90 минути холистична терапия. Тайландски масаж, класически масаж, ароматерапия. Запазете час онлайн сега!">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://somastudio.lovable.app/">
<meta property="og:type" content="website">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="SOMA STUDIO - Холистична Терапия София">
<meta name="twitter:description" content="Професионален тайландски масаж и холистични терапии в София. Запазете час онлайн.">
<meta name="twitter:image" content="/twitter-image.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://somastudio.lovable.app/">
```

**2. Add Structured Data (Schema.org):**
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "SOMA STUDIO",
  "description": "Холистична терапия и тайландски масаж в София",
  "url": "https://somastudio.lovable.app",
  "telephone": "+359888333424",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. 409-та 13, Манастирски Ливади Изток",
    "addressLocality": "София",
    "addressCountry": "BG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "42.XXXX",
    "longitude": "23.XXXX"
  },
  "priceRange": "50лв - 150лв",
  "openingHours": "Mo-Sa 09:00-19:00",
  "image": "https://somastudio.lovable.app/og-image.jpg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}
</script>
```

Add to public/index.html or use react-helmet for dynamic meta tags.
```

---

## 🎨 Final Polish Checklist

Use this prompt to review and polish the implementation:

```
Perform final UX/UI polish review:

**Visual Consistency:**
- [ ] All buttons use consistent sizing and spacing
- [ ] Color palette matches specification (sage + copper accent)
- [ ] Typography uses Playfair Display + Inter correctly
- [ ] Whitespace is generous and creates calm feeling
- [ ] Mobile spacing is appropriate (not cramped)

**Interactions:**
- [ ] All hover effects work smoothly
- [ ] Loading states are clear and branded
- [ ] Animations are subtle and purposeful
- [ ] No janky scrolling or layout shifts
- [ ] Forms provide immediate validation feedback

**Content:**
- [ ] All Bulgarian text is correct and natural
- [ ] No Lorem Ipsum or placeholder text visible
- [ ] Images have descriptive alt text
- [ ] Error messages are helpful and friendly

**Functionality:**
- [ ] Booking modal works end-to-end
- [ ] WhatsApp button opens with correct number
- [ ] All links work (phone, email, Instagram)
- [ ] 404 page is branded and helpful
- [ ] FAQ accordion expands/collapses smoothly

**Performance:**
- [ ] Lighthouse Performance score: 90+
- [ ] Lighthouse Accessibility score: 95+
- [ ] No console errors or warnings
- [ ] Images are optimized and lazy loaded

**Mobile:**
- [ ] All features work on mobile
- [ ] Touch targets are 44x44px minimum
- [ ] Text is readable without zooming
- [ ] Forms are easy to complete on phone
- [ ] No horizontal scrolling

Fix any issues found before final deployment.
```

---

## 📱 Mobile-Specific Optimizations

```
Add mobile-specific enhancements:

**1. Bottom Sheet Modal (Mobile):**
Instead of center modal, use bottom sheet on mobile:
- Slides up from bottom
- Swipe down to dismiss
- Partial visibility with drag handle
- Better reachability on large phones

**2. Sticky Mobile CTA:**
After user scrolls past hero, show sticky button at bottom:
- Fixed position: bottom: 0, full width
- "📅 Запази час онлайн" button
- Primary color, slight shadow
- Persists while scrolling
- Hides when booking modal open

**3. Tap to Call Optimization:**
Ensure all phone numbers are `<a href="tel:+359888333424">`
- Format: +359 888 333 424 (international)
- One-tap calling
- Clear visual indicator (phone icon)

**4. Mobile Navigation:**
Hamburger menu improvements:
- Smooth slide animation
- Backdrop blur
- Close on outside click
- Larger touch targets (60px height)
- Icons next to menu items

**5. Service Cards Mobile Scroll:**
Consider horizontal scroll for featured services:
- Snap to grid
- Scroll indicators
- Swipe gesture
- "Scroll for more →" hint

Test on iPhone SE, iPhone 14, Samsung Galaxy for compatibility.
```

---

## 🚀 Deployment Checklist

Before deploying to production:

```
**Pre-Deployment:**
- [ ] All placeholder content replaced with real content
- [ ] Therapist bio and photo added
- [ ] Real testimonials collected and added
- [ ] Studio photos taken and uploaded
- [ ] FAQ answers reviewed by owner
- [ ] Contact information verified (phone, email, address)
- [ ] Social media links tested
- [ ] Booking form submission endpoint configured
- [ ] Google Maps embed with correct location
- [ ] Analytics tracking set up (GA4 or Plausible)

**Testing:**
- [ ] Test booking flow end-to-end
- [ ] Verify confirmation emails send
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on iPhone and Android
- [ ] Screen reader testing (NVDA, VoiceOver)
- [ ] Test slow 3G connection
- [ ] Verify all forms validate correctly

**SEO:**
- [ ] Google Search Console set up
- [ ] Sitemap.xml generated and submitted
- [ ] Robots.txt configured
- [ ] Schema.org structured data validated
- [ ] Open Graph images (1200x630px)

**Performance:**
- [ ] Run Lighthouse audit
- [ ] Optimize Core Web Vitals
- [ ] Compress images
- [ ] Enable Gzip/Brotli
- [ ] Set up CDN for assets

**Legal:**
- [ ] Privacy policy page (GDPR compliance)
- [ ] Cookie consent (if using analytics)
- [ ] Terms of service
- [ ] Cancellation policy clear

Deploy to production and monitor analytics!
```

---

## 📊 Success Metrics to Track

After implementation, track these KPIs:

**Conversion Metrics:**
- Booking form completion rate (target: >30%)
- Phone call clicks (should decrease as online booking increases)
- WhatsApp message rate
- Form abandonment rate (where users drop off)

**Engagement Metrics:**
- Average time on site (target: 2+ minutes)
- Scroll depth (% reaching testimonials, FAQ)
- Service comparison usage
- FAQ accordion engagement

**UX Metrics:**
- Bounce rate (target: <50%)
- Mobile vs desktop booking ratio
- Page load time (target: <2.5s LCP)
- Error rate (form validation failures)

**Business Metrics:**
- Total bookings per week
- Booking source (online vs phone vs WhatsApp)
- Revenue per booking
- Repeat customer rate

Use Google Analytics 4 or similar to track. Set up goals for booking completion.

---

## 💡 Pro Tips for Lovable.dev

**Prompt Engineering Best Practices:**

1. **Be Specific:** Instead of "make it look nice", say "add 32px padding, sage green background, Playfair Display font"

2. **Reference Existing:** "Update the ServiceCard component to include..." (Lovable understands existing code)

3. **Provide Examples:** Include sample text, placeholder content, Bulgarian translations

4. **Iterate:** Start with basic implementation, then refine with follow-up prompts

5. **Component-First:** Ask Lovable to create reusable components, then use them in layouts

6. **Test as You Go:** After each phase, test the feature before moving to next

7. **Use Lovable's Strengths:**
   - shadcn/ui components (already familiar)
   - Tailwind styling (natural language → classes)
   - TypeScript types (can infer from usage)
   - React best practices (handles state, effects)

**Example Follow-Up Prompts:**

```
"The booking modal looks good, but can you make the close button larger on mobile (48x48px) and add a confirmation dialog if the user has entered any data?"

"Add a subtle pulse animation to the WhatsApp button to draw attention. Use Tailwind animate-pulse but make it slower (3s duration)."

"Update the testimonials carousel to show 2 cards on tablet instead of 3. Also add keyboard navigation (arrow keys)."
```

---

## 🎯 Priority Summary

If you have limited time, implement in this order for maximum impact:

### Must Have (Week 1):
1. ✅ Custom typography (Playfair Display + Inter)
2. ✅ About section (therapist credentials)
3. ✅ Testimonials carousel
4. ✅ FAQ accordion
5. ✅ Online booking modal (all 3 steps)

### Should Have (Week 2):
6. ✅ WhatsApp floating button
7. ✅ Enhanced service cards (benefits, better CTA)
8. ✅ Improved 404 page
9. ✅ Smooth scroll navigation
10. ✅ Image optimization

### Nice to Have (Week 3):
11. ✅ Studio gallery
12. ✅ Service comparison tool
13. ✅ Urgency indicators
14. ✅ Mobile sticky CTA
15. ✅ Advanced animations

---

**End of Lovable Implementation Guide**

**Ready to build?** Start with Phase 1, test thoroughly, and iterate based on results!

---

**Document maintained by:** Sally 🎨 (UX Expert)
**Last updated:** January 16, 2025
**Status:** Ready for implementation
