import type { Service } from "@/data/services";
import { BookingFormData } from "./types";
import { Calendar, Clock, User, Phone, Sparkles } from "lucide-react";
import { BOOKING_TEXT } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

interface Step4Props {
  formData: BookingFormData;
  selectedServiceData: Service | undefined;
}

export const Step4Summary = ({ formData, selectedServiceData }: Step4Props) => {
  const { language } = useLanguage();

  const getPrice = () => {
    if (!selectedServiceData) return "";
    const key = `duration${formData.duration}` as "duration30" | "duration60" | "duration90";
    return selectedServiceData.pricing[key]?.price || "";
  };

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
              {formData.duration} {BOOKING_TEXT.step4.min[language]} - €{getPrice()}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-foreground" data-testid="booking-summary-date">
              <strong>{BOOKING_TEXT.step4.date[language]}:</strong> {formData.date.toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-foreground" data-testid="booking-summary-time">
              <strong>{BOOKING_TEXT.step4.time[language]}:</strong> {formData.time}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <User className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-foreground" data-testid="booking-summary-name">
              <strong>{BOOKING_TEXT.step4.name[language]}:</strong> {formData.name}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-4">
        <p className="text-sm text-muted-foreground text-center">
          {BOOKING_TEXT.step4.whatsappNote[language]}
        </p>
      </div>
    </div>
  );
};
