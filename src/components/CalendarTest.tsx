/**
 * Calendar Test Component
 *
 * Test Google Calendar integration - shows available slots
 */

import { useState } from 'react';
import { useCalendar } from '@/contexts/CalendarContext';
import { getAvailableSlots, TimeSlot } from '@/lib/utils/calendarAPI';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Check, X, LogIn, LogOut } from 'lucide-react';
import { format } from 'date-fns';

export function CalendarTest() {
  const { accessToken, isAuthenticated, login, logout } = useCalendar();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSlots = async () => {
    if (!accessToken) return;

    setLoading(true);
    setError(null);

    try {
      const availableSlots = await getAvailableSlots(selectedDate, accessToken);
      setSlots(availableSlots);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch calendar data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg border-2 border-primary/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <CalendarIcon className="w-8 h-8 text-primary" />
          <div>
            <h2 className="text-2xl font-bold">Calendar Test</h2>
            <p className="text-sm text-muted-foreground">Google Calendar Integration</p>
          </div>
        </div>

        {isAuthenticated ? (
          <Button variant="outline" size="sm" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        ) : (
          <Button onClick={login}>
            <LogIn className="w-4 h-4 mr-2" />
            Connect Calendar
          </Button>
        )}
      </div>

      {/* Authentication Required */}
      {!isAuthenticated && (
        <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
          <CalendarIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Connect Your Calendar</h3>
          <p className="text-muted-foreground mb-6">
            Click "Connect Calendar" above to authorize access to your Google Calendar
          </p>
        </div>
      )}

      {/* Calendar Interface */}
      {isAuthenticated && (
        <>
          {/* Date Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Select Date</label>
            <input
              type="date"
              value={format(selectedDate, 'yyyy-MM-dd')}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Fetch Button */}
          <Button
            onClick={fetchSlots}
            className="w-full mb-6"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Check Availability'}
          </Button>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
              {error}
            </div>
          )}

          {/* Available Slots */}
          {slots.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4">
                Availability for {format(selectedDate, 'MMMM d, yyyy')}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {slots.map((slot) => (
                  <div
                    key={slot.time}
                    className={`p-3 rounded-lg border-2 flex items-center justify-center gap-2 ${
                      slot.available
                        ? 'bg-green-50 border-green-200 text-green-800'
                        : 'bg-red-50 border-red-200 text-red-800'
                    }`}
                  >
                    {slot.available ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <X className="w-4 h-4" />
                    )}
                    <span className="font-medium">{slot.time}</span>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-6 p-4 bg-sage-50 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold">
                    {slots.filter(s => s.available).length} available
                  </span>
                  {' / '}
                  <span className="text-muted-foreground">
                    {slots.filter(s => !s.available).length} busy
                  </span>
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CalendarTest;
