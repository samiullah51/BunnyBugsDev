import React from "react";
import "./Featured.css";
function SingleFeaturedCard({ icon, title, desc }) {
  return (
    <div className="single__featured">
      <img src={icon} alt="" />
      <div>
        <p className="title">{title}</p>
        <p className="desc__f">{desc}</p>
      </div>
    </div>
  );
}

export default SingleFeaturedCard;
