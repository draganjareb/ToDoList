import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import "./App.css";
import HomePage from "./features/Home page/HomePage";
import CreateTask from "./features/CreateTask/CreateTask";
import Todos from "./features/TasksList/Todos";
import About from "./features/About/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createTask" element={<CreateTask />} />
          <Route path="/listTasks" element={<Todos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
