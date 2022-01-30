import React from "react";
import "./style/Header.css";
import caricon from "../images/caricon.png";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <img className="header__img" src={caricon} alt="" />
        <h1 className="header__title">Find my car</h1>
      </div>
      <button
        className="showBurger btn"
        onClick={() => {
          document.querySelector(".mapWrapper").classList.toggle("none");
          document.querySelector(".sortPanel").classList.toggle("active");
          document.querySelector("footer").classList.toggle("footer-none");
        }}
      >
        Menu
      </button>
    </header>
  );
};

export default Header;
