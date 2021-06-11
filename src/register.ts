import * as React from "react";
import { Module, ModuleIndex } from "./components/common/common-types";
import { ChatbotModule } from "./native-modules/Chatbot";
import { ProgramHubModule } from "./native-modules/ProgramHub";
import { DataTableModule } from "./native-modules/DataTable";
import { customApis, customModules } from "./custom-elements-register";
import { CoronaChatApi2 } from "./custom-apis/corona-chat-mapper-1";

const nativeModules: ModuleIndex[] = [
  ChatbotModule,
  ProgramHubModule,
  DataTableModule,
];

function getModuleView(module: Module) {
  const installedModule = [...nativeModules, ...customModules].find(
    (instModule) => instModule.moduleName === module.moduleName
  );

  if (!installedModule) {
    throw new Error("Couldnt resolve moduleName " + module.moduleName);
  }

  return installedModule.getView(module);
}

function getCustomAPI(name: string) {
  const installedApi = customApis.find((api) => api.name === name);

  if (!installedApi) {
    throw new Error("Couldnt resolve mapper name " + name);
  }

  return installedApi;
}

function getAPI(apiName: string, defaultAPI: any) {
  if (apiName === "default") {
    return defaultAPI;
  } else {
    return getCustomAPI(apiName);
  }
}

export { getModuleView, getAPI };
