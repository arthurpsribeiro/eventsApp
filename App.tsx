import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/styles/theme';
import { EventsProvider } from './src/contexts';
import RootStackNavigator from './src/routes/stackRoutes';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <EventsProvider>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <RootStackNavigator />
          </SafeAreaView>
        </ThemeProvider>
      </EventsProvider>
    </GestureHandlerRootView>
  );
};

export default App;
