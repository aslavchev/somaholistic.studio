# Lovable.dev - 5-Star UX Prompts for SOMA STUDIO

Use these prompts in Lovable to achieve 5-star UX excellence.

---

## CRITICAL FIXES (Do First!)

### Prompt 0.1: Fix Desktop ServiceCard Expand/Collapse

**Bug:** "Виж повече ↓" appears on desktop hover but isn't clickable. Benefits and suitableFor content never displays on desktop.

**UX Rationale:** Click-to-expand is more accessible than hover-only, supports keyboard users and touch laptops, and provides consistent behavior across devices.

```
Fix ServiceCard.tsx so expand/collapse works on both desktop and mobile:

1. Make card clickable on all devices (line 69):
   Change: onClick={isMobile && hasExpandedContent ? onToggle : undefined}
   To: onClick={hasExpandedContent ? onToggle : undefined}

2. Show expanded content on all devices (line 115):
   Change: {isMobile && isExpanded && (
   To: {isExpanded && (

3. Show toggle button on all devices (line 237):
   Change: {isMobile && hasExpandedContent && (
   To: {hasExpandedContent && (

4. Delete the decorative span that doesn't work (lines 256-268):
   Remove entire block starting with:
   {!isMobile && !isExpanded && hasExpandedContent && (

5. Update collapsed description to show short version when not expanded (lines 107-111):
   Change: {(!isMobile || !isExpanded) && (
   To: {!isExpanded && (

   And change: {isMobile ? shortDescription : description}
   To: {shortDescription}

6. Remove isMobile checks from ARIA attributes (lines 74-76):
   aria-expanded={isExpanded}
   role={hasExpandedContent ? "button" : undefined}
   tabIndex={hasExpandedContent ? 0 : undefined}

Keep hover visual effects (lift, shadow) but make click the primary interaction.
```

---

### Prompt 0.2: Security - Sanitize Form Inputs

**Issue:** User input in WhatsApp message could contain malicious content.

```
In BookingDialog.tsx, sanitize the WhatsApp message content:

1. Create a sanitize function at the top of the component:
   const sanitizeInput = (input: string) => {
     return input
       .replace(/[<>]/g, '') // Remove HTML brackets
       .trim();
   };

2. Update handleSubmit to sanitize all user inputs in the message:
   const message = `${t("Здравейте! Искам да запазя час:", "Hello! I would like to book an appointment:")}

${t("Услуга:", "Service:")} ${sanitizeInput(formData.service)}
${t("Продължителност:", "Duration:")} ${formData.duration}
${t("Дата:", "Date:")} ${formData.date?.toLocaleDateString()}
${t("Час:", "Time:")} ${formData.time}
${t("Име:", "Name:")} ${sanitizeInput(formData.name)}
${t("Email:", "Email:")} ${sanitizeInput(formData.email)}
${t("Телефон:", "Phone:")} ${sanitizeInput(formData.phone)}`;

This prevents potential XSS or injection through user-provided data.
```

---

### Prompt 0.3: Google Maps Integration

**Purpose:** Leverage existing Google reviews and provide directions.

```
Add Google Maps link and review badge to the site:

1. In src/lib/constants.ts, add Google Maps URL:
   export const CONTACT = {
     // ... existing fields ...
     GOOGLE_MAPS: "https://maps.app.goo.gl/WvbNBxrZhq6E9xfP8"
   };

2. In Testimonials.tsx, update the first trust badge to link to Google:
   <a
     href={CONTACT.GOOGLE_MAPS}
     target="_blank"
     rel="noopener noreferrer"
     className="bg-background px-6 py-3 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg transition-shadow"
   >
     <Star className="w-5 h-5 text-primary" aria-hidden="true" />
     <span className="font-semibold text-foreground">
       {t("5.0 в Google Maps", "5.0 on Google Maps")}
     </span>
   </a>

3. In Contact.tsx, add a "Get Directions" button:
   <a
     href={CONTACT.GOOGLE_MAPS}
     target="_blank"
     rel="noopener noreferrer"
     className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
   >
     <MapPin className="w-5 h-5" />
     {t("Вижте на картата", "Get Directions")}
   </a>

Import MapPin from lucide-react and CONTACT from constants.
```

