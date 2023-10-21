import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Simulation from "./pages/Simulation";
import SolarSystem from "./pages/SolarSystem";
import Comparison from "./pages/Comparison";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/solar-system" element={<SolarSystem />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/comparison" element={<Comparison />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
