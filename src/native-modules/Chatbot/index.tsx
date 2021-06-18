import React from "react";
import { ChatMainScreen } from "./ChatMainScreen";
import { ChatConfig } from "./chatbot-types";

export const ChatbotModule = {
  moduleName: "Chat",
  // Wrap view with provider
  getView: (moduleConfig: ChatConfig, customApi?: object) => (
    <ChatMainScreen chatConfig={moduleConfig} customApi={customApi} />
  ),
};
