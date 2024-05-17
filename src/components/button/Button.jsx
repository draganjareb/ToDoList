import "./button.style.css";
//globalni stejt, funkcija button prima vrijedost label(text) buttona
const Button = ({ label, onClickHandler }) => {
  // ------------------------------------- onClickHandler je Enter ili
  return (
    <button className="button" onClick={onClickHandler}>
      {label}
    </button>
  );
};

export default Button;
