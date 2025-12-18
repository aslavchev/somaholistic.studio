import type { Service } from "@/data/services";
import { BookingFormData } from "./types";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SERVICES } from "@/data";
import { useLanguage } from "@/contexts/LanguageContext";

interface Step1Props {
  formData: BookingFormData;
  setFormData: (fn: (prev: BookingFormData) => BookingFormData) => void;
  selectedServiceData: Service | undefined;
}

export const Step1SelectService = ({ formData, setFormData, selectedServiceData }: Step1Props) => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="service">{t("Изберете услуга", "Select Service", "Seleziona Servizio")}</Label>
        <Select
          value={formData.service}
          onValueChange={(value) => setFormData((prev: BookingFormData) => ({ ...prev, service: value, duration: "" }))}
        >
          <SelectTrigger id="service" data-testid="booking-service-select">
            <SelectValue placeholder={t("Изберете услуга", "Select Service", "Seleziona Servizio")} />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((service) => (
              <SelectItem key={service.id} value={service.id}>
                {service.title[language]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {formData.service && selectedServiceData && (
        <div>
          <Label htmlFor="duration">{t("Изберете продължителност", "Select Duration", "Seleziona Durata")}</Label>
          <Select
            value={formData.duration}
            onValueChange={(value) => setFormData((prev: BookingFormData) => ({ ...prev, duration: value }))}
          >
            <SelectTrigger id="duration" data-testid="booking-duration-select">
              <SelectValue placeholder={t("Изберете продължителност", "Select Duration", "Seleziona Durata")} />
            </SelectTrigger>
            <SelectContent>
              {selectedServiceData.pricing.duration30 && (
                <SelectItem value="30">
                  30 {t("мин", "min", "min")} - €{selectedServiceData.pricing.duration30.price}
                </SelectItem>
              )}
              {selectedServiceData.pricing.duration60 && (
                <SelectItem value="60">
                  60 {t("мин", "min", "min")} - €{selectedServiceData.pricing.duration60.price}
                </SelectItem>
              )}
              {selectedServiceData.pricing.duration90 && (
                <SelectItem value="90">
                  90 {t("мин", "min", "min")} - €{selectedServiceData.pricing.duration90.price}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};
