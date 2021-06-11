import { ModuleIndex } from "./components/common/common-types";
import { CoronaChatApi2 } from "./custom-apis/corona-chat-mapper-1";
import { ProgramIndex } from "./native-modules/ProgramHub/program-hub-types";

/*
    To use custom modules, apis or programs, simply add the import and add the element to its list below
 */

const customModules: ModuleIndex[] = [];

const customApis = [CoronaChatApi2];

const customPrograms: ProgramIndex[] = [];

export { customModules, customApis, customPrograms };
