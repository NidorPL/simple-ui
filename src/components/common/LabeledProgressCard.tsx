import React from "react";
import {
  Card,
  Paragraph,
  ProgressBar,
  TouchableRipple,
} from "react-native-paper";
import { LabelIconRow } from "./LabelIconRow";
import styled from "styled-components/native";
import { Pressable } from "react-native";
import { ProgramDialog } from "../../native-modules/ProgramHub/components/ProgramDialog";
import { RunningProgramConfig } from "../../native-modules/ProgramHub/program-hub-types";

export const LabeledProgressCard = ({
  runningProgram,
}: {
  runningProgram: RunningProgramConfig;
}) => {
  const { title, value, valueSuffix, iconName, progress } = runningProgram;

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <Card onPress={() => setIsDialogOpen(true)}>
      <Card.Title title={title} />
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
          startProgram={() => {}}
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
