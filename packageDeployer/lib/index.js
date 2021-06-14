import React from "react";
import { DataTableMainScreen } from "./DataTableMainScreen";
export const DataTableModule = {
    moduleName: "DataTable",
    getView: (moduleConfig, customApi) => (<DataTableMainScreen tableModuleConfig={moduleConfig} customApi={customApi}/>),
};
