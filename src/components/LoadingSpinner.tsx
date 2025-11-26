/**
 * Loading Spinner Component
 *
 * Professional loading indicator for route transitions
 */

import { Loader2 } from 'lucide-react';

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
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center animate-pulse">
          <span className="text-primary-foreground font-bold text-2xl">S</span>
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
