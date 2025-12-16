import { lazy, Suspense } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

// Lazy load below-the-fold sections for optimal performance
const About = lazy(() => import("@/components/About"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Contact = lazy(() => import("@/components/Contact"));
const Gifts = lazy(() => import("@/components/Gifts"));

// Skeleton placeholder for lazy-loaded sections
const SectionSkeleton = () => (
  <div className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="h-96 bg-sage-50 animate-pulse rounded-lg" />
    </div>
  </div>
);

const IndexContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none"
      >
        {t("Към съдържанието", "Skip to content")}
      </a>
      <Header />
      <Hero />
      <Services />
      <Packages />
      <Suspense fallback={<SectionSkeleton />}>
        <Gifts />
        <About />
        <Testimonials />
        <Gallery />
        <Contact />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
