import React, { useContext } from "react";
import styled from "styled-components/native";
import { ChatMessageContext } from "../../context/chat-message-context";

export default function SimpleMessage({}) {
  const { message } = useContext(ChatMessageContext);

  return (
    <Message fromChatbot={message.fromChatbot}>
      <MessageText fromChatbot={message.fromChatbot}>
        {message.text}
      </MessageText>
    </Message>
  );
}

const Message = styled.View`
  display: flex;
  background-color: ${(props) => (props.fromChatbot ? "#FFFFFF" : "#1081C4")};

  margin: 15px 15px 5px 15px;
  padding: 4px;
  align-items: center;
  align-self: ${(props) => (props.fromChatbot ? "flex-start" : "flex-end")};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: ${(props) => (props.fromChatbot ? "15px" : "0px")};
  border-top-start-radius: ${(props) => (props.fromChatbot ? "0px" : "15px")};

  max-width: 95%;
  flex-direction: row;
`;

const MessageText = styled.Text`
  color: ${(props) => (props.fromChatbot ? "black" : "white")};
  padding: 5px 10px 5px;
  max-width: 100%;
  overflow: hidden;
  text-align: center;
  flex-wrap: wrap;
`;
