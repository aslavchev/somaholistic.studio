import { Award, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import wellnessAccessories from "@/assets/wellness-accessories.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background" id="about" data-testid="about-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4" data-testid="about-heading">
          {t("За", "About")} <span className="font-bold text-primary">{t("терапевта", "the Therapist")}</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {t(
            "Вашето пътуване към благополучие води професионалист с дълбоко разбиране на соматичните практики",
            "Your journey to wellness is guided by a professional with deep understanding of somatic practices"
          )}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
            <img
              src={wellnessAccessories}
              alt={t("Терапевт в SOMA STUDIO", "Therapist at SOMA STUDIO")}
              className="w-full h-full object-cover"
              data-testid="about-image"
            />
          </div>
        </div>

        <div className="space-y-4" data-testid="about-bio">
          <h3 className="text-2xl font-semibold text-foreground">
            {t("За мен", "About Me")}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {t(
              "С над 10 години опит в холистичните практики, посветих живота си на изкуството на изцелението. Обучавах се в традиционен тайландски масаж в Тайланд и съчетавам древни техники със съвременни подходи.",
              "With over 10 years of experience in holistic practices, I have dedicated my life to the art of healing. I trained in traditional Thai massage in Thailand and combine ancient techniques with modern approaches."
            )}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t(
              "Вярвам, че всеки човек заслужава да се чувства добре в тялото си. Моята мисия е да ви помогна да откриете баланса и вътрешната хармония.",
              "I believe that everyone deserves to feel good in their body. My mission is to help you discover balance and inner harmony."
            )}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-accent/50" data-testid="about-skills-certified">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t("Сертифицирани умения", "Certified Skills")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  "Обучения в традиционен тайландски масаж, класически техники и холистична терапия",
                  "Training in traditional Thai massage, classical techniques, and holistic therapy"
                )}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-accent/50" data-testid="about-skills-individual">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t("Индивидуален подход", "Individual Approach")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  "Всяка терапия е персонализирана според вашите нужди и цели",
                  "Each therapy is personalized according to your needs and goals"
                )}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-accent/50" data-testid="about-skills-holistic">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t("Холистична визия", "Holistic Vision")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  "Интегриране на тяло, ум и дух за пълноценно възстановяване",
                  "Integration of body, mind, and spirit for complete restoration"
                )}
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="leading-relaxed mb-4">
              {t(
                "В SOMA STUDIO вярваме, че истинското благополучие идва от баланса между физическо и емоционално здраве. Всяка терапия е създадена с внимание към детайла и дълбоко разбиране на соматичните процеси.",
                "At SOMA STUDIO, we believe that true wellness comes from the balance between physical and emotional health. Each therapy is created with attention to detail and deep understanding of somatic processes."
              )}
            </p>
            <p className="leading-relaxed">
              {t(
                "Нашата мисия е да създадем пространство, в което можете да се отпуснете напълно, да се свържете със себе си и да възстановите вътрешната си хармония.",
                "Our mission is to create a space where you can fully relax, connect with yourself, and restore your inner harmony."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
