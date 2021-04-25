export interface ProgramModuleInfo {
  pModuleName: string; // to resolve the module
}

export interface ProgramInstanceConfig {
  name: string;
}

export interface Device {
  name: string;
  icon: string;
  moduleName: string;
  mapper: string;
  runningPrograms: ProgramConfig[];
}

export interface ProgramConfig {
  moduleInfo: ProgramModuleInfo;
  instanceConfig: ProgramInstanceConfig;
}

export interface Program extends ProgramConfig {
  View: JSX.Element;
}

export interface MainConfig {
  connectedDevices: Device[];
}
