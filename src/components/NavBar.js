import React, { Component } from "react";
import "./Navbar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuBar, MenuBars } from "./Menubars";
class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Portfolio</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul
          className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}
        >
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
  }
}

export default NavBar;
