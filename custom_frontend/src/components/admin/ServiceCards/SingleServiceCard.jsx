import React from "react";
import "./ServiceCards.css";
import { Link } from "react-router-dom";
function SingleServiceCard({ title, icon, count, to }) {
  return (
    <Link to={to} className="single__service__card">
      <img src={icon} alt="" />
      <div>
        <p className="team__members">{title}</p>
        <p className="team__counter">{count}</p>
      </div>
    </Link>
  );
}

export default SingleServiceCard;
