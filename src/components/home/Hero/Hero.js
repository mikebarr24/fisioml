import Button from "../../default/Button";
import "./Hero.scss";
import { stickPilates } from "../../../imageFunctions";

function Hero() {
  const stickPics = stickPilates();
  return (
    <div id="hero" className="container">
      <div className="hero-text-wrapper">
        <h1>Te Ayudamos a Tomar el Control Sobre tu Salud</h1>
        <h3>Alivia tu dolor, mejora tu movilidad y tu calidad de vida.</h3>
      </div>
      <div className="hero-buttons">
        <Button name="Ver Sericios" className="hero-button" />
        <Button name="Contacto" className="hero-button" />
      </div>
    </div>
  );
}

export default Hero;
