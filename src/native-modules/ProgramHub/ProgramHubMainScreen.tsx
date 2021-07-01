import React from "react";
import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import AddProgamCard from "./components/AddProgramCard";
import MainDeviceCard from "./components/MainDeviceCard";
import {
  ProgramHubApi,
  ProgramHubConfig,
  ProgramWithView,
  RunningProgram,
} from "./program-hub-types";
import { defaultProgramHubApi } from "./default-program-hub-api";
import { getProgramView } from "../../register";
import { View } from "react-native";
import { ProgramHubProgramContext } from "./context/program-hub-program-context";
import { DataTable, Title } from "react-native-paper";
import styled from "styled-components/native";

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
  customApi,
}: {
  programHubConfig: ProgramHubConfig;
  customApi?: ProgramHubApi;
}) => {
  const [refechValue, setRefetch] = React.useState(0);

  const api = customApi || defaultProgramHubApi;

  const {
    data: runningProgramsData,
    isSuccess: loadedProgamsData,
  } = useQuery(
    "phMainScreenRunning" + refechValue,
    () => api.getRunningPrograms(programHubConfig.moduleConfig.connection),
    { refetchInterval: 3000 }
  );

  const {
    data: programsInfo,
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

  if (!loadedProgamsData) {
    return (
      <CenterWrapper>
        <Title>Network error</Title>
      </CenterWrapper>
    );
  }

  return (
    <View>
      <ScrollView>
        <MainDeviceCard
          programInfo={programsInfo?.info}
          isOn={runningProgramsData?.length > 0}
        />
        {loadedProgamsData &&
          runningProgramsWithViews.map((programWithView, index) => {
            return (
              <ProgramHubProgramContext.Provider
                key={index}
                value={{
                  programConfig: programHubConfig.moduleConfig,
                  runningProgram: programWithView.runningProgram,
                  refetchPrograms: () => {
                    setRefetch(refechValue + 1);
                  },
                }}
              >
                <View>{programWithView.View()}</View>
              </ProgramHubProgramContext.Provider>
            );
          })}

        {loadedSupportedProgams && programsInfo.supportedPrograms && (
          <AddProgamCard
            runningPrograms={runningProgramsWithViews}
            supportedPrograms={programsInfo.supportedPrograms}
            startProgram={startProgram}
          />
        )}
      </ScrollView>
    </View>
  );
};

const CenterWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
