import { Phone, Instagram, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DiscoveryCallButton from "@/components/common/DiscoveryCallButton";
import Logo from "@/components/common/Logo";
import { CONTACT } from "@/data";
import { scrollToSection } from '@/utils/scrollToSection';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <footer className="bg-primary text-primary-foreground py-12" data-testid="main-footer" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo size="md" />
              <div>
                <h3 className="text-xl font-bold">SOMA STUDIO</h3>
                <p className="text-xs uppercase tracking-wide opacity-80">
                  {t("Соматични практики", "Somatic Practices")}
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t(
                "Изкуството на дълбоката релаксация и холистичното възстановяване в сърцето на София.",
                "The art of deep relaxation and holistic restoration in the heart of Sofia."
              )}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("Контакти", "Contact")}</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${CONTACT.PHONE_TEL}`}
                className="flex items-center space-x-2 hover:text-primary-foreground/80 transition-colors group"
                data-testid="footer-phone-link"
                aria-label={`Call ${CONTACT.PHONE_DISPLAY}`}
              >
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT.PHONE_DISPLAY}</span>
              </a>
              <a
                href={`https://www.instagram.com/${CONTACT.INSTAGRAM}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary-foreground/80 transition-colors group"
                data-testid="footer-instagram-link"
                aria-label={`Visit @${CONTACT.INSTAGRAM} on Instagram`}
              >
                <Instagram className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>@{CONTACT.INSTAGRAM}</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p>{t(CONTACT.ADDRESS.AREA, "Manastirski Livadi Iztok")}</p>
                  <p>{t(CONTACT.ADDRESS.STREET, "409-ta Street 13")}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("Работно време", "Working Hours")}</h4>
            <p className="text-primary-foreground/80 text-sm">
              {t(
                "Студиото работи само с предварително записани часове",
                "The studio operates by appointment only"
              )}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("Бързи връзки", "Quick Links")}</h4>
            <div className="space-y-2">
              <button onClick={scrollToTop} className="block text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors text-left">
                {t("Начало", "Home")}
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors text-left">
                {t("Услуги", "Services")}
              </button>
              <button onClick={() => scrollToSection('packages')} className="block text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors text-left">
                {t("Цени и пакети", "Pricing & Packages")}
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors text-left">
                {t("За нас", "About")}
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("Не сте сигурни?", "Not Sure?")}</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              {t(
                "Свържете се с нас за безплатна консултация",
                "Contact us for a free consultation"
              )}
            </p>
            <DiscoveryCallButton
              size="sm"
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/70"
            />
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            {t(
              "© 2025 SOMA STUDIO. Всички права запазени.",
              "© 2025 SOMA STUDIO. All rights reserved."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
