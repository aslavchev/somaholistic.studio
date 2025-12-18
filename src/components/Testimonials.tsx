import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CONTACT, TESTIMONIALS } from "@/data";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const { language } = useLanguage();
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  // Transform centralized data for display
  const testimonials = TESTIMONIALS.map(testimonial => ({
    name: testimonial.name[language],
    service: testimonial.service[language],
    rating: testimonial.rating,
    quote: testimonial.quote[language]
  }));

  return (
    <section className="py-16 md:py-24 bg-wellness-cream" id="testimonials" data-testid="testimonials-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            {t("Какво казват", "What Our", "Cosa Dicono")} <span className="font-bold text-primary">{t("нашите клиенти", "Clients Say", "I Nostri Clienti")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "Споделени преживявания от хора, които са открили пътя към баланс и благополучие",
              "Shared experiences from people who have discovered the path to balance and wellness",
              "Esperienze condivise da persone che hanno scoperto il percorso verso l'equilibrio e il benessere"
            )}
          </p>
        </div>

        <div className="overflow-hidden max-w-6xl mx-auto mb-12" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.33%] min-w-0">
                <Card className="border-0 shadow-lg h-full" data-testid={`testimonial-card-${index + 1}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-primary scale-110'
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              data-testid={`testimonial-nav-dot-${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          <a
            href={CONTACT.GOOGLE_MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background px-6 py-3 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg transition-shadow"
            data-testid="testimonial-trust-badge-google"
          >
            <Star className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-semibold text-foreground">
              {t("5.0 в Google Maps", "5.0 on Google Maps", "5.0 su Google Maps")}
            </span>
          </a>
          <div className="bg-background px-6 py-3 rounded-full shadow-md flex items-center gap-2" data-testid="testimonial-trust-badge-cert">
            <span className="text-xl">✓</span>
            <span className="font-semibold text-foreground">
              {t("Сертифициран специалист", "Certified Specialist", "Specialista Certificato")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
