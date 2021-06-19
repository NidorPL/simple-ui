import React from "react";
import { ChatMainScreen } from "./ChatMainScreen";
import { ChatbotApi, ChatConfig } from "./chatbot-types";
import { defaultChabotAPI } from "./default-chatbot-api";
import { ChatConfigContext } from "./context/chat-config-context";

export const ChatbotModule = {
  moduleName: "Chat",
  getView: (moduleConfig: ChatConfig, customApi?: ChatbotApi) => {
    return (
      <ChatConfigContext.Provider
        value={{
          chatConfig: moduleConfig,
          api: customApi || defaultChabotAPI,
        }}
      >
        <ChatMainScreen />
      </ChatConfigContext.Provider>
    );
  },
};
