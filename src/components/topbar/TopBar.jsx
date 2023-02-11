import "./topBar.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import logo from "../../utilities/logo.svg";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src={logo} alt="" style={{ width: "80px" }} />
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span>+351 920 542 428</span>
          </div>
          <div className="itemContainer">
            <MdEmail className="icon" />
            <span>ezeanthony3199@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1 text-white"></span>
            <span className="line2 text-white"></span>
            <span className="line3 text-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
