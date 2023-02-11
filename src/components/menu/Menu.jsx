import { Link } from "react-scroll";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            onClick={() => setMenuOpen(false)}
            to="home"
            smooth={true}
            duration={700}
            className="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            onClick={() => setMenuOpen(false)}
            to="about"
            smooth={true}
            duration={700}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            onClick={() => setMenuOpen(false)}
            to="skill"
            smooth={true}
            duration={700}
            className="cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            onClick={() => setMenuOpen(false)}
            to="work"
            smooth={true}
            duration={700}
            className="cursor-pointer"
          >
            Works
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            onClick={() => setMenuOpen(false)}
            to="contact"
            smooth={true}
            duration={700}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
