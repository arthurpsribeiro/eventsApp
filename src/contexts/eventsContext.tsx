import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { EventT } from '../components/Event';
import { EventsService } from '../services';

interface IEventsContextData {
  events: EventT[] | null;
  loading: boolean;
  error: string | null;
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

  const fetchData = async () => {
    try {
      const data = await EventsService.getAllEvents();
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
    <EventsContext.Provider value={{ events, loading, error }}>
      {children}
    </EventsContext.Provider>
  );
};
