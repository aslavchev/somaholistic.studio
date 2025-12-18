import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Skeleton } from "@/components/ui/skeleton";
import Lightbox from "@/components/Lightbox";
import studioPic1 from "@/assets/studio-pics/studio_pic1.webp";
import studioPic2 from "@/assets/studio-pics/studio_pic2.webp";
import studioPic3 from "@/assets/studio-pics/studio_pic3.webp";
import studioPic4 from "@/assets/studio-pics/studio_pic4.webp";
import studioPic5 from "@/assets/studio-pics/studio_pic5.webp";
import studioPic6 from "@/assets/studio-pics/studio_pic6.webp";
import studioPic7 from "@/assets/studio-pics/studio_pic7.webp";
import studioPic8 from "@/assets/studio-pics/studio_pic8.webp";

const Gallery = () => {
  const { t } = useLanguage();
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  const images = [
    { src: studioPic1, alt: t("SOMA Studio интериор", "SOMA Studio interior", "SOMA Studio interior") },
    { src: studioPic2, alt: t("Терапевтично пространство", "Therapeutic space", "Therapeutic space") },
    { src: studioPic3, alt: t("Студио за релаксация", "Relaxation studio", "Relaxation studio") },
    { src: studioPic4, alt: t("Тихо място за изцеление", "Peaceful healing space", "Peaceful healing space") },
    { src: studioPic5, alt: t("Холистична среда", "Holistic environment", "Holistic environment") },
    { src: studioPic6, alt: t("Просторно студио", "Spacious studio", "Spacious studio") },
    { src: studioPic7, alt: t("Уютен кът", "Cozy corner", "Cozy corner") },
    { src: studioPic8, alt: t("Място за трансформация", "Space for transformation", "Space for transformation") }
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
            {t("Нашето", "Our", "Our")} <span className="font-bold text-primary">{t("пространство", "Space", "Space")}</span>
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto"
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
            alt={t("Галерия", "Gallery", "Galleria")}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
