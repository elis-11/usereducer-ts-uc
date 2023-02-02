import { NavLink, Route, Routes } from "react-router-dom";
import { Cars } from "./components/cars/Cars";
import "./App.scss";
import { Events } from "./components/events/Events";
import { Corals } from "./components/corals/Corals";
import { Todo } from "./components/Todo";

export const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Cars</NavLink>
        <NavLink to="/corals">Corals</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/events">Events</NavLink>
      </nav>
      <div className="content">
        <Routes>
          <Route path="" element={<Cars />} />
          <Route path="corals" element={<Corals />} />
          <Route path="todo" element={<Todo />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
};
