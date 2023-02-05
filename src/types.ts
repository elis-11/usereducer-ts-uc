export interface Car {
  id: string;
  name: string;
  year: number;
  url: string;
};

export interface Coral {
  _id: string;
  name: string;
  url: string;
  // color: string;
  size: number;
}

// individual actions
export interface ActionAddCar {
  type: ActionTypes.ADD_CAR;
  payload: Car;
};
export interface ActionUpdateCar {
  type: ActionTypes.UPDATE_CAR;
  payload: Car;
};
export interface ActionDeleteCar {
  type: ActionTypes.DELETE_CAR;
  payload: string;
};
export interface ActionSetFilterYear {
  type: ActionTypes.SET_FILTER_YEAR;
  payload: number;
};

export interface ActionCoralSet {
  type: ActionTypes.CORAL_SET;
  payload: Coral[];
}

// Corals actions
export interface ActionCoralAdd {
  type: ActionTypes.CORAL_ADD;
  payload: Coral;
}
export interface ActionCoralDelete {
  type: ActionTypes.CORAL_DELETE;
  payload: string;
}
  
export enum ActionTypes {
  SET_FILTER_YEAR = "SET_FILTER_YEAR",
  ADD_CAR = "ADD_CAR",
  UPDATE_CAR = "UPDATE_CAR",
  DELETE_CAR = "DELETE_CAR",
  CORAL_SET = "CORAL_SET",
  CORAL_ADD = "CORAL_ADD",
  CORAL_DELETE = "CORAL_DELETE",
}

export type ActionsAll = 
| ActionDeleteCar
| ActionSetFilterYear
| ActionUpdateCar
| ActionAddCar
| ActionCoralAdd
| ActionCoralSet
| ActionCoralDelete
