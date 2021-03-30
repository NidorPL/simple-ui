import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { PreferencesContext } from "./context/preferencesContext";
import config from "./config";

export type StackNavigatorParamlist = {
  FeedList: undefined;
  Details: {
    id: number;
    name: string;
    handle: string;
    date: string;
    content: string;
    image: string;
    avatar: string;
    comments: number;
    retweets: number;
    hearts: number;
  };
};

type Props = {
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
};

export function DrawerContent(props: Props) {
  const paperTheme = useTheme();
  const { theme, toggleTheme } = React.useContext(PreferencesContext);

  const switchToDevice = (device) => {
    props.navigation && props.navigation.navigate(device.name);
  };

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View
        //@ts-ignore
        style={[
          styles.drawerContent,
          {
            backgroundColor: paperTheme.colors.surface,
          },
        ]}
      >
        <View style={styles.userInfoSection}>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          >
            <Avatar.Image
              source={require("../simple_ui/assets/images/logo.png")}
              size={80}
            />
          </TouchableOpacity>
          <Title style={styles.title}>Smart UI</Title>
          <Caption style={styles.caption}>Generically create your app</Caption>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <Drawer.Item
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )}
            label="Device Dashboard"
            onPress={() => {}}
          />
          <Drawer.Item
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="power-plug"
                color={color}
                size={size}
              />
            )}
            label="Add Device"
            onPress={() => {}}
          />
          <Drawer.Item
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label="Preferences"
            onPress={() => {}}
          />
        </Drawer.Section>

        <Drawer.Section title="Connected Devices" style={styles.drawerSection}>
          {config.connectedDevices.map((device, i) => {
            return (
              <Drawer.Item
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name={device.icon}
                    color={color}
                    size={size}
                  />
                )}
                label={device.name}
                onPress={() => switchToDevice(device)}
                key={"drawer-item" + i}
              />
            );
          })}
        </Drawer.Section>

        <Drawer.Section title="Preferences" style={styles.drawerSection}>
          <TouchableRipple onPress={toggleTheme}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={theme === "dark"} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
