import Contacto from "./Contacto/Contacto";
import Hero from "./Hero/Hero";
import "./Home.scss";
import Nosotros from "./Nosotros/Nosotros";
import Services from "./Services/Services";

function Home() {
  return (
    <section id="home">
      <Hero />
      <Services />
      <Nosotros />
      <Contacto />
    </section>
  );
}

export default Home;
