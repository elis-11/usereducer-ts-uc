export interface Coral {
  _id: string;
  name: string;
  url: string;
  color: string;
  size: number;
}

export interface State {
  corals: Coral[];
}

export enum ActionTypes {
  CORAL_ADD = "CORAL_ADD",
  CORAL_SET = "CORAL_SET",
}

export interface ActionCoralSet {
  type: ActionTypes.CORAL_SET;
  payload: Coral[];
}

// Corals actions
export interface ActionCoralAdd {
  type: ActionTypes.CORAL_ADD;
  payload: Coral;
}

export type ActionsAllCorals = 
| ActionCoralAdd
| ActionCoralSet;
