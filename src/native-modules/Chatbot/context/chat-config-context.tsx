import React from "react";
import { ChatbotApi, ChatConfig } from "../chatbot-types";

export const ChatConfigContext = React.createContext<{
  chatConfig: ChatConfig;
  api: ChatbotApi;
  // @ts-ignore
}>({});
