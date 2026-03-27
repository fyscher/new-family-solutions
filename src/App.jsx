import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import AboutUs from "./components/AboutUs.jsx";
import OurTeam from "./components/OurTeam.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
