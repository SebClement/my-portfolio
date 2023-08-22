import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContactSection from "./ContactSection";
import Projects from "./ProjectSection";
import About from "../routes/About";
import HeroSection from "../components/HeroSection";
import heroImg from "../Pictures/ryan white .jpg";

const Page = () => {
  const HeroSectionRef = useRef(null);
  const AboutMeSectionRef = useRef(null);
  const ContactSectionRef = useRef(null);
  const ProjectSectionRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash;

    if (!hash) return;

    let targetRef;

    switch (hash) {
      case "#home":
        targetRef = HeroSectionRef;
        break;
      case "#about":
        targetRef = AboutMeSectionRef;
        break;
      case "#contact":
        targetRef = ContactSectionRef;
        break;
      case "#projects":
        targetRef = ProjectSectionRef;
        break;
      default:
        break;
    }

    if (targetRef && targetRef.current) {
      const topOffset = targetRef.current.offsetTop;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, [location]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div>
      <div ref={HeroSectionRef}>
        <HeroSection
          cName=" heroSection"
          heroImg={heroImg}
          title=" Welcome to My portfolio"
          text=" Full Stack Webdevellopper"
        />
      </div>
      <div ref={AboutMeSectionRef}>
        <About />
      </div>
      <div ref={ProjectSectionRef} style={{ margin: "50px 0" }}>
        <Projects />
      </div>
      <div ref={ContactSectionRef}>
        <ContactSection />
      </div>

      <button
        onClick={handleScrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#007bff",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Scroll to Top{" "}
        <span
          style={{
            marginLeft: "5px",
            transform: "rotate(-90deg)",
          }}
        ></span>
      </button>
    </div>
  );
};
export default Page;
