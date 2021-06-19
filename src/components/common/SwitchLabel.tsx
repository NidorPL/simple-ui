import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Switch } from "react-native-paper";
import React from "react";

export default function SwitchLabel({ isOn }: { isOn: boolean }) {
  const toggleSwitch = (isSelected: boolean) => {
    if (!isSelected) {
      console.log("shutting down all programs...");
    }
  };

  return (
    <SwitchContainer>
      <ChoiceText>{isOn ? "On" : "Off"}</ChoiceText>
      <Switch value={isOn} onValueChange={toggleSwitch} />
    </SwitchContainer>
  );
}

const SwitchContainer = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
`;

const ChoiceText = styled(Text)`
  color: black;
  padding: 0px 10px 5px;
  font-weight: 500;
  margin-left: 10px;
`;
