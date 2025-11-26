import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT } from "@/data";
import { MessageCircle } from "lucide-react";

interface DiscoveryCallButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}

const DiscoveryCallButton = ({
  variant = "default",
  size = "default",
  className = ""
}: DiscoveryCallButtonProps) => {
  const { t } = useLanguage();

  const handleClick = () => {
    const message = t(
      "Здравейте! Не съм сигурен/а коя услуга е подходяща за мен. Може ли да ми помогнете да избера?",
      "Hello! I'm not sure which service is right for me. Can you help me choose?"
    );
    const url = `https://wa.me/${CONTACT.WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`gap-2 ${className}`}
      aria-label={t("Безплатна консултация", "Free clarity call")}
    >
      <MessageCircle className="w-4 h-4" />
      {t("Безплатна консултация", "Free Clarity Call")}
    </Button>
  );
};

export default DiscoveryCallButton;
