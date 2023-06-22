import React from "react";
import logo from "./images/logo.png";
import "./App.scss";
import { useMatch, Link } from "react-router-dom";

const Header = () => {
  let match = useMatch("/");
  let matchAbout = useMatch("/about");
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/" className={match ? "active-link" : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className={matchAbout ? "active-link" : ""}>
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
