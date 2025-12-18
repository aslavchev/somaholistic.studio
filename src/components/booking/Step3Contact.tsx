import { BookingFormData, BookingErrors } from "./types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { COUNTRY_CODES } from "@/lib/utils";

interface Step3Props {
  formData: BookingFormData;
  setFormData: (fn: (prev: BookingFormData) => BookingFormData) => void;
  errors: BookingErrors;
  handleValidateName: (value: string) => void;
  handleValidatePhone: (value: string) => void;
}

export const Step3Contact = ({ formData, setFormData, errors, handleValidateName, handleValidatePhone }: Step3Props) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">{t("Вашето име", "Your Name", "Il Tuo Nome")}</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <Input
            id="name"
            placeholder={t("Име и фамилия", "Full Name", "Nome Completo")}
            value={formData.name}
            onChange={(e) => {
              setFormData((prev: BookingFormData) => ({ ...prev, name: e.target.value }));
              handleValidateName(e.target.value);
            }}
            className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
            data-testid="booking-name-input"
          />
        </div>
        {errors.name && <p className="text-red-500 text-sm mt-1" data-testid="booking-name-error">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="phone">{t("Телефон", "Phone", "Telefono")}</Label>
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
                setFormData((prev: BookingFormData) => ({ ...prev, phone: e.target.value }));
                handleValidatePhone(e.target.value);
              }}
              className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
              data-testid="booking-phone-input"
            />
          </div>
        </div>
        {errors.phone && <p className="text-red-500 text-sm mt-1" data-testid="booking-phone-error">{errors.phone}</p>}
      </div>
    </div>
  );
};
