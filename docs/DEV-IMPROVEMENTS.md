# SOMA STUDIO - Technical Review & Improvements

**Review Date:** November 19, 2025
**Reviewed By:** James, Dev Architect
**Project:** SOMA STUDIO (somaholistic.studio)

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Security Audit](#security-audit)
3. [Code Quality](#code-quality)
4. [Performance](#performance)
5. [Accessibility](#accessibility)
6. [Best Practices](#best-practices)
7. [Quick Wins](#quick-wins)
8. [Appendix: npm audit Results](#appendix-npm-audit-results)

---

## Executive Summary

This technical review identified **27 issues** across security, code quality, performance, accessibility, and best practices. The codebase demonstrates good foundational practices but requires attention in several critical areas.

### Priority Summary

| Priority | Count | Categories |
|----------|-------|------------|
| Critical | 4 | Security vulnerabilities, TypeScript strict mode |
| High | 8 | Missing error boundaries, SSR compatibility, test IDs |
| Medium | 10 | Performance optimization, accessibility improvements |
| Low | 5 | Code style, minor optimizations |

---

## Security Audit

### SEC-001: Dependency Vulnerabilities
**Priority:** CRITICAL
**Location:** `package.json`

**Problem:** npm audit reports 4 vulnerabilities (3 moderate, 1 high).

**Why it matters:** Vulnerabilities in dependencies can be exploited to compromise the application and user data.

**npm audit results:**
```
esbuild  <=0.24.2 - Moderate
  - Development server can send requests to any website
  - Fix: npm audit fix (updates vite)

glob  10.2.0 - 10.4.5 - High
  - Command injection via -c/--cmd with shell:true
  - Fix: npm audit fix

js-yaml  4.0.0 - 4.1.0 - Moderate
  - Prototype pollution in merge (<<)
  - Fix: npm audit fix

vite  <=6.1.6 - Moderate
  - Depends on vulnerable esbuild
  - Fix: npm audit fix
```

**How to fix:**
```bash
npm audit fix
```

---

### SEC-002: Missing Content Security Policy (CSP)
**Priority:** HIGH
**Location:** `index.html`

**Problem:** No Content Security Policy headers defined.

**Why it matters:** CSP helps prevent XSS attacks by controlling which resources can be loaded.

**How to fix:**

Add to `index.html` inside `<head>`:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://wa.me https://www.google.com;
  frame-src https://www.google.com;
">
```

---

### SEC-003: Google Maps iframe Security
**Priority:** MEDIUM
**Location:** `src/components/Contact.tsx:94-102`

**Problem:** Google Maps iframe uses a generic embed URL without API key validation.

**Why it matters:** Using unverified embed URLs can lead to unexpected behavior or tracking issues.

**Current code:**
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18..."
  // ...
/>
```

**How to fix:**
Use Google Maps Embed API with proper API key:
```tsx
<iframe
  src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=...`}
  // ...
/>
```

---

### SEC-004: Missing HTTPS Enforcement
**Priority:** MEDIUM
**Location:** `index.html`

**Problem:** No redirect to HTTPS or HSTS header.

**Why it matters:** Users accessing via HTTP can have their data intercepted.

**How to fix:**

For production, add to your hosting configuration or use:
```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

---

### SEC-005: Phone Number in Hardcoded Link
**Priority:** LOW
**Location:** `src/components/ServiceCard.tsx:225`

**Problem:** Phone number is hardcoded directly in component instead of using CONTACT constant.

**Current code:**
```tsx
<a href="tel:0888333424" ...>
```

**How to fix:**
```tsx
<a href={`tel:${CONTACT.PHONE_TEL}`} ...>
```

---

## Code Quality

### CQ-001: TypeScript Strict Mode Disabled
**Priority:** CRITICAL
**Location:** `tsconfig.app.json:18-22`

**Problem:** Multiple strict TypeScript checks are disabled:
```json
"strict": false,
"noUnusedLocals": false,
"noUnusedParameters": false,
"noImplicitAny": false,
"noFallthroughCasesInSwitch": false
```

**Why it matters:** Disabling these checks allows potential bugs to slip through:
- Implicit `any` types can cause runtime errors
- Unused variables indicate dead code
- Missing null checks cause crashes

**How to fix:**

Gradually enable strict mode:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitAny": true,
    "noFallthroughCasesInSwitch": true,
    "strictNullChecks": true
  }
}
```

Start by enabling one option at a time and fixing errors incrementally.

---

### CQ-002: Console.error in Production Code
**Priority:** MEDIUM
**Location:** `src/pages/NotFound.tsx:8-11`

**Problem:** `console.error` statement in component will appear in production.

**Current code:**
```tsx
useEffect(() => {
  console.error(
    "404 Error: User attempted to access non-existent route:",
    location.pathname
  );
}, [location.pathname]);
```

**Why it matters:** Console statements in production:
- Clutter browser console
- Can expose internal application structure
- Should use proper logging/analytics instead

**How to fix:**
```tsx
useEffect(() => {
  // Use analytics service for 404 tracking
  if (import.meta.env.PROD) {
    // analytics.track('404', { path: location.pathname });
  } else {
    console.error("404 Error:", location.pathname);
  }
}, [location.pathname]);
```

---

### CQ-003: SSR-Incompatible Window Access
**Priority:** HIGH
**Location:** `src/components/ServiceCard.tsx:42`

**Problem:** Direct `window.innerWidth` access during render breaks SSR and causes hydration issues.

**Current code:**
```tsx
const isMobile = window.innerWidth < 768;
```

**Why it matters:**
- Breaks server-side rendering
- Can cause hydration mismatches
- Not reactive to window resize

**How to fix:**
```tsx
import { useMobile } from "@/hooks/use-mobile";

const ServiceCard = ({ ...props }) => {
  const isMobile = useMobile();
  // ... rest of component
};
```

The project already has `use-mobile.tsx` hook - use it!

---

### CQ-004: Missing Memoization in Components
**Priority:** MEDIUM
**Location:** Multiple components

**Problem:** Components that receive callbacks or render lists don't use memoization.

**Affected files:**
- `src/components/Services.tsx` - services array recreated on each render
- `src/components/BookingDialog.tsx` - services and timeSlots arrays
- `src/components/Testimonials.tsx` - testimonials array

**Why it matters:** Unnecessary re-renders impact performance, especially on mobile devices.

**How to fix:**

Example for `Services.tsx`:
```tsx
import { useMemo, useCallback } from "react";

const Services = () => {
  const { t } = useLanguage();

  const services = useMemo(() => [
    {
      title: t("...", "..."),
      // ... service data
    },
    // ... more services
  ], [t]); // Only recreate when language changes

  const handleToggle = useCallback((index: number) => {
    setExpandedCard(prev => prev === index ? null : index);
  }, []);

  // ...
};
```

---

### CQ-005: Unused ESLint Rule Disabled
**Priority:** LOW
**Location:** `eslint.config.js:26`

**Problem:** `@typescript-eslint/no-unused-vars` is turned off globally.

**Current code:**
```js
rules: {
  "@typescript-eslint/no-unused-vars": "off",
}
```

**Why it matters:** Unused variables indicate dead code and can be confusing.

**How to fix:**
```js
rules: {
  "@typescript-eslint/no-unused-vars": ["warn", {
    "argsIgnorePattern": "^_",
    "varsIgnorePattern": "^_"
  }],
}
```

---

### CQ-006: Duplicate use-toast Hook Files
**Priority:** LOW
**Location:**
- `src/hooks/use-toast.ts`
- `src/components/ui/use-toast.ts`

**Problem:** Two identical hook files exist in different locations.

**Why it matters:** Code duplication leads to maintenance issues and potential inconsistencies.

**How to fix:**
1. Keep only `src/hooks/use-toast.ts`
2. Update imports in `src/components/ui/toaster.tsx`
3. Delete `src/components/ui/use-toast.ts`

---

## Performance

### PERF-001: Missing React.lazy for Route Components
**Priority:** HIGH
**Location:** `src/App.tsx:6-7`

**Problem:** All page components are eagerly loaded.

**Current code:**
```tsx
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
```

**Why it matters:**
- Increases initial bundle size
- Slower first contentful paint
- Users download unused code

**How to fix:**
```tsx
import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Skeleton className="w-full h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
```

---

### PERF-002: Large Hero Image Without Modern Formats
**Priority:** HIGH
**Location:** `src/assets/spa-hero.jpg` (94KB)

**Problem:** Hero image is large and uses only JPG format.

**Why it matters:**
- Slower page load, especially on mobile
- Higher bandwidth usage
- Poor Core Web Vitals (LCP)

**Image sizes:**
```
spa-hero.jpg: 94KB
wellness-accessories.jpg: 97KB
facial-massage-new.jpg: 66KB
```

**How to fix:**
1. Convert to WebP format (30-50% smaller)
2. Use responsive images with srcset
3. Consider using a CDN with automatic optimization

Example implementation:
```tsx
<picture>
  <source srcset="/spa-hero.webp" type="image/webp" />
  <img
    src="/spa-hero.jpg"
    alt="..."
    loading="lazy"
    width="1920"
    height="1080"
  />
</picture>
```

---

### PERF-003: Missing Image Dimensions
**Priority:** MEDIUM
**Location:** Multiple components

**Problem:** Images don't have explicit width/height attributes.

**Affected files:**
- `src/components/About.tsx:27-30`
- `src/components/Gallery.tsx:47-56`

**Why it matters:** Causes Cumulative Layout Shift (CLS) - poor Core Web Vitals score.

**How to fix:**
```tsx
<img
  src={wellnessAccessories}
  alt={t("...", "...")}
  className="w-full h-full object-cover"
  width={800}
  height={1000}
  loading="lazy"
/>
```

---

### PERF-004: No Lazy Loading for Below-Fold Images
**Priority:** MEDIUM
**Location:** `src/components/ServiceCard.tsx:88-96`

**Problem:** Service card images are not lazy loaded.

**Current code:**
```tsx
<div
  className="h-full w-full bg-cover bg-center..."
  style={{ backgroundImage: `url(${image})` }}
/>
```

**Why it matters:** All images load immediately, delaying first paint.

**How to fix:**

Use CSS `content-visibility` or convert to `<img>` with lazy loading:
```tsx
{image && (
  <div className="h-48 relative overflow-hidden">
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-300 md:group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/20..." />
  </div>
)}
```

---

### PERF-005: Framer Motion Bundle Size
**Priority:** LOW
**Location:** `package.json`

**Problem:** Full framer-motion package imported for simple animations.

**Why it matters:** framer-motion is ~60KB gzipped - significant for simple expand/collapse.

**How to fix:**

For simple animations, consider using CSS or the lighter `motion` import:
```tsx
import { motion } from "framer-motion/client";
// or use CSS transitions which are already being used elsewhere
```

---

## Accessibility

### A11Y-001: Missing Skip Link
**Priority:** HIGH
**Location:** `src/pages/Index.tsx`

**Problem:** No skip navigation link for keyboard users.

**Why it matters:** Keyboard users must tab through entire header on every page.

**How to fix:**

Add to Index.tsx:
```tsx
<LanguageProvider>
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:p-4 focus:rounded"
  >
    Skip to main content
  </a>
  <div className="min-h-screen">
    <Header />
    <main id="main-content">
      <Hero />
      {/* ... */}
    </main>
    <Footer />
  </div>
</LanguageProvider>
```

---

### A11Y-002: Missing Test IDs for Automation
**Priority:** HIGH
**Location:** Multiple components

**Problem:** Not all interactive elements have `data-testid` attributes for automation testing.

**Components needing test IDs:**
- `src/components/About.tsx` - no test IDs
- `src/components/Gallery.tsx` - no test IDs
- `src/components/Testimonials.tsx` - no test IDs
- `src/components/BookingDialog.tsx` - form inputs need test IDs

**Why it matters:** Without test IDs:
- E2E tests are fragile (rely on text/classes)
- Automation tools can't reliably interact with elements
- QA processes are more difficult

**How to fix:**

Example for BookingDialog.tsx:
```tsx
<Input
  id="name"
  data-testid="booking-input-name"
  placeholder={t("Име и фамилия", "Full Name")}
  // ...
/>

<Select
  value={formData.service}
  onValueChange={(value) => setFormData({ ...formData, service: value })}
>
  <SelectTrigger id="service" data-testid="booking-select-service">
    {/* ... */}
  </SelectTrigger>
</Select>

<Button
  onClick={handleSubmit}
  data-testid="booking-submit-button"
  // ...
>
  {t("Потвърди и изпрати", "Confirm & Send")}
</Button>
```

Example for Gallery.tsx:
```tsx
<section
  className="py-16 md:py-24 bg-background"
  id="gallery"
  data-testid="gallery-section"
  aria-label="Gallery section"
>
  {/* ... */}
  {images.map((image, index) => (
    <div
      key={index}
      data-testid={`gallery-image-${index}`}
      // ...
    >
```

---

### A11Y-003: Gallery Dialog Missing Accessibility Features
**Priority:** MEDIUM
**Location:** `src/components/Gallery.tsx:65-75`

**Problem:** Gallery lightbox dialog lacks:
- Close button with aria-label
- Keyboard trap handling
- Screen reader announcement

**Current code:**
```tsx
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
```

**How to fix:**
```tsx
<Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
  <DialogContent
    className="max-w-4xl p-2"
    aria-label={selectedImage !== null ? images[selectedImage].alt : undefined}
  >
    {selectedImage !== null && (
      <>
        <img
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          className="w-full h-auto rounded-lg"
          data-testid={`gallery-lightbox-image-${selectedImage}`}
        />
        <p className="sr-only">
          {t("Натиснете Escape за затваряне", "Press Escape to close")}
        </p>
      </>
    )}
  </DialogContent>
</Dialog>
```

---

### A11Y-004: Testimonial Carousel Missing Accessibility
**Priority:** MEDIUM
**Location:** `src/components/Testimonials.tsx:59-82`

**Problem:** Carousel lacks:
- ARIA live region for slide changes
- Navigation controls with labels
- Pause button for autoplay

**Why it matters:** Users with screen readers can't navigate or understand carousel content.

**How to fix:**
```tsx
<div
  className="overflow-hidden max-w-6xl mx-auto mb-12"
  ref={emblaRef}
  role="region"
  aria-label={t("Отзиви от клиенти", "Customer testimonials")}
  aria-roledescription="carousel"
>
  <div className="flex gap-6" aria-live="polite">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0"
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${testimonials.length}`}
        data-testid={`testimonial-card-${index}`}
      >
        {/* ... card content */}
      </div>
    ))}
  </div>
</div>
```

---

### A11Y-005: Missing Form Error Announcements
**Priority:** MEDIUM
**Location:** `src/components/BookingDialog.tsx`

**Problem:** Form validation errors not announced to screen readers.

**Current code:**
```tsx
{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
```

**How to fix:**
```tsx
{errors.name && (
  <p
    className="text-red-500 text-sm mt-1"
    role="alert"
    aria-live="polite"
    id="name-error"
  >
    {errors.name}
  </p>
)}

<Input
  id="name"
  aria-describedby={errors.name ? "name-error" : undefined}
  aria-invalid={!!errors.name}
  // ...
/>
```

---

### A11Y-006: Progress Steps Missing Context
**Priority:** LOW
**Location:** `src/components/BookingDialog.tsx:120-134`

**Problem:** Booking progress steps lack semantic meaning.

**How to fix:**
```tsx
<div
  className="flex items-center justify-between mb-6"
  role="group"
  aria-label={t("Стъпки за резервация", "Booking steps")}
>
  {[1, 2, 3, 4].map((s) => (
    <div key={s} className="flex items-center flex-1">
      <div
        className={`...`}
        aria-current={step === s ? "step" : undefined}
        aria-label={`${t("Стъпка", "Step")} ${s} ${step > s ? t("завършена", "completed") : step === s ? t("текуща", "current") : t("предстояща", "upcoming")}`}
      >
        {step > s ? <CheckCircle2 className="w-5 h-5" aria-hidden="true" /> : s}
      </div>
      {/* ... */}
    </div>
  ))}
</div>
```

---

## Best Practices

### BP-001: Missing Error Boundary
**Priority:** CRITICAL
**Location:** `src/App.tsx`

**Problem:** No error boundary to catch runtime errors.

**Why it matters:**
- Single error crashes entire app
- Users see blank screen
- No way to recover or report errors

**How to fix:**

Create `src/components/ErrorBoundary.tsx`:
```tsx
import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to error reporting service
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Нещо се обърка
            </h1>
            <p className="text-muted-foreground mb-6">
              Моля, опитайте да презаредите страницата.
            </p>
            <Button onClick={() => window.location.reload()}>
              Презареди
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

Update `App.tsx`:
```tsx
import ErrorBoundary from "@/components/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      {/* ... */}
    </QueryClientProvider>
  </ErrorBoundary>
);
```

---

### BP-002: Missing React.StrictMode
**Priority:** HIGH
**Location:** `src/main.tsx`

**Problem:** React StrictMode not enabled.

**Current code:**
```tsx
createRoot(document.getElementById("root")!).render(<App />);
```

**Why it matters:** StrictMode helps identify:
- Unsafe lifecycles
- Legacy API usage
- Unexpected side effects
- Deprecated findDOMNode usage

**How to fix:**
```tsx
import { StrictMode } from 'react';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

### BP-003: Outdated Dependencies
**Priority:** MEDIUM
**Location:** `package.json`

**Problem:** Several dependencies have major version updates available.

**Notable updates needed:**
```
@hookform/resolvers: 3.10.0 -> 5.2.2 (Major)
date-fns: 3.6.0 -> 4.1.0 (Major)
lucide-react: 0.462.0 -> 0.554.0 (Minor, many new icons)
next-themes: 0.3.0 -> 0.4.6 (Minor)
react-day-picker: 8.10.1 -> 9.11.1 (Major)
react-router-dom: 6.30.1 -> 7.9.6 (Major)
sonner: 1.7.4 -> 2.0.7 (Major)
tailwind-merge: 2.6.0 -> 3.4.0 (Major)
zod: 3.25.76 -> 4.1.12 (Major)
```

**Why it matters:**
- Missing bug fixes and security patches
- Missing new features
- Potential compatibility issues

**How to fix:**
```bash
# First, run npm install to install missing packages
npm install

# Then check for breaking changes before updating major versions
npm outdated

# Update minor/patch versions safely
npm update

# For major versions, update one at a time and test
npm install date-fns@4
npm install react-router-dom@7
# etc.
```

---

### BP-004: QueryClient Configuration
**Priority:** MEDIUM
**Location:** `src/App.tsx:9`

**Problem:** QueryClient created without configuration.

**Current code:**
```tsx
const queryClient = new QueryClient();
```

**Why it matters:** Default settings may not be optimal for the use case.

**How to fix:**
```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (was cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
```

---

### BP-005: Missing Loading States
**Priority:** MEDIUM
**Location:** `src/components/Hero.tsx`

**Problem:** Hero button shows "Book Online" immediately while image loads in background.

**Why it matters:** CTA may be clicked before page is fully interactive.

**How to fix:**

Consider showing a loading skeleton until critical resources are ready:
```tsx
const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = spaHero;
    img.onload = () => {
      setImageLoaded(true);
      setIsReady(true);
    };
  }, []);

  if (!isReady) {
    return <HeroSkeleton />;
  }

  return (
    // ... current hero content
  );
};
```

---

### BP-006: Copyright Year Hardcoded
**Priority:** LOW
**Location:** `src/components/Footer.tsx:83`

**Problem:** Year is hardcoded as "2024".

**Current code:**
```tsx
"© 2024 SOMA STUDIO. Всички права запазени."
```

**How to fix:**
```tsx
{t(
  `© ${new Date().getFullYear()} SOMA STUDIO. Всички права запазени.`,
  `© ${new Date().getFullYear()} SOMA STUDIO. All rights reserved.`
)}
```

---

## Quick Wins

These issues can be fixed immediately with minimal risk:

### 1. Run npm audit fix (5 minutes)
```bash
cd somaholistic.studio
npm audit fix
```

### 2. Fix hardcoded phone number (2 minutes)
**File:** `src/components/ServiceCard.tsx:225`
```tsx
// Change from:
<a href="tel:0888333424" ...>
// To:
<a href={`tel:${CONTACT.PHONE_TEL}`} ...>
```

### 3. Add React StrictMode (2 minutes)
**File:** `src/main.tsx`

### 4. Fix window.innerWidth SSR issue (5 minutes)
**File:** `src/components/ServiceCard.tsx:42`
- Import and use the existing `useMobile` hook

### 5. Add data-testid attributes (15 minutes)
Add test IDs to:
- BookingDialog form inputs
- Gallery images
- Testimonial cards
- About section elements

### 6. Update copyright year (1 minute)
**File:** `src/components/Footer.tsx:83`

### 7. Remove console.error or guard for production (2 minutes)
**File:** `src/pages/NotFound.tsx:8-11`

---

## Appendix: npm audit Results

```
# npm audit report

esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix`
node_modules/esbuild
  vite  <=6.1.6
  Depends on vulnerable versions of esbuild
  node_modules/vite

glob  10.2.0 - 10.4.5
Severity: high
glob CLI: Command injection via -c/--cmd executes matches with shell:true - https://github.com/advisories/GHSA-5j98-mcp5-4vw2
fix available via `npm audit fix`
node_modules/glob

js-yaml  4.0.0 - 4.1.0
Severity: moderate
js-yaml has prototype pollution in merge (<<) - https://github.com/advisories/GHSA-mh29-5h37-fv8m
fix available via `npm audit fix`
node_modules/js-yaml


4 vulnerabilities (3 moderate, 1 high)

To address all issues, run:
  npm audit fix
```

---

## Implementation Roadmap

### Phase 1: Critical Issues (Week 1)
- [ ] Run `npm audit fix`
- [ ] Add Error Boundary
- [ ] Enable React StrictMode
- [ ] Fix window.innerWidth SSR issue

### Phase 2: High Priority (Week 2)
- [ ] Add code splitting with React.lazy
- [ ] Add skip link for accessibility
- [ ] Add data-testid attributes for automation
- [ ] Add Content Security Policy

### Phase 3: Medium Priority (Week 3-4)
- [ ] Enable TypeScript strict mode (incrementally)
- [ ] Optimize images (WebP format)
- [ ] Add proper memoization
- [ ] Update outdated dependencies
- [ ] Improve form accessibility

### Phase 4: Low Priority (Ongoing)
- [ ] Fix minor code style issues
- [ ] Consider bundle size optimization
- [ ] Add more comprehensive test IDs
- [ ] Documentation updates

---

*Generated by Dev Architect Review - November 2025*
