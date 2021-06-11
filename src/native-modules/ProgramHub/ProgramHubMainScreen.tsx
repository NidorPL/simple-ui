import React, { Fragment } from "react";
import { Pressable, ScrollView, TouchableOpacity } from "react-native";
import { useQuery } from "react-query";
import AddProgamCard from "./components/AddProgramCard";
import MainDeviceCard from "./components/MainDeviceCard";
import { ProgramHubConfig, RunningProgramConfig } from "./program-hub-types";
import { defaultProgramHubApi } from "./defaultProgramHubApi";
import { getAPI, getProgramView } from "../../register";
import { TouchableRipple } from "react-native-paper";
import { ProgramDialog } from "./components/ProgramDialog";
import { View } from "react-native";
import { LabeledProgressProgram } from "./programs/LabeledProgress/LabeledProgressProgramm";

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

export const ProgramHubMainScreen = ({
  programHubConfig,
}: {
  programHubConfig: ProgramHubConfig;
}) => {
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

  console.log("programHubConfig");
  console.log(programHubConfig);

  const startProgram = async (programConfig: object) => {
    console.log("programConfig");
    console.log(programConfig);
    await api.startProgram(
      programHubConfig.moduleConfig.connection,
      programConfig
    );
    setRefetch(refechValue + 1);
  };

  const openProgramDialog = () => {
    setIsProgramDialogOpen(true);
  };

  // console.log("supportedPrograms");
  // console.log(supportedPrograms);
  //
  // console.log("Program Hub Data");
  // console.log("runningPrograms");
  // console.log(runningPrograms);

  return (
    <View>
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
            const programContext = React.createContext({
              flag: "flag",
            });

            return (
              <View key={index}>
                {
                  // @ts-ignore
                  runningProgram.View({
                    runningProgram: runningProgram.programData,
                    connection: programHubConfig.moduleConfig.connection,
                    refetchPrograms: () => setRefetch(refechValue + 1),
                  })
                }
              </View>
            );
          })}

        {loadedSupportedProgams && supportedPrograms && (
          <AddProgamCard
            supportedPrograms={supportedPrograms}
            startProgram={startProgram}
          />
        )}
      </ScrollView>
    </View>
  );
};
