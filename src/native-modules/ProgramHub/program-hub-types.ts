export interface Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: object;
}

export interface ProgramHubConfig extends Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: {
    connection: {
      baseUrl: string;
      supportedPrograms: string;
      runningPrograms: string;
    };
  };
}

export interface ProgramConfig {
  name: string;
  title: string;
  value: string;
  iconName: string;
  customApi: string;
  connection: {
    statusUrl: string;
    startUrl: string;
    stopUrl: string;
  };
}

export interface ProgramIndex extends ProgramConfig {
  programName: string;
  View: any;
}

/*
  New Types
 */

export interface RunningProgramConfig {
  programName: string;
  pModuleName: string;
  connectionUrl: string;
  customApi: string;
  name: string;
  title: string;
  iconName: string;
  progress: number;
  value: string;
}

export interface SupportedProgram {
  programName: string;
  title: string;
  iconName: string;
  inputs: string[];
  connectionUrl: string;
}
