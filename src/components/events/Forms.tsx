import React, { useState } from "react";

export const Forms = () => {
  const [forms, setForms] = useState([
    { _id: "o1", name: "Mango" },
    { _id: "o2", name: "Ananas" },
    { _id: "o3", name: "Apple" },
  ]);
  const [formNew, setFormNew] = useState({
    _id: Math.random().toString(),
    name: "",
  });

  const handleFormChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormNew({ ...formNew, name: e.target.value });
  };
  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setForms([...forms, formNew]);
    setFormNew({ ...formNew, name: "" });
  };

  const removeForm = (id: string) => {
    setForms(forms.filter((form) => form._id !== id));
  };

  return (
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
  );
};
