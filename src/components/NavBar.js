import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuBars } from "./Menubars";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Portfolio</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
        {MenuBars.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <Link className={item.cName} to={item.URL}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
