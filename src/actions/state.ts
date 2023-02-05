import { Car, Coral } from "../types";

export interface State {
  cars: Car[];
  selectedYear: number | undefined;
  filteredYears: number[];
  corals: Coral[]
}
