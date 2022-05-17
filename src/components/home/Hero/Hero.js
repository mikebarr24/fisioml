import Button from "../../default/Button";
import "./Hero.scss";
import { HashLink } from "react-router-hash-link";

function Hero() {
  return (
    <div id="hero" className="container">
      <div className="hero-text-wrapper">
        <h1>Te Ayudamos a Tomar el Control Sobre tu Salud</h1>
      </div>
      <div className="hero-buttons">
        <HashLink smooth to="#services">
          <Button name="Ver Sericios" className="hero-button" />
        </HashLink>
        <HashLink smooth to="#contacto">
          <Button name="Contacto" className="hero-button" />
        </HashLink>
      </div>
    </div>
  );
}

export default Hero;
