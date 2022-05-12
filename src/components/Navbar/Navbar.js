import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

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
          <MdClose
            style={{
              position: "absolute",
              fontSize: "2.5rem",
              top: "5",
              right: "10px",
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
