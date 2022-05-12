import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Fisio from "./pages/Fisio";
import PilatesSuelo from "./pages/PilatesSuelo";
import PilatesMaquina from "./pages/PilatesMaquina";
import MarchaNordica from "./pages/MarchaNordica";
import StandingPilates from "./pages/StandingPilates";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fisio" element={<Fisio />} />
        <Route path="/pilates-suelo" element={<PilatesSuelo />} />
        <Route path="/pilates-maquina" element={<PilatesMaquina />} />
        <Route path="/marcha-nordica" element={<MarchaNordica />} />
        <Route path="/standing-pilates" element={<StandingPilates />} />
      </Routes>
    </div>
  );
}

export default App;
