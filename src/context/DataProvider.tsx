import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { State } from "../actions/state";
import { initialState, carsReducer} from "../reducer";

export const DataContext = createContext<{
  state: State;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(carsReducer, initialState);

  const sharedData = {
    state,
    dispatch,
  };

  return (
    <DataContext.Provider value={sharedData}>{children}</DataContext.Provider>
  );
};
