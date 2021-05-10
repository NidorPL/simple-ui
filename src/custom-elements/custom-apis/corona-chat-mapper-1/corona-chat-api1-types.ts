export interface ChatConfig extends Module {
  moduleConfig: {
    connection: {
      url: string;
      init: string;
      send: string;
    };
  };
}

export interface Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: object;
}
