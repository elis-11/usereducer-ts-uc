import { useState } from "react";

export const Strings = () => {
  const [strings, setStrings] = useState(["Mango", "Ananas", "Apple"]);
  const [stringNew, setStringNew] = useState("");

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
    setStrings(strings.filter((string) => string !== str));
  };

  return (
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
  );
};
