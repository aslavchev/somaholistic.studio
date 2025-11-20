# Lovable.dev - Fix Prompts for SOMA STUDIO

Use these prompts in Lovable to implement the recommended improvements.

---

## PHASE 1: Critical Fixes

### Prompt 1.1: Form Validation for BookingDialog

```
Add form validation to BookingDialog.tsx:

1. Email validation:
   - Check for valid email format (must contain @ and .)
   - Show error message below input if invalid: "Невалиден имейл" / "Invalid email"
   - Add red border when invalid

2. Phone validation:
   - Bulgarian format: starts with 0 or +359, 10 digits total
   - Show error message: "Невалиден телефон" / "Invalid phone"
   - Add red border when invalid

3. Name validation:
   - Minimum 2 characters
   - Show error message: "Минимум 2 символа" / "Minimum 2 characters"

4. Update canSubmit to check all validations pass

5. Show validation errors in real-time as user types

Keep the inline icon styling for inputs.
```

---

### Prompt 1.2: Fill Empty Benefits Arrays

```
Update Services.tsx - add benefits and suitableFor for all services that have empty arrays:

Classical Massage:
benefits:
- "Подобрява кръвообращението" / "Improves blood circulation"
- "Облекчава мускулно напрежение" / "Relieves muscle tension"
- "Възстановява енергията" / "Restores energy"
suitableFor:
- "Стрес и напрежение" / "Stress and tension"
- "Мускулни болки" / "Muscle pain"

Partial Back Massage:
benefits:
- "Бързо облекчение" / "Quick relief"
- "Фокус върху проблемни зони" / "Focus on problem areas"
- "Подобрява стойката" / "Improves posture"
suitableFor:
- "Седяща работа" / "Desk work"
- "Болки в гърба и шията" / "Back and neck pain"

Traditional Thai Massage:
benefits:
- "Подобрява гъвкавостта" / "Improves flexibility"
- "Балансира енергията" / "Balances energy"
- "Освобождава напрежение" / "Releases tension"
suitableFor:
- "Скованост" / "Stiffness"
- "Енергиен дисбаланс" / "Energy imbalance"

Energy Therapy:
benefits:
- "Балансира жизнената сила" / "Balances life force"
- "Освобождава блокажи" / "Releases blockages"
- "Яснота и фокус" / "Clarity and focus"
suitableFor:
- "Емоционален дисбаланс" / "Emotional imbalance"
- "Търсещи вътрешен мир" / "Seeking inner peace"

Facial Therapy:
benefits:
- "Подобрява тена" / "Improves complexion"
- "Намалява фини линии" / "Reduces fine lines"
- "Естествен блясък" / "Natural glow"
suitableFor:
- "Антиейдж грижа" / "Anti-aging care"
- "Уморена кожа" / "Tired skin"

Use the t() function for translations.
```

---

### Prompt 1.3: WhatsApp Brand Icon

```
Update WhatsAppButton.tsx to use the actual WhatsApp brand icon instead of MessageCircle:

Replace the MessageCircle icon with this WhatsApp SVG:

<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
</svg>

Keep the same button styling with bg-[#25D366] and hover effects.
```

---

## PHASE 2: UX Enhancements

### Prompt 2.1: Bulgarian Calendar Locale

```
Update BookingDialog.tsx to show Bulgarian day and month names in the calendar:

1. Import Bulgarian locale from date-fns:
   import { bg } from 'date-fns/locale';

2. Add locale prop to Calendar component based on current language:
   <Calendar
     locale={language === 'bg' ? bg : undefined}
     mode="single"
     selected={formData.date}
     onSelect={(date) => setFormData({ ...formData, date })}
     disabled={(date) => date < new Date()}
     className="rounded-md border p-3"
   />

3. Get language from useLanguage hook (already imported)
```

---

### Prompt 2.2: Add Therapist Photo to About Section

```
Update About.tsx to include a therapist photo section:

Add a new section at the top before the 3-card grid:

<div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
  <div className="relative">
    <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
      <img
        src={wellnessAccessories}
        alt={t("Терапевт в SOMA STUDIO", "Therapist at SOMA STUDIO")}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-2xl font-semibold text-foreground">
      {t("За мен", "About Me")}
    </h3>
    <p className="text-muted-foreground leading-relaxed">
      {t(
        "С над 10 години опит в холистичните практики, посветих живота си на изкуството на изцелението. Обучавах се в традиционен тайландски масаж в Тайланд и съчетавам древни техники със съвременни подходи.",
        "With over 10 years of experience in holistic practices, I have dedicated my life to the art of healing. I trained in traditional Thai massage in Thailand and combine ancient techniques with modern approaches."
      )}
    </p>
    <p className="text-muted-foreground leading-relaxed">
      {t(
        "Вярвам, че всеки човек заслужава да се чувства добре в тялото си. Моята мисия е да ви помогна да откриете баланса и вътрешната хармония.",
        "I believe that everyone deserves to feel good in their body. My mission is to help you discover balance and inner harmony."
      )}
    </p>
  </div>
</div>

Import wellnessAccessories from assets (use as placeholder until real photo is added).
```

