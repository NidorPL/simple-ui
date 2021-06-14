import React from "react";
import { DataTableMainScreen } from "./DataTableMainScreen";
import { DataTableApi, TableConfig } from "./data-table-types";

export const DataTableModule = {
  moduleName: "DataTable",
  getView: (moduleConfig: TableConfig, customApi?: DataTableApi) => (
    <DataTableMainScreen
      tableModuleConfig={moduleConfig}
      customApi={customApi}
    />
  ),
};
