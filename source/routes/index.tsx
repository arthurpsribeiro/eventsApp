import React from 'react';
import StackNavigator from './tabsNavigator';

interface RoutesProps {
  // isLogged: boolean
}

const Routes: React.FC<RoutesProps> = ({}: RoutesProps) => {
  return <StackNavigator />;
};

export default Routes;
