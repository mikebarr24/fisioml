import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

import "./Navbar.scss";
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
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <li>Nosotros</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
        <div className="nav-social">
          <IoLogoFacebook />
          <IoLogoTwitter />
          <IoLogoInstagram />
        </div>
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
