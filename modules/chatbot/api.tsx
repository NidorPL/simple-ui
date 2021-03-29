import axios from "axios";
import config from "./config";
import { Alert } from "react-native";

const api = {
  sendLinkedRequest: async (link, params) => {
    try {
      const { data } = await axios.get(`${config.connection.url}/${link}`, {
        timeout: 3500,
        params: {
          ...params,
        },
      });
      return data;
    } catch (err) {
      Alert.alert(`send link "${link}" "failed, ${err.message}`);
    }
  },
  loadFirstMessages: async () => {
    try {
      const { data } = await axios.get(`/chatbot-init`, {
        baseURL: config.connection.url,
        timeout: 3500,
        headers: { "Content-Type": "application/json" },
      });
      return data;
    } catch (err) {
      Alert.alert(err.message);
    }
  },
};

export default api;
