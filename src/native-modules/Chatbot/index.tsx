import React from "react";
import { ChatMainScreen } from "./ChatMainScreen";
import { Module } from "./chatbot-types";

export const ChatbotModule = {
  moduleName: "Chat",
  getView: (moduleConfig: Module) => (
    <ChatMainScreen chatConfig={moduleConfig} />
  ),
};
