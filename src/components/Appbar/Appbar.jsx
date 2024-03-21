import React from "react";
import Menu from "../shared/Menu/Menu";
import "./Appbar.scss";

const Appbar = () => {
  return (
    <nav className="appbar">
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
      </div>
    </nav>
  );
};

export default Appbar;
