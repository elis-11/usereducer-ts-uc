import { Car } from "../types/car";

// individual actions
export type ActionAddCar = {
  type: ActionTypes.ADD_CAR;
  payload: Car;
};
export type ActionUpdateCar = {
  type: ActionTypes.UPDATE_CAR;
  payload: Car;
};
export type ActionDeleteCar = {
  type: ActionTypes.DELETE_CAR;
  payload: string;
};
export type ActionSetFilterYear = {
  type: ActionTypes.SET_FILTER_YEAR;
  payload: number;
};

export enum ActionTypes {
  SET_FILTER_YEAR = "SET_FILTER_YEAR",
  ADD_CAR = "ADD_CAR",
  UPDATE_CAR = "UPDATE_CAR",
  DELETE_CAR = "DELETE_CAR",
}

// union actions
export type ActionsAllCars =
  | ActionDeleteCar
  | ActionSetFilterYear
  | ActionUpdateCar
  | ActionAddCar;
