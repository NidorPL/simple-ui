import { CoronaChatMapper1 } from "./corona-chat-mapper-1";

export function getMapper(name: string) {
  switch (name) {
    case "corona-bot1":
      return CoronaChatMapper1;
    default:
      throw new Error("Couldnt resolve mapper name " + name);
  }
}
