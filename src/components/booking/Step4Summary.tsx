import { Calendar, Clock, User, Phone, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { format } from "date-fns";

interface Step4Props {
  formData: any;
  selectedServiceData: any;
}

export const Step4Summary = ({ formData, selectedServiceData }: Step4Props) => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="bg-primary/5 rounded-lg p-4 space-y-3" data-testid="booking-summary">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-semibold text-foreground" data-testid="booking-summary-service">
              {selectedServiceData?.title[language]}
            </p>
            <p className="text-sm text-muted-foreground">
              {formData.duration} {t("мин", "min", "min")} - €
              {selectedServiceData?.pricing[`duration${formData.duration}` as keyof typeof selectedServiceData.pricing]?.price}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-foreground" data-testid="booking-summary-date">
              <strong>{t("Дата", "Date", "Data")}:</strong> {format(formData.date, "PPP")}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-foreground" data-testid="booking-summary-time">
              <strong>{t("Час", "Time", "Ora")}:</strong> {formData.time}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <User className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-foreground" data-testid="booking-summary-name">
              <strong>{t("Име", "Name", "Nome")}:</strong> {formData.name}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-foreground" data-testid="booking-summary-phone">
              <strong>{t("Телефон", "Phone", "Telefono")}:</strong> {formData.countryCode} {formData.phone}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-4">
        <p className="text-sm text-muted-foreground text-center">
          {t(
            "Ще бъдете пренасочени към WhatsApp за да потвърдите вашата резервация",
            "You will be redirected to WhatsApp to confirm your booking",
            "Verrai reindirizzato a WhatsApp per confermare la prenotazione"
          )}
        </p>
      </div>
    </div>
  );
};
