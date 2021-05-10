import { Program } from "../components/common/common-types";
import { LabeledProgressProgram } from "../modules/native/programHub/programs/LabeledProgress/LabeledProgressProgramm";

const programs: Program[] = [LabeledProgressProgram];

export const getProgramView = (pModuleName: string): JSX.Element => {
  return programs.find((program) => program.info.programModule === pModuleName)
    .View;
};

// create Not Found view when program-module is unresolved
