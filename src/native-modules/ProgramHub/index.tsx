import React from "react";
import { ProgramHubMainScreen } from "./ProgramHubMainScreen";
import { ProgramHubApi, ProgramHubConfig } from "./program-hub-types";

export const ProgramHubModule = {
  moduleName: "ProgramHub",
  getView: (moduleConfig: ProgramHubConfig, customApi?: ProgramHubApi) => (
    <ProgramHubMainScreen
      programHubConfig={moduleConfig}
      customApi={customApi}
    />
  ),
};
