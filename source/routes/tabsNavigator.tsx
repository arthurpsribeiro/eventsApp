import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { Home } from '../screens';

type StackParamList = {
  Home: {};
};

export type HomeScreenNavigationProps = StackNavigationProp<
  StackParamList,
  'Home'
>;

const Stack = createStackNavigator<StackParamList>();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} initialParams={{}} />
  </Stack.Navigator>
);

export default StackNavigator;
