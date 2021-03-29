import React from "react";
import styled from "styled-components/native";

export default function SimpleMessage({ message }) {
  const { fromChatbot, text } = message;

  return (
    <Message fromChatbot={fromChatbot}>
      <MessageText fromChatbot={fromChatbot}>{text}</MessageText>
    </Message>
  );
}

const Message = styled.View`
  display: flex;
  background-color: ${(props) => (props.fromChatbot ? "#FFFFFF" : "#1081C4")};

  padding: 10px 0px 10px 0px;
  margin: 5px 50px 15px 15px;
  align-items: center;
  align-self: ${(props) => (props.fromChatbot ? "flex-start" : "flex-end")};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: ${(props) => (props.fromChatbot ? "15px" : "0px")};
  border-top-start-radius: ${(props) => (props.fromChatbot ? "0px" : "15px")};
`;

const MessageText = styled.Text`
  color: ${(props) => (props.fromChatbot ? "black" : "white")};
  padding: 0px 10px 5px;
`;
