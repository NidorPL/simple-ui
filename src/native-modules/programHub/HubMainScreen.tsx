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

export const HubMainScreen = ({ config }: { config: Device }) => {
  // Load programs from device ?
  const runningPrograms: Program[] = config.runningPrograms.map(
    (programConfig: ProgramConfig): Program => ({
      moduleInfo: programConfig.moduleInfo,
      instanceConfig: programConfig.instanceConfig,
      View: getProgramView(programConfig.moduleInfo.pModuleName),
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
            <Fragment key={config.name + runningProgram.instanceConfig.name}>
              {runningProgram.View(runningProgram.instanceConfig)}
            </Fragment>
          );
        })}
        <AddProgamCard programs={runningPrograms} />
      </ScrollView>
    </Fragment>
  );
};

// <AddProgamCard programs={programs} />
