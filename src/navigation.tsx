import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerContent } from "./drawerContent";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import { RootStackParamList } from "./types";

import MainLayout from "./components/MainLayout";
import config from "./config";
import { Module } from "./components/common/common-types";
import useColorScheme from "./hooks/useColorScheme";
import Colors from "./constants/Colors";
import { getAPI, getModuleView } from "./register";

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

/*
  The Navigation component renders the Sidebar. Its content can be found in the DrawerContent component.
 */

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={SideDeviceNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/*
  The SideDeviceNavigation component iterates all devices of the config file and creates routes for each one of them. The routes are named after the device names.
  These can be used in the app now.
  The device is wrapped in the MainLayout of the app, which basically contains the app header. Now the detailed BottomModuleNavigation component is rendered.

 */

function SideDeviceNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={HomeScreen} />
      {config.connectedDevices.map((deviceConfig) => {
        return (
          <Stack.Screen
            key={deviceConfig.name}
            name={deviceConfig.name}
            children={(props) => (
              <MainLayout {...props}>
                <BottomModuleNavigation modules={deviceConfig.modules} />
              </MainLayout>
            )}
          />
        );
      })}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Not found!" }}
      />
    </Stack.Navigator>
  );
}

/*
  After a device has been chosen, the BottomModuleNavigation component creates a bottom-navigation-bar with all modules connected to the device.
 */

export function BottomModuleNavigation({ modules }: { modules: Module[] }) {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      {modules.map((module) => {
        // if a custom api was assigned, it is fetched here

        const customApi = getAPI(module.customApi, false);

        // This renders the actual views. The most important part here is the getModuleView function from the register.
        return (
          <Tab.Screen
            key={module.moduleName}
            name={module.customName || module.moduleName}
            children={() => getModuleView(module, customApi)}
            options={{
              tabBarLabel: () => (
                <Text>{module.customName || module.moduleName}</Text>
              ),
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name={module.iconName}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
