import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DiscoveryCallButton from "@/components/common/DiscoveryCallButton";
import { Check, Sparkles } from "lucide-react";
import { SERVICES, get4SessionPricing, get6SessionPricing } from "@/data";
import { PRICING_TEXT } from "@/data/translations";

const PricingContent = () => {
  const { t, language } = useLanguage();

  // Transform centralized services data for display
  const services = SERVICES.map((service) => ({
    title: service.title[language],
    duration60: service.pricing.duration60?.label[language],
    price60: service.pricing.duration60?.price,
    duration90: service.pricing.duration90?.label[language],
    price90: service.pricing.duration90?.price,
    featured: service.featured
  }));

  // Get package pricing from centralized calculations
  const package4Sessions = get4SessionPricing();
  const package6Sessions = get6SessionPricing();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">
                {PRICING_TEXT.hero.title[language]} <span className="font-bold text-primary">{PRICING_TEXT.hero.titleHighlight[language]}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {PRICING_TEXT.hero.description[language]}
              </p>
              <p className="text-sm text-muted-foreground">
                {PRICING_TEXT.hero.currency[language]}
              </p>
            </div>
          </div>
        </section>

        {/* Wellness Bundles - Featured Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  {PRICING_TEXT.packages.badges.bestValue[language]}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                {PRICING_TEXT.packages.title[language]} <span className="font-bold text-primary">{PRICING_TEXT.packages.titleHighlight[language]}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {PRICING_TEXT.packages.description[language]}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 4-Session Bundle */}
              <div className="relative bg-white rounded-2xl shadow-lg border-2 border-primary/20 p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {PRICING_TEXT.packages.journey.name[language]}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {PRICING_TEXT.packages.journey.subtitle[language]}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary">€{package4Sessions.price}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="line-through">€{package4Sessions.normalPrice}</span>
                    <span className="ml-2 text-primary font-semibold">
                      {PRICING_TEXT.packages.benefits.save[language]} €{package4Sessions.savings}
                    </span>
                  </div>
                  <div className="inline-block mt-2 px-3 py-1 bg-primary/10 rounded-full">
                    <span className="text-sm font-semibold text-primary">
                      {package4Sessions.discount}% {PRICING_TEXT.packages.benefits.discount[language]}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">
                      {PRICING_TEXT.packages.benefits.anyCombo[language]}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">
                      {PRICING_TEXT.packages.benefits.valid6months[language]}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">
                      {PRICING_TEXT.packages.benefits.priorityBooking[language]}
                    </span>
                  </li>
                </ul>

                <DiscoveryCallButton
                  size="lg"
                  className="w-full"
                />
              </div>

              {/* 6-Session Bundle - Most Popular */}
              <div className="relative bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-2xl shadow-xl border-2 border-primary p-8 hover:shadow-2xl transition-shadow">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-wellness-sage text-white text-sm font-semibold rounded-full">
                  {PRICING_TEXT.packages.badges.mostPopular[language]}
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {PRICING_TEXT.packages.transformation.name[language]}
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  {PRICING_TEXT.packages.transformation.subtitle[language]}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold">€{package6Sessions.price}</span>
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    <span className="line-through">€{package6Sessions.normalPrice}</span>
                    <span className="ml-2 font-semibold">
                      {PRICING_TEXT.packages.benefits.save[language]} €{package6Sessions.savings}
                    </span>
                  </div>
                  <div className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full">
                    <span className="text-sm font-semibold">
                      {package6Sessions.discount}% {PRICING_TEXT.packages.benefits.discount[language]}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {PRICING_TEXT.packages.benefits.anyCombo[language]}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {PRICING_TEXT.packages.benefits.valid9months[language]}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {PRICING_TEXT.packages.benefits.priorityBooking[language]}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {PRICING_TEXT.packages.benefits.friendSession[language]}
                    </span>
                  </li>
                </ul>

                <DiscoveryCallButton
                  size="lg"
                  variant="outline"
                  className="w-full bg-white/10 border-white/30 hover:bg-white/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Individual Sessions */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
                {PRICING_TEXT.individual.title[language]} <span className="font-bold text-primary">{PRICING_TEXT.individual.titleHighlight[language]}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {PRICING_TEXT.individual.description[language]}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg shadow-sm border ${service.featured ? 'border-primary/30 shadow-md' : 'border-border'
                      } p-6 hover:shadow-lg transition-shadow`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {service.title}
                          {service.featured && (
                            <span className="ml-2 inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded">
                              {PRICING_TEXT.packages.badges.topChoice[language]}
                            </span>
                          )}
                        </h3>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                        {service.price60 && (
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">{service.duration60}</div>
                            <div className="text-xl font-bold text-primary">€{service.price60}</div>
                          </div>
                        )}
                        {service.price90 && (
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">{service.duration90}</div>
                            <div className="text-xl font-bold text-primary">€{service.price90}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-md border border-primary/20">
                <h3 className="text-2xl font-light text-foreground mb-3">
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
      </main>

      <Footer />
    </div>
  );
};

export default PricingContent;