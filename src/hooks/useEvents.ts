import { useContext } from 'react';
import { EventsContext } from '../contexts/eventsContext';

export const useEvents = () => {
  const context = useContext(EventsContext);

  return context;
};
