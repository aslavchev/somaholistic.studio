/**
 * Google Calendar API Integration
 *
 * Fetches available time slots from Google Calendar using freeBusy API
 */

import { startOfDay, endOfDay, addMinutes, format, parse, isBefore, isAfter } from 'date-fns';

const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID || 'primary';
const BUSINESS_START = 9; // 9 AM
const BUSINESS_END = 19; // 7 PM
const SLOT_DURATION = 60; // 60 minutes

export interface TimeSlot {
  time: string; // "09:00", "10:00", etc.
  available: boolean;
}

interface BusyPeriod {
  start: string;
  end: string;
}

/**
 * Generate all possible time slots for business hours
 */
function generateAllSlots(date: Date): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const baseDate = startOfDay(date);

  for (let hour = BUSINESS_START; hour < BUSINESS_END; hour++) {
    const time = `${hour.toString().padStart(2, '0')}:00`;
    slots.push({ time, available: true });
  }

  return slots;
}

/**
 * Check if a time slot overlaps with any busy periods
 */
function isSlotBusy(date: Date, slotTime: string, busyPeriods: BusyPeriod[]): boolean {
  const slotStart = parse(slotTime, 'HH:mm', date);
  const slotEnd = addMinutes(slotStart, SLOT_DURATION);

  return busyPeriods.some(busy => {
    const busyStart = new Date(busy.start);
    const busyEnd = new Date(busy.end);

    // Check if slot overlaps with busy period
    return (
      (isAfter(slotStart, busyStart) || slotStart.getTime() === busyStart.getTime()) &&
      isBefore(slotStart, busyEnd)
    ) || (
      isAfter(slotEnd, busyStart) &&
      (isBefore(slotEnd, busyEnd) || slotEnd.getTime() === busyEnd.getTime())
    );
  });
}

/**
 * Fetch available time slots from Google Calendar
 */
export async function getAvailableSlots(
  date: Date,
  accessToken: string
): Promise<TimeSlot[]> {
  const timeMin = startOfDay(date).toISOString();
  const timeMax = endOfDay(date).toISOString();

  try {
    const response = await fetch(
      'https://www.googleapis.com/calendar/v3/freeBusy',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timeMin,
          timeMax,
          items: [{ id: CALENDAR_ID }],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Calendar API error: ${response.statusText}`);
    }

    const data = await response.json();
    const busyPeriods: BusyPeriod[] = data.calendars?.[CALENDAR_ID]?.busy || [];

    // Generate all slots and mark busy ones as unavailable
    const allSlots = generateAllSlots(date);
    return allSlots.map(slot => ({
      ...slot,
      available: !isSlotBusy(date, slot.time, busyPeriods),
    }));
  } catch (error) {
    console.error('Failed to fetch calendar availability:', error);
    throw error;
  }
}
