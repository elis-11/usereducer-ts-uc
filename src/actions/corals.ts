import { ActionCoralAdd, ActionTypes, Coral } from "../types/corals";

// actions Corals
export const actionCoralAdd = (coral: Coral): ActionCoralAdd => ({
  type: ActionTypes.CORAL_ADD,
  payload: coral,
});
