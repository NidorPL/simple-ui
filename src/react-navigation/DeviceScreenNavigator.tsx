import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Module } from "../components/common/common-types";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { getModuleView } from "../register";

const Tab = createBottomTabNavigator();

export default function DeviceScreenNavigator({
  modules,
}: {
  modules: Module[];
}) {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      {modules.map((module) => {
        return (
          <Tab.Screen
            key={module.moduleName}
            name={module.moduleName}
            children={() => getModuleView(module)}
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
