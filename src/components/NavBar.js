import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav>
      <ul id="nav-list">
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
