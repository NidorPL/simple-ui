import React from "react";
import { Card, ProgressBar } from "react-native-paper";
import { LabelIconRow } from "./LabelIconRow";
import styled from "styled-components/native";
import { ProgramDialog } from "../../native-modules/ProgramHub/components/ProgramDialog";
import { RunningProgram } from "../../native-modules/ProgramHub/program-hub-types";

export const LabeledProgressCard = ({
  runningProgram,
  connection,
  refetchPrograms,
}: {
  runningProgram: RunningProgram;
  connection: object;
}) => {
  const {
    programName,
    value,
    valueSuffix,
    iconName,
    progress,
  } = runningProgram;

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <Card onPress={() => setIsDialogOpen(true)}>
      <Card.Title title={programName} />
      <Card.Content>
        <ProgramStartContainer>
          <LabelIconRow label={value + " " + valueSuffix} iconName={iconName} />
        </ProgramStartContainer>
        <ProgressBar progress={progress} />
      </Card.Content>
      {isDialogOpen && (
        <ProgramDialog
          runningProgram={runningProgram}
          isModalOpen={isDialogOpen}
          closeModal={() => {
            setIsDialogOpen(false);
          }}
          updateProgram={() => {}}
          connection={connection}
          refetchPrograms={refetchPrograms}
        />
      )}
    </Card>
  );
};

const ProgramStartContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
