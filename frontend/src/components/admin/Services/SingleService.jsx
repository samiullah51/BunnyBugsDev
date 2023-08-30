import React, { useState } from "react";
import "./Services.css";
import projects from "../../../assets/projects.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function SingleService({ service }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="single__service">
      <img src={service.serviceImage} alt="" />
      <p className="service__title" style={{ textAlign: "center" }}>
        {service.serviceName.length > 18
          ? service.serviceName.slice(0, 19) + "..."
          : service.serviceName}
      </p>
      <p className="desc" style={{ textAlign: "center" }}>
        {" "}
        {service.serviceDescription.length > 15
          ? service.serviceDescription.slice(0, 16) + "..."
          : service.serviceDescription}
      </p>
      <p className="status">{service.status.toUpperCase()}</p>
      <p className="timing edit">Edit</p>
      <p className="timing delete">Delete</p>
    </div>
  );
}

export default SingleService;
