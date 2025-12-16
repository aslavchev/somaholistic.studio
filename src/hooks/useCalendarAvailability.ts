/**
 * Hook to fetch calendar availability
 */

import { useState, useEffect } from 'react';
import { getAvailableSlots, TimeSlot } from '@/lib/utils/calendarAPI';
import { useCalendar } from '@/contexts/CalendarContext';

export function useCalendarAvailability(date: Date | undefined) {
  const { accessToken, isAuthenticated } = useCalendar();
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!date || !accessToken || !isAuthenticated) {
      setSlots([]);
      return;
    }

    const fetchSlots = async () => {
      setLoading(true);
      setError(null);

      try {
        const availableSlots = await getAvailableSlots(date, accessToken);
        setSlots(availableSlots);
      } catch (err) {
        console.error('Failed to fetch calendar:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch calendar');
        setSlots([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, [date, accessToken, isAuthenticated]);

  return {
    slots,
    loading,
    error,
    isCalendarEnabled: isAuthenticated
  };
}
