import { ImageIndex, ModuleIndex } from "./components/common/common-types";
import { CoronaChatApi2 } from "./custom-apis/corona-chat-mapper-1";
import { ProgramIndex } from "./native-modules/ProgramHub/program-hub-types";
import { DataTableModule } from "simple_ui_data-table";
import { CoronaImage } from "./custom-images/corona-image";

/*
    To use custom modules, apis or programs, simply add the import and add the element to its list below
 */

const customModules: ModuleIndex[] = [DataTableModule];

const customApis = [CoronaChatApi2];

const customPrograms: ProgramIndex[] = [];

const customImages: ImageIndex[] = [CoronaImage];

export { customModules, customApis, customPrograms, customImages };
