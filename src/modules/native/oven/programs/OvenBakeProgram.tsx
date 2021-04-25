import React from "react";
import { LabeledProgressCard } from "../../../../components/common/LabeledProgressCard";
import { Program } from "../../../../components/common/common-types";

export const OvenBakeProgram: Program = {
  info: {
    name: "Bake",
    // requiredConnectionUrls: ["startUrl", "stopUrl", "statusUrl"]
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
