import React from "react";
import { Program } from "../../components/common/common-types";
import { LabeledProgressCard } from "../../components/common/LabeledProgressCard";
import { LabeledProgressInput } from "./labeled-progress-types";
import { useQuery, useQueryClient } from "react-query";
import { labeledProgressApi } from "./labeled-progress-api";

export const LabeledProgressProgram: Program = {
  info: {
    programModule: "LabeledProgress",
  },

  View: (instanceConfig: LabeledProgressInput) => {
    // functions to fetch values

    // get mapper

    const { isLoading: isLoadingStatus, data: statusData } = useQuery(
      "status" + instanceConfig.name,
      () =>
        labeledProgressApi.getStatus({
          url: instanceConfig.statusUrl,
        })
    );

    return (
      <LabeledProgressCard
        title={instanceConfig.title}
        label={isLoadingStatus ? "Loading..." : statusData.value}
        iconName={instanceConfig.iconName}
        progress={isLoadingStatus ? 0 : statusData.progress}
      />
    );
  },
};
