import { Award, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import therapistPortrait from "@/assets/therapist-portrait.webp";

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
                  src={therapistPortrait}
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
                  "Казвам се Мариана Игова и вече повече от седем години работя в полето на личностната трансформация и цялостното благополучие. Вярвам, че истинското изцеление се случва чрез холистичен поглед към човека – когато тялото, емоциите, умът и духът бъдат видени като свързана, жива система. Тази философия е в основата на студиото, което създадох – място, посветено на баланс, връщане към себе си и вътрешна яснота.",
                  "My name is Mariana Igova and I have been working in the field of personal transformation and holistic wellbeing for over seven years. I believe that true healing happens through a holistic view of the person – when the body, emotions, mind and spirit are seen as a connected, living system. This philosophy is the foundation of the studio I created – a place dedicated to balance, returning to oneself and inner clarity."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "Соматичните практики са част от живота ми повече от 25 години. Още в началото разбрах, че тялото носи своя собствена мъдрост – тих език, който говори чрез усещания, импулси и фини сигнали. С времето се научих да го слушам и да помагам на другите да чуват неговото послание. За мен тялото е врата към дълбоката ни истина, а движението и дъхът са естествените инструменти за освобождаване, обновяване и възстановяване на хармонията.",
                  "Somatic practices have been part of my life for more than 25 years. Early on I understood that the body carries its own wisdom – a quiet language that speaks through sensations, impulses and subtle signals. Over time I learned to listen to it and to help others hear its message. For me, the body is the gateway to our deep truth, and movement and breath are the natural tools for liberation, renewal and restoration of harmony."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "Работата ми включва различни терапии, насочени към раздвижване на потока в тялото, подкрепа на жизнената енергия и създаване на вътрешно пространство за интеграция. Използвам мануални, холистични и енергийни практики, които подпомагат освобождаването на напрежение и възвръщането на усещането за лекота. От години се занимавам и с енергийна работа – посока, която обогати терапевтичния ми подход и ми позволи да работя още по-фино, през нивата, които често остават невидими, но силно влияят на нашето състояние.",
                  "My work includes various therapies aimed at moving the flow in the body, supporting life energy and creating inner space for integration. I use manual, holistic and energy practices that support the release of tension and the return of the feeling of lightness. For years I have also been engaged in energy work – a direction that enriched my therapeutic approach and allowed me to work even more subtly, through levels that often remain invisible, but strongly affect our condition."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "В сесиите си интегрирам дъх, осъзнато присъствие и нежно движение, когато това е нужно – като път към по-дълбока връзка със себе си и естествено освобождаване на емоции и блокажи.",
                  "In my sessions I integrate breath, conscious presence and gentle movement when needed – as a path to deeper connection with oneself and natural release of emotions and blockages."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "Студиото, което създадох, е пространство за автентичност, лекота и трансформация. Място, в което човек може да се срещне със себе си – истински, спокойно и с доверие. Радвам се да бъда опора в този процес на връщане към цялостност и вътрешен дом.",
                  "The studio I created is a space for authenticity, lightness and transformation. A place where one can meet oneself truly, calmly and with trust. I am happy to be a support in this process of returning to wholeness and inner home."
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
