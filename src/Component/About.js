import React from "react";
import "../CSS/about.css";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard"
const About = () => {
  return (
    <div className="about">
      
      <AboutCard/>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
<Techstack/>
    </div>
  );
};

export default About;
