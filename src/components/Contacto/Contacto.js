import Button from "../default/Button";
import SocialIcons from "../default/SocialIcons";
import "./Contacto.scss";
import { BsQuestionCircle } from "react-icons/bs";

function Contacto() {
  return (
    <section id="contacto" className="container">
      <h1 className="section-title contact-title">
        <span className="contact-question">
          <BsQuestionCircle />
        </span>
        Contacto
        <span className="contact-question">
          <BsQuestionCircle />
        </span>
      </h1>

      <p className="contact-text">
        Si tiene alguna pregunta, no dude en ponerse en contacto con nosotros.
        Respondemos dentro de las 24 horas.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="* Nombre" required />
        <input type="email" placeholder="* Email" required />
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="* Tu Mensaje"
          required
        ></textarea>
        <Button name="Enviar" className="contact-button" />
      </form>
      <SocialIcons className="contact-icons" />
    </section>
  );
}

export default Contacto;
