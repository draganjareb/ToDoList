import Button from "../../components/button/Button";
import "./create.style.css";
import useTodoStore from "../../store/todos.store";
import useNotificationStore from "../../store/notification.store";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const Create = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const setNotifcation = useNotificationStore((state) => state.setNotification);

  const handleSubmit = (event) => {
    event.preventDefault();

    const value = event.target.todo.value;
    const newTodo = {
      title: value,
      id: Math.random().toString(36).substring(7),
      is_completed: false,
    };

    addTodo(newTodo);
    setNotifcation(true, "Task je uspješno kreiran!", "success");

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
      <h2>Koji je tvoj sledeći task?</h2>
      <form className="form" onSubmit={addNewTask}>
        <label htmlFor="todo">
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
