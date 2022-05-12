import "./Services.scss";
import { services as myServices } from "../../../services";
import ServiceModule from "./ServiceModule";

function Services() {
  const services = myServices();

  const serviceOutput = services.map((item) => (
    <ServiceModule key={item.service} info={item} />
  ));

  return (
    <section id="services" className="container">
      <h1 className="section-title">Servicios</h1>
      <p>
        Nos adaptamos a tus necesidades y te ayudamos a recuperarte de tu
        dolencia o lesión a través de un rango variado de servicios, incluyendo
        fisioterapia, ejercicio terapéutico, Pilates (suelo, de pie y en
        máquina) y Marcha Nórdica.
      </p>
      {serviceOutput}
    </section>
  );
}

export default Services;
