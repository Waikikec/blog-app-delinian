import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Section.scss";

const Section = ({ sectionName }) => {
  return (
    <div className="section">
      <span>
        <FontAwesomeIcon icon={faArrowLeft} />
      </span>
      <span>{sectionName}</span>
    </div>
  );
};

export default Section;
