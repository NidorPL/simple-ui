import * as React from "react";
import { Module2 } from "../components/common/common-types";
import { ChatMainScreen } from "../native-modules/chatbot/ChatMainScreen";
import TableMainScreen from "../native-modules/DataTable/TableMainScreen";
import { ProgramHubMainScreen } from "../native-modules/programHub/ProgramHubMainScreen";

export function getModuleScreen(module: Module2) {
  switch (module.moduleName) {
    case "Chat":
      return <ChatMainScreen chatConfig={module} />;
    case "ProgramHub":
      return (
        <ProgramHubMainScreen programHubConfig={module}></ProgramHubMainScreen>
      );
    case "DataTable":
      return <TableMainScreen tableModuleConfig={module} />;

    default:
      throw new Error("Couldnt resolve component name: " + module.moduleName);
  }
}
