import React from "react";
import "./ServiceCards.css";
function SingleServiceCard({ title, icon, count, to }) {
  return (
    <a to={to} className="single__service__card">
      <img src={icon} alt="" />
      <div>
        <p className="team__members">{title}</p>
        <p className="team__counter">{count}</p>
      </div>
    </a>
  );
}

export default SingleServiceCard;