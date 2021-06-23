import axios from "axios";
import { Alert } from "react-native";
import { ChatbotApi, ChatConfig } from "./chatbot-types";

export const defaultChabotAPI: ChatbotApi = {
  loadFirstMessages: async (chatConfig: ChatConfig) => {
    try {
      const { data } = await axios.get(
        `${chatConfig.moduleConfig.connection.init}`,
        {
          baseURL: chatConfig.moduleConfig.connection.url,
          timeout: 5000,
          headers: { "Content-Type": "application/json" },
        }
      );
      return data;
    } catch (err) {
      Alert.alert(err.message);
    }
  },
  sendMessage: async (
    messageInput: string,
    location: object,
    chatConfig: ChatConfig
  ) => {
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

      return data.map((answer: object) => ({ ...answer, fromChatbot: true }));
    } catch (err) {
      console.log("Error with request");
      console.log(err.message);
      console.log(err.request);
      console.log(err);

      return {
        type: "simple-message",
        text:
          "Ich kann dir deine Frage gerade nicht beantworten. Bitte versuche es später nocheinmal.",
        fromChatbot: true,
      };
    }
  },
  async sendLinkedRequest(
    link: string,
    params: object,
    chatConfig: ChatConfig
  ) {
    try {
      const { data } = await axios.get(
        `${chatConfig.moduleConfig.connection.url}/${link}`,
        {
          timeout: 3500,
          params,
        }
      );
      return data;
    } catch (err) {
      Alert.alert(`send link "${link}" "failed, ${err.message}`);
    }
  },
};
