import { Link } from "react-router-dom";
import "../CSS/projects.css";
import React from "react";
import { project } from "./Data";
const Projects = () => {
  return (
    <>
      {project.map((data) => (
        <div>
          <div className="section1">
            <div class="startContainer">
              <button class="button pulseText">{data.heading}</button>
            </div>
            <div>
              <img src={data.pic} alt="project pic" className="pic" />
            </div>
            <div className="desc">
              <p>{data.descrip}</p>
            </div>
            <div>
              <div className="button_section">
                <button className="glow-on-hover">
                  <Link className="butt" to={data.github} target="_blank">
                    GitHub
                  </Link>
                </button>
                <button className="glow-on-hover">
                  <Link className="butt" to={data.demo} target="_blank">
                    Demo
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
