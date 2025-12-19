import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT } from "@/data";
import { COMPONENTS_TEXT } from "@/data/translations";
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
  const { language } = useLanguage();

  const handleClick = () => {
    const message = COMPONENTS_TEXT.discoveryCall.message[language];
    const url = `https://wa.me/${CONTACT.WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`gap-2 ${className}`}
      aria-label={COMPONENTS_TEXT.discoveryCall.ariaLabel[language]}
    >
      <MessageCircle className="w-4 h-4" />
      {COMPONENTS_TEXT.discoveryCall.label[language]}
    </Button>
  );
};

export default DiscoveryCallButton;
