import { TableConnection } from "./data-table-types";
export declare const defaultTableApi: {
    getTableData: (connection: TableConnection) => Promise<any>;
    editTableData: ({ connection, newData, }: {
        connection: TableConnection;
        newData: object;
    }) => Promise<any>;
    deleteTableData: ({ connection, elementToDelete, }: {
        connection: TableConnection;
        elementToDelete: object;
    }) => Promise<any>;
};
