import { Module2 } from "../../../components/common/common-types";

export interface TableConfig extends Module2 {
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
