import { Phone, Instagram, Languages, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/components/common/Logo";
import { CONTACT } from "@/data";
import { HEADER_TEXT } from "@/data/translations";
import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from '@/utils/scrollToSection';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);      // instant close
    scrollToSection(id);           // no setTimeout, no delay
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'services', label: HEADER_TEXT.nav.services },
    { id: 'packages', label: HEADER_TEXT.nav.packages },
    { id: 'gifts', label: HEADER_TEXT.nav.gifts },
    { id: 'about', label: HEADER_TEXT.nav.about },
    { id: 'testimonials', label: HEADER_TEXT.nav.testimonials },
    { id: 'gallery', label: HEADER_TEXT.nav.gallery },
    { id: 'contact', label: HEADER_TEXT.nav.contact }
  ];

  return (
    <header className="bg-wellness-cream border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-95" data-testid="main-header" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            <button onClick={scrollToTop} className="flex items-center space-x-3 hover:opacity-80 transition-opacity" aria-label="Scroll to top">
              <Logo size="md" />
              <div className="-space-y-0.5">
                <div className="text-xl font-bold leading-tight m-0 p-0" data-testid="header-logo-text">SOMA STUDIO</div>
                <p className="text-xs uppercase opacity-80 tracking-tight m-0 p-0">{HEADER_TEXT.tagline[language]}</p>
              </div>
            </button>
          </div>

          <nav className="hidden lg:flex items-center space-x-6" role="navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors ${activeSection === item.id ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
              >
                {item.label[language]}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-primary hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? HEADER_TEXT.mobileMenu.closeMenu[language] : HEADER_TEXT.mobileMenu.openMenu[language]}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:bg-accent"
              onClick={() => setLanguage(language === 'bg' ? 'en' : language === 'en' ? 'it' : 'bg')}
              data-testid="header-language-button"
              aria-label={`Switch to ${language === 'bg' ? 'English' : language === 'en' ? 'Italian' : 'Bulgarian'}`}
            >
              <Languages className="w-4 h-4" aria-hidden="true" />
              <span className="ml-1 font-semibold">{language === 'bg' ? 'EN' : language === 'en' ? 'IT' : 'BG'}</span>
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
                  onClick={() => handleNavClick(item.id)}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label[language]}
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
