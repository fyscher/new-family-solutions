import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import HowItWorks from "./HowItWorks.jsx";
import TrustStrip from "./TrustStrip.jsx";
import "../static/css/sections.css";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <TrustStrip />
    </main>
  );
};

export default Home;
