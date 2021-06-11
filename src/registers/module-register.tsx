import * as React from "react";
import { InstalledModule, Module } from "../components/common/common-types";
import { ChatbotModule } from "../native-modules/Chatbot";
import { ProgramHubModule } from "../native-modules/ProgramHub";
import { DataTableModule } from "../native-modules/DataTable";

// Add custom modules here
const customModules: InstalledModule[] = [];

const nativeModules: InstalledModule[] = [
  ChatbotModule,
  ProgramHubModule,
  DataTableModule,
];

export function getModuleView(module: Module) {
  const installedModule = [...nativeModules, ...customModules].find(
    (instModule) => instModule.moduleName === module.moduleName
  );

  if (!installedModule) {
    throw new Error("Couldnt resolve moduleName " + module.moduleName);
  }

  return installedModule.getView(module);
}
