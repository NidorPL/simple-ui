import axios from "axios";
import { Alert } from "react-native";
import { ChatConfig, ChatMessage } from "./chatbot-types";

interface ChatbotApi {
  loadFirstMessages(config: ChatConfig): ChatMessage[];
  sendMessage(
    messageInput: string,
    location: object,
    config: ChatConfig
  ): ChatMessage[];
}

export const defaultChabotAPI = {
  loadFirstMessages: async (config: ChatConfig) => {
    console.log("config");
    console.log(config);
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
  sendMessage: async (
    messageInput: string,
    location: object,
    config: ChatConfig
  ) => {
    try {
      const { data } = await axios.get(`${config.connection.url}/chatbot`, {
        params: {
          request: `${messageInput}`,
          ...location,
        },
        timeout: 5000,
      });

      return data.map((answer) => ({ ...answer, fromChatbot: true }));
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
  // sendLinkedRequest: async (link, params) => {
  //   try {
  //     const { data } = await axios.get(`${config.connection.url}/${link}`, {
  //       timeout: 3500,
  //       params: {
  //         ...params,
  //       },
  //     });
  //     return data;
  //   } catch (err) {
  //     Alert.alert(`send link "${link}" "failed, ${err.message}`);
  //   }
  // },
};
