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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const updateEventsCallback = (eventsData: EventT[]) => {
    setEvents(eventsData);
    setLoading(false);
  };

  const fetchData = () => {
    EventsService.getAllEvents(updateEventsCallback);
  };

  const searchEvent = async (searchParam: string) => {
    if (searchParam.length < 3) return fetchData();
    try {
      setLoading(true);
      const data = await EventsService.searchEvents(searchParam.toLowerCase());
      if (!data || data.length < 1) return setLoading(false);
      setEvents(data);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
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
