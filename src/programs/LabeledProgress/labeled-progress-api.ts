import axios from "axios";

export const labeledProgressApi = {
  getStatus: async ({ url }: { url: string }) => {
    const { data } = await axios.get(url);

    return data;
  },
};
