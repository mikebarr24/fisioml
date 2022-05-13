import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { HashLink } from "react-router-hash-link";
import "./Navbar.scss";
import SocialIcons from "../default/SocialIcons";

function Navbar() {
  const toggle = () => {
    document.querySelector(".nav-items").classList.toggle("active");
  };

  return (
    <nav className="navbar">
      <h1>Logo Here</h1>
      <div className="nav-items">
        <ul>
          <GrClose
            style={{
              position: "absolute",
              fontSize: "2.5rem",
              top: "20px",
              right: "25px",
              cursor: "pointer",
            }}
            onClick={toggle}
          />
          <Link to="/" onClick={toggle}>
            <li>Inicio</li>
          </Link>
          <HashLink smooth to="/#services" onClick={toggle}>
            <li>Servicios</li>
          </HashLink>
          <Link to="/">
            <li>Nosotros</li>
          </Link>
          <HashLink smooth to="/#contacto" onClick={toggle}>
            <li>Contacto</li>
          </HashLink>
        </ul>
        <SocialIcons className="nav-social" />
      </div>
      <button className="burger-button" onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
