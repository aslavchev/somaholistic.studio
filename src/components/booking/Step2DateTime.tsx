import { BookingFormData } from "./types";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ALL_TIME_SLOTS } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { CalendarIcon, Clock } from "lucide-react";

interface Step2Props {
  formData: BookingFormData;
  setFormData: (fn: (prev: BookingFormData) => BookingFormData) => void;
}

export const Step2DateTime = ({ formData, setFormData }: Step2Props) => {
  const { t } = useLanguage();
  const availableTimeSlots = ALL_TIME_SLOTS;

  return (
    <div className="space-y-6">
      <div>
        <Label className="flex items-center gap-2 mb-3">
          <CalendarIcon className="w-4 h-4" />
          {t("Изберете дата", "Select Date", "Seleziona Data")}
        </Label>
        <Calendar
          mode="single"
          selected={formData.date}
          onSelect={(date) => setFormData((prev: BookingFormData) => ({ ...prev, date: date || new Date(), time: "" }))}
          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
          className="rounded-md border mx-auto"
          data-testid="booking-calendar"
        />
      </div>

      <div className="bg-muted/50 border border-primary/20 rounded-lg p-3 text-sm">
        <p className="text-muted-foreground">
          {t(
            "💡 Моля, изберете желаната дата и час. Мари ще потвърди наличността в рамките на 2 часа.",
            "💡 Please select your preferred date and time. Mari will confirm availability within 2 hours.",
            "💡 Seleziona data e ora preferite. Mari confermerà la disponibilità entro 2 ore."
          )}
        </p>
      </div>

      {formData.date && (
        <div>
          <Label htmlFor="time" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {t("Изберете час", "Select Time", "Seleziona Ora")}
          </Label>
          <Select value={formData.time} onValueChange={(value) => setFormData((prev: BookingFormData) => ({ ...prev, time: value }))}>
            <SelectTrigger id="time" className="mt-2" data-testid="booking-time-select">
              <SelectValue placeholder={t("Изберете час", "Select Time", "Seleziona Ora")} />
            </SelectTrigger>
            <SelectContent>
              {availableTimeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};
