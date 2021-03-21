import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
// import {StatusBar} from "expo-status-bar";

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import BottomTabNavigator from "./navigation/BottomTabNavigator";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
            <Navigation colorScheme={colorScheme} />

        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
