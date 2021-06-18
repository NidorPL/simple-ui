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
import { defaultChabotAPI } from "./default-chatbot-api";
import SingleCheckboxMessage from "./components/messages/single-checkbox-message";

export function resolveMessageFromType(
  message,
  appendCovMessages,
  messageListIndex
) {
  const { type, linkedRequest } = message;

  const sendLinkedRequest = async (params) => {
    if (linkedRequest) {
      if (typeof params === "string") {
        const newMessages = await defaultChabotAPI.sendLinkedRequest(params);
        if (newMessages) {
          appendCovMessages(newMessages);
        }
      } else {
        const newMessages = await defaultChabotAPI.sendLinkedRequest(
          linkedRequest,
          params
        );
        if (newMessages) {
          appendCovMessages(newMessages);
        }
      }
    }
  };

  const resolveMessage = (type) => {
    switch (type) {
      case "simple-message":
        return (
          <SimpleMessage
            message={message}
            sendLinkedRequest={sendLinkedRequest}
          />
        );
      case "chart-message":
        return (
          <ChartMessage
            message={message}
            sendLinkedRequest={sendLinkedRequest}
          />
        );
      case "label-data-message":
        return (
          <LabelDataMessage
            message={message}
            sendLinkedRequest={sendLinkedRequest}
          />
        );
      case "image-message":
        return (
          <ImageMessage
            message={message}
            sendLinkedRequest={sendLinkedRequest}
          />
        );
      case "image-message-overflowing":
        return (
          <ImageMessageOverflowing
            message={message}
            sendLinkedRequest={sendLinkedRequest}
          />
        );
      case "germany-map-message":
        return (
          <GermanyMapMessage
            message={message}
            sendLinkedRequest={sendLinkedRequest}
          />
        );
      case "info-message":
        return (
          <InfoMessage
            message={message}
            sendLinkedRequest={sendLinkedRequest}
          />
        );
      case "single-checkbox-message":
        return (
          <SingleCheckboxMessage
            message={message}
            sendLinkedRequest={sendLinkedRequest}
          />
        );
      case "multi-checkbox-message":
        return (
          <MultiCheckboxMessage
            message={message}
            sendLinkedRequest={sendLinkedRequest}
          />
        );
      case "spoiler-message":
        return (
          <SpoilerMessage
            message={message}
            sendLinkedRequest={sendLinkedRequest}
          />
        );
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
