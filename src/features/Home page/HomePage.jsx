import "../Navigation/Navigation.style.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const router = useNavigate();

  const startCreate = () => {
    router("/createTask");
  };

  return (
    <div>
      <div className="homePageHolder">
        <h1>Šta planiraš danas?</h1>
        <h1>Kreiraj svoj novi task!</h1>
        <button onClick={() => startCreate()}>Kreiraj</button>
      </div>
    </div>
  );
};

export default HomePage;
