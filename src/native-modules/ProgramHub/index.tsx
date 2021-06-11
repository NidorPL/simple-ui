import React from "react";
import { ProgramHubMainScreen } from "./ProgramHubMainScreen";
import { Module } from "./program-hub-types";

export const ProgramHubModule = {
  moduleName: "ProgramHub",
  getView: (moduleConfig: Module) => (
    <ProgramHubMainScreen programHubConfig={moduleConfig} />
  ),
};
