export interface LabeledProgressType {
  title: string;
  value: string;
  iconName: string;
  progress: number;
}

export interface LabeledProgressInput {
  title: string;
  iconName: string;
  statusUrl: string;
  startUrl: string;
  stopUrl: string;
}
