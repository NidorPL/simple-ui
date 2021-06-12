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
}

export interface SupportedProgram {
  programName: string;
  pModuleName: string;
  valueSuffix: string;
  iconName: string;
  inputs: string[];
}
