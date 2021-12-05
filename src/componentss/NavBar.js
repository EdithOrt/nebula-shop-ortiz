import React from "react";
import hambugerIcon from "../assets/icons/hamburger-icon.svg";

const NavBar = () => {
  return (
    <nav className="nav-home">
      <h1 className="nav-home__logo">Nebula shop 💫</h1>

      <button className='nav-home__hamburger-menu'>
        <image src={hambugerIcon} alt="Menú hamburguesa" />
      </button>

      <div className="nav-home__container-links">
        <a href="#">Libretas</a>
        <a href="#">Playeras</a>
        <a href="#">Tazas</a>
      </div>
    </nav>
  );
};

export default NavBar;
