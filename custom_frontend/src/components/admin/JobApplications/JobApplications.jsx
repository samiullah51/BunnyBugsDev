import React, { useState } from "react";
import "./JobApplications.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import UploadImg from "../../../assets/projects.png";
import SingleJobApplication from "./SingleJobApplication";
function JobApplications() {
  const [modal, setModal] = useState(false);

  return (
    <div className="services">
      <div className="services__header">
        <p>Job Applications</p>
      </div>
      <SingleJobApplication />
      <SingleJobApplication />
      <SingleJobApplication />
      <SingleJobApplication />
    </div>
  );
}

export default JobApplications;
