import { useState } from "react";
import { CarCard } from "./CarCard";
import { useDataContext } from "../../context/DataProvider";
import "./Cars.scss";
import { ActionTypes, Car } from "../../types";
// import carsJson from "./assets/cars.json";

export const Cars=()=> {
  // const [cars, setCars] = useState(carsJson as [Car]);
  // const [state, dispatch] = useReducer(carsReducer, initialState);
  const { state, dispatch } = useDataContext();
  const { cars, selectedYear, filteredYears } = state;

  const [newCar, setNewCar] = useState<Car>({
    id: Date.now().toString(),
    name: "",
    year: 2020,
    url: "https://i.pravatar.cc",
  });

  const handleSelectedYear = (year: number) => {
    dispatch({ type: ActionTypes.SET_FILTER_YEAR, payload: year });
  };
  console.log(selectedYear);
  let filteredCars = cars;

  if (selectedYear) {
    filteredCars = cars.filter((car) => car.year === selectedYear);
    console.log("filteredCars");
  }
  console.log("filteredCars2", filteredCars);

  const handleNewCarSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch({ type: ActionTypes.ADD_CAR, payload: newCar });
    setNewCar({
      id: Date.now().toString(),
      name: "",
      year: 2020,
      url: "https://i.pravatar.cc",
    });
  };

  return (
    <div className="Cars">
      <h2>UseReducer-TypeScript-UseContext</h2>
      <div className="selected">
        {filteredYears.map((year) => (
          <div
            className={selectedYear === year ? "active" : "filter"}
            key={year}
            onClick={() => handleSelectedYear(year)}
          >
            {year}
          </div>
        ))}
      </div>

      <form onSubmit={handleNewCarSubmit}>
        <input
          type="text"
          name="name"
          value={newCar.name}
          onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
        />
        <input
          type="number"
          name="year"
          value={newCar.year}
          onChange={(e) =>
            setNewCar({ ...newCar, year: Number(e.target.value) })
          }
        />
        <button className="add" type="submit">+</button>
      </form>

      <div className="cars">
        {filteredCars.map((car) => (
          <CarCard key={car.id} dispatch={dispatch} car={car} />
        ))}
      </div>
    </div>
  );
}
