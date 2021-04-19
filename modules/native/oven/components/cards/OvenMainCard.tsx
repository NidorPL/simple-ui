import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Switch } from "react-native-paper";
import React from "react";

export default function OvenMainCard() {
  const [isChecked, setChecked] = React.useState(false);

  const toggleSwitch = (isSelected: boolean) => {
    if (!isSelected) {
      console.log("shutting down all programs...");
    }

    setChecked(isSelected);
  };

  return (
    <OptionContainer>
      <ChoiceText>{isChecked ? "On" : "Off"}</ChoiceText>
      <Switch
        value={isChecked}
        onValueChange={toggleSwitch}
        ios_backgroundColor="#0E81C4"
        trackColor={{ false: "#767577", true: "#99C6E2" }}
      />
    </OptionContainer>
  );
}

const OptionContainer = styled(View)`
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
