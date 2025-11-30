import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle2, Clock, User, Mail, Phone as PhoneIcon, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { bg } from "date-fns/locale";
import { CONTACT, SERVICES } from "@/data";
import {
  validateEmail,
  validatePhone,
  validateName,
  sanitizeInput,
  formatPhone,
  getAvailableTimeSlots,
  buildBookingMessage,
  buildWhatsAppUrl
} from "@/lib/utils";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedService?: string;
}

const BookingDialog = ({ open, onOpenChange, preselectedService }: BookingDialogProps) => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    service: preselectedService || "",
    duration: "",
    date: undefined as Date | undefined,
    time: "",
    name: "",
    email: "",
    phone: "",
    countryCode: "359"
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Transform centralized services data for select options
  const services = SERVICES.map(service => ({
    value: service.id,
    label: service.title[language]
  }));



  // Get service price for display
  const getServicePrice = (serviceId: string) => {
    const service = SERVICES.find(s => s.id === serviceId);
    if (!service) return "";
    const prices = [];
    if (service.pricing.duration60) prices.push(`${service.pricing.duration60.price} BGN`);
    else if (service.pricing.duration90) prices.push(`${service.pricing.duration90.price} BGN`);
    return prices[0] || "";
  };


  // Get available durations for selected service
  const getAvailableDurations = () => {
    if (!formData.service) return [];

    const service = SERVICES.find(s => s.id === formData.service);
    if (!service) return [];

    const options = [];

    // Only add duration if it actually exists in pricing
    if (service.pricing.duration30) {
      options.push({
        value: "30",
        label: service.pricing.duration30.label[language],
        price: `${service.pricing.duration30.price}${language === 'bg' ? ' лв.' : ' BGN'}`
      });
    }
    if (service.pricing.duration60) {
      options.push({
        value: "60",
        label: service.pricing.duration60.label[language],
        price: `${service.pricing.duration60.price}${language === 'bg' ? ' лв.' : ' BGN'}`
      });
    }
    if (service.pricing.duration90) {
      options.push({
        value: "90",
        label: service.pricing.duration90.label[language],
        price: `${service.pricing.duration90.price}${language === 'bg' ? ' лв.' : ' BGN'}`
      });
    }

    return options;
  };

  const availableDurations = getAvailableDurations();

  // Smart pre-selection: auto-fill service and duration when preselected
  useEffect(() => {
    if (!preselectedService && !formData.service) return;

    const serviceId = preselectedService || formData.service;
    const service = SERVICES.find(s => s.id === serviceId);
    if (!service) return;

    setFormData(prev => ({ ...prev, service: serviceId }));

    const durations = [];
    if (service.pricing.duration30) durations.push("30");
    if (service.pricing.duration60) durations.push("60");
    if (service.pricing.duration90) durations.push("90");

    let defaultDuration = "";
    if (durations.length === 1) {
      defaultDuration = durations[0];
    } else if (durations.length > 1) {
      // Always default to shortest/cheapest available
      defaultDuration = durations.sort((a, b) => Number(a) - Number(b))[0];
    }

    setFormData(prev => ({ ...prev, duration: defaultDuration }));
  }, [preselectedService, language]);

  const availableTimeSlots = getAvailableTimeSlots(formData.date);

  // Validation helpers with error state management
  const handleValidateEmail = (email: string) => {
    const result = validateEmail(email, t);
    setErrors(prev => ({ ...prev, email: result.error || "" }));
    return result.valid;
  };

  const handleValidatePhone = (phone: string) => {
    const result = validatePhone(phone, t);
    setErrors(prev => ({ ...prev, phone: result.error || "" }));
    return result.valid;
  };

  const handleValidateName = (name: string) => {
    const result = validateName(name, t);
    setErrors(prev => ({ ...prev, name: result.error || "" }));
    return result.valid;
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Get service label from centralized data
    const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service;

    // Build message with sanitized inputs
    const message = buildBookingMessage(
      {
        ...formData,
        service: sanitizeInput(serviceLabel),
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email)
      },
      t
    );

    // Open WhatsApp with pre-filled message
    const whatsappUrl = buildWhatsAppUrl(CONTACT.WHATSAPP, message);
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      toast.success(
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-600 animate-ping" />
          <span>{t("Отваряме WhatsApp за потвърждение", "Opening WhatsApp for confirmation")}</span>
        </div>
      );
      onOpenChange(false);
      setStep(1);
      setIsSubmitting(false);
      setFormData({
        service: "",
        duration: "",
        date: undefined,
        time: "",
        name: "",
        email: "",
        phone: "",
        countryCode: "359"
      });
    }, 500);
  };

  const canProceedToStep2 = formData.service && formData.duration;
  const canProceedToStep3 = formData.date && formData.time;
  const canSubmit = formData.name.trim().length >= 2 &&
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
                    formData.phone.replace(/\D/g, '').length >= 9 &&
                    !errors.name && !errors.email && !errors.phone;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200" data-testid="booking-dialog">
        <DialogHeader data-testid="booking-dialog-header">
          <DialogTitle className="text-2xl font-semibold text-foreground" data-testid="booking-dialog-title">
            {t("Запази час", "Book Appointment")}
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-6" data-testid="booking-step-indicator">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                  ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
                `}
                data-testid={`booking-step-${s}`}
              >
                {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              {s < 4 && (
                <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-primary' : 'bg-muted'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="service">{t("Изберете услуга", "Select Service")}</Label>
              <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger id="service" data-testid="booking-service-select">
                  <SelectValue placeholder={t("Изберете услуга", "Select Service")} />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      <div className="flex justify-between items-center w-full">
                        <span>{service.label}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {getServicePrice(service.value)}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="duration">{t("Продължителност", "Duration")}</Label>
              {(() => {
                const durations = getAvailableDurations();
                if (durations.length <= 1) {
                  const label = durations[0]?.label || "";
                  const price = getServicePrice(formData.service);
                  return <p className="text-sm text-muted-foreground">{label} – {price}</p>;
                }
                return (
                  <Select value={formData.duration} onValueChange={(value) => setFormData({ ...formData, duration: value })}>
                    <SelectTrigger id="duration" data-testid="booking-duration-select">
                      <SelectValue placeholder={t("Изберете продължителност", "Select Duration")} />
                    </SelectTrigger>
                    <SelectContent>
                      {durations.map((d) => (
                        <SelectItem key={d.value} value={d.value}>
                          {d.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              })()}
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!canProceedToStep2}
              className="w-full"
              data-testid="booking-step1-next"
            >
              {t("Напред", "Next")} <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        )}

        {/* Step 2: Choose Date/Time */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <Label>{t("Изберете дата", "Select Date")}</Label>
              <Calendar
                locale={language === 'bg' ? bg : undefined}
                mode="single"
                selected={formData.date}
                onSelect={(date) => setFormData({ ...formData, date })}
                disabled={(date) => date < new Date()}
                className="rounded-md border p-3"
                data-testid="booking-date-calendar"
              />
            </div>

            {/* Availability Notice */}
            <div className="bg-muted/50 border border-primary/20 rounded-lg p-3 text-sm">
              <p className="text-muted-foreground">
                {t(
                  "💡 Избраните часове са ориентировъчни. Мари ще потвърди наличността в рамките на 2 часа.",
                  "💡 Selected times are indicative. Mari will confirm availability within 2 hours."
                )}
              </p>
            </div>

            <div>
              <Label htmlFor="time">{t("Изберете час", "Select Time")}</Label>
              {availableTimeSlots.length > 0 ? (
                <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                  <SelectTrigger id="time" data-testid="booking-time-select">
                    <SelectValue placeholder={t("Изберете час", "Select Time")} />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" aria-hidden="true" />
                          {time}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800" data-testid="booking-time-warning">
                  <p className="font-semibold">{t("Няма налични часове за днес", "No available times today")}</p>
                  <p className="mt-1 text-amber-700">
                    {t(
                      "Моля, изберете друга дата. Резервациите трябва да се правят минимум 2 часа предварително.",
                      "Please select another date. Bookings must be made at least 2 hours in advance."
                    )}
                  </p>
                </div>
              )}
              {formData.date && new Date(formData.date).toDateString() === new Date().toDateString() && availableTimeSlots.length > 0 && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {t(
                    "Показани са само часовете, които могат да бъдат резервирани минимум 2 часа предварително",
                    "Only showing times available with 2+ hours notice"
                  )}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1" data-testid="booking-step2-back">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> {t("Назад", "Back")}
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!canProceedToStep3}
                className="flex-1"
                data-testid="booking-step2-next"
              >
                {t("Напред", "Next")} <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">{t("Вашето име", "Your Name")}</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="name"
                  placeholder={t("Име и фамилия", "Full Name")}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    handleValidateName(e.target.value);
                  }}
                  className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
                  data-testid="booking-name-input"
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1" data-testid="booking-name-error">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    handleValidateEmail(e.target.value);
                  }}
                  className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  data-testid="booking-email-input"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1" data-testid="booking-email-error">{errors.email}</p>}
              <p className="text-xs text-muted-foreground mt-1">
                {t(
                  "Моля, използвайте латински букви (A-Z)",
                  "Please use Latin characters (A-Z)"
                )}
              </p>
            </div>

            <div>
              <Label htmlFor="phone">{t("Телефон", "Phone")}</Label>
              <div className="flex gap-2">
                <Select
                  value={formData.countryCode}
                  onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                >
                  <SelectTrigger className="w-32" data-testid="booking-country-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    <SelectItem value="359">+359 🇧🇬</SelectItem>
                    <SelectItem value="30">+30 🇬🇷</SelectItem>
                    <SelectItem value="40">+40 🇷🇴</SelectItem>
                    <SelectItem value="381">+381 🇷🇸</SelectItem>
                    <SelectItem value="389">+389 🇲🇰</SelectItem>
                    <SelectItem value="90">+90 🇹🇷</SelectItem>
                    <SelectItem value="33">+33 🇫🇷</SelectItem>
                    <SelectItem value="49">+49 🇩🇪</SelectItem>
                    <SelectItem value="39">+39 🇮🇹</SelectItem>
                    <SelectItem value="34">+34 🇪🇸</SelectItem>
                    <SelectItem value="44">+44 🇬🇧</SelectItem>
                    <SelectItem value="31">+31 🇳🇱</SelectItem>
                    <SelectItem value="32">+32 🇧🇪</SelectItem>
                    <SelectItem value="41">+41 🇨🇭</SelectItem>
                    <SelectItem value="43">+43 🇦🇹</SelectItem>
                    <SelectItem value="48">+48 🇵🇱</SelectItem>
                    <SelectItem value="420">+420 🇨🇿</SelectItem>
                    <SelectItem value="36">+36 🇭🇺</SelectItem>
                    <SelectItem value="351">+351 🇵🇹</SelectItem>
                    <SelectItem value="46">+46 🇸🇪</SelectItem>
                    <SelectItem value="47">+47 🇳🇴</SelectItem>
                    <SelectItem value="45">+45 🇩🇰</SelectItem>
                    <SelectItem value="358">+358 🇫🇮</SelectItem>
                    <SelectItem value="1">+1 🇺🇸</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative flex-1">
                  <PhoneIcon className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="888 333 424"
                    value={formData.phone}
                    onChange={(e) => {
                      const formatted = formatPhone(e.target.value);
                      setFormData({ ...formData, phone: formatted });
                      handleValidatePhone(`+${formData.countryCode}${formatted.replace(/\s/g, '')}`);
                    }}
                    className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                    data-testid="booking-phone-input"
                  />
                </div>
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1" data-testid="booking-phone-error">{errors.phone}</p>}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1" data-testid="booking-step3-back">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> {t("Назад", "Back")}
              </Button>
              <Button
                onClick={() => setStep(4)}
                disabled={!canSubmit}
                className="flex-1"
                data-testid="booking-step3-next"
              >
                {t("Напред", "Next")} <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg space-y-3" data-testid="booking-summary">
              <h3 className="font-semibold text-foreground">{t("Преглед на заявката", "Review Your Request")}</h3>
              <div className="space-y-2 text-sm">
                <p data-testid="booking-summary-service"><strong>{t("Услуга:", "Service:")}</strong> {services.find(s => s.value === formData.service)?.label}</p>
                <p data-testid="booking-summary-duration"><strong>{t("Продължителност:", "Duration:")}</strong> {formData.duration} {t("минути", "minutes")}</p>
                <p data-testid="booking-summary-date"><strong>{t("Дата:", "Date:")}</strong> {formData.date?.toLocaleDateString()}</p>
                <p data-testid="booking-summary-time"><strong>{t("Час:", "Time:")}</strong> {formData.time}</p>
                <p data-testid="booking-summary-name"><strong>{t("Име:", "Name:")}</strong> {formData.name}</p>
                <p data-testid="booking-summary-email"><strong>Email:</strong> {formData.email}</p>
                <p data-testid="booking-summary-phone"><strong>{t("Телефон:", "Phone:")}</strong> +{formData.countryCode} {formData.phone}</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2" data-testid="booking-info-box">
              <p className="text-sm font-semibold text-blue-900">
                {t("📱 Как работи потвърждението?", "📱 How does confirmation work?")}
              </p>
              <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                <li>{t("Изпращате заявка през WhatsApp", "You send request via WhatsApp")}</li>
                <li>{t("Мари потвърждава наличността в рамките на 2 часа", "Mari confirms availability within 2 hours")}</li>
                <li>{t("Получавате финално потвърждение в същия чат", "You receive final confirmation in the same chat")}</li>
              </ul>
              <p className="text-xs text-blue-700 mt-2">
                {t(
                  "💡 Съвет: Проверете WhatsApp съобщенията си след изпращане",
                  "💡 Tip: Check your WhatsApp messages after sending"
                )}
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(3)} className="flex-1" disabled={isSubmitting} data-testid="booking-step4-back">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> {t("Назад", "Back")}
              </Button>
              <Button onClick={handleSubmit} disabled={isSubmitting} className="flex-1 bg-primary" data-testid="booking-submit-button">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                    {t("Изпращане...", "Sending...")}
                  </>
                ) : (
                  t("Изпрати заявка", "Send Request")
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
