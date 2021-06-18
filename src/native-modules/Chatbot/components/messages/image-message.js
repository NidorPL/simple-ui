import React from "react";
import styled from "styled-components/native";

export default function ImageMessage({ message, sendLinkedRequest }) {
  const { headline, img, imgSide, text } = message;

  return (
    <MessageWrapper onPress={() => sendLinkedRequest()} underlayColor="lightgrey">
      <ImageMessageWrapper onPress={() => sendLinkedRequest()}>
        {imgSide === "left" && <Image source={{ uri: img }} />}
        <TextContainer>
          <Headline fromChatbot>{headline}</Headline>
          <MessageText fromChatbot>{text}</MessageText>
        </TextContainer>
        {imgSide === "right" && <Image source={{ uri: img }} />}
      </ImageMessageWrapper>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.TouchableHighlight`
  border-radius: 15px;
  padding: 0px;
  margin: 5px 60px 15px 15px;
  max-width: 100%;
`;

const ImageMessageWrapper = styled.View`
  display: flex;
  background-color: #ffffff;

  flex-direction: row;

  align-items: center;
  align-self: flex-start;
  border-radius: 15px;

  max-width: 100%;
  padding: 0px;
`;

const Image = styled.Image`
  width: 80px;
  height: 100%;

  max-width: 70px;
  max-height: 70px;

  border-radius: 15px;
`;

const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 5px;

  width: 80%;
`;

const Headline = styled.Text`
  color: ${(props) => (props.fromChatbot ? "black" : "white")};
  font-size: 20px;
  font-weight: bold;
`;

const MessageText = styled.Text`
  color: ${(props) => (props.fromChatbot ? "black" : "white")};
`;
