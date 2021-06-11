import React from "react";

import { LabeledProgressCard } from "../../../../components/common/LabeledProgressCard";

import { ProgramIndex, RunningProgramConfig } from "../../program-hub-types";

export const LabeledProgressProgram: ProgramIndex = {
  programName: "LabeledProgress",
  View: ({
    runningProgram,
    connection,
    refetchPrograms,
  }: {
    runningProgram: RunningProgramConfig;
    connection: object;
    refetchPrograms: () => void;
  }) => {
    return (
      <LabeledProgressCard
        runningProgram={runningProgram}
        connection={connection}
        refetchPrograms={refetchPrograms}
      />
    );
  },
};
