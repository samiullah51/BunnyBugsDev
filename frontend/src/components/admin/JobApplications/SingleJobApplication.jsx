import React, { useState } from "react";
import "./JobApplications.css";
import projects from "../../../assets/projects.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function SingleJobApplication() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="single__service">
      <p className="service__title">Sami Samiullah</p>
      <p className="desc">sami@gmail.com</p>
      <p className="desc">03481910747</p>
      <p className="timing veiw">Veiw</p>
      <p className="timing edit">Accept</p>
      <p className="timing delete">Reject</p>
    </div>
  );
}

export default SingleJobApplication;
