/*
    Mapper can override existing functions
 */

import axios from "axios";
import { Alert } from "react-native";
import { ChatbotMessage } from "../../native/chatbot/types";

export const CoronaChatMapper1: ChatbotApi = {
  name: "corona-bot1",
  relatedModule: "Chatbot",
  sendMessage: async (
    messageInput: string,
    location: object,
    config: ChatbotConfig
  ): Promise<ChatbotMessage[]> => {
    try {
      const { data } = await axios.get(`${config.connection.url}/chatbot`, {
        params: {
          request: `${messageInput}`,
          ...location,
        },
        timeout: 5000,
      });

      return data;
    } catch (err) {
      console.log("Error with request");
      console.log(err.message);
      console.log(err.request);

      return [
        {
          type: "simple-message",
          text:
            "Ich kann dir deine Frage gerade nicht beantworten. Bitte versuche es später nocheinmal.",
        },
      ];
    }
  },
};

interface ChatbotConfig {
  name: string;
  icon: string;
  moduleName: string;
  mapper: string;
  connection: {
    url: string;
    init: string;
    send: string;
  };
}

interface ChatbotApi {
  loadFirstMessages(config: ChatbotConfig): ChatbotMessage[];
  sendMessage(
    messageInput: string,
    location: object,
    config: ChatbotConfig
  ): Promise<ChatbotMessage[]>;
}
