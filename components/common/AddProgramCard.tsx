import { Card, IconButton } from "react-native-paper";
import React from "react";
import styled from "styled-components/native";

export default function AddProgamCard() {
  return (
    <Card>
      <Card.Title title="Programm starten" />
      <Card.Content>
        <ProgramStartContainer>
          <IconButton
            icon="plus-circle"
            size={40}
            onPress={() => console.log("Pressed")}
          />
        </ProgramStartContainer>
      </Card.Content>
    </Card>
  );
}

/*

    Modal mit Programmauswahl
 */

const ProgramStartContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
