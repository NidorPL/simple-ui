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

import LinkingConfiguration from "./LinkingConfiguration";
import MainLayout from "../components/MainLayout";
import config from "../config";
import { getModuleScreen } from "../modules/module-register";
import DeviceScreenNavigator from "./DeviceScreenNavigator";

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={HomeScreen} />
      {config.connectedDevices.map((deviceConfig) => {
        console.log("deviceConfig");
        console.log(deviceConfig);

        return (
          <Stack.Screen
            key={deviceConfig.name}
            name={deviceConfig.name}
            children={(props) => (
              <MainLayout {...props}>
                <DeviceScreenNavigator modules={deviceConfig.modules} />
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
