import "../static/css/home.css";
import { motion } from "motion/react";

const heroVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => (
  <div className="hero">
    <motion.div
      className="hero-text"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className="highlight">
        <h1 className="emphasis">Supporting</h1>
        <h1>families.</h1>
      </div>
      <div className="highlight">
        <h1 className="emphasis">Empowering</h1>
        <h1>children.</h1>
      </div>
      <div className="highlight">
        <h1>Building brighter</h1>
        <h1 className="emphasis">futures.</h1>
      </div>
      <p className="hero-sub">
        Individualized, family-centred support for those navigating life with a
        child of diverse abilities—delivered in your home, at your pace, on your
        terms.
      </p>
      <a href="#services">
        <button className="hero-cta">Explore at your pace</button>
      </a>
    </motion.div>
  </div>
);

export default Hero;
