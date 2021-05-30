import { Module } from "../../components/common/common-types";

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
