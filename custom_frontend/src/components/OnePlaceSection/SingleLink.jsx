import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EastIcon from "@mui/icons-material/East";
function SingleLink({ title }) {
  return (
    <a className="single__link">
      <div className="circle"></div>
      <p>{title}</p>
      <EastIcon />
    </a>
  );
}

export default SingleLink;
