import { Module, ModuleIndex } from "./components/common/common-types";
import { ChatbotModule } from "./native-modules/Chatbot";
import { ProgramHubModule } from "./native-modules/ProgramHub";

import {
  customApis,
  customImages,
  customModules,
  customPrograms,
} from "./custom-elements-register";
import { ProgramIndex } from "./native-modules/ProgramHub/program-hub-types";
import { LabeledProgressProgram } from "./native-modules/ProgramHub/programs/LabeledProgress/LabeledProgressProgramm";

// @ts-ignore
const nativeModules: ModuleIndex[] = [ChatbotModule, ProgramHubModule];

const nativePrograms: ProgramIndex[] = [LabeledProgressProgram];

function getModuleView(module: Module, customApi?: object) {
  const installedModule = [...nativeModules, ...customModules].find(
    (instModule) => instModule.moduleName === module.moduleName
  );

  if (!installedModule) {
    throw new Error("Couldnt resolve moduleName " + module.moduleName);
  }

  return installedModule.getView(module, customApi);
}

function getCustomAPI(name: string) {
  const installedApi = customApis.find((api) => api.name === name);

  if (!installedApi) {
    throw new Error("Couldnt resolve api name " + name);
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

const getProgramView = (pModuleName: string): JSX.Element => {
  // @ts-ignore
  const installedProgram = [...nativePrograms, ...customPrograms].find(
    (program) => program.programName === pModuleName
  ).View;

  if (!installedProgram) {
    throw new Error("Couldnt resolve program name " + name);
  }

  return installedProgram;
};

export const getImageSource = (imageName: string) => {
  const image = customImages.find((image) => image.imageName === imageName);

  if (!image) {
    throw new Error("Couldnt resolve image " + imageName);
  }
  return image.imageSource;
};

export { getModuleView, getAPI, getProgramView };
