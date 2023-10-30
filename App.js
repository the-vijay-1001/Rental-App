// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/Navigators/AppNavigator';
import { PaperProvider } from 'react-native-paper';

const App = () => (
  <PaperProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </PaperProvider>
);

export default App;
