import "../Navigation/Navigation.style.css";
import megaphone from "../../assets/megaphone.png";

const About = () => {
  return (
    <div className="aboutHolder">
      <img src={megaphone} alt="megaphone" className="megaPhone" />
      <h1>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text.
      </h1>
    </div>
  );
};

export default About;