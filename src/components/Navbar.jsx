import "../static/css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
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
