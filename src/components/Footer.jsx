import "../static/css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p className="footer-tagline">Supporting Alberta families since 2007.</p>
      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/our-team">Our Team</Link>
      </nav>
      <p className="footer-copy">© 2026 New Family Solutions</p>
    </footer>
  );
};

export default Footer;
