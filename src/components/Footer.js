import "./Footer.scss";
import { HashLink } from "react-router-hash-link";
import SocialIcons from "./default/SocialIcons";

function Footer() {
  return (
    <footer className="footer container">
      <h1 className="footer-logo">Logo Here</h1>
      <ul className="footer-menu">
        <HashLink smooth to="/#hero">
          <li>Inicio</li>
        </HashLink>
        <HashLink smooth to="/#services">
          <li>Servicios</li>
        </HashLink>
        <HashLink smooth to="/#nosotros">
          <li>Nosotros</li>
        </HashLink>
        <HashLink smooth to="/#contacto">
          <li>Contacto</li>
        </HashLink>
      </ul>
      <SocialIcons className="footer-social-icons" />
      <p>© Copyright FisioML {new Date().getFullYear()} </p>
    </footer>
  );
}

export default Footer;
