import React from "react";
import "../components/HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faSquareJs,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

const HeroSection = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img alt="hero-img" src={props.heroImg} />
        <div className=" hero-text">
          <h1>{props.title} </h1>
          <p>{props.text}</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/ticlaybas/">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
              <a href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitter} className="icon" />
                <a href="https://www.linkedin.com/in/sebastien-clement-65874313a/" />
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
            </a>
          </div>
          <div className="web-icon">
            <FontAwesomeIcon icon={faSquareJs} className="icon1" />
            <FontAwesomeIcon icon={faHtml5} className="icon1" />
            <FontAwesomeIcon icon={faCss3} className="icon1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