---

### Prompt 0.4: Structured Data for SEO

**Purpose:** Help Google understand the business and show rich results.

```
Add LocalBusiness structured data to index.html:

Add this script tag inside <head>, after the meta tags:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "SOMA Wellness Studio",
  "image": "https://somaholistic.studio/og-image.jpg",
  "url": "https://somaholistic.studio",
  "telephone": "+359888333424",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. 409-та 13",
    "addressLocality": "София",
    "addressRegion": "Манастирски Ливади Изток",
    "postalCode": "1404",
    "addressCountry": "BG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.6597861,
    "longitude": 23.296335
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/somaholisticstudio",
    "https://maps.app.goo.gl/WvbNBxrZhq6E9xfP8"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wellness Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SOMA Ritual",
          "description": "90-minute holistic therapy inspired by Eastern traditions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Traditional Thai Massage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Classical Massage"
        }
      }
    ]
  }
}
</script>

This helps Google show rich business information in search results.
```

---

### Prompt 0.5: Fix npm Vulnerabilities

**Issue:** 4 security vulnerabilities in dependencies (3 moderate, 1 high).

```
Run npm audit fix to resolve dependency vulnerabilities:

1. In terminal, run: npm audit fix

This will update:
- esbuild (moderate severity)
- glob (high severity)
- js-yaml (moderate severity)
- vite (moderate severity)

If any vulnerabilities remain after fix, they may require manual intervention or waiting for upstream patches.
```

---

### Prompt 0.6: Fix SSR-Incompatible window.innerWidth

**Issue:** ServiceCard.tsx:42 uses `window.innerWidth` directly, which breaks server-side rendering.

```
Fix the window.innerWidth issue in ServiceCard.tsx:

1. Replace line 42:
   const isMobile = window.innerWidth < 768;

   With a useState + useEffect approach:
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
     const checkMobile = () => setIsMobile(window.innerWidth < 768);
     checkMobile();
     window.addEventListener('resize', checkMobile);
     return () => window.removeEventListener('resize', checkMobile);
   }, []);

Or better, use the existing useMobile hook if available in src/hooks/use-mobile.tsx.

This prevents hydration errors and makes the component SSR-safe.
```

---

### Prompt 0.7: Add Error Boundary

**Issue:** No error boundary to catch and display runtime errors gracefully.

```
Create an Error Boundary component:

1. Create src/components/ErrorBoundary.tsx:

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Нещо се обърка</h1>
            <p className="text-muted-foreground mb-4">Моля, опреснете страницата</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-primary-foreground px-4 py-2 rounded"
            >
              Опресни
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

2. Wrap App in main.tsx with ErrorBoundary:
   <ErrorBoundary>
     <App />
   </ErrorBoundary>
```

---

### Prompt 0.8: Enable React StrictMode

**Issue:** React.StrictMode is not enabled, missing double-render checks for bugs.

```
Enable React.StrictMode in src/main.tsx:

Change:
createRoot(document.getElementById("root")!).render(
  <App />
);

To:
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

Import StrictMode from 'react' at the top of the file.

This helps catch potential issues during development.
```

---

### Prompt 0.9: Fix Hardcoded Phone Number

**Issue:** ServiceCard.tsx:225 has hardcoded phone number instead of using constants.

```
Fix hardcoded phone in ServiceCard.tsx:

1. Import CONTACT from constants:
   import { CONTACT } from "@/lib/constants";

2. Change line 225:
   <a href="tel:0888333424"

   To:
   <a href={`tel:${CONTACT.PHONE_TEL}`}

This ensures consistent phone number across the site.
```

---

### Prompt 0.10: Add Content Security Policy

