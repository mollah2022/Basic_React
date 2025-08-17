import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/services">Service</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div className="auth-buttons">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  );
}
