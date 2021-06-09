import { Module } from "../../components/common/common-types";

export interface ChatConfig extends Module {
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
