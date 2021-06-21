import * as React from "react";
import { Appbar } from "react-native-paper";
import { BottomModuleNavigation } from "../navigation";
import config from "../config";

export default function HomeScreen(props: any) {
  const _handleMore = () => console.log("Shown more");

  function openDrawer() {
    props.navigation.openDrawer();
  }

  return (
    <React.Fragment>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={openDrawer} />
        <Appbar.Content
          title="Smart UI"
          subtitle="Connect with intelligent assistants"
        />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <BottomModuleNavigation modules={config.connectedDevices[1].modules} />
    </React.Fragment>
  );
}
