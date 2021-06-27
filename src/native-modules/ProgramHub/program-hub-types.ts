export interface Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: object;
}

export interface ProgramIndex {
  programName: string;
  View: any;
}

export interface ProgramWithView {
  runningProgram: RunningProgram;
  View: any;
}

export interface ProgramHubConnection {
  baseUrl: string;
  supportedPrograms: string;
  runningPrograms: string;
  startProgram: string;
  stopProgram: string;
  updateProgram: string;
}

export interface ProgramConfig {
  connection: ProgramHubConnection;
}

export interface ProgramHubConfig extends Module {
  moduleConfig: ProgramConfig;
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

export interface ProgramHubApi {
  getRunningPrograms: (connection: ProgramHubConnection) => RunningProgram[];
  getSupportedPrograms: (
    connection: ProgramHubConnection
  ) => SupportedProgram[];
  startProgram: (
    connection: ProgramHubConnection,
    programConfig: object
  ) => Promise<RunningProgram>;
  updateProgram: (
    connection: ProgramHubConnection,
    programConfig: object
  ) => Promise<RunningProgram>;
  stopProgram: (
    connection: ProgramHubConnection,
    programConfig: object
  ) => Promise<RunningProgram>;
}
