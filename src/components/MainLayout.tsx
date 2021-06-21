import React from "react";
import { Appbar } from "react-native-paper";

export default function MainLayout(props: any) {
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
      {props.children && props.children}
    </React.Fragment>
  );
}
