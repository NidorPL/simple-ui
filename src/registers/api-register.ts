import { CoronaChatMapper1 } from "../custom-apis/corona-chat-mapper-1";

// Add custom api´s here
const customApis = [CoronaChatMapper1];

function getCustomAPI(name: string) {
  const installedApi = customApis.find((api) => api.name === name);

  if (!installedApi) {
    throw new Error("Couldnt resolve mapper name " + name);
  }

  return installedApi;
}

export function getAPI(apiName: string, defaultAPI: any) {
  if (apiName === "default") {
    return defaultAPI;
  } else {
    return getCustomAPI(apiName);
  }
}
