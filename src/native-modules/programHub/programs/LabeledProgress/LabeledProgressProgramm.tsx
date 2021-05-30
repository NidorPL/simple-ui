import React from "react";

import { LabeledProgressCard } from "../../../../components/common/LabeledProgressCard";

import { ProgramWithView, RunningProgramConfig } from "../../program-hub-types";

export const LabeledProgressProgram: ProgramWithView = {
  info: {
    programModule: "LabeledProgress",
  },

  View: ({ runningProgram }: { runningProgram: RunningProgramConfig }) => {
    console.log("runningProgram");
    console.log(runningProgram);

    return (
      <LabeledProgressCard
        title={runningProgram.title}
        label={runningProgram.value}
        iconName={runningProgram.iconName}
        progress={runningProgram.progress}
      />
    );
  },
};
