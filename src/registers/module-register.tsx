import * as React from "react";
import ChatbotScreen from "../modules/native/chatbot/MainScreen";
import { ChatbotConfig } from "../modules/native/chatbot/chatbot-types";
import { HubMainScreen } from "../modules/native/programHub/HubMainScreen";
import TableMainScreen from "../modules/native/DataTable/TableMainScreen";
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
