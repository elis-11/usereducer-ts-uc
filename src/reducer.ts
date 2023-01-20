import { ActionsAll } from "./types/action";
import { State } from "./types/state";
import carsJson from "./assets/cars.json";
import { Car } from "./types/car";

export const initialState: State = {
  cars: carsJson as Car[],
  selectedYear: undefined,
  filteredYears: [2018, 2019, 2020],
};

export const carsReducer = (state: State, action: ActionsAll): State => {
  switch (action.type) {
    case "SET_FILTER_YEAR":
      return {
        ...state,
        selectedYear: action.payload,
      };
    case "ADD_CAR":
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case "UPDATE_CAR":
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id !== action.payload.id ? car : action.payload
        ),
      };
    case "DELETE_CAR":
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    default:
      return state;
  }
};
