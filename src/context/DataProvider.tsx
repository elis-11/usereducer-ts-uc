import { createContext, Dispatch, useContext, useReducer } from "react";
import { Car } from "../types/car";
import { State } from "../types/state";
import { ActionsAll } from "../types/action";
import { initialState, carsReducer } from "../reducer";

export const DataContext = createContext<{
  state: State;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carsReducer, initialState);

  const sharedData = {
    state,
    dispatch,
  };

  return (
    <DataContext.Provider value={sharedData}>{children}</DataContext.Provider>
  );
};
