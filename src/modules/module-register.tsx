import * as React from "react";
import ChatbotScreen from "./native/chatbot/MainScreen";
import { ChatbotConfig } from "./native/chatbot/chatbot-types";
import { HubMainScreen } from "./native/programHub/HubMainScreen";
import TableMainScreen from "./native/DataTable/TableMainScreen";
import { Module2 } from "../components/common/common-types";

export function getModuleScreen(deviceConfig: Module2) {
  switch (deviceConfig.moduleName) {
    case "Chat":
      return <ChatbotScreen {...deviceConfig} />;
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
