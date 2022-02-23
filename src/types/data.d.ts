export enum ERobotState {
  NORMAL = 'normal',
  WARN = 'warn',
  ERROR = 'error',
}

export type TRobotData = {
  name: string;
  state?: ERobotState;
  armCount: number;
  location: string;
};
