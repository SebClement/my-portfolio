import React from "react";
import Slider from "react-slick";
import Image1 from "../Pictures/Hangin1.jpg";
import Image2 from "../Pictures/NyanCAT.jpg";
import Image3 from "../Pictures/Screen Shot 2023-08-19 at 11.16.23 AM.png";
import "../components/ProjectSection.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const ProjectSection = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="project-heading">Projects</h2>
      <Slider {...settings}>
        <div className="slide">
          <img src={Image1} alt="Project 1" className="project-image" />
          <p className="project-caption">Hang In</p>
        </div>
        <div className="slide">
          <img src={Image2} alt="Project 2" className="project-image" />
          <p className="project-caption">Nyan Cat</p>
        </div>
        <div className="slide">
          <img src={Image3} alt="Project 3" className="project-image" />
        </div>
      </Slider>
    </div>
  );
};

export default ProjectSection;
