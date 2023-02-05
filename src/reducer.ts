import { State } from "./actions/state";
import carsJson from "./assets/cars.json";
import coralsJson from "./assets/corals.json";
import { ActionsAll, ActionTypes, Car, Coral } from "./types";

export const initialState: State = {
  cars: carsJson as Car[],
  selectedYear: undefined,
  filteredYears: [2018, 2019, 2020],
  corals: coralsJson as Coral[],
};

export const reducer = (state: State, action: ActionsAll): State => {
  console.log("Action received: ", action);
  const { type, payload } = action;

  switch (type) {
    // CARS
    case ActionTypes.SET_FILTER_YEAR:
      return {
        ...state,
        selectedYear: payload,
      };
    case ActionTypes.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case ActionTypes.UPDATE_CAR:
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id !== action.payload.id ? car : action.payload
        ),
      };
    case ActionTypes.DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
      // CORALS
    case ActionTypes.CORAL_ADD:
      return { ...state, corals: [...state.corals, action.payload] };
    case ActionTypes.CORAL_DELETE:
      return {
        ...state,
        corals: state.corals.filter((coral) => coral._id !== payload),
      };
    default:
      return state;
  }
};
