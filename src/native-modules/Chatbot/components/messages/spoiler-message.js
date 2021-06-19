import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import plusIcon from "../../images/plus-icon.png";
import minusIcon from "../../images/minus-icon.png";
import { ChatMessageContext } from "../../context/chat-message-context";

export default function SpoilerMessage() {
  const { message } = useContext(ChatMessageContext);

  const { headline, text } = message;

  const [isTextOpen, setIsTextOpen] = useState(false);

  const toggleText = () => {
    setIsTextOpen(!isTextOpen);
  };

  return (
    <MessageContainer>
      <Headline>
        <Label>{headline}</Label>
        <IconContainer onPress={toggleText} underlayColor="lightgrey">
          <IconWrapper>
            {!isTextOpen && <OpeningIcon source={plusIcon} />}
            {isTextOpen && <OpeningIcon source={minusIcon} />}
          </IconWrapper>
        </IconContainer>
      </Headline>
      {isTextOpen && <Text>{text}</Text>}
    </MessageContainer>
  );
}

const MessageContainer = styled.View`
  display: flex;
  background-color: #ffffff;
  border-radius: 15px;
  width: 85%;
  margin: 5px 50px 15px 15px;
  flex-direction: column;
`;

const Headline = styled.View`
  padding: 10px 0px 10px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  text-align: center;
  width: 100%;
`;

const Text = styled.Text`
  color: black;
  padding: 0px 10px 5px;
`;

const Label = styled.Text`
  color: black;
  padding: 0px 10px 5px;
  font-size: 17px;
  margin-left: 8px;
  font-weight: bold;
`;

const IconContainer = styled.TouchableHighlight`
  margin-right: 15px;
`;

const IconWrapper = styled.View``;

const OpeningIcon = styled.Image`
  height: 25px;
  width: 25px;
`;
