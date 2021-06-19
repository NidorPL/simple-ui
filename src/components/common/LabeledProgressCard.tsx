import React, { useContext } from "react";
import { Card, ProgressBar } from "react-native-paper";
import { LabelIconRow } from "./LabelIconRow";
import styled from "styled-components/native";
import { ProgramDialog } from "../../native-modules/ProgramHub/components/ProgramDialog";
import { ProgramHubProgramContext } from "../../native-modules/ProgramHub/context/program-hub-program-context";

export const LabeledProgressCard = () => {
  const { runningProgram } = useContext(ProgramHubProgramContext);
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

      <ProgramDialog
        isDialogOpen={isDialogOpen}
        closeDialog={() => {
          setIsDialogOpen(false);
        }}
      />
    </Card>
  );
};

const ProgramStartContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;
