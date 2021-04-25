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

    const api = labeledProgressApi; // or mapper

    const {
      isLoading: isLoadingStatus,
      data: statusData,
      error: isStatusErrored,
    } = useQuery("status" + instanceConfig.name, () =>
      api.getStatus({
        url: instanceConfig.statusUrl,
      })
    );

    return (
      <LabeledProgressCard
        title={instanceConfig.title}
        label={
          isLoadingStatus
            ? "Loading..."
            : isStatusErrored
            ? "Network Error"
            : statusData.value
        }
        iconName={instanceConfig.iconName}
        progress={isLoadingStatus || isStatusErrored ? 0 : statusData.progress}
      />
    );
  },
};
