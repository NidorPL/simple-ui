import React from "react";
import { ProgramConfig, RunningProgram } from "../program-hub-types";

export const ProgramHubProgramContext = React.createContext<{
  programConfig: ProgramConfig;
  runningProgram: RunningProgram;
  refetchPrograms: () => void;
}>({
  programConfig: {
    connection: {
      baseUrl: "",
      startProgram: "",
      updateProgram: "",
      stopProgram: "",
      runningPrograms: "",
      supportedPrograms: "",
    },
  },
  // @ts-ignore
  runningProgram: {},
  refetchPrograms: () => {},
});
