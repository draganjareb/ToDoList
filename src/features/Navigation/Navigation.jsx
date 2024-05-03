import { Link } from "react-router-dom";
import "./Navigation.style.css";
import megaphone from "../../assets/megaphone.png";
import { useClicksStore } from "../../store/clicks/clicks.store";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const { tasks } = useClicksStore();

  const router = useNavigate();

  const homePage = () => {
    router("/");
  };

  return (
    <div className="navigationWrapper">
      <img
        src={megaphone}
        alt="megaphone"
        className="megaphone"
        onClick={() => homePage()}
      />
      <span>{tasks.length}</span>
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
