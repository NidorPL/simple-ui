import { ProgramHubConfig } from "./program-hub-types";
import axios from "axios";

interface ProgramHubConnection {
  baseUrl: string;
  supportedPrograms: string;
  runningPrograms: string;
  startProgram: string;
}

export const defaultProgramHubApi = {
  getSupportedPrograms: async (connection: ProgramHubConnection) => {
    const { data } = await axios.get(connection.supportedPrograms, {
      baseURL: connection.baseUrl,
    });

    return data;
  },
  getRunningPrograms: async (connection: ProgramHubConnection) => {
    const { data } = await axios.get(connection.runningPrograms, {
      baseURL: connection.baseUrl,
    });

    return data;
  },
  startProgram: async (
    connection: ProgramHubConnection,
    programConfig: object
  ) => {
    const { data } = await axios.post(connection.startProgram, programConfig, {
      baseURL: connection.baseUrl,
    });

    return data;
  },
};
