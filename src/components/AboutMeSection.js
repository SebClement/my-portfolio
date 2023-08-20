import React from "react";
import "../components/AboutMe.css";

const AboutMeSection = (props) => {
  return (
    <div className={props.cName}>
      <img alt="about-img" src={props.AboutImg} />
      <div className=" about-text">
        <h1>{props.title} </h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default AboutMeSection;
