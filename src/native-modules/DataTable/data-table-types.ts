export interface Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: any;
}

export interface TableConnection {
  baseUrl: string;
  get: string;
  edit: string;
  delete: string;
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

export interface DataTableApi {
  getTableData: (connection: TableConnection) => object[];
  editTableData: (connection: TableConnection, newData: object) => object[];
  deleteTableData: ({
    connection,
    elementToDelete,
  }: {
    connection: TableConnection;
    elementToDelete: object;
  }) => object[];
}
