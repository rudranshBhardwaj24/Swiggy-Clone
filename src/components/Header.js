import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [logStatus, setLogStatus] = useState(false);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <div className="h-1">
        <a href="index.html" onClick={() => {}}>
          <img className="h-24 p-1" src={LOGO_URL} />
        </a>
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about" className="about">
              About
            </Link>
          </li>

          <li className="px-2">Contact Us</li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <Link to="/about/profile">Profile</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      {logStatus ? (
        <button onClick={() => setLogStatus(false)}>Login</button>
      ) : (
        <button onClick={() => setLogStatus(true)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
