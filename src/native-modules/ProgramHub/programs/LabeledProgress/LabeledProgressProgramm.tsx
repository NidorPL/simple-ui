import React from "react";

import { LabeledProgressCard } from "../../../../components/common/LabeledProgressCard";

import { ProgramIndex } from "../../program-hub-types";

export const LabeledProgressProgram: ProgramIndex = {
  programName: "LabeledProgress",
  View: () => {
    return <LabeledProgressCard />;
  },
};
