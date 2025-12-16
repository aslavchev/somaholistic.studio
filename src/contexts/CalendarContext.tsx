/**
 * Calendar Context - Google OAuth Integration
 *
 * Handles Google OAuth for Calendar API access
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

interface CalendarContextType {
  accessToken: string | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  error: string | null;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export function CalendarProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = useGoogleLogin({
    onSuccess: (response) => {
      setAccessToken(response.access_token);
      setError(null);
      // Store token in sessionStorage for persistence during session
      sessionStorage.setItem('calendar_token', response.access_token);
    },
    onError: (error) => {
      console.error('Login failed:', error);
      setError('Failed to authenticate with Google Calendar');
    },
    scope: 'https://www.googleapis.com/auth/calendar.readonly',
  });

  const logout = () => {
    setAccessToken(null);
    sessionStorage.removeItem('calendar_token');
  };

  // Check for existing token on mount
  useEffect(() => {
    const storedToken = sessionStorage.getItem('calendar_token');
    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  const value = {
    accessToken,
    isAuthenticated: !!accessToken,
    login,
    logout,
    error,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendar() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within CalendarProvider');
  }
  return context;
}

// Wrapper to provide Google OAuth
export function CalendarOAuthProvider({ children }: { children: ReactNode }) {
  if (!CLIENT_ID) {
    console.warn('VITE_GOOGLE_CLIENT_ID not configured');
  }

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <CalendarProvider>{children}</CalendarProvider>
    </GoogleOAuthProvider>
  );
}
