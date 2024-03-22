import React from "react";
import "./Tags.scss";

const Tags = ({ title, items }) => {
  return (
    <div className="tagsWrapper">
      <div className="tagsTitle">{title}</div>
      <div className="tagsItems">
        <ul className="tagsItemsList">
          {items.map((key, idx) => {
            return <li key={key + idx}>{items[idx]}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tags;
