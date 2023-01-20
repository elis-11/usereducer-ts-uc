import { useReducer, useState } from "react";
import "./App.scss";
import carsJson from "./assets/cars.json";
import { CarCard } from "./CarCard";
import { initialState, carsReducer } from "./reducer";
import { Car } from "./types/car";

function App() {
  // const [cars, setCars] = useState(carsJson as [Car]);
  const [state, dispatch] = useReducer(carsReducer, initialState);
  const { cars, selectedYear, filteredYears } = state;
  const [newCar, setNewCar] = useState<Car>({
    id: Date.now().toString(),
    name: "",
    year: 2020,
    url: "https://i.pravatar.cc",
  });

  const handleSelectedYear = (year: number) => {
    dispatch({ type: "SET_FILTER_YEAR", payload: year });
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
    dispatch({ type: "ADD_CAR", payload: newCar });
    setNewCar({
      id: Date.now().toString(),
      name: "",
      year: 2020,
      url: "https://i.pravatar.cc",
    });
  };

  return (
    <div className="Cars">
      <h2>UseReducer - TypeScript</h2>
      <div className="selected">
        {filteredYears.map((year) => (
          <div 
          className={selectedYear === year ? "active" : "filter"}
          key={year} onClick={() => handleSelectedYear(year)}>
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
        <button type="submit">+</button>
      </form>

      <div className="cars">
        {filteredCars.map((car) => (
          <CarCard key={car.id} dispatch={dispatch} car={car}/>
        ))}
      </div>
    </div>
  );
}

export default App;
