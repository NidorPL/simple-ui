import { OvenBakeProgram } from "./OvenBakeProgram";
import {
  ProgramModuleInfo,
  Program,
  ProgramConfig,
} from "../../../../components/common/common-types";
import { LabeledProgressProgram } from "../../../../programs/LabeledProgress/LabeledProgressProgramm";

const programs: Program[] = [OvenBakeProgram, LabeledProgressProgram];

export const getProgramView = (pModuleName: string): JSX.Element => {
  return programs.find((program) => program.info.programModule === pModuleName)
    .View;
};
