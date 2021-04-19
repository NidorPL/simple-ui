import React from "react";
import { LabeledProgressCard } from "../../../../components/common/LabeledProgressCard";

export default function OvenBakeProgram() {
  return (
    <LabeledProgressCard
      title="Backen..."
      label="200 °C"
      iconName="chef-hat"
      progress={0.3}
    />
  );
}
