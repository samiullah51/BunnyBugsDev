import React from "react";
import "./Services.css";
import SingleProject from "./SingleProject";
function Projects() {
  return (
    <div className="services">
      <div className="services__header">
        <p>Projects</p>
        <a href="">Add New</a>
      </div>
      <SingleProject />
      <SingleProject />
      <SingleProject />
      <SingleProject />
      <SingleProject />
    </div>
  );
}

export default Projects;
