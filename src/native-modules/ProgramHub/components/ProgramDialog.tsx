import React, { useState } from "react";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { ProgramConfig } from "../program-hub-types";

export const ProgramDialog = ({
  runningProgram,
  isModalOpen,
  closeModal,
  startProgram,
}: {
  runningProgram: ProgramConfig;
  isModalOpen: boolean;
  closeModal: any;
  startProgram: (programConfig: object) => void;
}) => {
  const [value, setValue] = useState(runningProgram.value);

  console.log("runningProgram");
  console.log(runningProgram);

  return (
    <Portal>
      <Dialog
        visible={isModalOpen}
        onDismiss={() => {
          closeModal();
        }}
      >
        <Dialog.Title>Laufendes Programm {runningProgram.title}</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label={runningProgram.inputs[0]}
            value={value}
            key={runningProgram.inputs[0]}
            onChangeText={(change) => {
              console.log("change");
              console.log(change);
              setValue(change);
            }}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => {}}>Programm Stoppen</Button>
          <Button onPress={() => {}}>Aktualiseren</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
