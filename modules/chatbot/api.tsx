import axios from "axios";
import config from "./config";
import { Alert, Platform } from "react-native";

const isWeb = Platform.OS === "web";

const api = {
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
  loadFirstMessages: async (url: string) => {
    try {
      const { data } = await axios.get(`/chatbot-init`, {
        baseURL: url,
        timeout: 3500,
        headers: { "Content-Type": "application/json" },
      });
      return data;
    } catch (err) {
      Alert.alert(err.message);
    }
  },
  sendMessage: async (messageInput: string, location: object, url: string) => {
    try {
      const { data } = await axios.get(`${url}/chatbot`, {
        params: {
          request: `${messageInput}`,
          ...location,
        },
        timeout: 3500,
      });

      return data;
    } catch (err) {
      console.log("Error with request");
      console.log(err.request);

      if (isWeb) {
        alert(err.message);
      } else {
        Alert.alert(err.message);
      }
    }

    return [];
  },
};

export default api;