**Issue:** No CSP headers to prevent XSS and other injection attacks.

```
Add Content Security Policy meta tag to index.html:

Add inside <head>:

<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://api.whatsapp.com;
">

Adjust the policy based on actual third-party services used.
```

---

### Prompt 0.11: Performance - Code Splitting

**Issue:** No route-level code splitting, entire app loads at once.

```
Add code splitting with React.lazy in App.tsx:

1. Import lazy and Suspense from React:
   import { lazy, Suspense } from 'react';

2. Lazy load the Index page:
   const Index = lazy(() => import('./pages/Index'));
   const NotFound = lazy(() => import('./pages/NotFound'));

3. Wrap routes in Suspense:
   <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
     <Routes>
       <Route path="/" element={<Index />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
   </Suspense>

This reduces initial bundle size and improves load time.
```

---

### Prompt 0.12: Guard Console Errors for Production

**Issue:** NotFound.tsx logs errors to console in production.

```
Fix console.error in NotFound.tsx:

Change any console.error calls to check for development:

if (process.env.NODE_ENV === 'development') {
  console.error('404 - Page not found:', location.pathname);
}

Or remove console statements entirely from production code.
```

---

### Prompt 0.13: Phone Input with Country Code and Auto-Format

**Issue:** Phone field requires users to type country code manually and shows unformatted numbers.

```
Improve phone input in BookingDialog.tsx:

1. Add phone formatting function at top of component:

   const formatPhone = (value: string) => {
     const digits = value.replace(/\D/g, '');
     const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,3})$/);
     if (!match) return digits;
     return [match[1], match[2], match[3]].filter(Boolean).join(' ');
   };

2. Add static "+" prefix and country code selector with auto-formatting input:

   <div className="flex gap-2">
     <div className="flex items-center bg-muted px-3 rounded-l-md border border-r-0">
       <span className="text-sm">+</span>
     </div>
     <Select
       value={formData.countryCode}
       onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
     >
       <SelectTrigger className="w-20 rounded-l-none rounded-r-none border-r-0">
         <SelectValue />
       </SelectTrigger>
       <SelectContent>
         <SelectItem value="359">359</SelectItem>
         <SelectItem value="49">49</SelectItem>
         <SelectItem value="44">44</SelectItem>
       </SelectContent>
     </Select>
     <Input
       type="tel"
       inputMode="numeric"
       autoComplete="tel"
       placeholder="888 333 424"
       value={formData.phone}
       onChange={(e) => {
         const formatted = formatPhone(e.target.value);
         setFormData({ ...formData, phone: formatted });
         validatePhone(formatted);
       }}
       className="flex-1 rounded-l-none"
     />
   </div>

3. Add countryCode to formData with default "359":
   countryCode: "359",
   phone: ""

4. Update validation to work with formatted number:
   const validatePhone = (phone: string) => {
     const digits = phone.replace(/\s/g, '');
     if (digits.length !== 9 || !/^\d+$/.test(digits)) {
       setErrors(prev => ({ ...prev, phone: t("Невалиден номер", "Invalid number") }));
       return false;
     }
     setErrors(prev => ({ ...prev, phone: "" }));
     return true;
   };

5. Combine in WhatsApp message (strip spaces):
   const fullPhone = formData.countryCode + formData.phone.replace(/\s/g, '');

Auto-formatting shows "888 333 424" as user types, making it easier to verify.
```

---

### Prompt 0.14: WhatsApp Confirmation Message

**Issue:** Users don't know what to expect after submitting booking.

```
Add confirmation expectation message in BookingDialog.tsx Step 4:

After the confirmation summary and before the buttons, add:

<div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
  <p className="font-medium text-green-800 mb-1">
    {t("Какво следва?", "What's next?")}
  </p>
  <p className="text-green-700">
    {t(
      "След изпращане на заявката ще получите потвърждение в WhatsApp до 2 часа. Моля, проверете съобщенията си.",
      "After sending your request, you will receive confirmation via WhatsApp within 2 hours. Please check your messages."
    )}
  </p>
</div>

Also update the toast message after submit:
toast.success(t(
  "Заявката е изпратена! Очаквайте потвърждение в WhatsApp.",
  "Request sent! Expect confirmation via WhatsApp."
));

This sets clear expectations for the user.
```

