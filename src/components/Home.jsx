import Hero from "./Hero.jsx";
import About from "./About.jsx";
import "../static/css/home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="text">
        <Hero />
        <About />
      </div>
      <div className="hero-image"></div>
    </div>
  );
};

export default Home;