---

### Prompt 2.3: Gallery Lightbox

```
Add lightbox functionality to Gallery.tsx:

1. Add state for selected image:
   const [selectedImage, setSelectedImage] = useState<number | null>(null);

2. Make images clickable:
   onClick={() => setSelectedImage(index)}

3. Add Dialog for lightbox view:
   import { Dialog, DialogContent } from "@/components/ui/dialog";

   <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
     <DialogContent className="max-w-4xl p-2">
       {selectedImage !== null && (
         <img
           src={images[selectedImage].src}
           alt={images[selectedImage].alt}
           className="w-full h-auto rounded-lg"
         />
       )}
     </DialogContent>
   </Dialog>

4. Add cursor-pointer and hover effect to indicate clickability
```

---

### Prompt 2.4: Testimonials Carousel

```
Convert Testimonials.tsx from static grid to auto-rotating carousel:

1. Import Embla Carousel:
   import useEmblaCarousel from 'embla-carousel-react';
   import Autoplay from 'embla-carousel-autoplay';

2. Set up carousel:
   const [emblaRef] = useEmblaCarousel(
     { loop: true, align: 'start' },
     [Autoplay({ delay: 5000, stopOnInteraction: true })]
   );

3. Replace the grid with carousel structure:
   <div className="overflow-hidden" ref={emblaRef}>
     <div className="flex gap-6">
       {testimonials.map((testimonial, index) => (
         <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0">
           <Card className="border-0 shadow-lg h-full">
             {/* existing card content */}
           </Card>
         </div>
       ))}
     </div>
   </div>

4. Add navigation dots below carousel
5. Keep the trust badges section as is
```

---

## PHASE 3: Code Quality

### Prompt 3.1: Standardize Phone Format

```
Create a constants file and standardize phone numbers across all components:

1. Create src/lib/constants.ts:
   export const CONTACT = {
     PHONE_DISPLAY: "+359 888 333 424",
     PHONE_TEL: "+359888333424",
     WHATSAPP: "359888333424",
     INSTAGRAM: "somaholisticstudio",
     ADDRESS: {
       STREET: "ул. \"409 - та\" 13",
       AREA: "Манастирски Ливади Изток",
       CITY: "София"
     }
   };

2. Update all components to use these constants:
   - Hero.tsx: href={`tel:${CONTACT.PHONE_TEL}`}
   - WhatsAppButton.tsx: url = `https://wa.me/${CONTACT.WHATSAPP}...`
   - BookingDialog.tsx: same
   - Contact.tsx: display CONTACT.PHONE_DISPLAY
   - Footer.tsx: same
   - Header.tsx: same

3. Import from "@/lib/constants" in each file
```

---

### Prompt 3.2: Add aria-hidden to Decorative Icons

```
Add aria-hidden="true" to all decorative icons across components:

Files to update:
- BookingDialog.tsx: Clock, User, Mail, PhoneIcon, ArrowLeft, ArrowRight, CheckCircle2
- About.tsx: Award, Heart, Sparkles
- Testimonials.tsx: Star
- Contact.tsx: MapPin, Phone, Instagram, Clock
- Footer.tsx: Phone, Instagram, MapPin

Example:
<Clock className="w-4 h-4" aria-hidden="true" />

This improves accessibility by hiding decorative icons from screen readers.
```

---

### Prompt 3.3: Hero Image Loading State

```
Add a loading state for the hero background image in Hero.tsx:

1. Add state:
   const [imageLoaded, setImageLoaded] = useState(false);

2. Preload image on mount:
   useEffect(() => {
     const img = new Image();
     img.src = spaHero;
     img.onload = () => setImageLoaded(true);
   }, []);

3. Add transition to background div:
   <div
     className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700
       ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
     style={{ backgroundImage: `url(${spaHero})` }}
   >

4. Add a loading background color while image loads:
   <div className="absolute inset-0 bg-wellness-sage" /> {/* Behind the image */}
```

---

## Summary - Priority Order

**Do first (Critical):**
1. Form validation (Prompt 1.1)
2. Fill empty benefits (Prompt 1.2)
3. WhatsApp icon (Prompt 1.3)

**Do next (Important):**
4. Bulgarian calendar (Prompt 2.1)
5. Therapist photo (Prompt 2.2)
6. Constants file (Prompt 3.1)

**Nice to have:**
7. Gallery lightbox (Prompt 2.3)
8. Testimonials carousel (Prompt 2.4)
9. aria-hidden (Prompt 3.2)
10. Hero loading (Prompt 3.3)

---

**Copy these prompts into Lovable.dev one at a time and test each change!**
