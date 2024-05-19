import useTodoStore from "../../../store/todos.store";
import "../todos.style.css";
import useNotificationStore from "../../../store/notification.store";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const Item = ({ item }) => {
  const { markTodoCompleted, deleteTodo, setDialog } = useTodoStore(
    (state) => state
  );
  const { setNotification } = useNotificationStore((state) => state);

  const completeTodo = () => {
    markTodoCompleted(item.id);
    if (item.is_completed) {
      setNotification(true, "Task je označen kao nezavršen!", "warning");
      return;
    } else {
      setNotification(true, "Task je uspješno završen!", "info");
    }
  };

  const handleDelete = () => {
    deleteTodo(item.id);
    setNotification(true, "Task je uspješno obrisan!", "error");
  };

  const [del, setDelete] = useState(false);

  const deleteTask = () => {
    handleDelete(item.id);
    setDelete(true);
    setTimeout(() => {}, 1500);
  };

  const deletedTask = (event, reason) => {
    if (reason === `clickaway`) {
      return;
    }

    setDelete(false);
  };

  return (
    <li id={item.id} className="todo_item">
      <div className="todo_items_left action" onClick={completeTodo}>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={34}
          height={34}
          stroke="#22C55E"
          fill={item.is_completed ? "#22C55E" : "#0d0d0d"}
        >
          <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
        </svg>
        <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>
          {item?.title}
        </p>
      </div>
      <div className="todo_items_right">
        <img
          className="icon action"
          onClick={() => setDialog(true, item)}
          src="https://cdn-icons-png.freepik.com/256/1159/1159633.png?semt=ais_hybrid"
          alt="Edit"
        />
        <img
          className="icon action"
          onClick={deleteTask}
          src="https://cdn-icons-png.flaticon.com/256/1406/1406617.png"
          alt="Delete"
        />
      </div>
      <Snackbar open={del} autoHideDuration={1500} onClose={deletedTask}>
        <Alert
          onClose={deletedTask}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Task successfully deleted!
        </Alert>
      </Snackbar>
    </li>
  );
};

export default Item;
