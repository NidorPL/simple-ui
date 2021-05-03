import CoronaChatbot from "./native/chatbot";
import Oven from "./native/oven";
import Sensors from "./native/sensor";
import * as React from "react";
import ChatbotScreen from "./native/chatbot/MainScreen";
import { MainOvenScreen } from "./native/oven/OvenMainScreen";
import { ChatbotConfig } from "./native/chatbot/chatbot-types";
import { HubMainScreen } from "./native/programHub/HubMainScreen";

export function getModuleScreen(deviceConfig: ChatbotConfig) {
  switch (deviceConfig.moduleName) {
    case "Chat":
      return <ChatbotScreen {...deviceConfig} />;
    case "ProgramHub":
      return <HubMainScreen config={deviceConfig}></HubMainScreen>;

    default:
      throw new Error(
        "Couldnt resolve component name: " + deviceConfig.moduleName
      );
  }
}
