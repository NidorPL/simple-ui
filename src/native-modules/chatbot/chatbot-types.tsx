import { Module2 } from "../../components/common/common-types";

export interface ChatConfig extends Module2 {
  moduleConfig: {
    connection: {
      url: string;
      init: string;
      send: string;
    };
  };
}

export interface ChatMessage {
  type: "simple-message";
  text: string;
  fromChatbot?: boolean;
  linkedRequest?: string;
}

export interface ChatbotMapper {
  loadFirstMessages: ChatMessage[];
  sendMessage: ChatMessage[];
}
