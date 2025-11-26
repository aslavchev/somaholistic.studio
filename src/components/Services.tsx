import { useState } from "react";
import ServiceCard from "./ServiceCard";
import DiscoveryCallButton from "./DiscoveryCallButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { SERVICES, CATEGORY_LABELS } from "@/data";
import wellnessAccessories from "@/assets/wellness-accessories.jpg";
import massageTherapy from "@/assets/massage-therapy.jpg";
import classicalMassage from "@/assets/classical-massage.jpg";
import backMassage from "@/assets/back-massage.jpg";
import energyTherapy from "@/assets/energy-therapy.jpg";
import facialMassage from "@/assets/facial-massage-new.jpg";

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
  const { t, language } = useLanguage();

  // Transform centralized data into ServiceCard props format
  const services = SERVICES.map((service) => ({
    title: service.title[language],
    description: service.description[language],
    benefits: service.benefits?.map(b => b[language]),
    suitableFor: service.suitableFor?.map(s => s[language]),
    price60: service.pricing.duration60
      ? `${service.pricing.duration60.price}${language === 'bg' ? 'лв' : ' BGN'}`
      : undefined,
    duration60: service.pricing.duration60?.label[language],
    price90: service.pricing.duration90
      ? `${service.pricing.duration90.price}${language === 'bg' ? 'лв' : ' BGN'}`
      : undefined,
    duration90: service.pricing.duration90?.label[language],
    image: service.image ? IMAGE_MAP[service.image] : undefined,
    featured: service.featured,
    category: service.category
  }));

  const handleToggle = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="services-section" aria-label="Services section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4" data-testid="services-heading">
            {t("Нашите", "Our")} <span className="font-bold text-primary">{t("Услуги", "Services")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t(
              "Открийте пътя към вътрешно равновесие и хармония чрез нашите специализирани терапии",
              "Discover the path to inner balance and harmony through our specialized therapies"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              isExpanded={expandedCard === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Discovery Call CTA for uncertain prospects */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-muted/70 rounded-lg p-6 sm:p-8 border-2 border-primary/20">
            <h3 className="text-xl md:text-2xl font-light text-foreground mb-3">
              {t(
                "Не сте сигурни коя услуга е подходяща за вас?",
                "Not sure which service is right for you?"
              )}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t(
                "Свържете се с Мари за безплатна консултация и тя ще ви помогне да изберете идеалната терапия за вашите нужди.",
                "Contact Mari for a free consultation and she will help you choose the ideal therapy for your needs."
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
