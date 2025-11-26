import { Phone, Instagram, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";
import { CONTACT } from "@/data";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-wellness-cream border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-95" data-testid="main-header" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Google Review Badge - Hidden on mobile, shown on tablet+ */}
            <div className="hidden md:block">
              <GoogleReviewBadge variant="compact" />
            </div>
            
            {/* Logo */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground" data-testid="header-logo-text">SOMA STUDIO</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{t("Соматични практики", "Somatic Practices")}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
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
              className="text-primary hover:bg-accent"
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
              className="text-primary hover:bg-accent"
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
      </div>
    </header>
  );
};

export default Header;