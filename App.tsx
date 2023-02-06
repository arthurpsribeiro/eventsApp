import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/styles/theme';
import AppProvider from './src/contexts';
import RootStackNavigator from './src/routes/stackRoutes';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <SafeAreaView
              style={styles.container}
              edges={['top', 'right', 'left']}>
              <StatusBar
                barStyle={'dark-content'}
                backgroundColor="transparent"
                translucent
              />
              <RootStackNavigator />
            </SafeAreaView>
          </AppProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_primary,
  },
});

export default App;
