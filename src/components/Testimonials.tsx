import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CONTACT } from "@/lib/constants";
import { useState, useEffect } from "react";

const Testimonials = () => {
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

  const testimonials = [
    {
      name: t("Елена М.", "Elena M."),
      service: t("SOMA Ритуал", "SOMA Ritual"),
      rating: 5,
      quote: t(
        "Най-релаксиращото преживяване в живота ми. След 90-те минути се чувствам като пренародена. Професионализмът и вниманието към детайла са на изключително ниво.",
        "The most relaxing experience of my life. After the 90 minutes, I feel reborn. The professionalism and attention to detail are exceptional."
      )
    },
    {
      name: t("Георги Д.", "Georgi D."),
      service: t("Тай масаж", "Thai Massage"),
      rating: 5,
      quote: t(
        "Страхотна терапия! Имах хронични болки в гърба и след няколко сесии се чувствам значително по-добре. Препоръчвам топло!",
        "Amazing therapy! I had chronic back pain and after several sessions I feel significantly better. Highly recommend!"
      )
    },
    {
      name: t("Мария С.", "Maria S."),
      service: t("Wellness Coaching", "Wellness Coaching"),
      rating: 5,
      quote: t(
        "Консултацията ми помогна да разбера какво наистина се случва с тялото ми. Получих ясен план и се чувствам по-енергична от години насам.",
        "The consultation helped me understand what's really happening with my body. I got a clear plan and feel more energetic than I have in years."
      )
    },
    {
      name: t("Ивана К.", "Ivana K."),
      service: t("Фитотерапия", "Phytotherapy"),
      rating: 5,
      quote: t(
        "Билковият план напълно промени енергията ми. След месец вече нямам проблемите, с които се борих години. Благодаря за индивидуалния подход!",
        "The herbal plan completely changed my energy. After a month, I no longer have the problems I struggled with for years. Thank you for the individual approach!"
      )
    },
    {
      name: t("Петър В.", "Petar V."),
      service: t("Класически масаж", "Classical Massage"),
      rating: 5,
      quote: t(
        "Всяка седмица идвам тук след работа. Това е моят ритуал за възстановяване. Препоръчвам на всички с офис работа.",
        "I come here every week after work. This is my recovery ritual. I recommend it to everyone with office work."
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-wellness-cream" data-testid="testimonials-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            {t("Какво казват", "What Our")} <span className="font-bold text-primary">{t("нашите клиенти", "Clients Say")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "Споделени преживявания от хора, които са открили пътя към баланс и благополучие",
              "Shared experiences from people who have discovered the path to balance and wellness"
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
              {t("5.0 в Google Maps", "5.0 on Google Maps")}
            </span>
          </a>
          <div className="bg-background px-6 py-3 rounded-full shadow-md flex items-center gap-2" data-testid="testimonial-trust-badge-top">
            <span className="text-xl">🏆</span>
            <span className="font-semibold text-foreground">
              {t("Топ терапевт София 2024", "Top Therapist Sofia 2024")}
            </span>
          </div>
          <div className="bg-background px-6 py-3 rounded-full shadow-md flex items-center gap-2" data-testid="testimonial-trust-badge-cert">
            <span className="text-xl">✓</span>
            <span className="font-semibold text-foreground">
              {t("Сертифициран специалист", "Certified Specialist")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
