import { useNavigate } from "react-router-dom";
import "./homePage.style.css";
import Button from "../../components/button/Button";

const Start = () => {
  const router = useNavigate();

  const redirectToTODO = () => {
    router("/createTask");
  };
  return (
    <div className="start">
      <h1>Šta planiraš danas?</h1>
      <h2>Kreiraj svoj novi task!</h2>
      <Button label="Kreiraj task" onClickHandler={redirectToTODO} />
    </div>
  );
};

export default Start;
