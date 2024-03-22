import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Topbar.scss";

const Topbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", inputValue);
    setInputValue("");
  };

  return (
    <nav className="topbar">
      <div className="left">
        <div className="triangle"></div>
        <a href="/">Global Capital</a>
        <a href="/">Securitization</a>
        <a href="/">Global Markets</a>
      </div>
      <div className="right">
        {isSearchActive ? (
          <form onSubmit={handleSubmit} className="searchWrapper">
            <div className="searchLeft">
              <FontAwesomeIcon
                className="magnifyIcon"
                icon={faMagnifyingGlass}
              />
              <input
                className="searchInput"
                placeholder="Search key words, topics"
                onChange={handleChange}
                value={inputValue}
              />
            </div>
            <FontAwesomeIcon
              className="xMarkIcon"
              icon={faXmark}
              onClick={() => setIsSearchActive(false)}
            />
          </form>
        ) : (
          <button
            href="/Search"
            className="searchButton"
            onClick={() => setIsSearchActive(true)}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        )}

        <a href="/Pricing" className="pricing">
          Pricing
        </a>
        <a href="/Plan" className="plan">
          Free Trial
        </a>
        <a href="/Login" className="login">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Topbar;
