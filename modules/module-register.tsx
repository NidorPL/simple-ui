import CoronaChatbot from "./native/chatbot";
import Oven from "./native/oven";
import Sensors from "./native/sensor";
import * as React from "react";
import ChatbotScreen from "./native/chatbot/MainScreen";
import MainOvenScreen from "./native/oven/MainScreen";
import { ChatbotConfig } from "./native/chatbot/chatbot-types";

export function getModuleScreen(deviceConfig: ChatbotConfig) {
  switch (deviceConfig.moduleName) {
    case "Chatbot":
      return <ChatbotScreen {...deviceConfig} />;
    case "Oven":
      return <MainOvenScreen></MainOvenScreen>;

    default:
      throw new Error(
        "Couldnt resolve component name: " + deviceConfig.moduleName
      );
  }
}
