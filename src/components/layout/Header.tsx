import { Phone, Instagram, Languages, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import GoogleReviewBadge from "@/components/common/GoogleReviewBadge";
import { CONTACT } from "@/data";
import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'services', labelBg: 'Услуги', labelEn: 'Services' },
    { id: 'about', labelBg: 'За нас', labelEn: 'About' },
    { id: 'testimonials', labelBg: 'Отзиви', labelEn: 'Testimonials' },
    { id: 'gallery', labelBg: 'Галерия', labelEn: 'Gallery' },
    { id: 'contact', labelBg: 'Контакти', labelEn: 'Contact' }
  ];

  return (
    <header className="bg-wellness-cream border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-95" data-testid="main-header" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:block">
              <GoogleReviewBadge variant="compact" />
            </div>

            <button onClick={scrollToTop} className="flex items-center space-x-2 hover:opacity-80 transition-opacity" aria-label="Scroll to top">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground" data-testid="header-logo-text">SOMA STUDIO</h1>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{t("Соматични практики", "Somatic Practices")}</p>
              </div>
            </button>
          </div>

          <nav className="hidden lg:flex items-center space-x-6" role="navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${ activeSection === item.id ? "text-primary font-semibold" : "text-foreground hover:text-primary" }`}
              >
                {t(item.labelBg, item.labelEn)}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-primary hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? t("Затвори меню", "Close menu") : t("Отвори меню", "Open menu")}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:bg-accent"
              onClick={() => setLanguage(language === 'bg' ? 'en' : 'bg')}
              data-testid="header-language-button"
              aria-label={`Switch to ${language === 'bg' ? 'English' : 'Bulgarian'}`}
            >
              <Languages className="w-4 h-4" aria-hidden="true" />
              <span className="ml-1 font-semibold">{language === 'bg' ? 'EN' : 'BG'}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:bg-accent hidden sm:flex"
              asChild
            >
              <a
                href={`tel:${CONTACT.PHONE_TEL}`}
                className="flex items-center space-x-1"
                data-testid="header-phone-button"
                aria-label={`Call ${CONTACT.PHONE_DISPLAY}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">{CONTACT.PHONE_DISPLAY}</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:bg-accent hidden sm:flex"
              asChild
            >
              <a
                href={`https://www.instagram.com/${CONTACT.INSTAGRAM}/`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="header-instagram-button"
                aria-label={`Visit @${CONTACT.INSTAGRAM} on Instagram`}
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-3" role="navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {t(item.labelBg, item.labelEn)}
                </button>
              ))}

              <div className="border-t border-border pt-3 mt-2 space-y-2">
                <a
                  href={`tel:${CONTACT.PHONE_TEL}`}
                  className="flex items-center space-x-2 text-sm text-foreground hover:text-primary transition-colors py-2"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>{CONTACT.PHONE_DISPLAY}</span>
                </a>
                <a
                  href={`https://www.instagram.com/${CONTACT.INSTAGRAM}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-foreground hover:text-primary transition-colors py-2"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>@{CONTACT.INSTAGRAM}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;