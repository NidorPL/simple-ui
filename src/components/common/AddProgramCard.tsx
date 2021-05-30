import {
  Card,
  IconButton,
  Button,
  Paragraph,
  Dialog,
  Portal,
  TextInput,
} from "react-native-paper";
import React, { useState } from "react";
import styled from "styled-components/native";
import RNPickerSelect from "react-native-picker-select";
import { SupportedProgram } from "../../native-modules/programHub/program-hub-types";
import { StartProgramDialog } from "../../native-modules/programHub/components/StartProgramDialog";

export default function AddProgamCard({
  supportedPrograms,
}: {
  supportedPrograms: SupportedProgram[];
}) {
  const [isSelectProgramModalOpen, setIsSelectProgramModalOpen] = useState(
    false
  );
  const [programToStart, setProgramToStart] = useState({});

  const [isEditProgramModalOpen, setIsEditProgramModalOpen] = useState(false);

  function startProgram() {
    setIsSelectProgramModalOpen(false);
  }

  // lade Daten zum Programm
  // Kreiere Eingabefelder

  function findSupportedProgram(programName: string) {
    return (
      supportedPrograms.find(
        (supportedProgram) => supportedProgram.programName === programName
      ) || {}
    );
  }

  function editProgram(selectedProgramName: string) {
    console.log("event");
    console.log(selectedProgramName);
    setProgramToStart(findSupportedProgram(selectedProgramName));
    setIsEditProgramModalOpen(true);
  }

  console.log("got programs");
  console.log(supportedPrograms);

  console.log("programToStart");
  console.log(programToStart);

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
              onValueChange={editProgram}
              items={supportedPrograms.map((program) => ({
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
      <StartProgramDialog
        programToStart={programToStart}
        isEditProgramModalOpen={isEditProgramModalOpen}
        setIsEditProgramModalOpen={setIsEditProgramModalOpen}
        startProgram={startProgram}
      />
    </Card>
  );
}

const ProgramStartContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
