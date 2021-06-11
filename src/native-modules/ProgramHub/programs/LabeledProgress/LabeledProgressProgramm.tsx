import React from "react";

import { LabeledProgressCard } from "../../../../components/common/LabeledProgressCard";

import { ProgramIndex, RunningProgramConfig } from "../../program-hub-types";

export const LabeledProgressProgram: ProgramIndex = {
  programName: "LabeledProgress",
  View: ({ runningProgram }: { runningProgram: RunningProgramConfig }) => {
    return <LabeledProgressCard runningProgram={runningProgram} />;
  },
};
