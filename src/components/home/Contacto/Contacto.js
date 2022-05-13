import React from "react";
import Button from "../../default/Button";
import SocialIcons from "../../default/SocialIcons";
import "./Contacto.scss";
import { BsQuestionCircle } from "react-icons/bs";

function Contacto() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const formUpdate = (event) => {
    event.preventDefault();
    setFormData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const formSubmit = () => {
    console.log(formData);
  };
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
        <input
          name="name"
          type="text"
          placeholder="* Nombre"
          required
          onChange={formUpdate}
          value={formData.name}
        />
        <input
          name="email"
          type="email"
          placeholder="* Email"
          required
          onChange={formUpdate}
          value={formData.email}
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="5"
          placeholder="* Tu Mensaje"
          required
          onChange={formUpdate}
          value={formData.message}
        ></textarea>
        <Button name="Enviar" className="contact-button" onClick={formSubmit} />
      </form>
      <SocialIcons className="contact-icons" />
    </section>
  );
}

export default Contacto;
