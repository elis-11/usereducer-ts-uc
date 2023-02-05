import { useReducer, useState } from "react";
import "./Corals.scss";
import coralsJson from "../.././assets/corals.json";
import { ActionTypes, Coral } from "../../types";
// import { coralsReducer, initialState } from "../../reducer";
import { CoralCart } from "./CoralCart";
import { useDataContext } from "../../context/DataProvider";

export const Corals = () => {
  // const [state, dispatch] = useReducer(coralsReducer, initialState);
  const {state, dispatch} = useDataContext()
  const { corals } = state;

  // const [corals, setCorals] = useState(coralsJson as [Coral]);
  const [newCoral, setNewCoral] = useState<Coral>({
    _id: Date.now().toString(),
    name: "",
    size: 30,
    url: "https://source.unsplash.com/200x200/?coral",
    // url: "https://i.pravatar.cc",
  });
  console.log(corals);

  const handleNewCoralSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch({ type: ActionTypes.CORAL_ADD, payload: newCoral });
    setNewCoral({
      ...newCoral,
      name: "",
      size: 30,
      url: "https://source.unsplash.com/200x200/?coral/smooth_cauliflower",
    });
  };
  const handleNewCoralChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
  setNewCoral({...newCoral, [e.target.name]: e.target.value});
  };

  return (
    <div className="Corals">
      <h2>Corals</h2>
      <div className="newCoral">
        <form onSubmit={handleNewCoralSubmit}>
          <input
            type="text"
            name="name"
            value={newCoral.name}
            onChange={handleNewCoralChange}
            // onChange={(e) => setNewCoral({ ...newCoral, name: e.target.value })}
          />
          <input
            type="number"
            name="size"
            value={newCoral.size}
            onChange={handleNewCoralChange}
            // onChange={(e) =>
            //   setNewCoral({ ...newCoral, size: Number(e.target.value) })
            // }
          />
          <button className="add" type="submit">+</button>
        </form>
      </div>
      <div className="corals">
        {corals.map((coral) => (
          <CoralCart key={coral._id} dispatch={dispatch} coral={coral}/>
        ))}
      </div>
    </div>
  );
};
