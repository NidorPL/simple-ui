import React from "react";
import { LabeledProgressCard } from "../../../../components/common/LabeledProgressCard";
import { ProgramType } from "../../../../components/common/types";

export const OvenBakeProgram: ProgramType = {
  info: {
    name: "Bake",
  },
  View: (props) => {
    return (
      <LabeledProgressCard
        title="Backen..."
        label="200 °C"
        iconName="chef-hat"
        progress={0.3}
        {...props}
      />
    );
  },
};
