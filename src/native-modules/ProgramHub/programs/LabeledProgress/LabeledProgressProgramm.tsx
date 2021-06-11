import React from "react";

import { LabeledProgressCard } from "../../../../components/common/LabeledProgressCard";

import { ProgramIndex, RunningProgramConfig } from "../../program-hub-types";

export const LabeledProgressProgram: ProgramIndex = {
  info: {
    programModule: "LabeledProgress",
  },

  View: ({ runningProgram }: { runningProgram: RunningProgramConfig }) => {
    return (
      <LabeledProgressCard
        title={runningProgram.title}
        label={runningProgram.value}
        iconName={runningProgram.iconName}
        progress={runningProgram.progress}
        onPress={() => {}}
      />
    );
  },
};
