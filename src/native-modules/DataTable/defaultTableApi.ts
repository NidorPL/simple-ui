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

    console.log(data);

    return data;
  },
};
