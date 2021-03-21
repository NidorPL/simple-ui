import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider, DefaultTheme,
    DarkTheme, } from 'react-native-paper';
// import {StatusBar} from "expo-status-bar";
import { I18nManager } from 'react-native';
import { Updates } from 'expo';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { PreferencesContext } from './context/preferencesContext';

import BottomTabNavigator from "./navigation/BottomTabNavigator";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
    const [theme, setTheme] = React.useState<'light' | 'dark'>(
        colorScheme === 'dark' ? 'dark' : 'light'
    );

    const [rtl] = React.useState<boolean>(I18nManager.isRTL);

    function toggleTheme() {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }

    const toggleRTL = React.useCallback(() => {
        I18nManager.forceRTL(!rtl);
        Updates.reloadFromCache();
    }, [rtl]);

    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            toggleRTL,
            theme,
            rtl: (rtl ? 'right' : 'left') as 'right' | 'left',
        }),
        [rtl, theme, toggleRTL]
    );

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
          <PreferencesContext.Provider value={preferences}>
        <PaperProvider
            theme={
                theme === 'light'
                    ? {
                        ...DefaultTheme,
                        colors: { ...DefaultTheme.colors, primary: '#1ba1f2' },
                    }
                    : {
                        ...DarkTheme,
                        colors: { ...DarkTheme.colors, primary: '#1ba1f2' },
                    }
            }>
            <Navigation colorScheme={colorScheme} />

        </PaperProvider>
          </PreferencesContext.Provider>
      </SafeAreaProvider>
    );
  }
}
