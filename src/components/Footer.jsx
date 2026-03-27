import "../static/css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p className="footer-tagline">Supporting Alberta families since 2007.</p>
      <div className="footer">
        <ul className="legal">
          <li className="copyright">© 2026 New Family Solutions</li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/">Cookie Policy</Link>
          </li>
        </ul>
        <ul className="site">
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
      </div>
    </footer>
  );
};

export default Footer;
