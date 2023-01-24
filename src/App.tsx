import { NavLink, Route, Routes } from "react-router-dom";
import { Cars } from "./components/Cars";
import "./App.scss";
import { Events } from "./components/Events";

export const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Cars</NavLink>
        <NavLink to="/events">Events</NavLink>
      </nav>
      <div className="content">
        <Routes>
          <Route path="" element={<Cars />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
};
