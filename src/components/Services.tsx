import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import DiscoveryCallButton from "@/components/common/DiscoveryCallButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SERVICES, CATEGORY_LABELS } from "@/data";
import { COMMON_TEXT } from "@/data/translations";
import wellnessAccessories from "@/assets/wellness-accessories.webp";
import massageTherapy from "@/assets/massage-therapy.webp";
import classicalMassage from "@/assets/classical-massage.webp";
import backMassage from "@/assets/back-massage.webp";
import energyTherapy from "@/assets/energy-therapy.webp";
import facialMassage from "@/assets/facial-massage-new.webp";

// Image mapping helper
const IMAGE_MAP: Record<string, string> = {
  'wellness-accessories': wellnessAccessories,
  'massage-therapy': massageTherapy,
  'classical-massage': classicalMassage,
  'back-massage': backMassage,
  'energy-therapy': energyTherapy,
  'facial-massage-new': facialMassage
};

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { t, language } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px 100px 0px' // Small margin for smooth transition, aligned with lazy loading
  });

  // Preload first 4 service images for better UX on navigation
  // Order: SOMA Ritual, Phytotherapy, Wellness Coaching, Classic Massage
  useEffect(() => {
    const imagesToPreload = [
      wellnessAccessories, // SOMA Ritual (featured, shows first)
      energyTherapy,       // Phytotherapy
      classicalMassage,    // Classic Massage
      massageTherapy       // Thai Massage
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Transform centralized data into ServiceCard props format
  const services = SERVICES.map((service) => ({
    id: service.id,
    title: service.title[language],
    description: service.description[language],
    benefits: service.benefits?.map(b => b[language]),
    suitableFor: service.suitableFor?.map(s => s[language]),
    price60: service.pricing.duration60
      ? `€${service.pricing.duration60.price}`
      : undefined,
    duration60: service.pricing.duration60?.label[language],
    price90: service.pricing.duration90
      ? `€${service.pricing.duration90.price}`
      : undefined,
    duration90: service.pricing.duration90?.label[language],
    image: service.image ? IMAGE_MAP[service.image] : undefined,
    featured: service.featured,
    category: service.category
  }));

  // Filter services by category
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleToggle = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-background" id="services" data-testid="services-section" aria-label="Services section">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4" data-testid="services-heading">
            {COMMON_TEXT.sections.ourServices[language]} <span className="font-bold text-primary">{COMMON_TEXT.sections.services[language]}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t(
              "Открийте пътя към вътрешно равновесие и хармония чрез нашите специализирани терапии",
              "Discover the path to inner balance and harmony through our specialized therapies",
              "Scopri il percorso verso l'equilibrio interiore e l'armonia attraverso le nostre terapie specializzate"
            )}
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            {t("Всички", "All", "Tutti")}
          </button>
          <button
            onClick={() => setSelectedCategory('signature')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'signature'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            {t(CATEGORY_LABELS.signature.bg, CATEGORY_LABELS.signature.en, CATEGORY_LABELS.signature.it)}
          </button>
          <button
            onClick={() => setSelectedCategory('massage')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'massage'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            {t(CATEGORY_LABELS.massage.bg, CATEGORY_LABELS.massage.en, CATEGORY_LABELS.massage.it)}
          </button>
          <button
            onClick={() => setSelectedCategory('therapy')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'therapy'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            {t(CATEGORY_LABELS.therapy.bg, CATEGORY_LABELS.therapy.en, CATEGORY_LABELS.therapy.it)}
          </button>
          <button
            onClick={() => setSelectedCategory('beauty')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'beauty'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            {t(CATEGORY_LABELS.beauty.bg, CATEGORY_LABELS.beauty.en, CATEGORY_LABELS.beauty.it)}
          </button>
          <button
            onClick={() => setSelectedCategory('coaching')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'coaching'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            {t(CATEGORY_LABELS.coaching.bg, CATEGORY_LABELS.coaching.en, CATEGORY_LABELS.coaching.it)}
          </button>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto services-grid"
        >
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                {...service}
                imageFetchPriority={index < 3 ? 'high' : 'auto'}
                isExpanded={expandedCard === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>

        {/* Discovery Call CTA for uncertain prospects */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-muted/70 rounded-lg p-6 sm:p-8 border-2 border-primary/20">
            <h3 className="text-xl md:text-2xl font-light text-foreground mb-3">
              {t(
                "Не сте сигурни коя услуга е подходяща за вас?",
                "Not sure which service is right for you?",
                "Non sei sicuro quale servizio sia giusto per te?"
              )}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t(
                "Свържете се с Мари за безплатна консултация и тя ще ви помогне да изберете идеалната терапия за вашите нужди.",
                "Contact Mari for a free consultation and she will help you choose the ideal therapy for your needs.",
                "Contatta Mari per una consulenza gratuita e ti aiuterà a scegliere la terapia ideale per le tue esigenze."
              )}
            </p>
            <DiscoveryCallButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
