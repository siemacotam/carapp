import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Find my car</h1>
      <button
        className="showBurger btn"
        onClick={() => {
          document.querySelector(".mapWrapper").classList.toggle("none");
          document.querySelector(".sortPanel").classList.toggle("active");
        }}
      >
        menu
      </button>
    </header>
  );
};

export default Header;
