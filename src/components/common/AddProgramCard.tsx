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

export default function AddProgamCard({ programs }: { programs: any }) {
  const [isSelectProgramModalOpen, setIsSelectProgramModalOpen] = useState(
    false
  );

  function startProgram() {
    setIsSelectProgramModalOpen(false);
  }

  console.log("got programs");
  console.log(programs);

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
                label: program.programName,
                value: program.programName,
              }))}
              placeholder={{ label: "Choose program.." }}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={startProgram}>Start Program</Button>
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
