import React, { useState } from "react";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { RunningProgram } from "../program-hub-types";
import { getAPI } from "../../../register";
import { defaultLabeledProgressApi } from "../programs/LabeledProgress/default-labeled-progress-api";

export const ProgramDialog = ({
  runningProgram,
  isModalOpen,
  closeModal,
  connection,
  refetchPrograms,
}: {
  runningProgram: RunningProgram;
  isModalOpen: boolean;
  closeModal: any;
  updateProgram: (programConfig: object) => void;
  connection: object;
  refetchPrograms: any;
}) => {
  const [value, setValue] = useState(runningProgram.value);

  const api = getAPI(runningProgram.customApi, defaultLabeledProgressApi);

  const stopProgram = async () => {
    await api.stopProgram({
      programName: runningProgram.programName,
      connection,
    });
    closeModal();
    refetchPrograms();
  };

  const updateProgram = async () => {
    await api.updateProgram({
      connection,
      programName: runningProgram.programName,
      newValue: value,
    });
    closeModal();
    refetchPrograms();
  };

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
              setValue(change);
            }}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={stopProgram}>Programm Stoppen</Button>
          <Button onPress={updateProgram}>Aktualiseren</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
