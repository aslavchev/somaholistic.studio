import { BookingFormData, BookingErrors } from "./types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Phone } from "lucide-react";
import { BOOKING_TEXT } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";
import { COUNTRY_CODES, formatPhone } from "@/lib/utils";

interface Step3Props {
  formData: BookingFormData;
  setFormData: (fn: (prev: BookingFormData) => BookingFormData) => void;
  errors: BookingErrors;
  handleValidateName: (value: string) => void;
  handleValidatePhone: (value: string) => void;
}

export const Step3Contact = ({ formData, setFormData, errors, handleValidateName, handleValidatePhone }: Step3Props) => {
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

      <div>
        <Label htmlFor="phone" className="mb-2 block">{BOOKING_TEXT.step3.phone[language]} *</Label>
        <div className="flex gap-2">
          <Select
            value={formData.countryCode}
            onValueChange={(value) => setFormData((prev: BookingFormData) => ({ ...prev, countryCode: value }))}
          >
            <SelectTrigger className="w-32" data-testid="booking-country-select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {COUNTRY_CODES.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="relative flex-1">
            <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <Input
              id="phone"
              type="tel"
              placeholder="888 123 456"
              value={formData.phone}
              onChange={(e) => {
                const formatted = formatPhone(e.target.value);
                setFormData((prev: BookingFormData) => ({ ...prev, phone: formatted }));
                handleValidatePhone(formatted);
              }}
              className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
              data-testid="booking-phone-input"
              required
            />
          </div>
        </div>
        <p className={`text-sm mt-1 min-h-[20px] ${errors.phone ? 'text-red-500' : 'invisible'}`} data-testid="booking-phone-error">{errors.phone || '\u00A0'}</p>
      </div>
    </div>
  );
};
