export interface Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: object;
}

export interface ProgramConfig {
  connection: ProgramHubConnection;
}

export interface ProgramHubConfig extends Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: ProgramConfig;
}

export interface ProgramIndex {
  programName: string;
  View: any;
}

export interface ProgramWithView {
  runningProgram: RunningProgram;
  View: any;
}

export interface RunningProgram {
  programName: string;
  connectionUrl: string;
  pModuleName: string;
  customApi: string;
  name: string;
  title: string;
  iconName: string;
  progress: number;
  value: string;
  valueSuffix: string;
}

export interface SupportedProgram {
  programName: string;
  pModuleName: string;
  valueSuffix: string;
  iconName: string;
  inputs: string[];
}

export interface ProgramHubConnection {
  baseUrl: string;
  supportedPrograms: string;
  runningPrograms: string;
  startProgram: string;
}

export interface ProgramHubApi {
  getRunningPrograms: (connection: ProgramHubConnection) => RunningProgram[];
  getSupportedPrograms: (
    connection: ProgramHubConnection
  ) => SupportedProgram[];
  startProgram: (
    connection: ProgramHubConnection,
    programConfig: object
  ) => void;
}
