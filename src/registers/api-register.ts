import { CoronaChatMapper1 } from "../custom-elements/custom-apis/corona-chat-mapper-1";

export function getCustomAPI(name: string) {
  switch (name) {
    case "corona-bot1":
      return CoronaChatMapper1;
    default:
      throw new Error("Couldnt resolve mapper name " + name);
  }
}

export function getAPI(apiName: string, defaultAPI: any) {
  if (apiName === "default") {
    return defaultAPI;
  } else {
    return getCustomAPI(apiName);
  }
}
