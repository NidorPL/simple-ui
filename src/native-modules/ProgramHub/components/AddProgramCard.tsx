import {
  Card,
  IconButton,
  Button,
  Paragraph,
  Dialog,
  Portal,
  TextInput,
  Title,
  Subheading,
} from "react-native-paper";
import React, { useState } from "react";
import styled from "styled-components/native";
import RNPickerSelect from "react-native-picker-select";
import {
  ProgramIndex,
  ProgramWithView,
  RunningProgram,
  SupportedProgram,
} from "../program-hub-types";
import { StartProgramDialog } from "./StartProgramDialog";

export default function AddProgamCard({
  runningPrograms,
  supportedPrograms,
  startProgram,
}: {
  runningPrograms: ProgramWithView[];
  supportedPrograms: SupportedProgram[];
  startProgram: (programConfig: object) => void;
}) {
  const [isSelectProgramModalOpen, setIsSelectProgramModalOpen] = useState(
    false
  );
  const [programToStart, setProgramToStart] = useState({});

  const [isEditProgramModalOpen, setIsEditProgramModalOpen] = useState(false);

  const closeModals = () => {
    setIsSelectProgramModalOpen(false);
    setIsEditProgramModalOpen(false);
  };

  function findSupportedProgram(programName: string) {
    return (
      supportedPrograms.find(
        (supportedProgram) => supportedProgram.programName === programName
      ) || {}
    );
  }

  function editProgram(selectedProgramName: string) {
    setProgramToStart(findSupportedProgram(selectedProgramName));
    setIsEditProgramModalOpen(true);
  }

  const runningProgramNames = runningPrograms.map(
    (p) => p.runningProgram.programName
  );
  const runnablePrograms = supportedPrograms.filter((sP) => {
    return !runningProgramNames.includes(sP.programName);
  });

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
            {runnablePrograms.length === 0 && (
              <Subheading>No programs to start</Subheading>
            )}
            {runnablePrograms.length > 0 && (
              <RNPickerSelect
                onValueChange={editProgram}
                items={runnablePrograms.map((program) => ({
                  label: program.programName,
                  value: program.programName,
                }))}
                placeholder={{ label: "Choose program.." }}
              />
            )}
          </Dialog.Content>
        </Dialog>
      </Portal>
      <StartProgramDialog
        programToStart={programToStart}
        isEditProgramModalOpen={isEditProgramModalOpen}
        setIsEditProgramModalOpen={setIsEditProgramModalOpen}
        startProgram={startProgram}
        closeModals={closeModals}
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
