import React, { useState } from "react";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { ProgramConfig } from "../program-hub-types";
import { getAPI } from "../../../register";
import { defaultProgramHubApi } from "../defaultProgramHubApi";
import { defaultLabeledProgressApi } from "../programs/LabeledProgress/default-labeled-progress-api";

export const ProgramDialog = ({
  runningProgram,
  isModalOpen,
  closeModal,
  startProgram,
  connection,
  refetchPrograms,
}: {
  runningProgram: ProgramConfig;
  isModalOpen: boolean;
  closeModal: any;
  updateProgram: (programConfig: object) => void;
  connection: object;
}) => {
  const [value, setValue] = useState(runningProgram.value);

  console.log("runningProgram");
  console.log(runningProgram);

  console.log("connection");
  console.log(connection);

  const api = getAPI(runningProgram.customApi, defaultLabeledProgressApi);

  const stopProgram = async () => {
    console.log("stoppingg");
    await api.stopProgram({
      programName: runningProgram.programName,
      connection,
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
              console.log("change");
              console.log(change);
              setValue(change);
            }}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={stopProgram}>Programm Stoppen</Button>
          <Button onPress={() => {}}>Aktualiseren</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
