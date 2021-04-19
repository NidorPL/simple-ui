import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const LabelIconRow = ({
  label,
  iconName,
}: {
  label: string;
  iconName: string;
}) => {
  return (
    <LabelValueContainer>
      <Label>{label}</Label>
      <MaterialCommunityIcons name={iconName} size={35} />
    </LabelValueContainer>
  );
};

const Label = styled(Paragraph)`
  font-size: 20px;
  margin-right: 10px;
  margin-top: 10px;
`;

const LabelValueContainer = styled(View)`
  display: flex;
  flex-direction: row;
`;
