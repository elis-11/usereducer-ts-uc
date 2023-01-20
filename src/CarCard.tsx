import React, { useState } from "react";
import { ActionsAll } from "./types/action";
import { Car } from "./types/car";
import { BsTrash } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";

export const CarCard = ({
  dispatch,
  car,
}: {
  dispatch: React.Dispatch<ActionsAll>;
  car: Car;
}) => {
  const [editCar, setEditCar] = useState<Car>(car);

  const handleUpdateCar = (carId: string) => {
    dispatch({ type: "UPDATE_CAR", payload: editCar });
  };

  const handleYearChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditCar({ ...editCar, year: Number(e.target.value) });
  };

  const handleDeleteCar = (carId: string) => {
    dispatch({ type: "DELETE_CAR", payload: carId });
  };

  return (
    <div>
      <div className="car">
        <div className="name">{car.name}</div>
        {/* <div className="name">{car.year}</div> */}
        <div className="name">
          <input
            type="number"
            value={editCar.year}
            onChange={handleYearChange}
          />
        </div>
        <img className="image" src={car.url} alt="" />
        <div className="actions">
          <RxUpdate className="icon"  onClick={() => handleUpdateCar(car.id)} />
          <BsTrash  className="icon" onClick={() => handleDeleteCar(car.id)} />
        </div>
        {/* <button onClick={()=>dispatch({type: "DELETE_CAR", payload: car.id})}>remove</button> */}
      </div>
    </div>
  );
};
