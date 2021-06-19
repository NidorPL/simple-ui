import React, { useContext, useState } from "react";
import { Button, Dialog, Portal, TextInput } from "react-native-paper";
import { RunningProgram } from "../program-hub-types";
import { getAPI } from "../../../register";
import { defaultLabeledProgressApi } from "../programs/LabeledProgress/default-labeled-progress-api";
import { ProgramHubProgramContext } from "../context/program-hub-program-context";

export const ProgramDialog = ({
  isDialogOpen,
  closeDialog,
}: {
  isDialogOpen: boolean;
  closeDialog: any;
}) => {
  const { runningProgram, refetchPrograms, programConfig } = useContext(
    ProgramHubProgramContext
  );

  const [value, setValue] = useState(runningProgram.value);

  const api = getAPI(runningProgram.customApi, defaultLabeledProgressApi);

  const stopProgram = async () => {
    await api.stopProgram({
      programName: runningProgram.programName,
      connection: programConfig.connection,
    });
    closeDialog();
    refetchPrograms();
  };

  const updateProgram = async () => {
    await api.updateProgram({
      programName: runningProgram.programName,
      newValue: value,
      connection: programConfig.connection,
    });
    closeDialog();
    refetchPrograms();
  };

  return (
    <Portal>
      <Dialog
        visible={isDialogOpen}
        onDismiss={() => {
          closeDialog();
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
