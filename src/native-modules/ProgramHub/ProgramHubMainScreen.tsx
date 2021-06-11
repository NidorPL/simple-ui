import React, { Fragment } from "react";
import { ScrollView } from "react-native";

import AddProgamCard from "./components/AddProgramCard";
import MainDeviceCard from "./components/MainDeviceCard";

import {
  ProgramIndex,
  ProgramConfig,
  ProgramHubConfig,
  RunningProgramConfig,
  SupportedProgram,
} from "./program-hub-types";
import { useQuery } from "react-query";
import { defaultProgramHubApi } from "./defaultProgramHubApi";
import { getAPI, getProgramView } from "../../register";

const resolveProgramsViews = (
  runningProgramsData: RunningProgramConfig[] = []
) => {
  return runningProgramsData.map((program) => {
    return {
      programData: program,
      View: getProgramView(program.pModuleName),
    };
  });
};

// const findSupportedProgram = (supportedPrograms, runningProgram) => {
//   console.log({
//     supportedPrograms,
//     runningProgram,
//   });
//
//   return supportedPrograms.find((supportedProgram) => {
//     return (
//       supportedProgram.programName === runningProgram.programData.programName
//     );
//   });
// };

export const ProgramHubMainScreen = ({
  programHubConfig,
}: {
  programHubConfig: ProgramHubConfig;
}) => {
  // const runningPrograms: Program[] = resolvePrograms(programHubConfig);

  const [refechValue, setRefetch] = React.useState(0);

  let api = getAPI(programHubConfig.customApi, defaultProgramHubApi);

  const {
    data: runningProgramsData,
    isSuccess: loadedProgamsData,
  } = useQuery("phMainScreenRunning" + refechValue, () =>
    api.getRunningPrograms(programHubConfig.moduleConfig.connection)
  );

  const {
    data: supportedPrograms,
    isSuccess: loadedSupportedProgams,
  } = useQuery("phMainScreenSupporting", () =>
    api.getSupportedPrograms(programHubConfig.moduleConfig.connection)
  );

  const runningPrograms = resolveProgramsViews(runningProgramsData);

  const startProgram = async (programConfig: object) => {
    console.log("programConfig");
    console.log(programConfig);
    await api.startProgram(
      programHubConfig.moduleConfig.connection,
      programConfig
    );
    // close Dialog
    // refetch programs
    setRefetch(refechValue + 1);
  };

  console.log("supportedPrograms");
  console.log(supportedPrograms);

  console.log("Program Hub Data");
  console.log("runningPrograms");
  console.log(runningPrograms);

  return (
    <Fragment>
      <ScrollView
        contentContainerStyle={{
          display: "grid" as "none",
          gridTemplateColumns: "1fr 1fr",
          gridRowGap: "15px",
          gridColumnGap: "15px",
          padding: 8,
        }}
      >
        <MainDeviceCard />
        {loadedProgamsData &&
          runningPrograms.map((runningProgram, index) => {
            return (
              <Fragment key={index}>
                {runningProgram.View({
                  runningProgram: runningProgram.programData,
                })}
              </Fragment>
            );
          })}
        {loadedSupportedProgams && supportedPrograms && (
          <AddProgamCard
            supportedPrograms={supportedPrograms}
            startProgram={startProgram}
          />
        )}
      </ScrollView>
    </Fragment>
  );
};
