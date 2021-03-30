import CoronaChatbot from "./modules/chatbot";
import Oven from "./modules/oven";
import Sensors from "./modules/sensor";
import * as React from "react";
import ChatDetailView from "./modules/chatbot/components/ChatDetailView";

export function getComponentByName(deviceConfig: object) {
  switch (deviceConfig.moduleName) {
    case "Chatbot":
      return <ChatDetailView {...deviceConfig} />;

    default:
      throw new Error(
        "Couldnt resolve component name: " + deviceConfig.moduleName
      );
  }
}
