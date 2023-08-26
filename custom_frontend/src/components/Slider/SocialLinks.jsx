import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function SocialLinks() {
  return (
    <div className="social__links">
      <div className="single__link">
        <LinkedInIcon style={{ color: "red" }} />
      </div>
      <div className="single__link">
        <LinkedInIcon />
      </div>
      <div className="single__link">
        <LinkedInIcon />
      </div>
      <div className="single__link">
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default SocialLinks;
