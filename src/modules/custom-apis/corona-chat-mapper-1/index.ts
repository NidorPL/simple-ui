import axios from "axios";
import { ChatbotMessage } from "../../native/chatbot/chatbot-types";
import { Alert } from "react-native";

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
  loadFirstMessages: async (config: ChatbotConfig) => {
    try {
      const { data } = await axios.get(`/chatbot-init`, {
        baseURL: config.connection.url,
        timeout: 5000,
        headers: { "Content-Type": "application/json" },
      });
      return data;
    } catch (err) {
      Alert.alert(err.message);
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
  name: string;
  relatedModule: string;
  loadFirstMessages?(config: ChatbotConfig): ChatbotMessage[];
  sendMessage?(
    messageInput: string,
    location: object,
    config: ChatbotConfig
  ): Promise<ChatbotMessage[]>;
}
