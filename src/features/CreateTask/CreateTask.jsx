import Button from "../../components/button/Button";
import "./create.style.css";
import useTodoStore from "../../store/todos.store";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
("@mui/material");

const Create = () => {
  const addTodo = useTodoStore((state) => state.addTodo); //----------------- pojasniti

  const handleSubmit = (event) => {
    event.preventDefault(); //------ pojasniti preventDefault sta i kad se koristi

    const value = event.target.todo.value;
    const newTodo = {
      title: value,
      id: Math.random().toString(36).substring(7), //-----------------pojasniti
      is_completed: false,
    };

    addTodo(newTodo);

    event.target.reset();
  };

  const [add, setAdd] = useState(false);

  const addNewTask = (id) => {
    handleSubmit(id);
    setAdd(true);
  };

  const addEvent = (event, reason) => {
    if (reason === `clickaway`) {
      return;
    }

    setAdd(false);
  };

  return (
    <div className="create">
      <h1>Koji je tvoj sledeći task?</h1>
      {/* pojasniti onSubmit sta je i kad se koristi */}
      <form className="form" onSubmit={addNewTask}>
        <label htmlFor="todo">
          {/* da li je onaj ovdje id koristen u event.target.todo.value */}
          <input type="text" name="todo" id="todo" placeholder="Upiši..." />
        </label>
        <Button label="Sačuvaj" />
      </form>
      <Snackbar open={add} autoHideDuration={2000} onClose={addEvent}>
        <Alert
          onClose={addEvent}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Task added successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Create;
