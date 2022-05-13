import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Fisio from "./pages/Fisio";
import PilatesSuelo from "./pages/PilatesSuelo";
import PilatesMaquina from "./pages/PilatesMaquina";
import MarchaNordica from "./pages/MarchaNordica";
import StandingPilates from "./pages/StandingPilates";
import NosotrosPage from "./pages/NosotrosPage";
import ScrollToTop from "./components/default/ScrollToTop";
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fisio" element={<Fisio />} />
        <Route path="/pilates-suelo" element={<PilatesSuelo />} />
        <Route path="/pilates-maquina" element={<PilatesMaquina />} />
        <Route path="/marcha-nordica" element={<MarchaNordica />} />
        <Route path="/standing-pilates" element={<StandingPilates />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
      </Routes>
    </div>
  );
}

export default App;
