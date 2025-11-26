/**
 * Google Analytics Component
 *
 * Add your Google Analytics tracking ID to enable analytics
 * Get your tracking ID from: https://analytics.google.com/
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// TODO: Replace with your actual Google Analytics Measurement ID
// Get it from: https://analytics.google.com/ -> Admin -> Data Streams
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with Mari's GA ID

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Only track if GA_MEASUREMENT_ID is configured
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.log('Google Analytics not configured. Add your GA_MEASUREMENT_ID in src/components/GoogleAnalytics.tsx');
      return;
    }

    // Track page views
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Load GA script
  useEffect(() => {
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default GoogleAnalytics;
