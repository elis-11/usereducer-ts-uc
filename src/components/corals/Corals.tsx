import { useState } from "react";
import "./Corals.scss";
import coralsJson from "../.././assets/corals.json";
import { Coral } from "../../types/corals";
// import { Coral } from "../../types";

export const Corals = () => {
  const [corals, setCorals] = useState(coralsJson as [Coral]);
  console.log(corals);

  return (
    <div className="Corals">
      <h2>Corals</h2>
      <div className="corals">
        {corals.map((coral) => (
          <div key={coral._id} className="coral">
            <img src={coral.url} alt="" />
            {/* <div className="name">{coral._id}</div> */}
            <div className="name">{coral.name}</div>
            <div className="name">{coral.color}</div>
            <div className="name">{coral.size} &nbsp; sm</div>
          </div>
        ))}
      </div>
    </div>
  );
};
