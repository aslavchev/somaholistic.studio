import { Award, Heart, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import therapistPortrait from "@/assets/therapist-portrait.webp";
import { useState, useEffect } from "react";
import { COMMON_TEXT, ABOUT_TEXT, COMPONENTS_TEXT } from "@/data/translations";

const About = () => {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background" id="about" data-testid="about-section">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto px-4">
          {/* HERO + STICKY IMAGE + SIDE TEXT (desktop) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 lg:mb-24">
            {/* Sticky portrait – stays while reading */}
            <div className="lg:sticky lg:top-24 -mt-8 lg:mt-0">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl ring-4 ring-primary/10">
                <img
                  src={therapistPortrait}
                  alt={COMPONENTS_TEXT.about.therapistImageAlt[language]}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  data-testid="about-image"
                />
              </div>
            </div>

            {/* Bio text – perfectly aligned to image top */}
            <div className="space-y-7 text-foreground/90 leading-relaxed pt-8 lg:pt-0">
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
                {ABOUT_TEXT.hero.title[language]}
              </h3>
              <div className="space-y-5 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  {ABOUT_TEXT.hero.intro[language]}
                </p>

                {(!isMobile || isExpanded) && (
                  <>
                    <p className="leading-relaxed">
                      {ABOUT_TEXT.hero.somaticPractices[language]}
                    </p>
                    <p className="leading-relaxed">
                      {ABOUT_TEXT.hero.therapyApproach[language]}
                    </p>
                    <p className="leading-relaxed">
                      {ABOUT_TEXT.hero.sessions[language]}
                    </p>
                    <p className="leading-relaxed">
                      {ABOUT_TEXT.hero.studio[language]}
                    </p>
                  </>
                )}

                {isMobile && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? COMMON_TEXT.buttons.showLess[language] : COMMON_TEXT.buttons.readMore[language]}
                  >
                    {isExpanded ? COMMON_TEXT.buttons.showLess[language] : COMMON_TEXT.buttons.readMore[language]}
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* FULL-WIDTH CONTINUATION – no white scrolling space */}
          <div className="space-y-16">
            {/* 3 skill cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-accent/50" data-testid="about-skills-certified">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {ABOUT_TEXT.skills.certified.title[language]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {ABOUT_TEXT.skills.certified.description[language]}
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-accent/50" data-testid="about-skills-individual">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {ABOUT_TEXT.skills.individual.title[language]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {ABOUT_TEXT.skills.individual.description[language]}
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-accent/50" data-testid="about-skills-holistic">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {ABOUT_TEXT.skills.holistic.title[language]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {ABOUT_TEXT.skills.holistic.description[language]}
                </p>
              </div>
            </div>

            {/* Final paragraphs */}
            <div className="prose prose-lg max-w-none text-muted-foreground text-center lg:text-left">
              <p className="leading-relaxed mb-4">
                {ABOUT_TEXT.mission.belief[language]}
              </p>
              <p className="leading-relaxed">
                {ABOUT_TEXT.mission.mission[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
