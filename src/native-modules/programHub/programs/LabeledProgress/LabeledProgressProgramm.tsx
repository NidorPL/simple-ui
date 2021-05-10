import React from "react";
import { Program } from "../../../../components/common/common-types";
import { LabeledProgressCard } from "../../../../components/common/LabeledProgressCard";
import { LabeledProgressInput } from "./labeled-progress-types";
import { useQuery } from "react-query";
import { defaultLabeledProgressApi } from "./default-labeled-progress-api";
import { getAPI } from "../../../../registers/api-register";

export const LabeledProgressProgram: Program = {
  info: {
    programModule: "LabeledProgress",
  },

  View: (instanceConfig: LabeledProgressInput) => {
    const api = getAPI(instanceConfig.customApi, defaultLabeledProgressApi);

    const {
      isLoading: isLoadingStatus,
      data: statusData,
      error: isStatusErrored,
    } = useQuery("status" + instanceConfig.name, () =>
      api.getStatus({
        url: instanceConfig.connection.statusUrl,
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
