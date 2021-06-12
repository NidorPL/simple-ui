import React, { useState } from "react";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";

export const StartProgramDialog = ({
  programToStart,
  isEditProgramModalOpen,
  setIsEditProgramModalOpen,
  startProgram,
}: {
  programToStart: object;
  isEditProgramModalOpen: boolean;
  setIsEditProgramModalOpen: any;
  startProgram: (programConfig: object) => void;
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
          {programToStart.inputs?.map((input: string) => {
            return (
              <TextInput
                label={input}
                value={inputs[input]}
                key={input}
                onChangeText={(change) => {
                  console.log("change");
                  console.log(change);
                  setInputs({ ...inputs, [input]: change });
                }}
              />
            );
          })}
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() =>
              startProgram({
                ...inputs,
                programName: programToStart.programName,
              })
            }
          >
            Start Program
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};