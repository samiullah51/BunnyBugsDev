import React from "react";
import "./ServiceCards.css";
import SingleServiceCard from "./SingleServiceCard";
import ChartSvg from "../../../assets/Chart.svg";
import GraphSvg from "../../../assets/Graph.svg";
import team from "../../../assets/team.png";
import service from "../../../assets/service.png";
import projects from "../../../assets/projects.png";
import application from "../../../assets/application2.png";

function ServiceCards() {
  return (
    <div className="services__cards">
      <SingleServiceCard
        to="/admin/services"
        title="Services"
        icon={service}
        count={12}
      />
      <SingleServiceCard
        to="/admin/team"
        title="Team Members"
        icon={team}
        count={23}
      />
      <SingleServiceCard
        to="/admin/projects"
        title="Projects"
        icon={projects}
        count={55}
      />
      <SingleServiceCard
        to="/admin/applications"
        title="Applications"
        icon={application}
        count={12}
      />
    </div>
  );
}

export default ServiceCards;
