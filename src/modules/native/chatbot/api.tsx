import axios from "axios";
import { Alert, Platform } from "react-native";
import { ChatbotConfig, ChatbotMessage } from "./chatbot-types";
import { getMapper } from "../../custom-mappers/mapper-register";

interface ChatbotApi {
  loadFirstMessages(config: ChatbotConfig): ChatbotMessage[];
  sendMessage(
    messageInput: string,
    location: object,
    config: ChatbotConfig
  ): ChatbotMessage[];
}

export default {
  loadFirstMessages: async (config: ChatbotConfig) => {
    let mapper: ChatbotApi = defaultApi;

    if (config.mapper !== "default") {
      const customMapper = getMapper(config.mapper);
      if (customMapper.loadFirstMessages) {
        mapper = customMapper;
      }
    }

    return mapper.loadFirstMessages(config);
  },
  sendMessage: async (
    messageInput: string,
    location: object,
    config: ChatbotConfig
  ) => {
    let mapper: ChatbotApi = defaultApi;

    if (config.mapper !== "default") {
      mapper = getMapper(config.mapper);
    }

    return mapper.sendMessage(messageInput, location, config);
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

const defaultApi = {
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
  sendMessage: async (
    messageInput: string,
    location: object,
    config: ChatbotConfig
  ) => {
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

      return {
        type: "simple-message",
        text:
          "Ich kann dir deine Frage gerade nicht beantworten. Bitte versuche es später nocheinmal.",
      };
    }
  },
};