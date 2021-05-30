import * as React from "react";
import { Module } from "../components/common/common-types";
import { ChatMainScreen } from "../native-modules/chatbot/ChatMainScreen";
import { ProgramHubMainScreen } from "../native-modules/programHub/ProgramHubMainScreen";
import { DataTableMainScreen } from "../native-modules/dataTable/DataTableMainScreen";

export function getModuleScreen(module: Module) {
  switch (module.moduleName) {
    case "Chat":
      return <ChatMainScreen chatConfig={module} />;
    case "ProgramHub":
      return (
        <ProgramHubMainScreen programHubConfig={module}></ProgramHubMainScreen>
      );
    case "DataTable":
      return <DataTableMainScreen tableModuleConfig={module} />;

    default:
      throw new Error("Couldnt resolve component name: " + module.moduleName);
  }
}
