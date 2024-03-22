import React, { useState } from "react";
import Menu from "../shared/Menu/Menu";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="right">
        <a href="/">Markets</a>
        <a href="/">People and Markets</a>
        <Menu />
        <a href="/">Podcasts</a>
        <a href="/">Special Reports</a>
        <a href="/">Awards</a>
        <a href="/">CG Live</a>
        <a href="/">League Tables</a>
        <a href="/">The Weekly</a>

        <div className={open ? "menuIcon active" : "menuIcon"}>
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">Login</a>
          <a href="/">Register</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
