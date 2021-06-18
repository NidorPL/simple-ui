import React from "react";
import styled from "styled-components/native";

export default function LabelDataMessage({ message }) {
  const { label, data } = message;

  return (
    <MessageContainer>
      <Label>{label}</Label>
      <Data>{data}</Data>
    </MessageContainer>
  );
}

const MessageContainer = styled.View`
  display: flex;
  background-color: #ffffff;

  padding: 10px 0px 10px 0px;
  margin: 5px 50px 15px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  text-align: center;
  border-radius: 15px;
  width: 85%;
`;

const Label = styled.Text`
  color: black;
  padding: 0px 10px 5px;
  font-weight: 400;
  font-size: 16px;
  margin-left: 8px;
`;

const Data = styled.Text`
  color: black;
  padding: 0px 10px 5px;
  font-weight: 500;
  font-size: 16px;
  margin-right: 10px;
`;
