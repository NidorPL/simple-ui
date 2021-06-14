import React, { Fragment, useState, useRef, useEffect } from "react";
import {
  ScrollView,
  Platform,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import styled from "styled-components/native";
import { Header } from "./components/header/header";
import { resolveMessageFromType } from "./message-resolver";
import { services } from "./services";
import { ChatbotApi, ChatConfig, ChatMessage } from "./chatbot-types";
import { defaultChabotAPI } from "./default-chatbot-api";

export const ChatMainScreen = ({
  chatConfig,
  customApi,
}: {
  chatConfig: ChatConfig;
  customApi?: ChatbotApi;
}) => {
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(
    null
  );
  const [messageInput, setMessageInput] = useState("");
  const [conversationMessages, setConversationMessages] = useState<
    ChatMessage[]
  >([]);

  const isWeb = Platform.OS === "web";

  const scrollViewRef = useRef(null);

  let api = customApi || defaultChabotAPI;

  useEffect(() => {
    loadFirstMessages();
  }, []);

  async function loadFirstMessages() {
    const initialMessages = await api.loadFirstMessages(chatConfig);
    appendCovMessages(initialMessages);
  }

  const appendCovMessages = (messages: ChatMessage[]) => {
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
      chatConfig
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
      <Header></Header>
      <KeyboardAvoid>
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
              // @ts-ignore
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
