import React from "react";
import "./skillcard.css"
const Skill = (props) => {
  return (
    <>
      <div className="skill-main-container">
        <img className="skill-card-image" src={props.img} alt="" />
        <p className="skill-card-text">{props.title}</p>
      </div>
    </>
  );
};

export default Skill;
