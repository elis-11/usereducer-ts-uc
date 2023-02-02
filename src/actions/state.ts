import { Car, Coral } from "../types";
// import { Coral } from "../types/corals";

export interface State {
  cars: Car[];
  selectedYear: number | undefined;
  filteredYears: number[];
  corals: Coral[];
}
