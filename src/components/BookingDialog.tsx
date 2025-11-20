import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle2, Clock, User, Mail, Phone as PhoneIcon, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { bg } from "date-fns/locale";
import { CONTACT } from "@/lib/constants";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedService?: string;
}

const BookingDialog = ({ open, onOpenChange, preselectedService }: BookingDialogProps) => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: preselectedService || "",
    duration: "",
    date: undefined as Date | undefined,
    time: "",
    name: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const services = [
    { value: "soma-ritual", label: t("SOMA Ритуал", "SOMA Ritual") },
    { value: "phytotherapy", label: t("Фитотерапевтична консултация", "Phytotherapy Consultation") },
    { value: "wellness-coaching", label: t("Wellness Coaching консултация", "Wellness Coaching Consultation") },
    { value: "classical-massage", label: t("Класически масаж", "Classical Massage") },
    { value: "back-massage", label: t("Частичен масаж на гръб", "Partial Back Massage") },
    { value: "thai-massage", label: t("Традиционен Тай масаж", "Traditional Thai Massage") },
    { value: "energy-therapy", label: t("Енергийна терапия", "Energy Therapy") },
    { value: "facial-massage", label: t("Подмладяващ масаж на лице", "Rejuvenating Facial Massage") }
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
    "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors(prev => ({ ...prev, email: t("Невалиден имейл", "Invalid email") }));
      return false;
    }
    setErrors(prev => ({ ...prev, email: "" }));
    return true;
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^(\+359|0)\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      setErrors(prev => ({ ...prev, phone: t("Невалиден телефон", "Invalid phone") }));
      return false;
    }
    setErrors(prev => ({ ...prev, phone: "" }));
    return true;
  };

  const validateName = (name: string) => {
    if (name.trim().length < 2) {
      setErrors(prev => ({ ...prev, name: t("Минимум 2 символа", "Minimum 2 characters") }));
      return false;
    }
    setErrors(prev => ({ ...prev, name: "" }));
    return true;
  };

  const sanitizeInput = (input: string) => {
    return input
      .replace(/[<>]/g, '') // Remove HTML brackets
      .trim();
  };

  const handleSubmit = () => {
    const message = `${t("Здравейте! Искам да запазя час:", "Hello! I would like to book an appointment:")}\n\n${t("Услуга:", "Service:")} ${sanitizeInput(formData.service)}\n${t("Продължителност:", "Duration:")} ${formData.duration}\n${t("Дата:", "Date:")} ${formData.date?.toLocaleDateString()}\n${t("Час:", "Time:")} ${formData.time}\n${t("Име:", "Name:")} ${sanitizeInput(formData.name)}\n${t("Email:", "Email:")} ${sanitizeInput(formData.email)}\n${t("Телефон:", "Phone:")} ${sanitizeInput(formData.phone)}`;
    
    const whatsappUrl = `https://wa.me/${CONTACT.WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success(t("Вашата заявка е изпратена!", "Your booking request has been sent!"));
    onOpenChange(false);
    setStep(1);
    setFormData({
      service: "",
      duration: "",
      date: undefined,
      time: "",
      name: "",
      email: "",
      phone: ""
    });
  };

  const canProceedToStep2 = formData.service && formData.duration;
  const canProceedToStep3 = formData.date && formData.time;
  const canSubmit = formData.name.trim().length >= 2 && 
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && 
                    /^(\+359|0)\d{9}$/.test(formData.phone.replace(/\s/g, '')) &&
                    !errors.name && !errors.email && !errors.phone;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-foreground">
            {t("Запази час", "Book Appointment")}
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
              `}>
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
                <SelectTrigger id="service">
                  <SelectValue placeholder={t("Изберете услуга", "Select Service")} />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="duration">{t("Продължителност", "Duration")}</Label>
              <Select value={formData.duration} onValueChange={(value) => setFormData({ ...formData, duration: value })}>
                <SelectTrigger id="duration">
                  <SelectValue placeholder={t("Изберете продължителност", "Select Duration")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">{t("30 минути", "30 minutes")}</SelectItem>
                  <SelectItem value="60">{t("60 минути", "60 minutes")}</SelectItem>
                  <SelectItem value="90">{t("90 минути", "90 minutes")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={() => setStep(2)} 
              disabled={!canProceedToStep2}
              className="w-full"
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
              />
            </div>

            <div>
              <Label htmlFor="time">{t("Изберете час", "Select Time")}</Label>
              <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                <SelectTrigger id="time">
                  <SelectValue placeholder={t("Изберете час", "Select Time")} />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        {time}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> {t("Назад", "Back")}
              </Button>
              <Button 
                onClick={() => setStep(3)} 
                disabled={!canProceedToStep3}
                className="flex-1"
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
                    validateName(e.target.value);
                  }}
                  className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                    validateEmail(e.target.value);
                  }}
                  className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone">{t("Телефон", "Phone")}</Label>
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder={CONTACT.PHONE_DISPLAY}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    validatePhone(e.target.value);
                  }}
                  className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> {t("Назад", "Back")}
              </Button>
              <Button 
                onClick={() => setStep(4)} 
                disabled={!canSubmit}
                className="flex-1"
              >
                {t("Напред", "Next")} <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg space-y-3">
              <h3 className="font-semibold text-foreground">{t("Потвърдете вашата резервация", "Confirm Your Booking")}</h3>
              <div className="space-y-2 text-sm">
                <p><strong>{t("Услуга:", "Service:")}</strong> {services.find(s => s.value === formData.service)?.label}</p>
                <p><strong>{t("Продължителност:", "Duration:")}</strong> {formData.duration} {t("минути", "minutes")}</p>
                <p><strong>{t("Дата:", "Date:")}</strong> {formData.date?.toLocaleDateString()}</p>
                <p><strong>{t("Час:", "Time:")}</strong> {formData.time}</p>
                <p><strong>{t("Име:", "Name:")}</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>{t("Телефон:", "Phone:")}</strong> {formData.phone}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              {t(
                "След натискане на бутона ще бъдете пренасочени към WhatsApp за финално потвърждаване на резервацията.",
                "After clicking the button, you will be redirected to WhatsApp for final booking confirmation."
              )}
            </p>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> {t("Назад", "Back")}
              </Button>
              <Button onClick={handleSubmit} className="flex-1 bg-primary">
                {t("Потвърди и изпрати", "Confirm & Send")}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
