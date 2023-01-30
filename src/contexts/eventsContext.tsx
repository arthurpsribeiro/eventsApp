import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { EventT } from '../components/Event';
import { EventsService } from '../services';

interface IEventsContextData {
  events: EventT[] | null;
  loading: boolean;
  error: string | null;
  searchEvent: (searchParam: string) => void;
}

interface IEventsProviderProps {
  children: ReactNode;
}

export const EventsContext = createContext<IEventsContextData>(
  {} as IEventsContextData,
);

export const EventsProvider: React.FC<IEventsProviderProps> = ({
  children,
}: IEventsProviderProps) => {
  const [events, setEvents] = useState<EventT[] | null>(null);
  const [eventsForSearch, setEventsForSearch] = useState<EventT[] | null>(
    events,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await EventsService.getAllEvents();
      setEvents(data);
      setEventsForSearch(data);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  /*
   *
   *
   *firestore query methods are not working with search parameters, need to change implementation
   *
   *const searchEvent = async (searchParam: string) => {
   *  try {
   *    const data = await EventsService.searchEvents(searchParam);
   *    if (data.length < 1) {
   *      fetchData();
   *      return;
   *    }
   *    setEvents(data);
   *    setLoading(false);
   *  } catch (err: any) {
   *    setError(err.message);
   *    setLoading(false);
   *  }
   *};
   */

  const searchEvent = (searchParam: string): void => {
    if (!eventsForSearch) {
      return;
    }
    const searchResult: EventT[] = eventsForSearch?.filter(event =>
      event.name.toLowerCase().includes(searchParam.toLowerCase()),
    );
    setEvents(searchResult);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <EventsContext.Provider value={{ events, loading, error, searchEvent }}>
      {children}
    </EventsContext.Provider>
  );
};
