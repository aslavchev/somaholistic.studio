import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT } from "@/data";
import { COMPONENTS_TEXT } from "@/data/translations";

interface GoogleReviewBadgeProps {
  variant?: "default" | "compact";
  className?: string;
}

const GoogleReviewBadge = ({
  variant = "default",
  className = ""
}: GoogleReviewBadgeProps) => {
  const { language } = useLanguage();

  // TODO: These values should be updated monthly from Google Business Profile
  // Current as of: December 2025
  const rating = 5.0;
  const reviewCount = 5;
  const reviewLink = CONTACT.GOOGLE_MAPS;

  if (variant === "compact") {
    return (
      <a
        href={reviewLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 text-sm hover:opacity-80 transition-opacity ${className}`}
        aria-label={COMPONENTS_TEXT.googleReviewBadge.ratingAria(rating, reviewCount, language)}
      >
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-3 h-3 fill-yellow-400 text-yellow-400"
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="font-medium">{rating}</span>
        <span className="text-muted-foreground">({reviewCount})</span>
      </a>
    );
  }

  return (
    <a
      href={reviewLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors ${className}`}
      aria-label={COMPONENTS_TEXT.googleReviewBadge.ratingAria(rating, reviewCount, language)}
    >
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="flex flex-col items-start">
        <span className="font-semibold text-sm leading-none">{rating}</span>
        <span className="text-xs text-muted-foreground">
          {COMPONENTS_TEXT.googleReviewBadge.reviewsCount(reviewCount, language)}
        </span>
      </div>
    </a>
  );
};

export default GoogleReviewBadge;
