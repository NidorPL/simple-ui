export interface Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: object;
}

export interface InstalledModule {
  moduleName: string;
  getView: (config: Module) => any;
}
