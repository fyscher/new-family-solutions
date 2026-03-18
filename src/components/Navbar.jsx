import "../static/css/navbar.css";
import ContactModal from "../components/ContactModal.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h2 className="title-image" />

      {/* Hidden SVG filter — moved outside layout flow */}
      <svg className="glass-svg-filter" aria-hidden="true">
        <defs>
          <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.008"
              numOctaves="2"
              seed="92"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="70"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="container container--inline">
        <div className="glass-container glass-container--rounded glass-container--large">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>
          <div className="glass-content glass-content--inline">
            <ul className="navbar-nav">
              <li className="home">
                <Link to="/">Home</Link>
              </li>
              <li className="inquiries-li">
                <ContactModal />
              </li>
              <li className="our-members-li">
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
