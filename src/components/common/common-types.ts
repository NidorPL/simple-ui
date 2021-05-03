export interface ProgramConfig {
  moduleInfo: {
    pModuleName: string; // to resolve the module
  };
  instanceConfig: {
    name: string;
  };
}

export interface Module {
  moduleName: string;
  mapper: string;
  iconName: string;
  runningPrograms: ProgramConfig[];
}

export interface Device {
  name: string;
  icon: string;
  modules: Module[];
}

export interface Program extends ProgramConfig {
  View: JSX.Element;
}

export interface MainConfig {
  connectedDevices: Device[];
}
