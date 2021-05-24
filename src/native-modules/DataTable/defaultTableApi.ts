import axios from "axios";

interface TableConnection {
  baseUrl: string;
  get: string;
  edit: string;
  delete: string;
}

export const defaultTableApi = {
  getTableData: async (connection: TableConnection) => {
    const { data } = await axios.get(connection.get, {
      baseURL: connection.baseUrl,
      timeout: 5000,
    });

    return data;
  },
  editTableData: async ({
    connection,
    newData,
  }: {
    connection: TableConnection;
    newData: object;
  }) => {
    const { data } = await axios.post(connection.edit, newData, {
      baseURL: connection.baseUrl,
      timeout: 5000,
    });

    return data;
  },

  deleteTableData: async ({
    connection,
    elementToDelete,
  }: {
    connection: TableConnection;
    elementToDelete: object;
  }) => {
    const { data } = await axios.post(connection.delete, elementToDelete, {
      baseURL: connection.baseUrl,
      timeout: 5000,
    });

    return data;
  },
};