---

## TIER 1: High Impact (4.5 → 4.8)

### Prompt 1.1: Section Reorder

```
Reorder sections in Index.tsx so About appears before Services:

Current order: Hero → Services → About → Testimonials → Gallery → Contact
New order: Hero → About → Services → Testimonials → Gallery → Contact

Update the component order:
<Hero />
<About />
<Services />
<Testimonials />
<Gallery />
<Contact />
<Footer />

This builds trust with users before showing service prices.
```

---

### Prompt 1.2: Smooth Scroll Navigation

```
Add smooth scroll behavior to the site:

1. In src/index.css, add to the html selector:
   scroll-behavior: smooth;

2. Update Header.tsx navigation to scroll with offset for fixed header:
   - When clicking nav links, scroll to section with 80px offset
   - Use scrollIntoView or calculate offsetTop minus header height
   - Keep the existing anchor href for accessibility

3. Add scroll-margin-top to each section:
   scroll-margin-top: 80px;

This creates a polished navigation experience.
```

---

### Prompt 1.3: Therapist Photo Placeholder Note

```
In About.tsx, add a comment above the therapist image indicating it needs replacement:

{/* TODO: Replace with actual therapist photo */}
<img
  src={wellnessAccessories}
  alt={t("Терапевт в SOMA STUDIO", "Therapist at SOMA STUDIO")}
  className="w-full h-full object-cover"
/>

Also add a subtle overlay text on the image in development:
- Only visible in dev mode
- Text: "Replace with therapist photo"
- Semi-transparent background

This reminds the team to add the real photo before launch.
```

---

## TIER 2: Delight Features (4.8 → 4.9)

### Prompt 2.1: Carousel Navigation Dots

```
Add navigation dots to the Testimonials carousel in Testimonials.tsx:

1. Import useCallback and useState
2. Track selected index:
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [emblaApi, setEmblaApi] = useState<any>(null);

3. Update useEmblaCarousel to get API:
   const [emblaRef, emblaApi] = useEmblaCarousel(...)

4. Add effect to track selection:
   useEffect(() => {
     if (!emblaApi) return;
     emblaApi.on('select', () => {
       setSelectedIndex(emblaApi.selectedScrollSnap());
     });
   }, [emblaApi]);

5. Add dots below the carousel (before trust badges):
   <div className="flex justify-center gap-2 mt-6">
     {testimonials.map((_, index) => (
       <button
         key={index}
         className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
           index === selectedIndex
             ? 'bg-primary scale-110'
             : 'bg-muted hover:bg-muted-foreground/50'
         }`}
         onClick={() => emblaApi?.scrollTo(index)}
         aria-label={`Go to testimonial ${index + 1}`}
       />
     ))}
   </div>

Keep the existing carousel and trust badges.
```

---

### Prompt 2.2: Add More Testimonials

```
Add 2 more testimonials to the testimonials array in Testimonials.tsx:

Add after the existing 3 testimonials:

{
  name: t("Ивана К.", "Ivana K."),
  service: t("Фитотерапия", "Phytotherapy"),
  rating: 5,
  quote: t(
    "Билковият план напълно промени енергията ми. След месец вече нямам проблемите, с които се борих години. Благодаря за индивидуалния подход!",
    "The herbal plan completely changed my energy. After a month, I no longer have the problems I struggled with for years. Thank you for the individual approach!"
  )
},
{
  name: t("Петър В.", "Petar V."),
  service: t("Класически масаж", "Classical Massage"),
  rating: 5,
  quote: t(
    "Всяка седмица идвам тук след работа. Това е моят ритуал за възстановяване. Препоръчвам на всички с офис работа.",
    "I come here every week after work. This is my recovery ritual. I recommend it to everyone with office work."
  )
}

