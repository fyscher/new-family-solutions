import "../static/css/navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastY.current && currentY > 80);
      lastY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav${hidden ? " nav--hidden" : ""}`}>
      <div className="nav-logo" />
      <ul className="navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/our-team">Our Team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
