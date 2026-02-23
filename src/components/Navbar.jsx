import "../static/css/navbar.css";
import ContactModal from "../components/ContactModal.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
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
    </nav>
  );
};

export default Navbar;
