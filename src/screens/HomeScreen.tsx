import * as React from "react";
import { Appbar } from "react-native-paper";
import DeviceScreenNavigator from "../react-navigation/DeviceScreenNavigator";
import config from "../config";

export default function HomeNavigator(props: any) {
  const _handleMore = () => console.log("Shown more");

  function openDrawer() {
    props.navigation.openDrawer();
  }

  return (
    <React.Fragment>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={openDrawer} />
        <Appbar.Content title="Smart UI" subtitle="DAI Lab Project" />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <DeviceScreenNavigator modules={config.connectedDevices[1].modules} />
    </React.Fragment>
  );
}
