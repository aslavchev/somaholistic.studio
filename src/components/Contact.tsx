import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Instagram, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT } from "@/lib/constants";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-wellness-cream" data-testid="contact-section" aria-label="Contact section" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4" data-testid="contact-heading">
            {t("Запази", "Book")} <span className="font-bold text-primary">{t("своя час", "Your Appointment")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t(
              "Свържете се с нас, за да резервирате вашата терапия и да започнете пътуването към благополучието",
              "Contact us to book your therapy and begin your journey to wellness"
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    {t("Информация за контакт", "Contact Information")}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-foreground">{t("Телефон", "Phone")}</p>
                        <a 
                          href={`tel:${CONTACT.PHONE_TEL}`}
                          className="text-primary hover:text-primary-dark transition-colors text-lg"
                          data-testid="contact-phone-link"
                          aria-label={`Call ${CONTACT.PHONE_DISPLAY}`}
                        >
                          {CONTACT.PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Instagram className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-foreground">Instagram</p>
                        <a 
                          href={`https://www.instagram.com/${CONTACT.INSTAGRAM}/`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-dark transition-colors"
                          data-testid="contact-instagram-link"
                          aria-label={`Visit @${CONTACT.INSTAGRAM} on Instagram`}
                        >
                          @{CONTACT.INSTAGRAM}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-foreground">{t("Адрес", "Address")}</p>
                        <p className="text-muted-foreground">
                          {t(CONTACT.ADDRESS.AREA, "Manastirski Livadi Iztok")}<br />
                          {t(CONTACT.ADDRESS.STREET, "409-ta Street 13")}
                        </p>
                        <a
                          href={CONTACT.GOOGLE_MAPS}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mt-2"
                        >
                          <MapPin className="w-4 h-4" aria-hidden="true" />
                          {t("Вижте на картата", "Get Directions")}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-foreground">{t("Работно време", "Working Hours")}</p>
                        <p className="text-muted-foreground">
                          {t(
                            "Студиото работи само с предварително записани часове",
                            "The studio operates by appointment only"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="h-[400px] bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.4687!2d23.2773!3d42.6568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDM5JzI0LjUiTiAyM8KwMTYnMzguMyJF!5e0!3m2!1sen!2sbg!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t("Карта на SOMA STUDIO", "SOMA STUDIO Map")}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;