import React from "react";
import { Card, Paragraph, ProgressBar } from "react-native-paper";
import { LabelIconRow } from "./LabelIconRow";
import styled from "styled-components/native";

export const LabeledProgressCard = ({
  title,
  label,
  iconName,
  progress,
}: {
  title: string;
  label: string;
  iconName: string;
  progress: number;
}) => {
  return (
    <Card>
      <Card.Title title={title} />
      <Card.Content>
        <ProgramStartContainer>
          <LabelIconRow label={label} iconName={iconName} />
        </ProgramStartContainer>
        <ProgressBar progress={progress} />
      </Card.Content>
    </Card>
  );
};

const ProgramStartContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
