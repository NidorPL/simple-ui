import axios from "axios";

export const defaultLabeledProgressApi = {
  getStatus: async ({ url }: { url: string }) => {
    console.log("url");
    console.log(url);
    const { data } = await axios.get(
      `http://localhost:3000/oven1/bake1/status`
    );

    return data;
  },
  getRunningPrograms: async ({ url }: { url: string }) => {
    const { data } = await axios.get(`${url}/runningPrograms`);

    return data;
  },
};
