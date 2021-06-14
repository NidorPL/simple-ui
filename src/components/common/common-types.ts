export interface Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: object;
}

export interface ModuleIndex {
  moduleName: string;
  getView: (moduleConfig: any, customApi?: object) => any;
}

export interface ImageIndex {
  imageName: string;
  imageSource: any;
}
