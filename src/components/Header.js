import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [logStatus, setLogStatus] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <a href="index.html" onClick={() => {}}>
          <img className="logo" src={LOGO_URL} />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li className="home">
            <Link to="/">Home</Link>
          </li>

          <li className="about">
            <Link to="/about" className="about">
              About
            </Link>
          </li>

          <li className="contact">Contact Us</li>
          <li className="cart">Cart</li>
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
