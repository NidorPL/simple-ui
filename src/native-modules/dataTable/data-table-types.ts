export interface Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: object;
}

export interface TableConfig extends Module {
  moduleConfig: {
    tableTitle: string;
    tableFields: string[];
    connection: {
      baseUrl: string;
      get: string;
      edit: string;
      delete: string;
    };
  };
}
