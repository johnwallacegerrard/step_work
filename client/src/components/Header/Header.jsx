import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__logo-link">
        <img
          src="./src/assets/StepWorkIcon.svg"
          alt="header-logo"
          className="header__logo"
        />
        <h1 className="header__title">StepWork</h1>
      </Link>
    </div>
  );
}

export default Header;
