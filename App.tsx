import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';

import Routes from './src/routes';
import { EventsProvider } from './src/contexts';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <EventsProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
              <StatusBar />
              <Routes />
            </SafeAreaView>
          </NavigationContainer>
        </ThemeProvider>
      </EventsProvider>
    </GestureHandlerRootView>
  );
};

export default App;
