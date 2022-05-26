import "./navbar.css"
import FishForm from "../Array-Objects/FishForm";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        FishRepo
      </Link>
      <img src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpapers4u.org%2Fwp-content%2Fuploads%2Fgoldfish_white_background_close-up_78409_1920x1080.jpg&f=1&nofb=1" height = "100" position = "relative"/>
      <button className="hamburger">
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <Link to="/home" >Home</Link>
          </li>
          <li>
            <Link to="/all" >All Fishies</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 