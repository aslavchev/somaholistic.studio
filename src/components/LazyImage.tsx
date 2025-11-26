/**
 * Lazy Image Component
 *
 * Progressive image loading with blur placeholder
 * Improves initial page load performance
 */

import { useState, useEffect, ImgHTMLAttributes } from 'react';

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export const LazyImage = ({
  src,
  alt,
  className = '',
  placeholderClassName = '',
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 bg-muted animate-pulse ${placeholderClassName}`}
          aria-hidden="true"
        />
      )}

      {/* Actual Image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
