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
  getSupportedPrograms: async ({ url }: { url: string }) => {
    const { data } = await axios.get(`${url}/supportedPrograms`);

    return data;
  },

  startProgram: async ({
    url,
    programToStart,
  }: {
    url: string;
    programToStart: object;
  }) => {
    const { data } = await axios.post(`${url}/startProgram`, programToStart);

    return data;
  },

  updateProgram: async ({
    connection,
    programName,
    newValue,
  }: {
    connection: { baseUrl: string; updateProgram: string };
    programName: string;
    newValue: string;
  }) => {
    const { data } = await axios.post(
      `${connection.baseUrl}${connection.updateProgram}`,
      {
        programName,
        newValue,
      }
    );

    return data;
  },

  stopProgram: async ({
    programName,
    connection,
  }: {
    programName: string;
    connection: { baseUrl: string; stopProgram: string };
  }) => {
    const { data } = await axios.post(
      `${connection.baseUrl}${connection.stopProgram}`,
      {
        programName,
      }
    );

    return data;
  },
};

// baseUrl: "http://localhost:3000/oven1"
// runningPrograms: "/runningPrograms"
// startProgram: "/startProgram"
// stopProgram: "/stopProgram"
// supportedPrograms: "/supportedPrograms"
