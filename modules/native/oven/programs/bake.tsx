import React from "react";

import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import LabelIconRow from "../../../../components/common/LabelIconRow";

export default function OvenBakeProgram() {
  return (
    <Card>
      <Card.Title title="Backen..." />
      <Card.Content>
        <ProgramStartContainer>
          <StyledParagraph>200 °C</StyledParagraph>
          <LabelIconRow label="200 °C" iconName="stove" />
        </ProgramStartContainer>
      </Card.Content>
    </Card>
  );
}

const ProgramStartContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 20px;
`;
