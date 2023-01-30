import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeStackNavigator from './HomeStack';

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default RootStackNavigator;
