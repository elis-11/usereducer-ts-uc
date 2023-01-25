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
    _id: Math.random().toString(),
    // _id: new Date().toString(),
    name: "",
  });
  const [forms, setForms] = useState([
    { _id: "o1", name: "Mango" },
    { _id: "o2", name: "Ananas" },
    { _id: "o3", name: "Apple" },
  ]);
  const [formNew, setFormNew] = useState({
    _id: Math.random().toString(),
    name: "",
  });

  // STRINGS
  const handleChangeString: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setStringNew(e.target.value);
  };
  const addNewString = () => {
    setStrings([...strings, stringNew]);
    setStringNew("");
  };
  const removeString = (str: string) => {
    setStrings((strings) => {
      return strings.filter((string) => string !== str);
    });
  };
  // OBJECTS
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
    setObjects(objects.filter((o) => o._id !== id));
  };
  // FORM - OBJECTS
  const handleFormChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormNew({ ...formNew, name: e.target.value });
  };
  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setForms([...forms, formNew]);
    setFormNew({ ...formNew, _id: Math.random().toString(), name: "" });
  };

  const removeForm = (id: string) => {
    setForms((forms) => {
      return forms.filter((form) => form._id !== id);
    });
  };

  return (
    <div className="Events">
      {/* STRINGS */}
      <div className="Strings">
        <h2>STRINGS:</h2>
        <div className="add">
          <input
            type="text"
            name="strings"
            value={stringNew}
            onChange={handleChangeString}
          />
          <button onClick={addNewString}>+</button>
        </div>
        <div className="strings">
          {strings.map((string, index) => (
            <div key={index} className="string">
              <span className="str">
                {index + 1}: &nbsp;{string} &nbsp;
              </span>
              <button onClick={() => removeString(string)}>x</button>
            </div>
          ))}
        </div>
      </div>
      {/* OBJECTS */}
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
      {/* FORMS */}
      <div className="Forms">
        <h2>FORMS:</h2>
        <div className="add">
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              name="name"
              value={formNew.name}
              onChange={handleFormChange}
            />
            <button type="submit">+</button>
          </form>
        </div>
        <div className="forms">
          {forms.map((form, index) => (
            <div key={form._id} className="form">
              <span className="name">
                {index + 1}: &nbsp; {form.name} &nbsp;
              </span>
              <button onClick={() => removeForm(form._id)}>x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
