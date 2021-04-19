import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LabelIconRow(label: string, iconName: string) {
  console.log(1);
  console.log(label);
  console.log(iconName);
  return (
    <LabelValueContainer>
      <Paragraph>{"label"}</Paragraph>
      <MaterialCommunityIcons name={iconName} size={35} />
    </LabelValueContainer>
  );
}

const LabelValueContainer = styled(View)`
  display: flex;
`;
