/**
 * Gifts Section - Gift Certificates
 *
 * Service-based vouchers and custom amount gift certificates with WhatsApp purchase flow
 */

import { useState } from "react";
import { Gift, Sparkles, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CONTACT, SERVICES } from "@/data";
import { GIFTS_TEXT } from "@/data/translations/gifts";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Gifts = () => {
  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>("");
  const [customAmount, setCustomAmount] = useState("");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleServiceVoucherPurchase = () => {
    if (!selectedService) return;

    const service = SERVICES.find(s => s.id === selectedService);
    if (!service) return;

    const serviceTitle = service.title[language];
    const message = GIFTS_TEXT.whatsappMessages.serviceVoucher[language].replace('{service}', serviceTitle);

    const whatsappUrl = `https://wa.me/${CONTACT.WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCustomPurchase = () => {
    const amount = parseFloat(customAmount);
    if (amount && amount >= 25) {
      const message = GIFTS_TEXT.whatsappMessages.customAmount[language].replace('{amount}', amount.toString());

      const whatsappUrl = `https://wa.me/${CONTACT.WHATSAPP}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section
      id="gifts"
      className="py-16 md:py-24 bg-gradient-to-br from-sage-50 via-background to-sage-50"
      data-testid="gifts-section"
    >
      <div className="container mx-auto px-4">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Gift className="w-8 h-8 text-primary" aria-hidden="true" />
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            {GIFTS_TEXT.hero.title[language]} <span className="font-bold text-primary">{GIFTS_TEXT.hero.titleHighlight[language]}</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {GIFTS_TEXT.hero.description[language]}
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-xl shadow-md border-2 border-primary/20 p-8 flex flex-col">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground text-center">
                {GIFTS_TEXT.serviceVoucher.heading[language]}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 text-center">
              {GIFTS_TEXT.serviceVoucher.description[language]}
            </p>

            <div className="space-y-4 flex-grow flex flex-col justify-center">
              <div>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={GIFTS_TEXT.serviceVoucher.selectPlaceholder[language]} />
                  </SelectTrigger>
                  <SelectContent className="max-w-[calc(100vw-2rem)]">
                    {SERVICES.map((service) => {
                      const price = service.pricing.duration30?.price ||
                                   service.pricing.duration60?.price ||
                                   service.pricing.duration90?.price || 0;

                      return (
                        <SelectItem key={service.id} value={service.id} className="py-3">
                          <span>{service.title[language]}</span>
                          <span className="text-xs text-muted-foreground ml-2">€{price}</span>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleServiceVoucherPurchase}
                disabled={!selectedService}
                size="lg"
                className="w-full"
              >
                <Gift className="w-4 h-4 mr-2" />
                {GIFTS_TEXT.serviceVoucher.sendButton[language]}
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border-2 border-border p-8 flex flex-col">
            <h3 className="text-xl font-bold text-foreground mb-2 text-center">
              {GIFTS_TEXT.customAmount.heading[language]}
            </h3>
            <p className="text-sm text-muted-foreground mb-6 text-center">
              {GIFTS_TEXT.customAmount.description[language]}
            </p>

            <div className="flex gap-3 flex-grow items-center">
              <div className="relative flex-grow">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">
                  €
                </span>
                <Input
                  type="number"
                  min="25"
                  step="5"
                  placeholder="100"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                  }}
                  className="pl-8 text-lg h-12"
                />
              </div>
              <Button
                onClick={handleCustomPurchase}
                disabled={!customAmount || parseFloat(customAmount) < 25}
                size="lg"
                className="px-8"
              >
                <Gift className="w-4 h-4 mr-2" />
                {GIFTS_TEXT.customAmount.sendButton[language]}
              </Button>
            </div>
          </div>

          <div className="md:col-span-2 mt-4 grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                {GIFTS_TEXT.features.flexibility.title[language]}
              </h4>
              <p className="text-sm text-muted-foreground">
                {GIFTS_TEXT.features.flexibility.description[language]}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                {GIFTS_TEXT.features.allServices.title[language]}
              </h4>
              <p className="text-sm text-muted-foreground">
                {GIFTS_TEXT.features.allServices.description[language]}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                {GIFTS_TEXT.features.easyPurchase.title[language]}
              </h4>
              <p className="text-sm text-muted-foreground">
                {GIFTS_TEXT.features.easyPurchase.description[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
