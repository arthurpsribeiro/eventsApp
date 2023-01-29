import { useContext } from 'react';
import { EventsContext } from '../contexts';

export const useEvents = () => {
  const context = useContext(EventsContext);
  // if (!context) {
  //   return 'useEvents must be used with events context';
  // }
  return context;
};
