import React from "react";
import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import AddProgamCard from "./components/AddProgramCard";
import MainDeviceCard from "./components/MainDeviceCard";
import {
  ProgramHubConfig,
  ProgramWithView,
  RunningProgram,
} from "./program-hub-types";
import { defaultProgramHubApi } from "./default-program-hub-api";
import { getAPI, getProgramView } from "../../register";
import { View } from "react-native";

const resolveProgramViews = (
  runningProgramsData: RunningProgram[] = []
): ProgramWithView[] => {
  return runningProgramsData.map((runningProgram) => {
    return {
      runningProgram,
      View: getProgramView(runningProgram.pModuleName),
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

  const runningProgramsWithViews = resolveProgramViews(runningProgramsData);

  const startProgram = async (programConfig: object) => {
    await api.startProgram(
      programHubConfig.moduleConfig.connection,
      programConfig
    );
    setRefetch(refechValue + 1);
  };

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
          runningProgramsWithViews.map((runningProgram, index) => {
            return (
              <View key={index}>
                {
                  // @ts-ignore
                  runningProgram.View({
                    runningProgram: runningProgram.runningProgram,
                    connection: programHubConfig.moduleConfig.connection,
                    refetchPrograms: () => setRefetch(refechValue + 1),
                  })
                }
              </View>
            );
          })}

        {loadedSupportedProgams && supportedPrograms && (
          <AddProgamCard
            runningPrograms={runningProgramsWithViews}
            supportedPrograms={supportedPrograms}
            startProgram={startProgram}
          />
        )}
      </ScrollView>
    </View>
  );
};
