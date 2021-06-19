import React from "react";
import { ChatbotApi, ChatConfig, ChatMessage } from "../chatbot-types";

export const ChatMessageContext = React.createContext<{
  message: ChatMessage;
  sendLinkedRequest: (params: string | object) => void;
  // @ts-ignore
}>({
  message: {
    text: "",
    fromChatbot: true,
    type: "",
  },
});
