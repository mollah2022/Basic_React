import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <li style={{ justifyContent: "space-between" }}>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="about">
              About
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="services">
              Services
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="portfolio">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
