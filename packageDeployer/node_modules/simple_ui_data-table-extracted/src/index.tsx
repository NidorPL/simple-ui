import React from "react";
import { DataTableMainScreen } from "./DataTableMainScreen";
import { Module } from "./data-table-types";

export const DataTableModule = {
  moduleName: "DataTable",
  getView: (moduleConfig: Module) => (
    <DataTableMainScreen tableModuleConfig={moduleConfig} />
  ),
};
