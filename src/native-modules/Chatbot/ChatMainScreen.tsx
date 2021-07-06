import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import {
  ScrollView,
  Platform,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import styled from "styled-components/native";
import { ChatbotHeader } from "./components/header/ChatbotHeader";
import { resolveMessageFromType } from "./message-register";
import { services } from "./services";
import { ChatMessage } from "./chatbot-types";
import { getImageSource } from "../../register";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Headline } from "react-native-paper";
import { allMessageTypes } from "./screen-messages-templates/all-message-types";
import { ChatConfigContext } from "./context/chat-config-context";
import { ChatMessageContext } from "./context/chat-message-context";
import { showcaseMessages } from "./screen-messages-templates/showcase-messages";

export const ChatMainScreen = ({}: {}) => {
  const { chatConfig, api } = useContext(ChatConfigContext);

  const [locationPermissionGranted, setLocationPermissionGranted] = useState(
    null
  );
  const [messageInput, setMessageInput] = useState("");
  const [conversationMessages, setConversationMessages] = useState<
    ChatMessage[]
  >([]);

  const isWeb = Platform.OS === "web";

  const scrollViewRef = useRef(null);

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

  const resetDefaultScreen = async () => {
    const initialMessages = await api.loadFirstMessages(chatConfig);
    setConversationMessages(initialMessages);
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

  function getLogoImage() {
    if (chatConfig.moduleConfig.headerType === "customImage") {
      const imageSource = getImageSource(
        chatConfig.moduleConfig.customHeaderImage
      );
      return <LogoImage source={imageSource} />;
    } else {
      return (
        <Fragment>
          <Logo name={chatConfig.moduleConfig.headerOptions.icon} size={40} />
          <LogoText>{chatConfig.moduleConfig.headerOptions.title}</LogoText>
        </Fragment>
      );
    }
  }

  console.log("conversationMessages");
  console.log(conversationMessages);

  return (
    <Fragment>
      <ChatbotHeader
        resetDefaultScreen={resetDefaultScreen}
        logo={getLogoImage}
      />
      <KeyboardAvoid>
        <MessageContainer>
          <StyledScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => {
              // @ts-ignore
              scrollViewRef.current.scrollToEnd({ animated: true });
            }}
          >
            {[...showcaseMessages, ...conversationMessages].map(
              (message, index) => {
                const sendLinkedRequest = async (params: string | object) => {
                  if (message.linkedRequest) {
                    if (typeof params === "string") {
                      const newMessages = await api.sendLinkedRequest(
                        params,
                        {},
                        chatConfig
                      );
                      if (newMessages) {
                        appendCovMessages(newMessages);
                      }
                    } else {
                      const newMessages = await api.sendLinkedRequest(
                        message.linkedRequest,
                        params,
                        chatConfig
                      );
                      if (newMessages) {
                        appendCovMessages(newMessages);
                      }
                    }
                  }
                };

                return (
                  <ChatMessageContext.Provider
                    value={{ message, sendLinkedRequest }}
                    key={index}
                  >
                    {resolveMessageFromType(message, appendCovMessages, index)}
                  </ChatMessageContext.Provider>
                );
              }
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

const LogoImage = styled.Image`
  margin-left: 8px;
  width: 250px;
  height: 60px;
`;

const Logo = styled(MaterialCommunityIcons)`
  margin-left: 8px;
`;

const LogoText = styled(Headline)`
  margin-left: 8px;
  margin-top: 0px;
  width: 200px;
  height: 20px;
  border-radius: 15px;
`;
