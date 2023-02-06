import React, { ReactNode } from 'react';
import { EventsProvider } from './eventsContext';

interface IAppProviderProps {
  children: ReactNode;
}
const AppProvider: React.FC<IAppProviderProps> = ({
  children,
}: IAppProviderProps) => {
  return <EventsProvider>{children}</EventsProvider>;
};

export default AppProvider;
