import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../drawerContent";
import HomeScreen from "../screens/HomeScreen";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatDetailView from "../modules/chatbot/components/ChatDetailView";
import MainLayout from "../components/MainLayout";
import config from "../config";
import { getComponentByName } from "../module-register";

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

// get connected devices

/*
    device {
        name
        moduleName
        moduleConfig
    }
 */

// module resolver

// Komponente muss durch Register dynamisch gefetcht werden

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={HomeScreen} />
      {config.connectedDevices.map((deviceConfig) => {
        return (
          <Stack.Screen
            name={deviceConfig.name}
            component={(props) => (
              <MainLayout {...props}>
                {getComponentByName(deviceConfig)}
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
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
