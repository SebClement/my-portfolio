import React from "react";
import AboutMeSection from "../components/AboutMeSection";
import AboutImg from "../Pictures/clu-.jpg";

function About() {
  return (
    <>
      <AboutMeSection
        cName=" aboutSection"
        AboutImg={AboutImg}
        title="About Me"
        text="Hello! 👋 I'm Sebastien Clement, a passionate and driven web developer student.
        Althougth I have a backgroung in Civil Engineering. I've always been fascinated by technology and how it shapes our modern world. 
        Through countless hours of learning and practice, I've developed a solid foundation in HTML, CSS, and JavaScript.
        I'm a problem solver at heart, and I enjoy tackling challenges that come my way. Whether it's designing responsive layouts, optimizing performance, 
        I'm always eager to learn and implement new techniques.
        Feel free to reach out to me at clement.c.sebastien@gmail.com or connect with me on any social media. Let's get it 🚀 "
      />
    </>
  );
}

export default About;
