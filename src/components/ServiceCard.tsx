import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Phone, ChevronDown, CheckCircle2, Calendar } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT } from "@/data";
import { COMMON_TEXT, SERVICECARD_TEXT } from "@/data/translations";
import BookingDialog from "@/components/BookingDialog";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  benefits?: string[];
  suitableFor?: string[];
  price60?: string;
  price90?: string;
  duration60?: string;
  duration90?: string;
  image?: string;
  featured?: boolean;
  category?: 'signature' | 'massage' | 'therapy' | 'beauty' | 'coaching';
  isExpanded?: boolean;
  onToggle?: () => void;
  imageFetchPriority?: 'high' | 'auto';
}

const ServiceCard = ({
  id,
  title,
  description,
  benefits = [],
  suitableFor = [],
  price60,
  price90,
  duration60,
  duration90,
  image,
  featured = false,
  category,
  isExpanded = false,
  onToggle,
  imageFetchPriority = 'auto'
}: ServiceCardProps) => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const categoryColors = {
    signature: "bg-primary text-primary-foreground",
    massage: "bg-blue-100 text-blue-800",
    therapy: "bg-purple-100 text-purple-800",
    beauty: "bg-pink-100 text-pink-800",
    coaching: "bg-green-100 text-green-800"
  };

  const categoryLabels = {
    signature: SERVICECARD_TEXT.categories.signature[language],
    massage: SERVICECARD_TEXT.categories.massage[language],
    therapy: SERVICECARD_TEXT.categories.therapy[language],
    beauty: SERVICECARD_TEXT.categories.beauty[language],
    coaching: SERVICECARD_TEXT.categories.coaching[language]
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll when expanded on mobile
  useEffect(() => {
    if (isExpanded && isMobile && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }, 100);
    }
  }, [isExpanded, isMobile]);

  const shortDescription = description.length > 150 ? `${description.slice(0, 150)}...` : description;
  const hasExpandedContent = benefits.length > 0 || suitableFor.length > 0 || description.length > 150;

  return (
    <>
    <Card
      ref={cardRef}
      className={`
        service-card group rounded-xl overflow-hidden transition-all duration-300 cursor-pointer h-full flex flex-col
        ${featured ? 'border-primary shadow-lg' : 'border-border shadow-lg'}
        ${isExpanded ? 'border-2 border-primary bg-wellness-cream shadow-xl' : ''}
        md:hover:shadow-2xl md:hover:-translate-y-2
      `}
      onClick={hasExpandedContent ? onToggle : undefined}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      aria-label={`Service: ${title}`}
      aria-expanded={isExpanded}
      role={hasExpandedContent ? "button" : undefined}
      tabIndex={hasExpandedContent ? 0 : undefined}
      onKeyDown={(e) => {
        if (isMobile && hasExpandedContent && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onToggle?.();
        }
        if (e.key === 'Escape' && isExpanded) {
          onToggle?.();
        }
      }}
    >
      {image && (
        <div className="h-48 relative overflow-hidden bg-muted/30">
          <img
            src={image}
            alt={title}
            loading={imageFetchPriority === "high" ? "eager" : "lazy"}
            fetchpriority={imageFetchPriority}
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted animate-pulse" />
          )}
          <div className="absolute inset-0 bg-black/20 md:group-hover:bg-black/10 transition-all duration-300" />
          {category && (
            <span className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full ${categoryColors[category]}`}>
              {categoryLabels[category]}
            </span>
          )}
        </div>
      )}

      <CardContent className="p-6 flex-1 flex flex-col">
        {/* Content that can vary in height */}
        <div className="flex-1">
          <h3 className={`
            text-xl md:text-2xl font-semibold mb-3 text-foreground
            ${featured ? 'text-primary' : ''}
          `}>
            {title}
          </h3>

          {/* Default/Collapsed Description */}
          {!isExpanded && (
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
              {shortDescription}
            </p>
          )}

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  height: { duration: 0.35, ease: "easeOut" },
                  opacity: { duration: 0.2, delay: 0.1 }
                }}
                className="mb-6"
              >
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                  {description}
                </p>

                {benefits.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-primary mb-3 flex items-center gap-2">
                      🌿 {SERVICECARD_TEXT.benefits.heading[language]}
                    </h4>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {suitableFor.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-primary mb-3 flex items-center gap-2">
                      🎯 {SERVICECARD_TEXT.suitableFor.heading[language]}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {suitableFor.join(", ")}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pricing */}
          {(price60 || price90) && (
            <div className="mb-6">
              <h4 className="text-base font-semibold text-primary mb-3">
                {COMMON_TEXT.phrases.pricesAndOptions[language]}
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                {price60 && duration60 && (
                  <div className="flex-1 bg-primary/10 rounded-lg p-3 border border-primary/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-primary">{price60}</span>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                          {duration60}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {price90 && duration90 && (
                  <div className="flex-1 bg-primary/10 rounded-lg p-3 border border-primary/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-primary">{price90}</span>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                          {duration90}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Buttons section - stays at bottom */}
        <div className="space-y-2 mt-auto">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setBookingOpen(true);
              }}
              className={`
                w-full rounded-lg transition-all duration-300
                ${isHovered && !isMobile ? 'bg-copper shadow-[0_4px_16px_rgba(193,122,92,0.4)]' : 'bg-primary hover:bg-primary-dark'}
                text-primary-foreground
              `}
              data-testid={`service-book-button-${title.toLowerCase().replace(/\s+/g, '-')}`}
              aria-label={`Book appointment for ${title}`}
            >
              <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>{COMMON_TEXT.buttons.bookOnline[language]}{isHovered && !isMobile ? ' →' : ''}</span>
            </Button>

            <Button
              variant="outline"
              asChild
              className="w-full rounded-lg"
              onClick={(e) => isMobile && e.stopPropagation()}
            >
              <a
                href={`tel:${CONTACT.PHONE_TEL}`}
                className="flex items-center justify-center space-x-2"
                aria-label={`Call to book ${title}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{SERVICECARD_TEXT.buttons.call[language]}</span>
              </a>
            </Button>
          </div>

        {/* Expand/Collapse Toggle */}
        {hasExpandedContent && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle?.();
            }}
            className="flex items-center justify-center gap-2 w-full text-sm text-primary hover:text-primary/80 transition-colors mt-4 py-2"
            data-testid={`service-expand-button-${title.toLowerCase().replace(/\s+/g, '-')}`}
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? SERVICECARD_TEXT.buttons.showLess[language] : SERVICECARD_TEXT.buttons.showMore[language]}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        )}
      </CardContent>
    </Card>

    <BookingDialog
      open={bookingOpen}
      onOpenChange={setBookingOpen}
      preselectedService={id}
    />
    </>
  );
};

export default ServiceCard;