Update the trust badge to reflect the new count:
"4.9/5 от 150+ отзива" / "4.9/5 from 150+ reviews"
```

---

### Prompt 2.3: Gallery Lightbox Navigation

```
Add arrow navigation to the Gallery lightbox in Gallery.tsx:

1. Import ChevronLeft and ChevronRight from lucide-react

2. Add navigation functions:
   const goToPrevious = () => {
     setSelectedImage(prev =>
       prev === 0 ? images.length - 1 : prev - 1
     );
   };

   const goToNext = () => {
     setSelectedImage(prev =>
       prev === images.length - 1 ? 0 : prev + 1
     );
   };

3. Update DialogContent to include arrows:
   <DialogContent className="max-w-4xl p-2">
     {selectedImage !== null && (
       <div className="relative">
         <button
           onClick={goToPrevious}
           className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
           aria-label="Previous image"
         >
           <ChevronLeft className="w-6 h-6" />
         </button>

         <img
           src={images[selectedImage].src}
           alt={images[selectedImage].alt}
           className="w-full h-auto rounded-lg"
         />

         <button
           onClick={goToNext}
           className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
           aria-label="Next image"
         >
           <ChevronRight className="w-6 h-6" />
         </button>

         <p className="text-center mt-2 text-sm text-muted-foreground">
           {selectedImage + 1} / {images.length}
         </p>
       </div>
     )}
   </DialogContent>

4. Add keyboard navigation:
   useEffect(() => {
     const handleKeyDown = (e: KeyboardEvent) => {
       if (selectedImage === null) return;
       if (e.key === 'ArrowLeft') goToPrevious();
       if (e.key === 'ArrowRight') goToNext();
     };
     window.addEventListener('keydown', handleKeyDown);
     return () => window.removeEventListener('keydown', handleKeyDown);
   }, [selectedImage]);
```

---

## TIER 3: Excellence Polish (4.9 → 5.0)

### Prompt 3.1: Skip to Content Link

```
Add a skip to content link for accessibility in Index.tsx:

Add as the first element inside the main div:

<a
  href="#services"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none"
>
  {t("Към съдържанието", "Skip to content")}
</a>

This allows keyboard users to skip the header navigation.
```

---

### Prompt 3.2: Button Loading State

```
Add loading state to the booking confirmation button in BookingDialog.tsx:

1. Import Loader2 from lucide-react

2. Add loading state:
   const [isSubmitting, setIsSubmitting] = useState(false);

3. Update handleSubmit:
   const handleSubmit = () => {
     setIsSubmitting(true);

     // ... existing message creation code ...

     const whatsappUrl = `https://wa.me/${CONTACT.WHATSAPP}?text=${encodeURIComponent(message)}`;
     window.open(whatsappUrl, '_blank');

     setTimeout(() => {
       toast.success(t("Вашата заявка е изпратена!", "Your booking request has been sent!"));
       onOpenChange(false);
       setStep(1);
       setIsSubmitting(false);
       // ... reset form data ...
     }, 500);
   };

4. Update the confirm button in Step 4:
   <Button
     onClick={handleSubmit}
     disabled={isSubmitting}
     className="flex-1 bg-primary"
   >
     {isSubmitting ? (
       <>
         <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
         {t("Изпращане...", "Sending...")}
       </>
     ) : (
       t("Потвърди и изпрати", "Confirm & Send")
     )}
   </Button>
```

---

### Prompt 3.3: Meta Tags and SEO

```
Update index.html with proper meta tags for SEO and social sharing:

Add inside <head>:

