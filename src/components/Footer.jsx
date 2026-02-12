import "../static/css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="legal">
        <li className="copyright">© 2025 New Family Solutions</li>
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
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
