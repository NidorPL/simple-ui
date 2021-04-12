import CoronaChatbot from "./native/chatbot";
import Oven from "./native/oven";
import Sensors from "./native/sensor";
import * as React from "react";
import ChatbotScreen from "./native/chatbot/components/MainScreen";

export function getModuleScreen(deviceConfig: object) {
  switch (deviceConfig.moduleName) {
    case "Chatbot":
      return <ChatbotScreen {...deviceConfig} />;

    default:
      throw new Error(
        "Couldnt resolve component name: " + deviceConfig.moduleName
      );
  }
}
