import React, { Fragment } from "react";
import { ScrollView } from "react-native";

import AddProgamCard from "../../components/common/AddProgramCard";

import {
  Device,
  Program,
  ProgramConfig,
} from "../../components/common/common-types";
import MainDeviceCard from "./components/MainDeviceCard";
import { getProgramView } from "../../registers/program-register";
import { ProgramHubConfig } from "./program-hub-types";

export const ProgramHubMainScreen = ({
  programHubConfig,
}: {
  programHubConfig: ProgramHubConfig;
}) => {
  const runningPrograms: Program[] = programHubConfig.moduleConfig.runningPrograms.map(
    (programConfig: ProgramConfig): Program => ({
      programInfo: programConfig.programInfo,
      programConfig: programConfig.programConfig,
      View: getProgramView(programConfig.programInfo.pModuleName),
    })
  );

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
        {runningPrograms.map((runningProgram, index) => {
          return (
            <Fragment key={runningProgram.programConfig.name}>
              {runningProgram.View(runningProgram.programConfig)}
            </Fragment>
          );
        })}
        <AddProgamCard programs={runningPrograms} />
      </ScrollView>
    </Fragment>
  );
};

// <AddProgamCard programs={programs} />
