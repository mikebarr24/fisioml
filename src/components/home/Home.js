import Contacto from "../Contacto/Contacto";
import Hero from "./Hero/Hero";
import "./Home.scss";
import Services from "./Services/Services";

function Home() {
  return (
    <section id="home">
      <Hero />
      <Services />
      <Contacto />
    </section>
  );
}

export default Home;
