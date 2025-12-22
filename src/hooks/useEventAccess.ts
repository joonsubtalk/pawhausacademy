// hooks/useEventAccess.js
import { useState, useEffect } from 'react';
import { EVENTS } from '../config/eventConfig';

export const useEventAccess = () => {
  const [currentEvent, setCurrentEvent] = useState<typeof EVENTS[string] | null>(null);

  useEffect(() => {
    // 1. Check URL for "ticket"
    const searchParams = new URLSearchParams(window.location.search);
    const ticket = searchParams.get('ticket');

    // 2. Helper to validate and set event
    const activateEvent = (eventId:string) => {
      if (EVENTS[eventId]) {
        setCurrentEvent(EVENTS[eventId]);
        // Save to storage so they stay VIP on refresh
        localStorage.setItem('active_event_id', eventId);
      }
    };

    if (ticket) {
      try {
        // DECODE: Base64 -> String -> JSON
        // "atob" decodes Base64 in the browser
        const decodedString = atob(ticket); 
        const payload = JSON.parse(decodedString);
        
        if (payload.event) {
          activateEvent(payload.event);
          
          // Clean URL so the code isn't sitting in the address bar
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      } catch (e) {
        console.error("Invalid ticket code");
      }
    } else {
      // 3. Fallback: Check LocalStorage
      const storedEventId = localStorage.getItem('active_event_id');
      if (storedEventId) {
        activateEvent(storedEventId);
      }
    }
  }, []);

  return currentEvent; // Returns null (standard user) or the Event Object (VIP)
};