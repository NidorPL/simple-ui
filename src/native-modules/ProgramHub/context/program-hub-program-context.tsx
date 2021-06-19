import React from "react";
import { ProgramConfig, RunningProgram } from "../program-hub-types";

export const ProgramHubProgramContext = React.createContext<{
  programConfig: ProgramConfig;
  runningProgram: RunningProgram;
  refetchPrograms: () => void;
}>({
  programConfig: { connection: {} },
  runningProgram: {},
  refetchPrograms: () => {},
});
