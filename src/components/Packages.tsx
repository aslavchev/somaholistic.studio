import { Check, Sparkles, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DiscoveryCallButton from "@/components/common/DiscoveryCallButton";
import { Button } from "@/components/ui/button";
import { get4SessionPricing, get6SessionPricing } from "@/data";
import { PACKAGES_TEXT } from "@/data/translations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { scrollToSection } from "@/utils/scrollToSection";

const Packages = () => {
  const { language } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  // Get package pricing from centralized calculations
  const package4Sessions = get4SessionPricing();
  const package6Sessions = get6SessionPricing();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10" id="packages" data-testid="packages-section" aria-label="Wellness packages section">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              {PACKAGES_TEXT.badge.bestValue[language]}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            {PACKAGES_TEXT.hero.title[language]} <span className="font-bold text-primary">{PACKAGES_TEXT.hero.titleHighlight[language]}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {PACKAGES_TEXT.hero.description[language]}
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* 4-Session Classical Massage Bundle - Most Popular */}
          <div className="relative bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-2xl shadow-xl border-2 border-primary p-8 hover:shadow-2xl transition-shadow flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-wellness-sage text-white text-sm font-semibold rounded-full">
              {PACKAGES_TEXT.serenityVoyage.badge[language]}
            </div>

            <h3 className="text-2xl font-bold mb-2">
              {PACKAGES_TEXT.serenityVoyage.title[language]}
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              {PACKAGES_TEXT.serenityVoyage.description[language]}
            </p>

            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">€{package4Sessions.price}</span>
              </div>
              <div className="text-sm text-primary-foreground/80">
                <span className="line-through">€{package4Sessions.normalPrice}</span>
                <span className="ml-2 font-semibold">
                  {PACKAGES_TEXT.common.save[language]} €{package4Sessions.savings}
                </span>
              </div>
              <div className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full">
                <span className="text-sm font-semibold">
                  {package4Sessions.discount}% {PACKAGES_TEXT.common.discount[language]}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  {PACKAGES_TEXT.serenityVoyage.benefit1[language]}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  {PACKAGES_TEXT.serenityVoyage.benefit2[language]}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  {PACKAGES_TEXT.serenityVoyage.benefit3[language]}
                </span>
              </li>
            </ul>

            <DiscoveryCallButton
              size="lg"
              variant="outline"
              className="w-full bg-white/10 border-white/30 hover:bg-white/20"
            />
          </div>

          {/* 4-Session Facial Bundle */}
          <div className="relative bg-white rounded-2xl shadow-lg border-2 border-primary/20 p-8 hover:shadow-xl transition-shadow flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {PACKAGES_TEXT.radianceRenaissance.title[language]}
            </h3>
            <p className="text-muted-foreground mb-6">
              {PACKAGES_TEXT.radianceRenaissance.description[language]}
            </p>

            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">€{package6Sessions.price}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="line-through">€{package6Sessions.normalPrice}</span>
                <span className="ml-2 text-primary font-semibold">
                  {PACKAGES_TEXT.common.save[language]} €{package6Sessions.savings}
                </span>
              </div>
              <div className="inline-block mt-2 px-3 py-1 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">
                  {package6Sessions.discount}% {PACKAGES_TEXT.common.discount[language]}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  {PACKAGES_TEXT.radianceRenaissance.benefit1[language]}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  {PACKAGES_TEXT.radianceRenaissance.benefit2[language]}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  {PACKAGES_TEXT.radianceRenaissance.benefit3[language]}
                </span>
              </li>
            </ul>

            <DiscoveryCallButton
              size="lg"
              className="w-full"
            />
          </div>
        </div>

        {/* Gift Certificate CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            {PACKAGES_TEXT.giftCta.text[language]}
          </p>
          <Button
            variant="outline"
            onClick={() => scrollToSection('gifts')}
            className="group"
          >
            <Gift className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            {PACKAGES_TEXT.giftCta.button[language]}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
