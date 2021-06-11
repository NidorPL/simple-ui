import axios from "axios";
import { Alert } from "react-native";
import { ChatMessage } from "../../native-modules/Chatbot/chatbot-types";
import { ChatConfig } from "./corona-chat-api1-types";

export const CoronaChatMapper1: ChatbotApi = {
  name: "corona-bot1",
  relatedModule: "Chatbot",
  sendMessage: async (
    messageInput: string,
    location: object,
    chatConfig: ChatConfig
  ): Promise<ChatMessage[]> => {
    try {
      const { data } = await axios.get(
        `${chatConfig.moduleConfig.connection.url}/chatbot`,
        {
          params: {
            request: `${messageInput}`,
            ...location,
          },
          timeout: 5000,
        }
      );

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
  loadFirstMessages: async (chatConfig: ChatConfig) => {
    try {
      const { data } = await axios.get(`/chatbot-init`, {
        baseURL: chatConfig.moduleConfig.connection.url,
        timeout: 5000,
        headers: { "Content-Type": "application/json" },
      });
      return data;
    } catch (err) {
      Alert.alert(err.message);
    }
  },
};

interface ChatbotApi {
  name: string;
  relatedModule: string;
  loadFirstMessages?(config: ChatConfig): ChatMessage[];
  sendMessage?(
    messageInput: string,
    location: object,
    config: ChatConfig
  ): Promise<ChatMessage[]>;
}
