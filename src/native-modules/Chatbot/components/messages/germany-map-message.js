import React, { useContext } from "react";
import styled from "styled-components/native";
import GermanyMapSvg from "../../SVGs/germanyMapSvg";
import { ChatMessageContext } from "../../context/chat-message-context";

export default function GermanyMapMessage({}) {
  const { message } = useContext(ChatMessageContext);

  const { selectedState, stateColor } = message;

  return (
    <Message>
      <GermanyMapSvg selectedState={selectedState} stateColor={stateColor} />
    </Message>
  );
}

const Message = styled.View`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: ${(props) => (props.fromChatbot ? "#FFFFFF" : "#1081C4")};

  padding: 10px 0px 10px 0px;
  margin: 5px 50px 15px 15px;
  align-items: center;
  align-self: flex-end;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
