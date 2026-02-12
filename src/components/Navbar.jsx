import "../static/css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="navbar-nav">
        <li className="inquiries-li">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="our-members-li">
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
