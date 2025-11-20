import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import BookingDialog from "@/components/BookingDialog";
import spaHero from "@/assets/spa-hero.jpg";
import { CONTACT } from "@/lib/constants";

const Hero = () => {
  const { t } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = spaHero;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" data-testid="hero-section" aria-label="Hero section">
        <div className="absolute inset-0 bg-wellness-sage" />
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${spaHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight" data-testid="hero-heading">
              {t("Добре дошли в", "Welcome to")} <br />
              <span className="font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent" data-testid="studio-name">
                SOMA STUDIO
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              {t(
                "Изкуството на дълбоката релаксация. Подарете си 90 минути блаженство от шума на ежедневието със SOMA Ритуал - холистична терапия, вдъхновена от източни традиции.",
                "The art of deep relaxation. Gift yourself 90 minutes of bliss away from the noise of everyday life with the SOMA Ritual - holistic therapy inspired by Eastern traditions."
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => setBookingOpen(true)}
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                <span className="font-semibold">{t("Запази час онлайн", "Book Online")}</span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href={`tel:${CONTACT.PHONE_TEL}`}
                  className="flex items-center space-x-2"
                  data-testid="hero-phone-button"
                  aria-label={`Reserve appointment by calling ${CONTACT.PHONE_DISPLAY}`}
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span className="font-semibold">{t("Обади се", "Call Now")}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default Hero;