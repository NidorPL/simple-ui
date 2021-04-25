import React from "react";
import { Program } from "../../components/common/common-types";
import { LabeledProgressCard } from "../../components/common/LabeledProgressCard";
import { LabeledProgressInput } from "./labeled-progress-types";

export const LabeledProgressProgram: Program = {
  info: {
    programModule: "LabeledProgress",
  },

  View: (instanceConfig: LabeledProgressInput) => {
    // functions to fetch values

    return (
      <LabeledProgressCard
        title={instanceConfig.title}
        label="200 °C"
        iconName={instanceConfig.iconName}
        progress={0.3}
      />
    );
  },
};

// chef-hat
