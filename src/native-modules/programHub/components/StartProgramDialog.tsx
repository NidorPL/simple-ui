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
  startProgram: () => void;
}) => {
  console.log("programToStart");
  console.log(programToStart);

  console.log("isEditProgramModalOpen");
  console.log(isEditProgramModalOpen);
  return (
    <Portal>
      <Dialog
        visible={isEditProgramModalOpen}
        onDismiss={() => {
          setIsEditProgramModalOpen(false);
        }}
      >
        <Dialog.Title>Start a new program</Dialog.Title>
        <Dialog.Content>
          {programToStart.inputs?.map((input: string) => {
            return <TextInput label={input} value={""} key={input} />;
          })}
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={startProgram}>Start Program</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
