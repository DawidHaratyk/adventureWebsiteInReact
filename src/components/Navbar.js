import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

let linksInformations = [
  {
    path: "/home",
    text: "Home",
  },
  {
    path: "/services",
    text: "Services",
  },
  {
    path: "/products",
    text: "Products",
  },
];

const menuLinks = (closeMenuFunction) => {
  const links = linksInformations.map((item) => (
    // co zrobić aby po kliknięciu w li strona zmieniała podstronę tak jak Link
    // po kliknięciu w Link strona powinna natychmiast być na samej górze
    <Link
      to={item.path}
      key={item.text}
      onClick={closeMenuFunction}
      className="menu-li"
    >
      {item.text}
    </Link>
  ));
  return links;
};

function Navbar() {
  const [button, setButton] = useState(false);
  const [icon, setIcon] = useState(true);

  const handleButtonState = () => {
    if (window.innerWidth >= 880) {
      setButton(true);
      setIcon(true);
    } else {
      setButton(false);
    }
  };

  const handleCloseMenu = () => {
    const navbarMenu = document.querySelector(".navbar-links-container");
    navbarMenu.classList.remove("active");
    setIcon(true);
  };

  const choosingIcon = icon ? (
    <i className="fas fa-bars icon" onClick={() => setIcon(false)}></i>
  ) : (
    <i className="fas fa-times icon" onClick={() => setIcon(true)}></i>
  );

  const choosingButton = button ? (
    <Button text="Sign Up" size="medium" styles="primary" />
  ) : (
    <Button
      text="Sign Up"
      size="large"
      styles="primary"
      className="sign-up-btn"
    />
  );

  window.addEventListener("resize", handleButtonState);
  window.addEventListener("DOMContentLoaded", handleButtonState);

  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar-headline">TRVL</h1>
      </Link>
      {choosingIcon}
      <div className={`navbar-links-container ${icon ? null : "active"}`}>
        <ul className="menu-list">{menuLinks(handleCloseMenu)}</ul>
        <Link to="/sign-up" onClick={handleCloseMenu}>
          {choosingButton}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
