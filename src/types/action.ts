import { Car } from "./car";

// individual actions
export type ActionAddCar={
  type: "ADD_CAR";
  payload: Car
}
export type ActionUpdateCar={
  type: "UPDATE_CAR";
  payload: Car
}
export type ActionDeleteCar = {
  type: "DELETE_CAR";
  payload: string
};
export type ActionSetFilterYear = {
  type: "SET_FILTER_YEAR";
  payload: number;
};

// union actions
export type ActionsAll = ActionDeleteCar | ActionSetFilterYear | ActionUpdateCar | ActionAddCar;
