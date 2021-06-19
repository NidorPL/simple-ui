import React, { useContext } from "react";
import styled from "styled-components/native";
import { ChatMessageContext } from "../../context/chat-message-context";

export default function InfoMessage() {
  const { message } = useContext(ChatMessageContext);

  const { text } = message;

  return (
    <Message>
      <MessageText>{text}</MessageText>
    </Message>
  );
}

const Message = styled.View`
  display: flex;
  background-color: #ffc904;

  padding: 10px 0px 10px 0px;
  margin: 5px 50px 15px 15px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-self: flex-start;
  border-radius: 15px;
  width: 85%;
`;

const MessageText = styled.Text`
  color: black;
  font-weight: 600;
  font-size: 14px;
  padding: 0px 10px 5px;
`;
