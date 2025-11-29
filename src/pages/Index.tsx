import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import BackToTopButton from "@/components/common/BackToTopButton";

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
        <About />
        <Services />
        <Testimonials />
        <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
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
