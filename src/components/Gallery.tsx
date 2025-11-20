import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import spaHero from "@/assets/spa-hero.jpg";
import massageTherapy from "@/assets/massage-therapy.jpg";
import classicalMassage from "@/assets/classical-massage.jpg";
import backMassage from "@/assets/back-massage.jpg";

const Gallery = () => {
  const { t } = useLanguage();
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: spaHero, alt: t("SOMA Studio интериор", "SOMA Studio interior") },
    { src: massageTherapy, alt: t("Масажна терапия", "Massage therapy") },
    { src: classicalMassage, alt: t("Класически масаж", "Classical massage") },
    { src: backMassage, alt: t("Масаж на гръб", "Back massage") }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => setSelectedImage(index)}
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

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-2">
            {selectedImage !== null && (
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
