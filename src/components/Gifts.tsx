/**
 * Gifts Section - Gift Certificates
 *
 * Flexible amount gift certificates with WhatsApp purchase flow
 */

import { useState } from "react";
import { Gift, Sparkles, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CONTACT } from "@/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface GiftAmount {
  value: number;
  labelBg: string;
  labelEn: string;
  descriptionBg: string;
  descriptionEn: string;
  recommended?: boolean;
}

const GIFT_AMOUNTS: GiftAmount[] = [
  {
    value: 50,
    labelBg: "€50",
    labelEn: "€50",
    descriptionBg: "Подходящо за подмладяващ масаж на лице",
    descriptionEn: "Perfect for a rejuvenating facial treatment"
  },
  {
    value: 77,
    labelBg: "€77",
    labelEn: "€77",
    descriptionBg: "Една SOMA Ритуал процедура",
    descriptionEn: "One SOMA Ritual session",
    recommended: true
  },
  {
    value: 100,
    labelBg: "€100",
    labelEn: "€100",
    descriptionBg: "Открийте множество процедури",
    descriptionEn: "Discover multiple treatments"
  },
  {
    value: 166,
    labelBg: "€166",
    labelEn: "€166",
    descriptionBg: "Пътешествие към Спокойствието",
    descriptionEn: "The Serenity Voyage package"
  }
];

const Gifts = () => {
  const { t, language } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  const handlePurchase = (amount: number) => {
    const message = language === 'bg'
      ? `Здравейте! Искам да закупя подаръчна карта на стойност €${amount}.`
      : `Hello! I would like to purchase a gift certificate worth €${amount}.`;

    const whatsappUrl = `https://wa.me/${CONTACT.WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCustomPurchase = () => {
    const amount = parseFloat(customAmount);
    if (amount && amount >= 25) {
      handlePurchase(amount);
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
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Gift className="w-8 h-8 text-primary" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            {t("Подарете", "Gift")} <span className="font-bold text-primary">{t("преживяване", "an Experience")}</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              "Подарете на любим човек възможността да избере своето пътешествие към благополучието",
              "Gift a loved one the freedom to choose their wellness journey"
            )}
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Gift Amount Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {GIFT_AMOUNTS.map((gift) => (
              <button
                key={gift.value}
                onClick={() => {
                  setSelectedAmount(gift.value);
                  setCustomAmount("");
                  handlePurchase(gift.value);
                }}
                className={`relative bg-white rounded-xl shadow-md border-2 p-6 hover:shadow-xl transition-all group ${
                  gift.recommended
                    ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {gift.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {t("Препоръчано", "Recommended")}
                  </div>
                )}

                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${gift.recommended ? 'text-primary' : 'text-foreground'}`}>
                    {t(gift.labelBg, gift.labelEn)}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(gift.descriptionBg, gift.descriptionEn)}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    <Gift className="w-4 h-4" />
                    {t("Изпрати подарък", "Send Gift")}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Custom Amount Section */}
          <div className="bg-white rounded-xl shadow-md border-2 border-border p-8">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                {t("Персонализирана сума", "Custom Amount")}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 text-center">
                {t("Изберете своя собствена сума (минимум €25)", "Choose your own amount (minimum €25)")}
              </p>

              <div className="flex gap-3">
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
                      setSelectedAmount(null);
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
                  {t("Изпрати", "Send")}
                </Button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                {t("Гъвкава валидност", "Flexible Validity")}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t("Картата е валидна до изчерпване на средствата", "Valid until balance is used")}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                {t("Всички процедури", "All Services")}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t("Може да се използва за всяка процедура в студиото", "Can be used for any studio service")}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                {t("Лесно закупуване", "Easy Purchase")}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t("Свържете се с нас и ще организираме всичко", "Contact us and we'll arrange everything")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
