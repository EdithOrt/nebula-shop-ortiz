import React from "react";
import { Link, NavLink } from "react-router-dom";

import hambugerIcon from "../assets/icons/hamburger-icon.svg";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="nav-home">
      <Link to="/">
        <h1 className="nav-home__logo">Nebula shop 💫</h1>
      </Link>

      <button className="nav-home__hamburger-menu">
        <image src={hambugerIcon} alt="Menú hamburguesa" />
      </button>

      <div className="nav-home__container-menu">
        <div className="nav-home__container-links">
          <NavLink to={`/category/libretas`}>Libretas</NavLink>
          <NavLink to={`/category/playeras`}>Playeras</NavLink>
          <NavLink to={`/category/tazas`}>Tazas</NavLink>
        </div>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
