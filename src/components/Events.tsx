import { useState } from "react";
import "../App.scss";

export const Events = () => {
  const [strings, setStrings] = useState(["Mango", "Ananas", "Apple"]);
  const [stringNew, setStringNew] = useState("");

  const [objects, setObjects] = useState([
    { _id: "o1", name: "Mango" },
    { _id: "o2", name: "Ananas" },
    { _id: "o3", name: "Apple" },
  ]);
  const [objectNew, setObjectNew] = useState({
    _id: Date.now().toString(),
    name: "",
  });

  // STRINGS
  const handleChangeString: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setStringNew(e.target.value);
  };
  const addString = () => {
    setStrings([...strings, stringNew]);
    setStringNew("");
  };
  const deleteString = (index: string) => {
    setStrings((obj) => {
      return obj.filter((i) => i !== index);
    });
  };
  // OBJECT
  const handleChangeObject: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setObjectNew({ ...objectNew, name: e.target.value });
  };
  const addObject = () => {
    setObjects([...objects, objectNew]);
    setObjectNew({ ...objectNew, _id: Date.now().toString(), name: "" });
  };
  const deleteObject = (id: string) => {
    setObjects(objects.filter((o) => o._id !== id));
  };

  return (
    <div className="Events">
      <div className="Strings">
        <h2>STRINGS:</h2>
        <div className="add">
          <input
            type="text"
            name="strings"
            value={stringNew}
            onChange={handleChangeString}
          />
          <button onClick={addString}>+</button>
        </div>
        <div className="strings">
          {strings.map((string, index) => (
            <div key={index} className="string">
              <span className="str">
                {index + 1}: &nbsp;{string} &nbsp;
              </span>
              <button onClick={() => deleteString(string)}>x</button>
            </div>
          ))}
        </div>
      </div>
      <div className="Objects">
        <h2>OBJECTS:</h2>
        <div className="add">
          <input
            type="text"
            name="name"
            value={objectNew.name}
            onChange={handleChangeObject}
          />
          <button onClick={addObject}>+</button>
        </div>
        <div className="objects">
          {objects.map((object, index) => (
            <div key={object._id} className="object">
              <span className="name">
                {index + 1}: &nbsp; {object.name} &nbsp;
              </span>
              <button onClick={() => deleteObject(object._id)}>x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
