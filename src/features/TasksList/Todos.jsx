import TODOHero from "./components/TodoHero";
import TODOList from "./components/TodoList";
import EditTodoModal from "../../components/dialog/EditTodoModal";
import useTodoStore from "../../store/todos.store";
import "./todos.style.css";

// pojasniti konstrukciju i zašto je ovo u zagradama
const Todos = () => {
  const dialog = useTodoStore((state) => state.dialog);
  return (
    <div className="tasks">
      {dialog.isOpen && <EditTodoModal />}
      <TODOHero />
      <TODOList />
    </div>
  );
};

export default Todos;
