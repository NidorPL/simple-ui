import React from "react";
import { View } from "react-native";
import SimpleMessage from "./components/messages/simple-message";
import ChartMessage from "./components/messages/chart-message";
import ImageMessage from "./components/messages/image-message";
import GermanyMapMessage from "./components/messages/germany-map-message";
import InfoMessage from "./components/messages/info-message";
import ImageMessageOverflowing from "./components/messages/image-message-overflowing";
import MultiCheckboxMessage from "./components/messages/multi-checkbox-message";
import LabelDataMessage from "./components/messages/label-data-message";
import SpoilerMessage from "./components/messages/spoiler-message";
import styled from "styled-components/native";
import SingleCheckboxMessage from "./components/messages/single-checkbox-message";
import { ChatbotApi, ChatConfig, ChatMessage } from "./chatbot-types";

export function resolveMessageFromType(
  message: ChatMessage,
  appendCovMessages: (messages: ChatMessage[]) => void,
  messageListIndex: number,
  api: ChatbotApi,
  chatConfig: ChatConfig
) {
  const { type, linkedRequest } = message;

  const resolveMessage = (type) => {
    switch (type) {
      case "simple-message":
        return <SimpleMessage message={message} />;
      case "chart-message":
        return <ChartMessage message={message} />;
      case "label-data-message":
        return <LabelDataMessage message={message} />;
      case "image-message":
        return <ImageMessage message={message} />;
      case "image-message-overflowing":
        return <ImageMessageOverflowing message={message} />;
      case "germany-map-message":
        return <GermanyMapMessage message={message} />;
      case "info-message":
        return <InfoMessage message={message} />;
      case "single-checkbox-message":
        return <SingleCheckboxMessage message={message} />;
      case "multi-checkbox-message":
        return <MultiCheckboxMessage message={message} />;
      case "spoiler-message":
        return <SpoilerMessage message={message} />;
    }
  };

  return (
    <MessageWrapper
      underlayColor="lightgrey"
      key={"message" + messageListIndex}
    >
      <View>{resolveMessage(type)}</View>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.View`
  border-radius: 15px;
  padding: 0px;
`;
