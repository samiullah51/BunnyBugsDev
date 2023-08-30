import React from "react";
import "./Featured.css";
function SingleFeaturedCard({ icon, title, desc }) {
  return (
    <div className="single__featured">
      <span className="mt-2 me-4 icon-bg p-3" style={{color:'var(--bs-white)'}}>{icon}</span>
      <div>
        <p className="title">{title}</p>
        <p className="desc__f">{desc}</p>
      </div>
    </div>
  );
}

export default SingleFeaturedCard;
