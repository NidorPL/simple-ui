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

export function BottomModuleNavigation({ modules }: { modules: Module[] }) {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      {modules.map((module) => {
        const customApi = getAPI(module.customApi, false);
        return (
          <Tab.Screen
            key={module.moduleName}
            name={module.moduleName}
            children={() => getModuleView(module, customApi)}
            options={{
              tabBarLabel: () => <Text>{module.moduleName}</Text>,
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
