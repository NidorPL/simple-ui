import axios from "axios";

export const labeledProgressApi = {
  getStatus: async ({ url }: { url: string }) => {
    try {
      const { data } = await axios.get(url);

      return data;
    } catch (err) {
      alert(err.message);
    }
  },
};
