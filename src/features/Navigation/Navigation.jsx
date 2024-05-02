import { Link } from "react-router-dom";
import "./Navigation.style.css";
import megaphone from "../../assets/megaphone.png";

const Navigation = () => {
  return (
    <div className="navigationWrapper">
      <img src={megaphone} alt="megaphone" className="megaphone" />
      <span>3</span>
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
