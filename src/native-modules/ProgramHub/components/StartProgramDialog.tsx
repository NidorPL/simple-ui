import React, { useState } from "react";
import { Button, Dialog, Portal, TextInput, Text } from "react-native-paper";
import { SupportedProgram } from "../program-hub-types";

export const StartProgramDialog = ({
  programToStart,
  isEditProgramModalOpen,
  setIsEditProgramModalOpen,
  startProgram,
  closeModals,
}: {
  programToStart: SupportedProgram;
  isEditProgramModalOpen: boolean;
  setIsEditProgramModalOpen: any;
  startProgram: (programConfig: object) => void;
  closeModals: () => void;
}) => {
  const [inputs, setInputs] = useState({});

  return (
    <Portal>
      <Dialog
        visible={isEditProgramModalOpen}
        onDismiss={() => {
          setIsEditProgramModalOpen(false);
        }}
      >
        <Dialog.Title>Start {programToStart.programName}</Dialog.Title>
        <Dialog.Content>
          {programToStart?.inputs?.length === 0 && (
            <Text>Programm kann gestartet werden</Text>
          )}
          {programToStart.inputs?.map((input: string) => {
            return (
              <TextInput
                label={input}
                value={inputs[input]}
                key={input}
                onChangeText={(change) => {
                  setInputs({ ...inputs, [input]: change });
                }}
              />
            );
          })}
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              closeModals();
              startProgram({
                ...inputs,
                programName: programToStart.programName,
              });
            }}
          >
            Start Program
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
