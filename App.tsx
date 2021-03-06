import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from "react-native-paper";
import { I18nManager } from "react-native";
import { Updates } from "expo";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { PreferencesContext } from "./src/context/preferencesContext";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  // The following parts are mainly for theme setup

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState<"light" | "dark">(
    colorScheme === "dark" ? "dark" : "light"
  );

  const [rtl] = React.useState<boolean>(I18nManager.isRTL);

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
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
      rtl: (rtl ? "right" : "left") as "right" | "left",
    }),
    [rtl, theme, toggleRTL]
  );

  if (!isLoadingComplete) {
    return null;
  } else {
    /*
        Here the providers are setup, which contain the theme logic.
        Afterwards the Navigation component is rendered, which contains the main application logic
       */

    return (
      <SafeAreaProvider>
        <PreferencesContext.Provider value={preferences}>
          <PaperProvider
            theme={
              theme === "light"
                ? {
                    ...DefaultTheme,
                    colors: { ...DefaultTheme.colors },
                  }
                : {
                    ...DarkTheme,
                    colors: { ...DarkTheme.colors },
                  }
            }
          >
            <QueryClientProvider client={queryClient}>
              <Navigation colorScheme={colorScheme} />
            </QueryClientProvider>
          </PaperProvider>
        </PreferencesContext.Provider>
      </SafeAreaProvider>
    );
  }
}
