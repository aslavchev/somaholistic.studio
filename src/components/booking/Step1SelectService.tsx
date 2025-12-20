import type { Service } from "@/data/services";
import { BookingFormData } from "./types";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SERVICES } from "@/data";
import { BOOKING_TEXT } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

interface Step1Props {
  formData: BookingFormData;
  setFormData: (fn: (prev: BookingFormData) => BookingFormData) => void;
  selectedServiceData: Service | undefined;
}

export const Step1SelectService = ({ formData, setFormData, selectedServiceData }: Step1Props) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="service" className="mb-2 block">{BOOKING_TEXT.step1.selectService[language]}</Label>
        <Select
          value={formData.service}
          onValueChange={(value) => setFormData((prev: BookingFormData) => ({ ...prev, service: value, duration: "" }))}
        >
          <SelectTrigger id="service" data-testid="booking-service-select" className="h-auto min-h-[40px]">
            <SelectValue placeholder={BOOKING_TEXT.step1.selectService[language]} className="whitespace-normal text-left" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((service) => (
              <SelectItem key={service.id} value={service.id} className="whitespace-normal">
                {service.title[language]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {formData.service && selectedServiceData && (
        <div>
          <Label htmlFor="duration" className="mb-2 block">{BOOKING_TEXT.step1.selectDuration[language]}</Label>
          <Select
            value={formData.duration}
            onValueChange={(value) => setFormData((prev: BookingFormData) => ({ ...prev, duration: value }))}
          >
            <SelectTrigger id="duration" data-testid="booking-duration-select" className="h-auto min-h-[40px]">
              <SelectValue placeholder={BOOKING_TEXT.step1.selectDuration[language]} className="whitespace-normal text-left" />
            </SelectTrigger>
            <SelectContent>
              {selectedServiceData.pricing.duration30 && (
                <SelectItem value="30">
                  30 {BOOKING_TEXT.step1.min[language]} - €{selectedServiceData.pricing.duration30.price}
                </SelectItem>
              )}
              {selectedServiceData.pricing.duration60 && (
                <SelectItem value="60">
                  60 {BOOKING_TEXT.step1.min[language]} - €{selectedServiceData.pricing.duration60.price}
                </SelectItem>
              )}
              {selectedServiceData.pricing.duration90 && (
                <SelectItem value="90">
                  90 {BOOKING_TEXT.step1.min[language]} - €{selectedServiceData.pricing.duration90.price}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};
