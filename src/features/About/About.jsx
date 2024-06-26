import "./about.style.css";
import megaphone from "../../assets/megaphone.png"; //lokacija slike

//funkcija About i ujedno i stranica, njezin kostur i importuje se u App.jsx-u
const About = () => {
  return (
    <div className="aboutHolder">
      <img src={megaphone} alt="megaphone" className="megaPhonePictures" />
      <h2>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text.
      </h2>
    </div>
  );
};

export default About;
