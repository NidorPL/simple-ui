import { Module2 } from "../../components/common/common-types";

export interface ProgramHubConfig extends Module2 {
  moduleConfig: {
    runningPrograms: ProgramConfig[];
  };
}

export interface ProgramConfig {
  programInfo: {
    pModuleName: string; // to resolve the module
  };
  programConfig: {
    name: string;
    title: string;
    iconName: string;
    customApi: string;
    connection: {
      statusUrl: string;
      startUrl: string;
      stopUrl: string;
    };
  };
}
