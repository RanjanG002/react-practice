import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [buttonValue, setButtonValue] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              buttonValue === "Login"
                ? setButtonValue("Logout")
                : setButtonValue("Login");
            }}
          >
            {buttonValue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
