import { DataTableApi, TableConfig } from "./data-table-types";
export declare const DataTableModule: {
    moduleName: string;
    getView: (moduleConfig: TableConfig, customApi?: DataTableApi | undefined) => JSX.Element;
};
