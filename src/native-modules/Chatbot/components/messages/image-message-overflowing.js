import React, { useContext } from "react";
import styled from "styled-components/native";
import { ChatMessageContext } from "../../context/chat-message-context";

export default function ImageMessageOverflowing() {
  const { message } = useContext(ChatMessageContext);

  const { img, imgSide, text } = message;

  return (
    <ImageMessageWrapper fromChatbot>
      {imgSide === "left" && <Image source={{ uri: img }} />}
      <MessageContainer>
        <MessageText fromChatbot>{text}</MessageText>
      </MessageContainer>
      {imgSide === "right" && <Image source={{ uri: img }} />}
    </ImageMessageWrapper>
  );
}

const ImageMessageWrapper = styled.View`
  display: flex;
  background-color: #ffffff;

  flex-direction: row;

  margin: 5px 50px 15px 15px;
  align-items: center;
  align-self: flex-start;
  border-radius: 15px;
  padding: 0px;

  max-width: 100%;
`;

const Image = styled.Image`
  width: 80px;
  height: 120%;
  max-width: 70px;
  max-height: 70px;

  border-radius: 15px;
  margin-bottom: 9%;

  margin-top: 20px;
`;

const MessageContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 5px;

  width: 77%;
`;

const MessageText = styled.Text`
  color: black;
  font-weight: 500;
  margin-left: 10px;
`;