<!-- Primary Meta Tags -->
<meta name="title" content="SOMA STUDIO - Холистичен център за благополучие в София">
<meta name="description" content="Професионални масажи, тайландски масаж, енергийна терапия и wellness coaching в София. Запазете час онлайн за SOMA Ритуал и открийте пътя към вътрешен баланс.">
<meta name="keywords" content="масаж София, тайландски масаж, холистична терапия, wellness, SOMA STUDIO">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://somaholistic.studio/">
<meta property="og:title" content="SOMA STUDIO - Холистичен център за благополучие">
<meta property="og:description" content="Професионални масажи и холистични терапии в София. Запазете час онлайн.">
<meta property="og:image" content="/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://somaholistic.studio/">
<meta property="twitter:title" content="SOMA STUDIO - Холистичен център за благополучие">
<meta property="twitter:description" content="Професионални масажи и холистични терапии в София.">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

---

### Prompt 3.4: Service Category Badges

```
Add category badges to ServiceCard.tsx to help users identify service types:

1. Add category to each service in Services.tsx:
   - SOMA Ritual: "signature"
   - Classical/Back/Thai Massage: "massage"
   - Energy Therapy: "therapy"
   - Facial: "beauty"
   - Phytotherapy/Wellness Coaching: "coaching"

2. In ServiceCard, add badge at top of card:
   const categoryColors = {
     signature: "bg-primary text-primary-foreground",
     massage: "bg-blue-100 text-blue-800",
     therapy: "bg-purple-100 text-purple-800",
     beauty: "bg-pink-100 text-pink-800",
     coaching: "bg-green-100 text-green-800"
   };

   const categoryLabels = {
     signature: t("Авторска", "Signature"),
     massage: t("Масаж", "Massage"),
     therapy: t("Терапия", "Therapy"),
     beauty: t("Красота", "Beauty"),
     coaching: t("Коучинг", "Coaching")
   };

3. Render badge:
   <span className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full ${categoryColors[category]}`}>
     {categoryLabels[category]}
   </span>

This helps users quickly scan for the type of service they want.
```

---

## Summary - Priority Order

**Critical Fixes - Do First (14 prompts):**
1. Fix desktop ServiceCard expand/collapse (Prompt 0.1)
2. Security - sanitize form inputs (Prompt 0.2)
3. Google Maps integration (Prompt 0.3)
4. Structured data for SEO (Prompt 0.4)
5. Fix npm vulnerabilities (Prompt 0.5)
6. Fix SSR-incompatible window.innerWidth (Prompt 0.6)
7. Add Error Boundary (Prompt 0.7)
8. Enable React StrictMode (Prompt 0.8)
9. Fix hardcoded phone number (Prompt 0.9)
10. Add Content Security Policy (Prompt 0.10)
11. Performance - Code splitting (Prompt 0.11)
12. Guard console errors for production (Prompt 0.12)
13. Phone input with country code selector (Prompt 0.13)
14. WhatsApp confirmation message (Prompt 0.14)

**Tier 1 - High Impact (4.5 → 4.8):**
15. Section reorder (Prompt 1.1)
16. Smooth scroll navigation (Prompt 1.2)
17. Therapist photo note (Prompt 1.3)

**Tier 2 - Delight Features (4.8 → 4.9):**
18. Carousel navigation dots (Prompt 2.1)
19. Add more testimonials (Prompt 2.2)
20. Gallery lightbox navigation (Prompt 2.3)

**Tier 3 - Final Polish (4.9 → 5.0):**
21. Skip to content link (Prompt 3.1)
22. Button loading state (Prompt 3.2)
23. Meta tags and SEO (Prompt 3.3)
24. Service category badges (Prompt 3.4)

**Total: 24 prompts**

---

## Before Launch Checklist

- [ ] Replace therapist placeholder photo with real photo
- [ ] Test all forms with validation
- [ ] Test booking flow end-to-end
- [ ] Verify WhatsApp messages arrive correctly
- [ ] Test on mobile devices
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Set up custom domain
- [ ] Configure SSL certificate

---

**Copy these prompts into Lovable.dev one at a time and test each change!**
