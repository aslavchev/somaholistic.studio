/**
 * Gifts Section - Gift Certificates
 *
 * Placeholder for gift certificate functionality.
 * Will be implemented with flexible amount options and WhatsApp purchase flow.
 */

import { Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Gifts = () => {
  const { t } = useLanguage();

  return (
    <section
      id="gifts"
      className="py-16 bg-sage-50"
      data-testid="gifts-section"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Gift className="w-8 h-8 text-primary" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("Подарете преживяване", "Gift an Experience")}
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t(
              "Подарете на любим човек възможността да избере своето пътешествие към благополучието",
              "Gift a loved one the freedom to choose their wellness journey"
            )}
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              {t("Очаквайте скоро", "Coming Soon")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
