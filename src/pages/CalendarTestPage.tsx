/**
 * Calendar Test Page
 *
 * Test page for Google Calendar integration
 */

import { LanguageProvider } from "@/contexts/LanguageContext";
import { CalendarOAuthProvider } from "@/contexts/CalendarContext";
import { CalendarTest } from "@/components/CalendarTest";

const CalendarTestPage = () => {
  return (
    <LanguageProvider>
      <CalendarOAuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-sage-50 via-background to-sage-50 py-12">
          <div className="container mx-auto px-4">
            <CalendarTest />
          </div>
        </div>
      </CalendarOAuthProvider>
    </LanguageProvider>
  );
};

export default CalendarTestPage;
