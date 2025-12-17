/**
 * Google Sheets Availability Integration
 *
 * Fetches real-time availability from published Google Sheet CSV
 * Zero backend required - updates reflect globally within 10 seconds
 */

// TODO: Replace with Mari's published Google Sheet CSV URL
// Get from: File → Share → Publish to web → "Availability" tab → CSV format
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/.../pub?gid=0&single=true&output=csv";

/**
 * Fetch available time slots for a specific date from Google Sheets
 *
 * Sheet Format:
 * Row 1: Headers (Date, 09:00, 10:00, 11:00, ..., 19:00)
 * Row N: 2025-01-15, YES, YES, , BOOKED, YES, ...
 *
 * @param date - Selected date
 * @returns Array of available time slot strings (e.g., ["09:00", "11:00", "18:00"])
 */
export async function getAvailableTimeSlotsFromSheet(date?: Date): Promise<string[]> {
  if (!date) return [];

  const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD

  try {
    // Bust cache with timestamp to always get fresh data
    const response = await fetch(`${SHEET_CSV_URL}&_=${Date.now()}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      console.error("Failed to fetch availability sheet:", response.statusText);
      return [];
    }

    const csvText = await response.text();
    const lines = csvText.trim().split("\n");

    if (lines.length < 2) {
      console.warn("Sheet has no data rows");
      return [];
    }

    // Parse header row (time slots)
    const headers = lines[0].split(",").map(h => h.trim().replace(/"/g, ""));

    // Find the row matching the selected date
    const matchingRow = lines.find(line => {
      const firstCell = line.split(",")[0].trim().replace(/"/g, "");
      return firstCell === formattedDate;
    });

    if (!matchingRow) {
      console.log(`No availability data for date: ${formattedDate}`);
      return [];
    }

    // Parse availability values for the date
    const values = matchingRow.split(",").map(v => v.trim().replace(/"/g, ""));

    // Collect time slots where value is "YES" (case-insensitive)
    const availableSlots: string[] = [];
    headers.forEach((timeSlot, index) => {
      // Skip the first column (Date column)
      if (index === 0) return;

      const isAvailable = values[index]?.toUpperCase() === "YES";
      if (isAvailable) {
        availableSlots.push(timeSlot);
      }
    });

    return availableSlots.sort(); // Return chronologically sorted slots

  } catch (error) {
    console.error("Error fetching availability from Google Sheets:", error);
    return [];
  }
}
