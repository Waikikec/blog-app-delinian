import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menuWrap">
      <ul className="menu">
        <li className="menuItem">
          <span>Data</span>
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <ul className="dropMenu">
            <li className="dropMenuItem">
              <a href="/">IPO Pipeline</a>
            </li>
            <li className="dropMenuItem">
              <a href="/">Priced deals</a>
            </li>
            <li className="dropMenuItem">
              <a href="/">People Tracker</a>
            </li>
            <li className="dropMenuItem">
              <a href="/">Top borrowers</a>
            </li>
            <li className="dropMenuItem">
              <a href="/">Primary Market Monitor</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
