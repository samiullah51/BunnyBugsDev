import React from "react";
import "./Services.css";
import SingleService from "./SingleService";
function Services() {
  return (
    <div className="services">
      <div className="services__header">
        <p>Services</p>
        <a href="">Add New</a>
      </div>
      <SingleService />
      <SingleService />
      <SingleService />
      <SingleService />
      <SingleService />
    </div>
  );
}

export default Services;
