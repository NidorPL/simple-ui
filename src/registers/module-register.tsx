import * as React from "react";

import { Module2 } from "../components/common/common-types";
import { ChatMainScreen } from "../native-modules/chatbot/MainScreen";
import { HubMainScreen } from "../native-modules/programHub/HubMainScreen";
import TableMainScreen from "../native-modules/DataTable/TableMainScreen";

export function getModuleScreen(deviceConfig: Module2) {
  switch (deviceConfig.moduleName) {
    case "Chat":
      return <ChatMainScreen {...deviceConfig} />;
    case "ProgramHub":
      return <HubMainScreen config={deviceConfig}></HubMainScreen>;
    case "DataTable":
      return <TableMainScreen tableModuleConfig={deviceConfig} />;

    default:
      throw new Error(
        "Couldnt resolve component name: " + deviceConfig.moduleName
      );
  }
}
