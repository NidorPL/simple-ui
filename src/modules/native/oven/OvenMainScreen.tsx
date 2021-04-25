import React, { Fragment, useState, useRef, useEffect } from "react";
import OvenHeader from "./components/OvenHeader";
import { Button, Card, Title, Paragraph, IconButton } from "react-native-paper";
import { ScrollView, View } from "react-native";

import MainOvenCard from "./components/cards/MainOvenCard";
import AddProgamCard from "../../../components/common/AddProgramCard";
import {
  getProgramView,
  ovenPrograms,
  programs,
} from "./programs/program-registry";
import {
  Device,
  Program,
  ProgramConfig,
  ProgramModuleInfo,
} from "../../../components/common/common-types";

export const MainOvenScreen = ({ config }: { config: Device }) => {
  // config get program configs

  console.log("Oven config");
  console.log(config.runningPrograms);

  const runningPrograms: Program[] = config.runningPrograms.map(
    (programConfig: ProgramConfig): Program => ({
      moduleInfo: programConfig.moduleInfo,
      instanceConfig: programConfig.instanceConfig,
      View: getProgramView(programConfig.moduleInfo.pModuleName),
    })
  );

  // resolve programs from config

  /*
        runningPrograms :

     */

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
        <MainOvenCard />
        {runningPrograms.map((runningProgram) => {
          return runningProgram.View(runningProgram.instanceConfig);
        })}
      </ScrollView>
    </Fragment>
  );
};

// <AddProgamCard programs={programs} />
