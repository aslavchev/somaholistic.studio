/**
 * Loading Spinner Component
 *
 * Professional loading indicator for route transitions
 */

import { Loader2 } from 'lucide-react';
import logo from '@/assets/Logo_Soma_png.png';

export const LoadingSpinner = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Logo */}
        <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-2 animate-pulse">
          <img
            src={logo}
            alt="SOMA STUDIO"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Spinner */}
        <Loader2 className="w-8 h-8 text-primary animate-spin" aria-hidden="true" />

        {/* Text */}
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
