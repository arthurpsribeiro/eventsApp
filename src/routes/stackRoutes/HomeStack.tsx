import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { EventDetails, Home } from '../../screens';
import { EventT } from '../../components';
import { RouteProp } from '@react-navigation/native';

export type HomeStackNavigatorParamList = {
  Home: {};
  EventDetails: {
    event: EventT;
  };
};

export type HomeScreenNavigationProps = StackNavigationProp<
  HomeStackNavigatorParamList,
  'EventDetails'
>;

export type EventDetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'EventDetails'
>;

const HomeStack = createStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      initialParams={{}}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="EventDetails"
      component={EventDetails}
      initialParams={{}}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
