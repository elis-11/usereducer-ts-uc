import { ActionsAllCars } from "./actions/car";
import { State } from "./types/state";
import carsJson from "./assets/cars.json";
import coralsJson from "./assets/corals.json";
import { Car } from "./types/car";
import { ActionsAllCorals, ActionTypes, Coral } from "./types/corals";

export const initialState: State = {
  cars: carsJson as Car[],
  selectedYear: undefined,
  filteredYears: [2018, 2019, 2020],
  corals: coralsJson as Coral[],
};

export const carsReducer = (state: State, action: ActionsAllCars): State => {
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
export const coralsReducer = (
  state: State,
  action: ActionsAllCorals
): State => {
  console.log("Action received: ", action);

  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CORAL_SET:
      return { ...state, corals: payload };
    case ActionTypes.CORAL_ADD:
      return { ...state, corals: [...state.corals, payload] };
    default:
      return state;
  }
};
