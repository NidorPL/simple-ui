export interface Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: object;
}

export interface ModuleIndex {
  moduleName: string;
  getView: (config: Module) => any;
}
