import { BookingFormData, BookingErrors } from "./types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { BOOKING_TEXT } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

interface Step3Props {
  formData: BookingFormData;
  setFormData: (fn: (prev: BookingFormData) => BookingFormData) => void;
  errors: BookingErrors;
  handleValidateName: (value: string) => void;
}

export const Step3Contact = ({ formData, setFormData, errors, handleValidateName }: Step3Props) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="name" className="mb-2 block">{BOOKING_TEXT.step3.yourName[language]} *</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <Input
            id="name"
            placeholder={BOOKING_TEXT.step3.fullName[language]}
            value={formData.name}
            onChange={(e) => {
              setFormData((prev: BookingFormData) => ({ ...prev, name: e.target.value }));
              handleValidateName(e.target.value);
            }}
            className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
            data-testid="booking-name-input"
            required
          />
        </div>
        <p className={`text-sm mt-1 min-h-[20px] ${errors.name ? 'text-red-500' : 'invisible'}`} data-testid="booking-name-error">{errors.name || '\u00A0'}</p>
      </div>

      <div className="bg-muted/50 border border-primary/20 rounded-lg p-4 text-sm">
        <p className="text-muted-foreground">
          {language === 'bg' && 'Ще ви се свържем чрез WhatsApp за потвърждение на часа.'}
          {language === 'en' && 'We will contact you via WhatsApp to confirm your appointment.'}
          {language === 'it' && 'Ti contatteremo tramite WhatsApp per confermare il tuo appuntamento.'}
        </p>
      </div>
    </div>
  );
};
