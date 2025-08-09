import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#eee", padding: "10px" }}>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
