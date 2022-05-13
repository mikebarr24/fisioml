import "./Nosotros.scss";

function Nosotros() {
  return (
    <section id="nosotros" className="container">
      <h1 className="section-title">Nosotros</h1>
      <p>
        Fisioterapeuta, Experta en el manejo del dolor músculo- esquelético,
        Máster en investigación de los trastornos del movimiento y alteración
        funcional, Instructora certificada de Pilates suelo, máquina y Marcha
        Nórdica. Flautista.
      </p>
      <div className="nosotros-photo-wrapper">
        <img
          className="maria-image"
          src={require("../../../media/images/maria-portrait-small.jpg")}
          alt="maria foto"
        />
        <p>
          <strong>María José López Pardo</strong>
          <br />
          Fisioterapeuta
        </p>
      </div>
    </section>
  );
}

export default Nosotros;
