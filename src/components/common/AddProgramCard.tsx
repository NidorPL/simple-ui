import {
  Card,
  IconButton,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from "react-native-paper";
import React, { useState } from "react";
import styled from "styled-components/native";
import RNPickerSelect from "react-native-picker-select";
import { Program } from "./common-types";

export default function AddProgamCard({ programs }: { programs: Program[] }) {
  const [isSelectProgramModalOpen, setIsSelectProgramModalOpen] = useState(
    false
  );

  function addProgram() {
    setIsSelectProgramModalOpen(false);
  }

  return (
    <Card>
      <Card.Title title="Programm starten" />
      <Card.Content>
        <ProgramStartContainer>
          <IconButton
            icon="plus-circle"
            size={40}
            onPress={() => setIsSelectProgramModalOpen(true)}
          />
        </ProgramStartContainer>
      </Card.Content>
      <Portal>
        <Dialog
          visible={isSelectProgramModalOpen}
          onDismiss={() => {
            setIsSelectProgramModalOpen(false);
          }}
        >
          <Dialog.Title>Start a new program</Dialog.Title>
          <Dialog.Content>
            <RNPickerSelect
              onValueChange={() => {}}
              items={programs.map((program) => ({
                label: program.programConfig.name,
                value: program.programConfig.name,
              }))}
              placeholder={{ label: "Choose program.." }}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={addProgram}>Add Program</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Card>
  );
}

const ProgramStartContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
