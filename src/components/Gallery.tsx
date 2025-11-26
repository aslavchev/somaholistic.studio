import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Skeleton } from "@/components/ui/skeleton";
import Lightbox from "@/components/Lightbox";
import spaHero from "@/assets/spa-hero.jpg";
import massageTherapy from "@/assets/massage-therapy.jpg";
import classicalMassage from "@/assets/classical-massage.jpg";
import backMassage from "@/assets/back-massage.jpg";
import energyTherapy from "@/assets/energy-therapy.jpg";
import facialMassage from "@/assets/facial-massage-new.jpg";

const Gallery = () => {
  const { t } = useLanguage();
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  const images = [
    { src: spaHero, alt: t("SOMA Studio интериор", "SOMA Studio interior") },
    { src: massageTherapy, alt: t("Масажна терапия", "Massage therapy") },
    { src: classicalMassage, alt: t("Класически масаж", "Classical massage") },
    { src: backMassage, alt: t("Масаж на гръб", "Back massage") },
    { src: energyTherapy, alt: t("Енергийна терапия", "Energy therapy") },
    { src: facialMassage, alt: t("Подмладяваща терапия за лице", "Facial therapy") }
  ];

  const goToPrevious = () => {
    setSelectedImage(prev =>
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedImage(prev =>
      prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-background" id="gallery" data-testid="gallery-section">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            {t("Нашето", "Our")} <span className="font-bold text-primary">{t("пространство", "Space")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "Открийте мястото, където тялото и умът намират хармония",
              "Discover the place where body and mind find harmony"
            )}
          </p>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden rounded-lg group cursor-pointer transition-all duration-500 ${
                gridVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => setSelectedImage(index)}
              data-testid={`gallery-image-${index + 1}`}
            >
              {!loadedImages[index] && (
                <Skeleton className="absolute inset-0 w-full h-full" />
              )}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`
                  w-full h-full object-cover transition-all duration-500
                  group-hover:scale-110
                  ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}
                `}
                onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium text-center px-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox for full-screen image viewing */}
        {selectedImage !== null && (
          <Lightbox
            images={images.map(img => img.src)}
            currentIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={goToNext}
            onPrevious={goToPrevious}
            alt={t("Галерия", "Gallery")}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
