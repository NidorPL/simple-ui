import React from "react";

import { LabeledProgressCard } from "../../../../components/common/LabeledProgressCard";

import { ProgramIndex, RunningProgram } from "../../program-hub-types";

export const LabeledProgressProgram: ProgramIndex = {
  programName: "LabeledProgress",
  View: ({
    runningProgram,
    connection,
    refetchPrograms,
  }: {
    runningProgram: RunningProgram;
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
