import "./Fisio.scss";

function Fisio() {
  return (
    <div id="fisio" className="container">
      <h1 className="page-title">Fisio</h1>
      <p className="fisio-text">
        Mediante la fisioterapia te ayudamos a recuperar la movilidad y
        funcionalidad después de una lesión o dolencia, reduciendo el riesgo de
        recaída. ‍El tipo de técnica utilizada y la estrategia de intervención
        dependerá de los resultados de tu evaluación. Entre las técnicas que
        utilizamos se encuentran:
      </p>
      <div className="page-bullet-section">
        <ul>
          <li>
            <span className="bold">Ejercicios</span> de movilidad, estabilidad,
            propiocepción y fortalecimiento progresivo
          </li>
          <li>
            <span className="bold">Terapia manual</span> incluyendo técnicas de
            movilización y manipulación articular, técnicas de tejido blando y
            movilización con movimiento
          </li>
          <li>
            <span className="bold">Vendaje funcional</span>
          </li>
          <li>
            <span className="bold">Acupuntura</span>
          </li>
          <li>
            <span className="bold">Trabajo en máquina reformers</span>
          </li>
          <li>
            <span className="bold">Consejos de automanejo</span> de la patología
            o lesión y de prevención de recaídas
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fisio;
