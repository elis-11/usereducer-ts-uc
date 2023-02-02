import { Car } from "./car";
import { Coral } from "./corals";

export type State ={
    cars: Car[],
    selectedYear: number | undefined,
    filteredYears: number[],
    corals: Coral[],
}