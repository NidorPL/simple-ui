import { LabeledProgressProgram } from "../native-modules/programHub/programs/LabeledProgress/LabeledProgressProgramm";
import { ProgramWithView } from "../native-modules/programHub/program-hub-types";

const programs: ProgramWithView[] = [LabeledProgressProgram];

export const getProgramView = (pModuleName: string): JSX.Element => {
  return programs.find((program) => program.info.programModule === pModuleName)
    .View;
};

// create Not Found view when program-module is unresolved
