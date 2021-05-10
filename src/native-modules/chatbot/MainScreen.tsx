import React, { Fragment, useState, useRef, useEffect } from "react";
import {
  ScrollView,
  Platform,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import styled from "styled-components/native";
import ChatbotHeader from "./components/header/header";
import { resolveMessageFromType } from "./message-resolver";
import { defaultChabotAPI } from "./default-chatbot-api";
import { services } from "./services";
import { ChatbotConfig, ChatbotMessage } from "./chatbot-types";
import { getAPI } from "../../registers/api-register";

export const ChatMainScreen = (config: ChatbotConfig) => {
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(
    null
  );
  const [messageInput, setMessageInput] = useState("");
  const [conversationMessages, setConversationMessages] = useState([]);

  const isWeb = Platform.OS === "web";

  const scrollViewRef = useRef(null);

  const api = getAPI(config.mapper, defaultChabotAPI);

  useEffect(() => {
    loadFirstMessages();
  }, []);

  async function loadFirstMessages() {
    const initialMessages = await api.loadFirstMessages(config);
    appendCovMessages(initialMessages);
  }

  const appendCovMessages = (messages: ChatbotMessage[]) => {
    setConversationMessages([...conversationMessages, ...messages]);
  };

  const resetMessageInput = () => {
    setMessageInput("");
  };

  const sendMessage = async () => {
    const location = await services.getLocation(
      locationPermissionGranted,
      setLocationPermissionGranted
    );

    const chatbotAnswers = await api.sendMessage(
      messageInput,
      location,
      config
    );

    if (chatbotAnswers.length > 0 && typeof chatbotAnswers[0] !== "object") {
      Alert.alert("No valid json received \n" + chatbotAnswers);
    }
    appendCovMessages([
      {
        type: "simple-message",
        text: messageInput,
        fromChatbot: false,
      },
      ...chatbotAnswers,
    ]);

    resetMessageInput();
  };

  return (
    <Fragment>
      <ChatbotHeader></ChatbotHeader>
      <KeyboardAvoid behavior={Platform.OS === "ios" ? "padding" : null}>
        <MessageContainer>
          <StyledScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => {
              scrollViewRef.current.scrollToEnd({ animated: true });
            }}
          >
            {conversationMessages.map((message, index) =>
              resolveMessageFromType(message, appendCovMessages, index)
            )}
          </StyledScrollView>
          <ChatInputWrapper>
            <ChatInput
              placeholder={"Schreiben Sie eine Nachricht"}
              onChangeText={(text) => setMessageInput(text)}
              value={messageInput}
              onSubmitEditing={sendMessage}
              style={isWeb && { outline: "none" }}
            />
            <SendButtonWrapper onPress={sendMessage}>
              <SendButton source={require("./images/continue_icon.png")} />
            </SendButtonWrapper>
          </ChatInputWrapper>
        </MessageContainer>
      </KeyboardAvoid>
    </Fragment>
  );
};

const KeyboardAvoid = styled(KeyboardAvoidingView)`
  flex: 1;
`;

const MessageContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 30px;
  background-color: #7db4d8;
  align-items: center;
  justify-content: space-around;
`;

const StyledScrollView = styled(ScrollView)`
  width: 100%;
  height: 100%;
`;

const ChatInputWrapper = styled.View`
  width: 95%;

  display: flex;
  flex-direction: row;

  justify-content: space-around;

  background-color: white;
  border-radius: 30px;

  margin-top: 5px;
  padding: 5px;
  margin-bottom: 20px;
`;

const ChatInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
`;

const SendButtonWrapper = styled.TouchableHighlight``;

const SendButton = styled.Image`
  height: 34px;
  width: 34px;
  align-self: center;
`;
