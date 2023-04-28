import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="logo-text-container">
        <h3>Event Name</h3>
      </div>
      <div className="link-container">
        <NavLink to="/" className="link-item" activeClassname="active">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/register" className="link-item" activeClassname="active">
          <h3>Register</h3>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
