// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import "./App.css";
import HomePage from "./features/Home page/HomePage";
import CreateTask from "./features/CreateTask/CreateTask";
import TasksList from "./features/TasksList/TasksList";
import About from "./features/About/About";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createTask" element={<CreateTask />} />
          <Route path="/listTasks" element={<TasksList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
