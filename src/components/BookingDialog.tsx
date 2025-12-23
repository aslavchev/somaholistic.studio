import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SERVICES, CONTACT } from "@/data";
import { COMMON_TEXT, BOOKING_TEXT } from "@/data/translations";
import {
  validatePhone,
  validateName,
  sanitizeInput,
  buildBookingMessage,
  buildWhatsAppUrl,
  getOptimalBookingDate
} from "@/lib/utils";
import { Step1SelectService } from "./booking/Step1SelectService";
import { Step2DateTime } from "./booking/Step2DateTime";
import { Step3Contact } from "./booking/Step3Contact";
import { Step4Summary } from "./booking/Step4Summary";
import { BookingFormData, BookingErrors } from "./booking/types";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedService?: string;
}

const BookingDialog = ({ open, onOpenChange, preselectedService }: BookingDialogProps) => {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    duration: "",
    date: getOptimalBookingDate(3), // Auto-select today or tomorrow based on availability
    time: "",
    name: ""
  });
  const [errors, setErrors] = useState({ name: "" });

  const selectedServiceData = SERVICES.find(s => s.id === formData.service);

  const handleValidateName = useCallback((name: string) => {
    const result = validateName(name, language);
    setErrors(prev => ({ ...prev, name: result.error || "" }));
    return result.valid;
  }, [language]);

  useEffect(() => {
    if (step === 3) {
      if (formData.name) handleValidateName(formData.name);
    }
  }, [step, formData.name, handleValidateName]);

  useEffect(() => {
    if (open && preselectedService) {
      const service = SERVICES.find(s => s.id === preselectedService);
      if (service) {
        const durations = [
          service.pricing.duration30 && "30",
          service.pricing.duration60 && "60",
          service.pricing.duration90 && "90"
        ].filter(Boolean) as string[];
        setFormData(prev => ({
          ...prev,
          service: preselectedService,
          duration: durations[0] || ""
        }));
      }
    }
  }, [open, preselectedService]);

  useEffect(() => {
    if (!formData.service) {
      if (formData.duration) setFormData(prev => ({ ...prev, duration: "" }));
      return;
    }
    const service = SERVICES.find(s => s.id === formData.service);
    if (service) {
      const available = [
        service.pricing.duration30 && "30",
        service.pricing.duration60 && "60",
        service.pricing.duration90 && "90"
      ].filter(Boolean) as string[];

      if (available.length === 1 && !formData.duration) {
        setFormData(prev => ({ ...prev, duration: available[0] }));
      }
      if (available.length > 0 && formData.duration && !available.includes(formData.duration)) {
        setFormData(prev => ({ ...prev, duration: available[0] }));
      }
    }
  }, [formData.service, formData.duration]);

  const handleSubmit = () => {
    setIsSubmitting(true);
    const serviceLabel = selectedServiceData?.title[language] || formData.service;
    const message = buildBookingMessage({
      ...formData,
      service: sanitizeInput(serviceLabel),
      name: sanitizeInput(formData.name)
    }, language);
    const url = buildWhatsAppUrl(CONTACT.WHATSAPP, message);
    window.open(url, "_blank");
    setTimeout(() => {
      setIsSubmitting(false);
      onOpenChange(false);
      setStep(1);
      setFormData({ service: "", duration: "", date: getOptimalBookingDate(3), time: "", name: "" });
      setErrors({ name: "" });
    }, 1000);
  };

  const canSubmit = formData.name.trim().length >= 2 && !errors.name;

  const canProceedStep1 = formData.service && formData.duration;
  const canProceedStep2 = formData.date && formData.time;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto w-[calc(100%-2rem)] mx-auto" data-testid="booking-dialog">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-primary">
            {COMMON_TEXT.buttons.bookAppointment[language]}
          </DialogTitle>
          <DialogDescription>
            {BOOKING_TEXT.dialog.description[language]}
          </DialogDescription>
        </DialogHeader>

        <div className="mb-4 flex items-center justify-center gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
              data-testid={`booking-progress-${s}`}
            />
          ))}
        </div>

        {step === 1 && <Step1SelectService formData={formData} setFormData={setFormData} selectedServiceData={selectedServiceData} />}
        {step === 2 && <Step2DateTime formData={formData} setFormData={setFormData} />}
        {step === 3 && <Step3Contact formData={formData} setFormData={setFormData} errors={errors} handleValidateName={handleValidateName} />}
        {step === 4 && <Step4Summary formData={formData} selectedServiceData={selectedServiceData} />}

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={() => setStep(s => Math.max(1, s - 1))} disabled={step === 1} data-testid="booking-back-button">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {COMMON_TEXT.buttons.back[language]}
          </Button>

          {step < 4 ? (
            <Button
              onClick={() => setStep(s => s + 1)}
              disabled={(step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2) || (step === 3 && !canSubmit)}
              data-testid="booking-next-button"
            >
              {COMMON_TEXT.buttons.next[language]} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isSubmitting || !canSubmit} data-testid="booking-confirm-button">
              <Check className="w-4 h-4 mr-2" />
              {COMMON_TEXT.buttons.confirm[language]}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
