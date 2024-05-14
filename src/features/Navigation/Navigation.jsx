import { Link } from "react-router-dom";
import "./Navigation.style.css";
import megaphone from "../../assets/megaphone.png";
import useTodoStore from "../../store/todos.store";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const router = useNavigate();

  const homePage = () => {
    router("/");
  };

  const todos = useTodoStore((state) => state.todos);

  // Calculate completed todos count
  const todos_completed = todos.filter((todo) => todo.is_completed).length;
  const total_todos = todos.length;

  return (
    <div className="navigationWrapper">
      <img
        src={megaphone}
        alt="megaphone"
        className="megaphone"
        onClick={() => homePage()}
      />
      <span>{total_todos}</span>
      <div className="navigationHolder">
        <Link to={{ pathname: "/" }}>Početna</Link>
        <Link to={{ pathname: "/createTask" }}>Kreiraj task</Link>
        <Link to={{ pathname: "/listTasks" }}>Lista taskova</Link>
        <Link to={{ pathname: "/about" }}>O nama</Link>
      </div>
    </div>
  );
};

export default Navigation;
