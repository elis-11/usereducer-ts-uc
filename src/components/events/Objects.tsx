import React, { useState } from "react";

export const Objects = () => {
  const [objects, setObjects] = useState([
    { _id: "o1", name: "Mango" },
    { _id: "o2", name: "Ananas" },
    { _id: "o3", name: "Apple" },
  ]);
  const [objectNew, setObjectNew] = useState({
    _id: Math.random().toString(),
    // _id: new Date().toString(),
    name: "",
  });

  const handleChangeObject: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setObjectNew({ ...objectNew, name: e.target.value });
  };

  const addNewObject = () => {
    setObjects([...objects, objectNew]);
    setObjectNew({ ...objectNew, name: "" });
  };
  const removeObject = (id: string) => {
    setObjects(objects.filter((obj) => obj._id !== id));
  };

  return (
    <div className="Objects">
      <h2>OBJECTS:</h2>
      <div className="add">
        <input
          type="text"
          name="name"
          value={objectNew.name}
          onChange={handleChangeObject}
        />
        <button onClick={addNewObject}>+</button>
      </div>
      <div className="objects">
        {objects.map((object, index) => (
          <div key={object._id} className="object">
            <span className="name">
              {index + 1}: &nbsp; {object.name} &nbsp;
            </span>
            <button onClick={() => removeObject(object._id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};
