import * as React from "react";
import { Appbar } from "react-native-paper";
import { MainOvenScreen } from "../modules/native/oven/OvenMainScreen";

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
      <MainOvenScreen
        config={{
          name: "Intelligent Oven",
          icon: "stove",
          moduleName: "Oven",
          mapper: "default",
          runningPrograms: [
            {
              moduleInfo: {
                pModuleName: "LabeledProgress",
              },
              instanceConfig: {
                name: "Bake",
                title: "Backen...",
                iconName: "chef-hat",
                statusUrl: "http://localhost:3000/oven1/bake1/status",
              },
            },
            {
              moduleInfo: {
                pModuleName: "LabeledProgress",
              },
              instanceConfig: {
                name: "Vacuum1",
                iconName: "robot-vacuum",
                title: "Staubsaugen Wohnzimmer...",
                mapper: "default",
                statusUrl: "http://localhost:3000/vacuum1/status",
              },
            },
          ],
        }}
      />
    </React.Fragment>
  );
}
