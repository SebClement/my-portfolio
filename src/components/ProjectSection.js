import React from "react";
import Slider from "react-slick";
import Image1 from "../Pictures/Hangin1.jpg";
import Image2 from "../Pictures/NyanCAT.jpg";
import Image3 from "../Pictures/cookie.png";
import styled from "styled-components";

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
    <Container className="container">
      <Heading className="project-heading">Projects</Heading>
      <Slider {...settings}>
        <Slide className="slide">
          <ProjectImage
            src={Image1}
            alt="Project 1"
            className="project-image"
          />
          <ProjectCaption className="project-caption">Hang In</ProjectCaption>
        </Slide>
        <Slide className="slide">
          <ProjectImage
            src={Image2}
            alt="Project 2"
            className="project-image"
          />
          <ProjectCaption className="project-caption">Nyan Cat</ProjectCaption>
        </Slide>
        <Slide className="slide">
          <ProjectImage
            src={Image3}
            alt="Project 3"
            className="project-image"
          />{" "}
          <ProjectCaption className="project-caption">Cookie</ProjectCaption>
        </Slide>
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 50px;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: 400px;
  object-fit: cover;
`;

const ProjectCaption = styled.p`
  margin: 0;
  font-size: 18px;
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Arrow = styled.div`
  background: blue;
`;

export default ProjectSection;
